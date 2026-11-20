# faizhalas.github.io (Next.js) — tema "goodbooks"

Situs akademik sederhana: Next.js (App Router) + CSS biasa, tanpa library UI tambahan.

## Struktur

```
data/site.js          ← SEMUA isi (profil, berita, publikasi, proyek, CV). Edit di sini saja.
app/page.js           ← Beranda (hero, afiliasi, about, news, publikasi pilihan)
app/publications/     ← Halaman publikasi (dikelompokkan per tahun)
app/projects/         ← Halaman proyek
app/people/           ← Halaman People (foto bulat; taruh foto di public/images/people/)
app/cv/               ← Halaman CV
components/           ← Navbar, Footer, PublicationCard, PersonCard, Avatar
app/globals.css       ← Seluruh gaya & warna tema (variabel di :root)
public/images/        ← Taruh foto/gambar di sini
```

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # hasil statis di folder out/
```

## Mengganti gambar

- Foto profil (opsional): ubah `profile.photo` di `data/site.js`.
- Foto People: taruh di `public/images/people/`, lalu isi `photo` pada tiap orang di `people` (`data/site.js`). Jika kosong, tampil inisial.
- Foto & ikon masih dummy (avatar siluet). Foto profil: isi `profile.photo`. Foto orang: isi `photo` di `people`.
- CV: tombol "download as pdf" membuka dialog cetak browser; pilih "Save as PDF". Tidak perlu file PDF. Ubah tahun (`years`) di `cv` pada `data/site.js`.

## Deploy ke GitHub Pages

1. Ganti isi repo `faizhalas.github.io` dengan proyek ini (cadangkan versi Jekyll lama di branch lain).
2. Di GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Push ke branch `main`. Workflow `.github/workflows/deploy.yml` akan build & publish otomatis.

## Mengubah warna tema

Edit variabel `--peach`, `--lilac`, `--mint`, `--sky` di bagian atas `app/globals.css`.
