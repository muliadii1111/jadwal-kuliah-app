# 📅 Jadwal Kuliah — React Native (Expo)

**Nama:** Muli
**NIM:** 233510205
**Kelas:** TI-5B
**Program Studi:** Teknik Informatika, Universitas Islam Riau (UIR)
**Mata Kuliah:** Pemrograman Mobile
**Tugas:** Praktikum — Handling Lists & Data Rendering (`.map()`, `FlatList`, `SectionList`)

---

## Deskripsi

Aplikasi Sistem Jadwal Kuliah dengan 3 halaman, masing-masing memakai satu
teknik render list yang berbeda, semuanya bersumber dari **data statis**
(`data/data.js`) — tidak ada API/backend sama sekali.

| # | Halaman | Teknik | File |
|---|---------|--------|------|
| A | Ringkasan Mata Kuliah | `.map()` | `screens/RingkasanMatkulScreen.js` |
| B | Daftar Pertemuan | `FlatList` | `screens/DaftarPertemuanScreen.js` |
| C | Jadwal Mingguan (per hari) | `SectionList` | `screens/JadwalMingguanScreen.js` |

Navigasi antar halaman pakai bottom tab (`@react-navigation/bottom-tabs`)
supaya ketiganya bisa diakses dalam satu aplikasi yang sama.

## Checklist sesuai ketentuan tugas

**A. Ringkasan Mata Kuliah (`.map()`)**
- [x] Render array statis `mataKuliah` dengan `.map()` — lihat `RingkasanMatkulScreen.js`
- [x] Setiap item menampilkan nama matkul, kode, SKS, dan dosen pengampu — `CourseCard.js`
- [x] `key` unik per item (`key={matkul.id}`)

**B. Daftar Pertemuan (`FlatList`, minimal 10 item)**
- [x] 13 item pertemuan di `data/data.js` (lebih dari minimal 10)
- [x] `keyExtractor` → `item.id`
- [x] `ItemSeparatorComponent` → `components/Divider.js`
- [x] `ListHeaderComponent` → info total pertemuan + tombol demo "Lihat versi kosong"
- [x] `ListEmptyComponent` → `components/EmptyState.js` (tekan tombol demo di atas daftar untuk melihatnya langsung, karena data normal tidak pernah kosong)

**C. Jadwal per Hari (`SectionList`)**
- [x] Section dikelompokkan per hari (Senin, Selasa, Rabu) dari `jadwalMingguan`
- [x] Setiap item menampilkan matkul, ruang, dan jam mulai–selesai — `ScheduleItem.js`
- [x] Header section punya gaya berbeda dari item biasa (latar gelap, huruf kapital, sticky saat scroll) — `DaySectionHeader.js`

**Ketentuan umum**
- [x] Seluruh data aplikasi berasal dari array statis di `data/data.js`, tidak ada fetch/API

## Struktur proyek

```
jadwal-kuliah-app/
├── App.js                     # Load font + bottom tab navigator
├── app.json                   # Konfigurasi Expo
├── data/
│   └── data.js                # Sumber data statis (mataKuliah, pertemuan, jadwalMingguan)
├── theme/
│   └── theme.js                # Warna, spacing, radius, fontFamily terpusat
├── components/
│   ├── ScreenHeader.js         # Header editorial di atas tiap halaman
│   ├── CourseCard.js           # Item halaman Ringkasan (.map())
│   ├── MeetingCard.js          # Item halaman Daftar Pertemuan (FlatList)
│   ├── Divider.js              # ItemSeparatorComponent
│   ├── EmptyState.js           # ListEmptyComponent
│   ├── ScheduleItem.js         # Item halaman Jadwal Mingguan (SectionList)
│   ├── DaySectionHeader.js     # renderSectionHeader (gaya beda per hari)
│   └── Pill.js                 # Badge kecil (SKS, "Pertemuan ke-N", dst.)
└── screens/
    ├── RingkasanMatkulScreen.js
    ├── DaftarPertemuanScreen.js
    └── JadwalMingguanScreen.js
```

## Cara menjalankan

1. Install dependency:
   ```bash
   npm install
   ```
2. Jalankan Expo:
   ```bash
   npx expo start
   ```
3. Scan QR code yang muncul di terminal pakai aplikasi **Expo Go** (Android/iOS),
   atau tekan `a` untuk membuka di emulator Android / `i` untuk simulator iOS.

Font kustom (Fraunces & IBM Plex Sans) otomatis di-download saat pertama kali
dijalankan, jadi pastikan koneksi internet aktif di percobaan pertama.

## Cara upload ke GitHub

Folder ini sudah berupa git repo lokal dan **sudah ada 1 commit awal**
(`git log` akan menunjukkan commit "Tugas praktikum: Sistem Jadwal Kuliah...").
Tinggal hubungkan ke GitHub:

1. Buat repo baru (kosong, tanpa README/gitignore/license) di github.com,
   misalnya bernama `jadwal-kuliah-app`.
2. Jalankan di folder proyek ini:
   ```bash
   git remote add origin https://github.com/USERNAME/jadwal-kuliah-app.git
   git branch -M main
   git push -u origin main
   ```

Link repo itu yang dikumpulkan sesuai ketentuan pengumpulan tugas.

## Catatan teknis

- **Expo SDK 57** / React Native 0.86 / React 19 (versi terbaru saat proyek
  ini dibuat) — New Architecture aktif secara default.
- Ikon tab bawah sengaja dibuat sebagai monogram teks dalam lingkaran (bukan
  library ikon eksternal), karena `@expo/vector-icons` sudah dinyatakan
  deprecated per SDK 56 sehingga dihindari.
- Palet warna dan tipografi (Fraunces untuk judul, IBM Plex Sans untuk isi)
  sengaja dibuat konsisten lewat satu file `theme/theme.js`, bukan warna
  "hardcode" tersebar di tiap komponen.
