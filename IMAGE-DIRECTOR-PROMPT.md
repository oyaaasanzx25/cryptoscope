# CryptoScope — Editorial Image Director Prompt (v3 — Context-Based Visual System)

Prompt ini dipakai untuk meng-generate gambar editorial tiap berita CryptoScope.
Satu gambar unik per berita — gambar harus MENCERITAKAN peristiwa beritanya,
bukan sekadar hiasan dengan simbol crypto yang diganti-ganti.

## 0. PRINSIP DASAR (v3)

Gambar yang bagus BUKAN soal resolusi atau warna. Gambar yang bagus lahir
dari AI yang MEMAHAMI beritanya dulu, baru menggambar. Jangan pernah
langsung generate dari judul saja. Setiap gambar wajib lolos analisis
konteks (bagian 1) dan QC (bagian 5) sebelum dipakai.

## 1. CONTEXT-BASED IMAGE GENERATION (wajib sebelum generate)

Sebelum membuat gambar, analisis dulu beritanya:

- **Headline** — apa yang sebenarnya terjadi?
- **Isi & ringkasan** — fakta kunci apa yang harus terlihat?
- **Peristiwa utama** — satu momen/aksi sentral yang bisa divisualkan.
- **Entitas / tokoh** — siapa atau lembaga apa yang terlibat (jangan
  gambar wajah orang nyata; pakai gedung, simbol institusi, atau
  siluet anonim bila perlu).
- **Dampak peristiwa** — apa yang berubah karena peristiwa ini
  (pasar jatuh, regulasi menutup bursa, teknologi rusak, dll)?
- **Kategori berita** — arah visualnya, bukan template mentah.
- **Suasana / konteks** — tegang, optimistis, kacau, khidmat, mendesak?

Tulis dulu KONSEP SATU PARAGRAF: "Gambar ini menunjukkan ... karena
beritanya tentang ...". Kalau konsepnya bisa dipakai untuk berita lain
tanpa diubah, konsepnya SALAH — buat ulang sampai spesifik untuk
peristiwa ini saja.

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

Jika hasil tidak relevan atau melanggar satu saja poin di atas,
REGENERASI dengan konsep yang berbeda. Jangan pakai gambar yang
"lumayan" — standar adalah cover editorial premium.

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
> Unique concept for THIS story only: {{concept}}.
>
> BANNED COMPOSITIONS (never use): a coin floating in a server room; a
> glowing object centered in a dark room; a crypto crystal in a futuristic
> room; a human silhouette staring at a screen; a server-room background.
> Vary the environment, camera angle, composition, objects, lighting and
> visual style for every story.
>
> STRICT RULES: The image must contain NO text, NO letters, NO numbers,
> NO charts, NO logos, NO watermarks, NO price data — pure visual scene
> only. No fake documentary photos. Do not misrepresent real people or
> events (no real faces). For sensitive news, use symbolic editorial
> illustrations.
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
  PIL center crop, quality=90 WebP, sebelum di-wire.
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
