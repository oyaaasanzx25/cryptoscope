/* news.js — fungsi berita bersama CryptoScope (dipakai portal + landing).
   Sumber data (refactor 25 Nov 2026 — tabel audit):
   1) news-data.json — 20 berita statis (4 per kategori), diperbarui oleh
      cron pantau berita / cron harian. File publik di repo root.
   2) Koleksi Firestore `news` — berita yang dibuat lewat halaman Admin
      (login Google iyasanz217@gmail.com), terbaru dulu, maks. 15.
   Keduanya digabung (terbaru dulu, tanpa duplikat, maks. 4 per kategori,
   total 20) — portal/landing TIDAK lagi menanam data berita di HTML.
   Config Firebase diambil dari firebase-config.js (nilai publik).
   Firebase dimuat DINAMIS (import() + try/catch): kalau CDN Firebase tidak
   terjangkau, berita statis tetap tampil — portal tidak pernah kosong. */
import { firebaseConfig } from "./firebase-config.js";

const FIREBASE_APP_URL = "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
const FIREBASE_FS_URL = "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

/* Muat Firebase SDK + init sekali; gagal (offline/CDN diblokir) -> false
   dan diingat, supaya percobaan berikutnya tidak mengulang fetch gagal. */
let _firebase = null; /* null = belum dicoba, false = tidak tersedia, {app,db,fs} = siap */
async function loadFirebase() {
  if (_firebase !== null) return _firebase;
  try {
    const appMod = await import(FIREBASE_APP_URL);
    const fsMod = await import(FIREBASE_FS_URL);
    const app = appMod.initializeApp(firebaseConfig);
    _firebase = { app, db: fsMod.getFirestore(app), fs: fsMod };
  } catch (e) {
    console.warn("Firebase tidak tersedia, memakai data statis saja:", e);
    _firebase = false;
  }
  return _firebase;
}

export async function getFirebaseApp() {
  const f = await loadFirebase();
  return f ? f.app : null;
}

/* Waktu sebuah item berita (milidetik): Admin memakai createdAt Firestore;
   berita statis memakai `published` ("25 Nov 2026 · 08:40 WIB") atau `date`. */
export function itemTime(it) {
  if (!it) return 0;
  if (it.createdAt && typeof it.createdAt.toMillis === "function") {
    try { return it.createdAt.toMillis(); } catch (e) { return 0; }
  }
  var p = String(it.published || it.date || "");
  var m = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, Mei: 4, Jun: 5, Jul: 6, Agu: 7, Sep: 8, Okt: 9, Nov: 10, Des: 11 };
  var d = p.match(/(\d{1,2})\s+(Jan|Feb|Mar|Apr|Mei|Jun|Jul|Agu|Sep|Okt|Nov|Des)\s+(\d{4})(?:\s*·\s*(\d{1,2}):(\d{2}))?/);
  if (!d) return 0;
  return new Date(+d[3], m[d[2]], +d[1], +(d[4] || 0), +(d[5] || 0)).getTime();
}

export function pubTime(n) { return (n && (n.published || n.date)) || ""; }

/* Validasi bentuk satu item berita (dipakai sebelum data ditampilkan). */
export function isValidNewsItem(it) {
  return !!(it && typeof it.title === "string" && it.title
    && typeof it.url === "string" && /^https?:\/\//i.test(it.url)
    && typeof it.cat === "string" && typeof it.summary === "string");
}

/* Gabung daftar berita baru (mis. Admin) ke daftar dasar: urut terbaru
   dulu, buang duplikat (URL/judul sama), maks. 4 per kategori, total 20. */
export function mergeNewsItems(extra, base) {
  var all = (extra || []).concat((base || []).slice());
  all.sort(function (a, b) { return itemTime(b) - itemTime(a); });
  var seen = {}, perCat = {}, out = [];
  all.forEach(function (it) {
    if (out.length >= 20) return;
    if (!it || typeof it.title !== "string" || !it.title) return;
    var key = String(it.url || "").toLowerCase() || String(it.title || "").toLowerCase();
    if (!key || seen[key]) return;
    seen[key] = true;
    var c = it.cat || "crypto"; perCat[c] = perCat[c] || 0;
    if (perCat[c] >= 4) return;
    perCat[c]++; out.push(it);
  });
  return out;
}

/* Muat news-data.json (gagal / tidak valid -> [] , pemanggil memakai
   sumber lain atau membiarkan fallback statis di halaman). */
export async function fetchNewsJson() {
  try {
    const r = await fetch("news-data.json", { cache: "no-store" });
    if (!r.ok) return [];
    const data = await r.json();
    if (!Array.isArray(data) || !data.length) return [];
    if (!data.every(isValidNewsItem)) return [];
    return data;
  } catch (e) {
    console.warn("news-data.json tidak dapat dimuat:", e);
    return [];
  }
}

/* Muat berita Admin dari Firestore (terbaru dulu, maks. 15).
   Firebase tidak tersedia -> [] (portal tetap menampilkan data statis). */
export async function fetchAdminNews(n) {
  const f = await loadFirebase();
  if (!f) return [];
  try {
    const snap = await f.fs.getDocs(f.fs.query(f.fs.collection(f.db, "news"), f.fs.orderBy("createdAt", "desc"), f.fs.limit(n || 15)));
    const items = [];
    snap.forEach(function (d) {
      const v = d.data();
      items.push({
        cat: v.cat || "crypto",
        title: v.title || "",
        summary: v.summary || "",
        source: v.source || "",
        date: v.date || "",
        published: v.published || "",
        url: v.url || "#",
        type: v.type || "fakta",
        img: v.img || "",
        createdAt: v.createdAt || null
      });
    });
    return items.filter(isValidNewsItem);
  } catch (e) {
    console.warn("Berita Admin tidak dapat dimuat:", e);
    return [];
  }
}

/* Muat semua sumber sekaligus, gabung jadi 20 berita portal. */
export async function loadMergedNews() {
  const [json, admin] = await Promise.all([fetchNewsJson(), fetchAdminNews(15)]);
  if (!json.length && !admin.length) return [];
  return mergeNewsItems(admin, json);
}
