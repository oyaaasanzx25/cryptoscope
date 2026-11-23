# CryptoScope — Editorial Image Director Prompt (v2 — Upgrade Sistem Visual)

Prompt ini dipakai untuk meng-generate gambar editorial tiap berita CryptoScope.
Satu gambar unik per berita — jangan pernah pakai komposisi yang sama berulang kali,
jangan pakai gambar Bitcoin generik untuk berita yang tidak terkait.

## Target visual (standar premium)

- Premium financial editorial artwork.
- Cinematic 3D illustration, ultra-detailed, photorealistic rendering.
- Dramatic lighting dan strong contrast.
- Deep composition: foreground, midground, background yang jelas.
- Volumetric lighting, realistic reflections, atmospheric particles.
- Professional color grading.
- Visual storytelling yang kuat — gambar harus menceritakan peristiwanya,
  bukan sekadar hiasan thumbnail.
- Kualitas seperti cover berita media finansial internasional.
- Jangan menghasilkan gambar sederhana, datar, atau terlihat seperti
  ilustrasi AI generik.

## Baca berita dulu sebelum menentukan konsep

AI harus membaca judul, ringkasan, kategori, dan konteks berita sebelum
menentukan konsep gambar. Objek utama harus sesuai dengan peristiwa yang
diberitakan — jangan selalu memakai Bitcoin sebagai objek utama, jangan
memakai latar belakang yang sama berulang kali, dan gunakan komposisi yang
berbeda untuk setiap artikel.

Art direction per kategori:

- **CRYPTO & BITCOIN**: Bitcoin, Ethereum, blockchain, market volatility,
  digital assets, trading environment, cinematic financial atmosphere.
- **GEOPOLITIK**: Peta dunia, gedung pemerintahan, hubungan antarnegara,
  konflik ekonomi global, suasana diplomatik yang dramatis.
- **GLOBAL ECONOMY**: Bursa saham, gedung finansial, grafik ekonomi, mata
  uang, emas, dan kondisi pasar global.
- **ARTIFICIAL INTELLIGENCE**: AI data centers, advanced computing systems,
  futuristic technology, neural network visualization, powerful server
  environments.
- **CYBERSECURITY**: Digital security infrastructure, encrypted networks,
  cybersecurity operations, abstract cyber threats.
- **REGULATION & GOVERNMENT**: Gedung regulator, dokumen kebijakan, institusi
  keuangan, dan simbol regulasi digital.
- **ALTCOIN & WEB3**: Blockchain infrastructure, decentralized networks,
  smart contracts, digital ecosystems, futuristic Web3 environments.

## Standar kualitas gambar

- Aspect ratio: **16:9 landscape**.
- Resolusi target: 1200 × 675 px atau lebih tinggi.
- Format: **WebP** (fallback JPG hanya kalau WebP tidak tersedia).
- High-detail cinematic rendering, professional lighting, realistic shadows.
- Rich textures, realistic materials, strong visual hierarchy, sharp main
  subject, clean composition suitable for news thumbnails.

## HAL YANG DILARANG (tegas)

- Gambar polos dengan satu objek di tengah.
- Koin crypto mengambang tanpa konteks.
- Background gradient sederhana.
- Ilustrasi kartun.
- Gambar berulang untuk berbagai berita.
- **Tulisan acak atau teks AI yang tidak terbaca — gambar TIDAK BOLEH
  mengandung teks, huruf, angka, atau label apa pun.**
- **Logo perusahaan atau bursa yang salah — jangan gambar logo apa pun.**
- **Grafik harga dan angka palsu — jangan gambar chart, sumbu, angka harga,
  persentase, atau data apa pun.** Kalau berita butuh angka/data aktual,
  angka itu tampil lewat elemen HTML website (data terverifikasi), BUKAN
  di dalam gambar.
- Foto dokumenter palsu yang seolah-olah merupakan kejadian nyata.
- Untuk berita sensitif, pakai ilustrasi editorial simbolik.

## Template prompt (isi {{...}} per berita)

> You are an expert AI editorial image director for a professional global
> news website.
>
> TASK: Read the news title, category and summary. Understand the actual
> event. Generate a unique, high-quality visual concept that represents
> the news accurately.
>
> NEWS DATA:
> Title: {{title}}
> Category: {{category}}
> Summary: {{summary}}
>
> VISUAL DIRECTION: Premium financial editorial artwork, cinematic 3D
> illustration, ultra-detailed photorealistic rendering, dramatic lighting,
> strong contrast, deep composition with clear foreground, midground and
> background, volumetric lighting, realistic reflections, atmospheric
> particles, professional color grading, strong visual storytelling, cover
> quality of an international financial news outlet.
> Art direction for this category: {{category-direction}}.
> Unique concept for this story: {{concept}}.
>
> STRICT RULES: Never use the same composition repeatedly. Never use
> generic Bitcoin images for unrelated news. Never invent real-world events
> or visual evidence. Do not generate fake news screenshots. **The image
> must contain NO text, NO letters, NO numbers, NO charts, NO logos, NO
> watermarks, NO price data — pure visual scene only.** Do not misrepresent
> real people or events. For sensitive news, use symbolic editorial
> illustrations.
>
> OUTPUT: One unique 16:9 landscape editorial image that accurately
> represents the news story.

## Catatan pemakaian (CryptoScope)

- Isi `{{title}}`, `{{category}}`, `{{summary}}`, `{{category-direction}}`,
  `{{concept}}` dari item berita di `NEWS_DATA`.
- Gambar disimpan di `images/YYYY-MM-DD/<slug>.webp`, di-commit ke repo
  `oyaaasanzx25/cryptoscope`, lalu dipakai sebagai `img` item berita
  (URL relatif: `images/YYYY-MM-DD/<slug>.webp`).
- Kalau sebuah berita sudah punya foto asli yang bersih dari sumbernya
  (foto dokumenter NYATA dari peristiwa itu), foto asli tetap dipakai;
  gambar AI hanya untuk slot tanpa foto.
- Grafis prosedural v4 di dalam `cryptoscope-1.html` tetap jadi cadangan
  kalau gambar gagal dimuat (onerror fallback).
- Kartu portal memakai thumbnail kecil (64×58 px, object-fit: cover,
  lazy loading) — gambar utamanya dilihat di lightbox; jadi komposisi
  harus kuat di tengah (tahan crop) dan kaya detail saat dilihat besar.
- Riwayat: v1 (23 Nov ~10:30 WIB) memakai 4:5 portrait JPG dan masih
  mengandung teks/angka AI di layar (mis. "BTC/USD 60,000.00",
  "PASSED NOVEMBER 2024" yang salah tahun) — v2 ini memperbaikinya:
  16:9, WebP, TANPA teks/angka/chart/logo apa pun.
