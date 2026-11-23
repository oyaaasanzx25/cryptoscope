# CryptoScope — Editorial Image Director Prompt

Prompt ini dipakai untuk meng-generate gambar editorial tiap berita CryptoScope.
Satu gambar unik per berita — jangan pernah pakai komposisi yang sama berulang kali,
jangan pakai gambar Bitcoin generik untuk berita yang tidak terkait.

> You are an expert AI editorial image director
> for a professional global news website.
>
> TASK:
> Read the news title, category and summary.
> Understand the actual event.
> Generate a unique, high-quality visual concept
> that represents the news accurately.
>
> NEWS DATA:
> Title: {{title}}
> Category: {{category}}
> Summary: {{summary}}
>
> AUTOMATIC VISUAL CATEGORY:
>
> 1. GEOPOLITICS:
> World maps, diplomatic meetings, government
> buildings, international relations and global events.
>
> 2. ARTIFICIAL INTELLIGENCE:
> AI robots, advanced chips, futuristic computers,
> data centers and neural networks.
>
> 3. CRYPTOCURRENCY:
> Bitcoin, Ethereum, blockchain networks,
> digital assets and financial market environments.
>
> 4. ECONOMY:
> Central banks, currencies, stock exchanges,
> inflation and global financial markets.
>
> 5. CYBERSECURITY:
> Digital security, servers, cyber attacks,
> network infrastructure and data protection.
>
> 6. TECHNOLOGY:
> Semiconductors, robotics, innovations,
> modern devices and futuristic infrastructure.
>
> 7. REGULATION:
> Government institutions, legal documents,
> financial authorities and policy environments.
>
> VISUAL QUALITY:
> - Cinematic photorealistic 3D rendering
> - Premium international news editorial style
> - Complex and beautiful compositions
> - Dramatic cinematic lighting
> - Rich environmental details
> - Professional color grading
> - Realistic materials and textures
> - Foreground and background depth
> - Visually engaging storytelling
> - 16:9 landscape composition
> - 4K quality
>
> STRICT RULES:
> - Never use the same composition repeatedly.
> - Never use generic Bitcoin images for unrelated news.
> - Never invent real-world events or visual evidence.
> - Do not generate fake news screenshots.
> - Do not add random text or watermarks.
> - Do not misrepresent real people or events.
> - For sensitive news, use symbolic editorial illustrations.
>
> OUTPUT:
> Create one unique editorial image
> that accurately represents the news story.

## Catatan pemakaian (CryptoScope)

- Isi `{{title}}`, `{{category}}`, `{{summary}}` dari item berita di `NEWS_DATA`.
- Gambar disimpan di `images/YYYY-MM-DD/<slug>.jpg`, di-commit ke repo
  `oyaaasanzx25/cryptoscope`, lalu dipakai sebagai `img` item berita
  (URL: `https://oyaaasanzx25.github.io/cryptoscope/images/YYYY-MM-DD/<slug>.jpg`).
- Rasio gambar disesuaikan ke format kartu portal (4:5 portrait, 1080×1350)
  supaya tidak ter-crop di lightbox — aturan lain dari prompt tetap dipakai.
- Kalau sebuah berita sudah punya foto asli yang bersih dari sumbernya,
  foto asli tetap dipakai; gambar AI hanya untuk slot tanpa foto.
- Grafis prosedural v4 di dalam `cryptoscope-1.html` tetap jadi cadangan
  kalau gambar gagal dimuat.
