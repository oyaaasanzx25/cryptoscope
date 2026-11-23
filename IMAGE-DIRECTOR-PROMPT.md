# CryptoScope — Editorial Image Director Prompt (v3.5 — Context-Based + Referensi CryptoWave + Anti-Default + QC Brand-Mark/Thumbnail + V21 Event-Specific + Uji Orang Asing)

Prompt ini dipakai untuk meng-generate gambar editorial tiap berita CryptoScope.
Satu gambar unik per berita — gambar harus MENCERITAKAN peristiwa beritanya,
bukan sekadar hiasan dengan simbol crypto yang diganti-ganti.

## 0. PRINSIP DASAR (v3.1)

Gambar yang bagus BUKAN soal resolusi atau warna. Gambar yang bagus lahir
dari AI yang MEMAHAMI beritanya dulu, baru menggambar. Jangan pernah
langsung generate dari judul saja. Setiap gambar wajib lolos analisis
konteks (bagian 1) dan QC (bagian 5) sebelum dipakai.

## 1. CONTEXT-BASED IMAGE GENERATION (wajib sebelum generate)

Sebelum membuat gambar, analisis dulu beritanya:

- **Headline** — apa yang sebenarnya terjadi?
- **Isi & ringkasan** — fakta kunci apa yang harus terlihat?
- **Peristiwa utama** — satu momen/aksi sentral yang bisa divisualkan.
- **Entitas / tokoh** — siapa atau lembaga apa yang terlibat. ATURAN
  DUA ARAH (user 23 Nov 2026): kalau beritanya ada tokoh publik, gambar
  WAJIB menampilkan wajah tokoh itu (mis. Saylor, Prabowo, Jensen
  Huang) — dan sebaliknya, kalau beritanya TIDAK ada tokoh, gambar
  TIDAK BOLEH menampilkan wajah/manusia sama sekali (tanpa wajah
  generik, tanpa figur stok, tanpa siluet orang). Kalau rupa tokoh tidak
  bisa dikenali, pakai gedung, simbol institusi, atau objek — jangan
  pernah pakai wajah yang salah atau wajah generik yang diklaim sebagai
  orang tertentu.
- **Dampak peristiwa** — apa yang berubah karena peristiwa ini
  (pasar jatuh, regulasi menutup bursa, teknologi rusak, dll)?
- **Kategori berita** — arah visualnya, bukan template mentah.
- **Suasana / konteks** — tegang, optimistis, kacau, khidmat, mendesak?

Tulis dulu KONSEP SATU PARAGRAF: "Gambar ini menunjukkan ... karena
beritanya tentang ...". Kalau konsepnya bisa dipakai untuk berita lain
tanpa diubah, konsepnya SALAH — buat ulang sampai spesifik untuk
peristiwa ini saja.

Sebelum generate, periksa draf konsep/prompt terhadap kata-kata
terlarang ini — kalau ada, tulis ulang konsepnya dulu: "server room" /
"ruang server", "crystal" / "kristal", "silhouette staring" / "siluet
menatap layar", "glowing object in dark room", "floating coin" /
"koin melayang". Pelanggaran yang lolos ke prompt (mis. chainflip-hack
v1: "Dark server room") harus ditangkap di langkah ini, bukan di QC.

## 1b. ATURAN V21 — PERISTIWA SPESIFIK, BUKAN SIMBOL (23 Nov 2026)

Delapan aturan baru dari audit V21 — berlaku untuk semua generasi baru:

1. **Baca SELURUH isi berita** (headline + summary lengkap + sumber),
   bukan hanya judul.
2. **Tentukan SATU peristiwa spesifik** yang benar-benar diberitakan
   (bukan tema umumnya, mis. bukan "ETF turun" tapi "ETF Bitcoin
   keluar $1,79 miliar sepekan, arus keluar disebut struktural").
3. **Tentukan objek utama, lingkungan, dan hubungan antarobjek** secara
   eksplisit di prompt — apa bendanya, di mana, dan bagaimana
   benda-benda itu berhubungan satu sama lain.
4. **Visual menggambarkan PERISTIWA, bukan sekadar simbol
   cryptocurrency.** Gambar harus menceritakan apa yang terjadi —
   dokumen, laporan, order book, jembatan, sidang — bukan koin dengan
   hiasan.
5. **Variasi komposisi sesuai jenis berita** — berita ETF, laporan
   keuangan, flash crash, upgrade, dan exploit masing-masing punya
   adegan yang berbeda; jangan satu template untuk semua.
6. **JANGAN memakai efek kehancuran, lava, banjir, atau koin raksasa
   sebagai template universal.** Efek destruktif hanya boleh dipakai
   kalau peristiwa itu SENDIRI destruktif DAN objeknya adalah objek
   peristiwa itu (mis. jembatan putus untuk exploit jembatan, pintu
   vault hancur untuk peretasan vault). Bendungan retak + banjir untuk
   ETF outflow adalah PELANGGARAN — bendungan bukan objek peristiwa
   ETF. Koin raksasa sebagai hero juga bukan template universal.
7. **JANGAN menggambarkan tokoh nyata secara fiktif seolah-olah sedang
   melakukan tindakan tertentu** (menunjuk koin tenggelam, bereaksi
   terhadap crash, dll). Tokoh publik boleh muncul HANYA dalam setting
   netral yang terdokumentasi (duduk di kursi, berdiri di depan
   institusi) — dan hanya kalau aturan dua arah mengharuskannya.
   Kalau cerita tidak butuh aksi tokohnya, pakai institusi/simbol.
   **Catatan (23 Nov 2026):** gambar wajah yang sudah ada (Huang di
   kursi CEO, Cramer di meja anchor, Ackman di depan The Fed, Lagarde
   di depan ECB, Trump di meja gala) dibuat atas perintah eksplisit
   user sebelumnya (aturan dua arah) dan TIDAK termasuk dalam 5 item
   uji V21 — JANGAN diregenerasi diam-diam; statusnya "menunggu
   keputusan user".
8. **Jangan membuat logo, angka, grafik, atau fakta palsu** — tidak ada
   angka harga, tidak ada grafik, tidak ada logo perusahaan/bursa,
   tidak ada dokumen dengan isi yang terbaca.

## 2. PREMIUM EDITORIAL ART DIRECTION

- Cinematic photorealistic 3D editorial artwork.
- Ultra-detailed environment — lingkungan yang kaya, bukan ruangan kosong.
- Dramatic volumetric lighting, realistic materials and textures.
- Multiple visual storytelling elements (minimal 3 elemen yang masing-masing
  menceritakan sesuatu tentang peristiwa).
- Strong foreground, midground, background yang jelas.
- Professional international financial magazine cover quality.
- High contrast, sophisticated color grading.
- 16:9 landscape composition, minimum target 1200 × 675 px.
- Komposisi kuat di tengah (kartu portal cuma thumbnail 64×58 px,
  object-fit: cover; gambar utamanya dilihat di lightbox).

## 3. STOP GENERATING REPETITIVE IMAGES (komposisi TERLARANG)

JANGAN PERNAH membuat pola-pola ini lagi, apapun beritanya:

1. Koin crypto melayang di ruangan server.
2. Objek bercahaya di tengah ruangan gelap.
3. Kristal crypto di tengah ruangan futuristik.
4. Siluet manusia menatap layar.
5. Background server room untuk semua kategori.

Variasikan lingkungan, sudut kamera, komposisi, objek, pencahayaan, dan
gaya visual berdasarkan BERITANYA. Dua gambar untuk dua berita berbeda
tidak boleh punya lingkungan atau komposisi yang sama.

## 3b. JANGAN JADIKAN KOIN / GEDUNG FUTURISTIK / EFEK KEHANCURAN SEBAGAI DEFAULT (v3.2)

Koin raksasa, gedung futuristik, dan efek kehancuran (retak, ledakan,
kaca pecah) BOLEH dipakai hanya kalau peristiwa beritanya memang tentang
hal itu — dan tetap harus bervariasi antar gambar. JANGAN jadikan
ketiganya pola default untuk semua berita:

- Koin/token raksasa sebagai hero HANYA kalau beritanya memang tentang
  koin/token itu. Kalau beritanya tentang ETF, regulasi, atau perusahaan
  — hero-nya adalah peristiwa/institusinya (bendungan, ruang sidang,
  kantor, jembatan), bukan koin. Koin boleh muncul sebagai objek pendukung
  dengan peran fungsional (mis. koin sebagai pintu air bendungan), bukan
  hiasan raksasa.
- Gedung futuristik / kota digital HANYA kalau beritanya memang tentang
  infrastruktur futuristik. Untuk berita pasar/regulasi, pakai lingkungan
  nyata yang relevan (bursa, pengadilan, kantor, jalan kota).
- Efek kehancuran (retak, hancur, meledak) HANYA kalau peristiwa beritanya
  memang destruktif (peretasan, eksploitasi, crash). Untuk berita netral/
  positif, jangan pakai kehancuran sebagai hiasan — cari metafora lain
  (naik, tumbuh, terbuka, mengalir).
- Jangan pernah pakai perlakuan kehancuran yang sama untuk dua berita
  berbeda secara berurutan.
- **Celah yang ditutup v3.4 (audit V21):** pengecualian "koin sebagai
  objek fungsional" di v3.2 DISALAHGUNAKAN — etf-outflows-structural
  lolos QC dengan bendungan retak + koin BTC raksasa sebagai pintu air
  + air terjun merah, padahal bendungan BUKAN objek peristiwa ETF.
  Aturan baru: efek kehancuran (retak, banjir, lava, ledakan) hanya
  boleh jadi visual UTAMA kalau peristiwa itu sendiri destruktif DAN
  objek yang hancur adalah objek peristiwa itu. Arus dana keluar,
  kerugian belum terealisasi, dan flash crash BUKAN peristiwa
  destruktif fisik — visualnya harus dokumen/aliran/laporan/order
  book, bukan kehancuran.

## 4. NEWS-SPECIFIC VISUAL STORYTELLING

Contoh arah (sesuaikan dengan BERITA-nya, jangan tempel mentah):

- **Bitcoin market rebound**: pemulihan pasar finansial — lingkungan
  bursa global, dinamika pasar, suasana sentimen yang berubah dari
  panik ke lega; Bitcoin sebagai objek utama di tengah aktivitas pasar.
- **Ethereum protocol upgrade**: infrastruktur blockchain — jaringan
  validator, sistem komputasi, peningkatan teknologi protokol; tunjukkan
  "sedang di-upgrade" (konstruksi, jembatan setengah jadi, rel baru).
- **Crypto security breach**: sistem vault digital yang rusak —
  infrastruktur keamanan jaringan yang retak/jebol, gangguan sistem,
  bukan sekadar kunci gembok generik.
- **Geopolitical crisis**: peta geopolitik, institusi pemerintahan,
  hubungan antarnegara, suasana ketegangan ekonomi global.
- **AI technology**: infrastruktur komputasi AI — pusat data, chip,
  jaringan neural — dengan komposisi yang sesuai beritanya.
- **Regulation / court order**: gedung pengadilan atau regulator,
  suasana hukum yang menekan (gerbang tertutup, palu, dokumen),
  pelaku pasar yang terdampak.
- **Market dominance shift**: pergeseran kekuatan pasar — visualkan
  aliran (uang pindah ke safe haven), bukan dua koin bersebelahan.
- **Hardware tampering**: forensik — perangkat dibuka, chip terekspos,
  lampu pemeriksaan, suasana investigasi.
- **Node / protocol bug**: jaringan node yang salah satunya membeku
  atau mengulang loop, AI yang menemukan celahnya.
- **ETF outflow (arus dana institusional keluar)**: tumpukan dokumen/
  filing ETF di meja analis + aliran dana yang keluar secara tertib
  (aliran panah/garis dana) — BUKAN bendungan hancur atau banjir.
  Suasana ruang kerja analis yang rapi, bukan kehancuran.
- **Unrealized loss perusahaan (Strategy)**: laporan keuangan terbuka
  di meja + perbandingan harga beli dengan harga pasar (dua kolom
  harga yang dibandingkan) — BUKAN koin tenggelam di air.
- **Flash crash bursa (Kraken)**: dua MONITOR TRADING berdampingan —
  monitor kiri ladder order book sehat (tangga bar bid hijau / ask
  merah padat dari atas sampai bawah), monitor kanan ladder yang sama
  tapi HAMPIR KOSONG (hanya 2–3 bar samar di dasar + GAP BESAR kosong
  + satu bar merah panjang yang jatuh menembus gap ke bawah). Kontras
  penuh-vs-kosong itulah ceritanya. Monitor harus jelas-jelas monitor
  (bezel + kaki + meja) — BUKAN panel kaca abstrak, BUKAN retakan
  tanah berisi lava.

## 5. VISUAL QUALITY CONTROL (sebelum menyimpan gambar)

LIHAT hasil gambar sebelum dipakai. Periksa:

- [ ] Relevan dengan headline — orang yang belum baca berita bisa
      menebak topiknya dari gambar?
- [ ] Komposisi dan kualitas visual premium?
- [ ] TIDAK ada tulisan acak / huruf / angka?
- [ ] TIDAK ada angka dan grafik harga palsu?
- [ ] TIDAK ada logo atau simbol perusahaan/bursa yang salah?
- [ ] TIDAK mirip gambar berita lain (cek terhadap gambar yang sudah
      ada — lingkungan, sudut, dan objek harus berbeda)?
- Satu subjek hero dominan di tengah (≥40% lebar frame) — cerita
      terbaca dalam 1 detik? Yang diukur adalah subjek hero ATAU
      ensemble hero-nya (mis. bendungan + koin pintu air + air yang
      mengalir di etf-outflows-structural): kalau koin/token adalah
      hero-nya sendirian, koin itu sendiri wajib ≥40% lebar frame.
      Catatan audit 23 Nov: koin di etf-outflows-structural hanya ~22%
      lebar frame — lolos karena ensemble bendungannya dominan, tapi
      jangan ulangi koin-hero yang kecil.
- [ ] Brand mark "CryptoScope" ADA di pojok kiri bawah (overlay PIL,
      putih opacity rendah, font 34) — terlihat di lightbox, samar di
      thumbnail? Kalau tidak ada, JANGAN regenerasi: tambahkan mark
      via PIL dari file raw (media-generation-*) ke nama file -v2.
      Bukti celah: glamsterdam v1 lolos QC tanpa brand mark sama sekali
      (zona mark max brightness 95, nol piksel terang) — diperbaiki
      23 Nov ~14:05 WIB jadi glamsterdam-v2.webp.
- [ ] Uji thumbnail KONKRET: downscale gambar ke 64×58 dan LIHAT —
      hero + warna sentimen harus tetap terbaca; kalau hanya detail
      mikro yang tersisa, konsep gagal.
- [ ] TIDAK ada teks/angka mikro yang terbaca pada objek (label chip,
      papan, layar, pelat) — semua label di dalam adegan harus kosong
      atau abstrak. (Chip di cramer-ai-selloff punya guratan label
      sirkuit yang tidak terbaca — masih lolos; teks yang TERBACA
      adalah gagal.)
- [ ] Wajah tokoh (kalau ada) adalah orang yang benar — bandingkan
      dengan foto referensi tokoh itu; kalau kemiripan tidak meyakinkan,
      buang wajahnya dan pakai gedung/simbol institusi.
- [ ] Aturan dua arah wajah: ada tokoh di berita = ada wajahnya di
      gambar; ada wajah di gambar = tokoh itu ada di berita; berita
      tanpa tokoh = gambar tanpa wajah/manusia?
- [ ] Setiap objek punya hubungan logis dengan berita — tidak ada
      dekorasi acak yang tidak menjelaskan apa-apa tentang peristiwa?
- [ ] Tidak meniru gambar media lain secara langsung (bukan reproduksi
      cover/artikel media lain)?
- [ ] Maksimal 2 kali regenerasi per gambar — kalau masih gagal, pakai
      foto asli dari sumber atau biarkan grafis prosedural, jangan
      paksa gambar yang "lumayan"?
- [ ] **QC V21 (5 kriteria, wajib dinilai satu per satu):** (1)
      relevansi terhadap artikel, (2) ketepatan konteks, (3)
      kewajaran objek, (4) kejelasan pesan visual, (5) keunikan
      komposisi. **ATURAN TOLAK: jika gambar hanya menampilkan koin +
      efek dramatis tanpa menggambarkan peristiwa → TOLAK dan buat
      ulang** (maks 2x). Gambar bendungan retak + koin raksasa, koin
      tenggelam + cahaya merah, dan retakan lava + koin adalah contoh
      gambar yang DITOLAK aturan ini (audit V21, 23 Nov 2026).

Jika hasil tidak relevan atau melanggar satu saja poin di atas,
REGENERASI dengan konsep yang berbeda. Jangan pakai gambar yang
"lumayan" — standar adalah cover editorial premium.

## 5b. UJI ORANG ASING — QC MENILAI GAMBAR, BUKAN PROMPT (v3.5, 23 Nov 2026)

Pelajaran dari kegagalan Kraken v3: QC v3.4 menilai PROMPT ("panel
kiri padat, panel kanan kosong") dan meloloskan gambar yang di layar
nyatanya TIDAK terbaca — dua panel kaca abstrak, kiri seperti barcode
terang, kanan kaca gelap kosong dengan cahaya merah. User: "ini apa
coba". Mulai v3.5, QC menilai GAMBAR-nya:

- [ ] **Uji orang asing 1 detik (WAJIB, sebelum gambar diterima):**
      bayangkan orang yang belum pernah baca brief dan belum pernah
      baca berita melihat gambar ini 1 detik. Apakah dia bisa menebak
      peristiwa SPESIFIKNYA — BUKAN topik umumnya ("crypto turun"),
      tapi peristiwanya ("order book tipis bikin harga anjlok", "dana
      keluar dari ETF", "harga beli jauh di atas harga pasar")? Kalau
      jawabannya tidak, gambar DITOLAK walau prompt-nya sudah benar.
      Prompt yang bagus tidak menyelamatkan gambar yang tidak terbaca.
- [ ] **Order book HARUS digambarkan sebagai tangga bar bid/ask
      (hijau/merah) yang terbaca sebagai buku order** — deretan bar
      harga horizontal bertumpuk, bid hijau di bawah, ask merah di
      atas, di layar monitor trading yang jelas-jelas monitor (bezel +
      kaki + meja). DILARANG: panel kaca abstrak, lempeng kaca
      bercahaya, deretan bar putih seragam tanpa warna bid/ask,
      apapun yang terlihat seperti barcode / tirai / blinds.
- [ ] **Gambar perbandingan dua panel harus membuat PERBEDAANNYA
      terbaca dalam 1 detik** — bukan sekadar dua panel berdampingan.
      Perbedaan itu harus berupa kontras visual yang kasar dan
      langsung: penuh vs kosong, tinggi vs pendek, terang vs gelap.
      Kalau orang asing harus menatap 5 detik untuk menemukan bedanya,
      konsep gagal.
- [ ] **Elemen pendukung harus berada di tengah frame** — koin kecil,
      objek pendukung, atau detail penjelas yang ditaruh di tepi/bawah
      frame AKAN terpotong crop 16:9 (1920×1280 → 1920×1080 memotong
      ~100 px atas-bawah). Bukti: koin kecil di kaki panel Kraken v3
      hilang saat crop. Kalau elemen itu penting untuk cerita, taruh
      di tengah frame; kalau tidak bisa, buang elemennya dan kuatkan
      elemen utama.

## 6. IMAGE METADATA

Setiap gambar yang dipakai WAJIB dicatat di `IMAGE-METADATA.json`
(repo root) dengan skema:

- `article_id` — slug artikel (mis. `kalshi-ny-order`)
- `image_url` — path relatif (mis. `images/2026-11-23/kalshi-ny-order.webp`)
- `image_prompt` — prompt/konsep lengkap yang dipakai generate
- `image_provider` — `media.generate_image` (atau nama provider lain)
- `generation_timestamp` — ISO 8601 saat generate
- `image_dimensions` — mis. `1920x1080`
- `image_generation_status` — `generated` / `regenerated` / `failed`
- `image_type` — `ai` | `external` | `licensed` | `procedural`
- `article_title`, `article_source`, `category`

Aturan penggantian (v3.3): kalau sebuah gambar diganti (regenerasi atau
perbaikan pasca-proses seperti tambah brand mark), file BARU wajib
pakai nama baru (`-v2`, `-v3`, dst) — JANGAN pernah menimpa file lama
di URL yang sama (cache ponsel akan terus menampilkan file lama).
Entri manifest di-update DI TEMPAT: `image_url` diganti ke nama baru,
`generation_timestamp` diisi waktu perbaikan, `image_generation_status`
jadi `regenerated`, dan catatan perbaikan ditambahkan ke `image_prompt`.
File lama TETAP ada di disk (jangan dihapus) sampai agen integrasi
mengonfirmasi ref baru sudah live; mapping lama → baru dicatat di
laporan audit. Cache: `firebase.json` saat ini hanya men-set `no-cache`
untuk `**/*.html` — gambar mengandalkan penamaan file baru sebagai
cache-busting; JANGAN ubah `firebase.json` tanpa persetujuan user
(rekomendasi: header cache panjang + immutable untuk `images/`).

Bedakan jelas: gambar hasil AI, gambar editorial berlisensi, gambar
dari sumber eksternal (foto asli og:image), dan grafis prosedural
(fallback di dalam HTML, BUKAN file gambar).

## 7. WEBSITE COMPATIBILITY

- Pertahankan seluruh struktur dan fitur CryptoScope.
- Jangan menghapus fungsi lama. Jangan merusak sistem berita.
- Jangan mengubah konfigurasi API yang sudah berjalan tanpa pemeriksaan.
- Jangan re-add seksi Studio Gambar Berita (sudah dihapus total atas
  perintah user).

## 8. FAKTA INTEGRASI (jujur)

- Gambar saat ini dibuat lewat `media.generate_image` di sesi kerja
  agent, lalu disimpan sebagai file statis di repo (`images/YYYY-MM-DD/`).
- TIDAK ADA integrasi image-generation API live di dalam website.
  Website hanya menampilkan URL gambar statis; gambar baru dibuat oleh
  agent on-demand (cron/hook/worker), bukan otomatis oleh situs saat
  dibuka pengunjung.
- Kalau mau auto-generasi beneran di dalam situs: butuh backend (server
  atau serverless function) yang memegang API key provider image
  (mis. OpenAI Images, Stability, Replicate, atau sejenisnya) + endpoint
  yang dipanggil worker saat berita baru masuk + job antrean generate +
  upload hasilnya ke hosting. API key TIDAK BOLEH ada di frontend.

## 9. REFERENSI CRYPTOWAVE — 5 ATURAN BARU (v3.1, 23 Nov 2026)

Sumber: studi 8 cover IG @cryptowaveid (temuan lengkap di
`IMAGE-REFERENCES-CRYPTOWAVE.md`, gambar di `references/cryptowave/`).
User menyetujui 5 aturan ini diterapkan (23 Nov ~11:42 WIB).
ATURAN PERMANEN (user 23 Nov ~11:45 WIB: "berlaku untuk semua gambar
di berita sampai kapan pun"): semua aturan di seksi ini — termasuk
wajah tokoh — berlaku untuk SEMUA gambar berita CryptoScope, selamanya.
Bukan hanya gambar baru: gambar lama yang ceritanya berpusat pada
seorang tokoh diregenerasi dengan wajah tokohnya.

1. **One Big Idea** — tiap gambar wajib punya SATU subjek hero dominan
   di tengah (≥40% lebar frame) yang merangkum berita dalam 1 detik.
   Larang adegan yang detailnya tersebar merata tanpa pusat (subjek
   melemah di thumbnail 64×58).
2. **Kode warna sentimen** — warna aksen cahaya utama mengikuti sentimen
   berita, BUKAN bebas per gambar: hijau limau (~#7CFC00) = naik/positif,
   merah api (~#E30613) = turun/negatif, emas = netral/simbol.
3. **Metafora harfiah (+ lokal)** — visualkan peristiwa secara harfiah
   (tembok jebol, lantai retak, beruang, ganjalan truk) dan, bila relevan,
   pakai metafora lokal Indonesia (mis. truk "Bismillah"). Wajah tokoh
   publik yang relevan BOLEH dan malah bagus (user 23 Nov 2026) — tetap
   tanpa teks. ATURAN DUA ARAH: ada tokoh di berita = ada wajahnya di
   gambar; ada wajah di gambar = tokoh itu ada di berita. Berita tanpa
   tokoh = gambar tanpa wajah/manusia sama sekali.
4. **Brand mark kecil** — wordmark "CryptoScope" kecil, posisi tetap
   (pojok kiri bawah, opacity rendah) di setiap gambar AI. JANGAN minta
   generator me-render teks ini — tambahkan dengan PIL SETELAH generate
   (langkah yang sama dengan crop 16:9). Kalau overlay PIL belum
   dilakukan, kirim gambar TANPA mark — jangan pernah kirim teks AI
   yang meleleh.
5. **Uji thumbnail** — komposisi wajib tetap terbaca saat diperkecil ke
   thumbnail portal (64×58). Hero + kontras harus bertahan; detail mikro
   (teks kecil, logo kecil, angka) dilarang.

Yang JANGAN ditiru dari CryptoWave: koin emas raksasa berulang di semua
gambar; teks headline dibakar ke dalam gambar (teks CryptoScope tetap
di HTML, bukan di gambar); nada clickbait; detail kecil yang meleleh
saat diperbesar. (Wajah tokoh: AWALNYA masuk daftar jangan-ditiru, tapi
user 23 Nov 2026 membalikkan — wajah tokoh publik yang relevan MALAH
BAGUS, asal orangnya benar; lihat aturan 3.)

Aturan wajah dua arah ini berlaku untuk gambar AI editorial. Foto
dokumenter asli dari peristiwa itu dikecualikan — foto memang
menampilkan apa yang terjadi di peristiwa tersebut.

## Template prompt (isi {{...}} per berita)

> You are an expert AI editorial image director for a professional global
> news website.
>
> TASK: Read the news data below. First ANALYZE it (one paragraph):
> what is the single central event, who/what is involved, what changed
> because of it, and what mood fits. Then design ONE unique visual
> concept that tells that event — a concept that would NOT work for any
> other news story.
>
> NEWS DATA:
> Title: {{title}}
> Category: {{category}}
> Summary: {{summary}}
> Central event: {{event}}
> Entities involved: {{entities}}
> Impact: {{impact}}
> Mood / context: {{mood}}
>
> VISUAL DIRECTION: Premium financial editorial artwork, cinematic 3D
> illustration, ultra-detailed photorealistic rendering, dramatic
> volumetric lighting, realistic materials and textures, multiple visual
> storytelling elements, strong foreground, midground and background,
> professional color grading, cover quality of an international
> financial news outlet.
> First read the FULL news content. Design the visual around ONE
> specific event from the story — name the main object, the environment,
> and how the objects relate to each other. The image must depict the
> EVENT itself (documents, a report, an order book, a bridge, a
> courtroom), not just a cryptocurrency symbol with decoration. Vary the
> composition for each news type. Never use destruction effects, lava,
> flood, or a giant coin as a universal template — destruction is only
> allowed when the event itself is destructive AND the destroyed object
> is the event's own object. Never depict a real person fictitiously
> performing a specific action; a public figure may only appear in a
> neutral, documented setting. No logos, numbers, charts, or fake facts.
> Before accepting the image, apply the stranger test: a person who has
> never read the brief must grasp the SPECIFIC event in one second from
> the image alone — judge the image, never the prompt. An order book
> must be drawn as a green/red bid/ask bar ladder on a real trading
> monitor, never as abstract glass panels or a barcode. In a two-panel
> comparison, the DIFFERENCE itself must be readable in one second
> (full vs empty, tall vs short). Keep supporting elements near the
> center of the frame so the 16:9 crop cannot cut them off.
> One dominant hero subject centered (at least 40% of frame width)
> that tells the story in one second. Dominant accent lighting follows
> the story sentiment — lime green for positive/up news, fire red for
> negative/down news, gold for neutral. Literal metaphor of the event
> (a breaking wall, a cracked floor, a bear, a wedged truck) and, where
> relevant, an Indonesian-local metaphor. Composition must still read
> when shrunk to a 64x58 thumbnail — no micro-detail. Do not default to a giant coin, a futuristic building, or destruction effects — use the event's own objects and setting as the hero. When the story
> centers on a public figure, include their recognizable face in the
> scene — faces of relevant public figures are welcome. Two-way rule:
> a figure in the story means their face in the image, and a face in
> the image means that figure is in the story; a story with no public
> figure means no face and no human figure in the image at all.
> Unique concept for THIS story only: {{concept}}.
>
> BANNED COMPOSITIONS (never use): a coin floating in a server room; a
> glowing object centered in a dark room; a crypto crystal in a futuristic
> room; a human silhouette staring at a screen; a server-room background.
> BANNED WORDS (never in the prompt): "server room", "crystal",
> "silhouette staring", "glowing object in dark room", "floating coin".
> Vary the environment, camera angle, composition, objects, lighting and
> visual style for every story. No legible micro-text or numbers on any
> object in the scene — labels, boards, screens and chip markings must be
> blank or abstract.
>
> STRICT RULES: The image must contain NO text, NO letters, NO numbers,
> NO charts, NO logos, NO watermarks, NO price data — pure visual scene
> only. No fake documentary photos. Faces of the public figures in the
> story are welcome — but they must be the RIGHT person; never show a
> wrong face or a generic face passed off as someone real. For sensitive
> news, use symbolic editorial illustrations. No micro-detail that only
> works when viewed large.
>
> OUTPUT: One unique 16:9 landscape editorial image that accurately
> tells this specific news event.

## Catatan pemakaian (CryptoScope)

- Isi `{{title}}`, `{{category}}`, `{{summary}}`, `{{event}}`,
  `{{entities}}`, `{{impact}}`, `{{mood}}`, `{{concept}}` dari item
  berita di `NEWS_DATA`.
- Gambar disimpan di `images/YYYY-MM-DD/<slug>.webp`, di-commit ke repo
  `oyaaasanzx25/cryptoscope`, lalu dipakai sebagai `img` item berita
  (URL relatif: `images/YYYY-MM-DD/<slug>.webp`).
- Output generator 1920×1280 (3:2) — crop ke 1920×1080 (16:9) dengan
  PIL center crop, quality=90 WebP, sebelum di-wire. Brand mark
  "CryptoScope" (kecil, pojok kiri bawah, opacity rendah) di-overlay
  dengan PIL pada langkah yang sama — jangan minta generator me-render
  teks (lihat bagian 9 aturan 4).
- Kalau sebuah berita sudah punya foto asli yang bersih dari sumbernya
  (foto dokumenter NYATA dari peristiwa itu), foto asli tetap dipakai;
  gambar AI hanya untuk slot tanpa foto.
- Grafis prosedural v4 di dalam `cryptoscope-1.html` tetap jadi cadangan
  kalau gambar gagal dimuat (onerror fallback).
- Kartu portal memakai thumbnail kecil (64×58 px, object-fit: cover,
  lazy loading) — gambar utamanya dilihat di lightbox; jadi komposisi
  harus kuat di tengah (tahan crop) dan kaya detail saat dilihat besar.
- Riwayat: v1 (23 Nov ~10:30 WIB) 4:5 portrait JPG + teks/angka AI
  ("BTC/USD 60,000.00", "PASSED NOVEMBER 2024" salah tahun). v2
  (~11:00 WIB) 16:9 WebP tanpa teks/angka. v3 (23 Nov ~11:15 WIB):
  context-first + banned compositions + QC + metadata manifest —
  Glamsterdam diregenerasi karena melanggar v3 (kristal ETH raksasa
  di ruangan futuristik + server hall).
  v3.1 (23 Nov ~11:42 WIB): + 5 aturan referensi CryptoWave (One Big
  Idea, kode warna sentimen, metafora harfiah/lokal, brand mark kecil
  via overlay PIL, uji thumbnail) — user: "ya itu sekarang lu paham
  ahirnya". Amendemen v3.1 (23 Nov ~11:43 WIB): wajah tokoh publik
  yang relevan MALAH BAGUS (user: "malah bagusnya ada wajah tokoh") —
  larangan wajah di v3 dicabut, asal orangnya benar. Permanen (23 Nov
  ~11:45 WIB): berlaku untuk semua gambar berita, selamanya — 3 gambar
  lama yang ceritanya tentang tokoh (Trump/Huang, Ackman, Lagarde)
  diregenerasi dengan wajah. Aturan dua arah (23 Nov ~11:49 WIB, user:
  "kalau di berita ada tokoh ya di gambar ada tokoh dan sebaliknya") —
  berita tanpa tokoh = gambar tanpa wajah/manusia sama sekali.
  v3.2 (23 Nov ~13:30 WIB, audit V18): + aturan anti-default (koin
  raksasa / gedung futuristik / efek kehancuran hanya kalau peristiwa
  memang tentang itu, bukan pola default); + pre-flight scan kata
  terlarang sebelum generate; + QC: setiap objek harus berhubungan
  logis dengan berita, tidak meniru gambar media lain, maks 2x
  regenerasi per gambar. Bukti celah: chainflip-hack v1 lolos dengan
  prompt "Dark server room" (komposisi terlarang #5) — diregenerasi
  jadi chainflip-hack-v2 dengan setting ruang vault beton polos.
  v3.3 (23 Nov ~14:05 WIB, audit image-engine): + QC brand mark
  (wajib ada, cek zona pojok kiri bawah; perbaikan tanpa regenerasi
  via PIL dari file raw → nama -v2); + uji thumbnail konkret
  (downscale 64×58 dan lihat); + larangan teks/angka mikro yang
  terbaca pada objek; + cek kemiripan wajah terhadap foto referensi;
  + klarifikasi hero ≥40% (subjek atau ensemble hero; koin-hero
  sendirian wajib ≥40%); + kata terlarang masuk ke template prompt;
  + aturan penggantian manifest (update di tempat + mapping lama→baru
  + file lama dipertahankan). Bukti celah: glamsterdam v1 tanpa brand
  mark lolos QC — diperbaiki jadi glamsterdam-v2.webp (scene sama,
  mark ditambah via PIL). 5 gambar diuji visual 23 Nov ~14:00 WIB
  (ETF outflows, Glamsterdam, Chainflip v2, Kalshi, Cramer) — 4 lolos
  penuh, 1 lolos konten tapi tanpa brand mark (diperbaiki).
  v3.4 (23 Nov ~14:40 WIB, audit V21 IMAGE ENGINE & DATA QUALITY
  FIX): + 8 aturan peristiwa spesifik (§1b: baca seluruh isi, satu
  peristiwa spesifik, objek+lingkungan+hubungan antarobjek, visual
  = peristiwa bukan simbol, variasi komposisi, larangan template
  kehancuran/lava/banjir/koin raksasa, larangan tokoh fiktif
  beraksi, larangan logo/angka/grafik/fakta palsu); + penutup celah
  v3.2 (§3b: pengecualian "koin fungsional" disalahgunakan);
  + 3 arah visual baru (§4: ETF outflow, unrealized loss,
  flash crash); + QC V21 5 kriteria + aturan tolak koin+efek
  dramatis (§5); + aturan V21 masuk template prompt; + catatan
  aturan 7 vs gambar wajah existing (menunggu keputusan user,
  jangan diregenerasi diam-diam). Bukti celah: 3 gambar lolos QC
  v3.3 padahal satu template (koin raksasa + efek kehancuran merah)
  — etf-outflows-structural (bendungan retak + banjir merah),
  strategy-underwater (koin tenggelam + pria generik + wayang acak),
  kraken-flash-crash-v2 (retakan lava + koin) — ketiganya
  diregenerasi jadi -v3 dengan konsep peristiwa spesifik.
  v3.5 (23 Nov ~15:00 WIB, emergency fix Kraken): + uji orang asing
  1 detik (§5b: QC menilai GAMBAR, bukan prompt — orang yang belum
  baca brief harus paham peristiwa spesifiknya dalam 1 detik);
  + aturan gambar order book (tangga bar bid/ask hijau-merah di
  monitor trading nyata, larangan panel kaca abstrak/barcode);
  + aturan perbandingan dua panel (perbedaannya harus terbaca dalam
  1 detik, bukan sekadar dua panel berdampingan); + aturan elemen
  pendukung di tengah frame (anti potong crop 16:9); + arah visual
  flash crash di §4 diperbaiki ke konsep dua monitor. Bukti celah:
  kraken-flash-crash-v3 lolos QC v3.4 padahal di layar user hanya dua
  panel kaca abstrak (kiri seperti barcode, kanan kaca gelap kosong)
  — diregenerasi jadi kraken-flash-crash-v4 (dua monitor trading:
  ladder bid/ask penuh vs monitor kosong + satu bar merah raksasa
  yang jatuh), lolos uji orang asing percobaan pertama. Uji orang
  asing yang sama diterapkan ke etf-outflows-structural-v3 (LOLOS:
  folder filing + aliran koin tertib keluar ke nampan terbaca sebagai
  arus dana keluar) dan strategy-underwater-v3 (LOLOS: ledger dengan
  tumpukan tinggi vs pendek + pita merah terbaca sebagai harga beli
  vs harga pasar) — keduanya tidak diubah.
