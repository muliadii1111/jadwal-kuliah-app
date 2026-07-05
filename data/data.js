// data.js
// SUMBER DATA STATIS TUNGGAL untuk seluruh aplikasi (sesuai ketentuan tugas:
// "Data seluruh aplikasi bersumber dari array statis (hardcode) yang
// didefinisikan di dalam proyek"). Tidak ada fetch/API, semua di-hardcode
// di sini lalu dipakai ulang oleh ketiga halaman.
//
// Data di file ini disesuaikan dengan jadwal Kelas B (mata kuliah & dosen
// yang benar-benar diambil semester ini).

// -----------------------------------------------------------------------
// A. Data untuk Halaman Ringkasan Mata Kuliah (di-render dengan .map())
//    Catatan kode matkul: kampus tidak mencantumkan kode resmi di jadwal,
//    jadi dipakai singkatan sederhana (bukan kode KRS resmi) — ganti sendiri
//    kalau kamu punya kode resminya.
// -----------------------------------------------------------------------
export const mataKuliah = [
  {
    id: 'MK-01',
    kode: 'BD',
    nama: 'Big Data',
    sks: 3,
    dosen: 'Dr. Ir. Evizal, S.T., M.Eng',
  },
  {
    id: 'MK-02',
    kode: 'PM',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Panji Rachmat Setiawan, S.Kom., MMSI',
  },
  {
    id: 'MK-03',
    kode: 'IMK',
    nama: 'Interaksi Manusia dan Komputer',
    sks: 3,
    dosen: 'Ana Yulianti, S.T., M.Kom',
  },
  {
    id: 'MK-04',
    kode: 'NLP',
    nama: 'Natural Language Processing',
    sks: 3,
    dosen: 'Dr. Arbi Haza Nasution, B.IT.(Hons), M.IT',
  },
  {
    id: 'MK-05',
    kode: 'RS',
    nama: 'Routing & Switching',
    sks: 3,
    dosen: 'Yudhi Arta, S.T., M.Kom',
  },
  {
    id: 'MK-06',
    kode: 'ML',
    nama: 'Machine Learning',
    sks: 3,
    dosen: 'Ause Labellapansa, S.T., M.Cs., M.Kom',
  },
  {
    id: 'MK-07',
    kode: 'IPPL',
    nama: 'Implementasi dan Pengujian Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Ir. Akmar Efendi, S.Kom., M.Kom',
  },
];

// -----------------------------------------------------------------------
// B. Data untuk Halaman Daftar Pertemuan (dirender dengan FlatList)
//    2 pertemuan per mata kuliah (14 item, di atas minimal 10), diurutkan
//    berdasarkan tanggal. Topik per pertemuan bersifat perkiraan silabus
//    umum (bukan dari dokumen resmi kampus) — silakan sesuaikan.
// -----------------------------------------------------------------------
export const pertemuan = [
  { id: 'PT-01', matkul: 'Big Data', pertemuanKe: 1, topik: 'Pengenalan Big Data & Ekosistem Hadoop-Spark', tanggal: '2025-09-01' },
  { id: 'PT-02', matkul: 'Pemrograman Mobile', pertemuanKe: 1, topik: 'Setup Environment: Node.js, Expo CLI & Emulator', tanggal: '2025-09-01' },
  { id: 'PT-03', matkul: 'Pemrograman Mobile', pertemuanKe: 2, topik: 'Konsep Dasar Komponen & JSX di React Native', tanggal: '2025-09-02' },
  { id: 'PT-04', matkul: 'Interaksi Manusia dan Komputer', pertemuanKe: 1, topik: 'Pengantar HCI & Prinsip Usability', tanggal: '2025-09-02' },
  { id: 'PT-05', matkul: 'Natural Language Processing', pertemuanKe: 1, topik: 'Pengantar NLP & Text Preprocessing', tanggal: '2025-09-03' },
  { id: 'PT-06', matkul: 'Routing & Switching', pertemuanKe: 1, topik: 'Konsep Routing Statis & Dinamis', tanggal: '2025-09-03' },
  { id: 'PT-07', matkul: 'Machine Learning', pertemuanKe: 1, topik: 'Pengantar Machine Learning & Supervised Learning', tanggal: '2025-09-03' },
  { id: 'PT-08', matkul: 'Big Data', pertemuanKe: 2, topik: 'Praktikum Instalasi & Konfigurasi Apache Spark', tanggal: '2025-09-04' },
  { id: 'PT-09', matkul: 'Routing & Switching', pertemuanKe: 2, topik: 'Praktikum Konfigurasi Router & Switch Cisco', tanggal: '2025-09-04' },
  { id: 'PT-10', matkul: 'Machine Learning', pertemuanKe: 2, topik: 'Praktikum Regresi Linear dengan Scikit-Learn', tanggal: '2025-09-04' },
  { id: 'PT-11', matkul: 'Natural Language Processing', pertemuanKe: 2, topik: 'Praktikum Tokenisasi & Stemming Bahasa Indonesia', tanggal: '2025-09-05' },
  { id: 'PT-12', matkul: 'Implementasi dan Pengujian Perangkat Lunak', pertemuanKe: 1, topik: 'Konsep Dasar Software Testing & Quality Assurance', tanggal: '2025-09-05' },
  { id: 'PT-13', matkul: 'Interaksi Manusia dan Komputer', pertemuanKe: 2, topik: 'Model Interaksi & Heuristic Evaluation', tanggal: '2025-09-09' },
  { id: 'PT-14', matkul: 'Implementasi dan Pengujian Perangkat Lunak', pertemuanKe: 2, topik: 'Teknik Black-Box & White-Box Testing', tanggal: '2025-09-12' },
];

// -----------------------------------------------------------------------
// C. Data untuk Halaman Jadwal per Hari (dirender dengan SectionList)
//    Sesuai jadwal Kelas B: Senin–Jumat. `jenis` (Teori/Praktikum) dipakai
//    ScheduleItem untuk menampilkan badge, karena beberapa matkul punya sesi
//    teori & praktikum di hari berbeda (mis. Big Data, Machine Learning).
// -----------------------------------------------------------------------
export const jadwalMingguan = [
  {
    title: 'Senin',
    data: [
      { id: 'JM-01', matkul: 'Big Data', jenis: 'Teori', ruang: '3C.2.07 · Teknik C', jamMulai: '08.45', jamSelesai: '10.25' },
      { id: 'JM-02', matkul: 'Pemrograman Mobile', jenis: 'Praktikum', ruang: 'Mobile Lab · Teknik D', jamMulai: '13.00', jamSelesai: '14.40' },
    ],
  },
  {
    title: 'Selasa',
    data: [
      { id: 'JM-03', matkul: 'Interaksi Manusia dan Komputer', jenis: 'Teori', ruang: '3D.3.15 · Teknik D', jamMulai: '08.45', jamSelesai: '11.15' },
      { id: 'JM-04', matkul: 'Pemrograman Mobile', jenis: 'Teori', ruang: '3C.2.07 · Teknik C', jamMulai: '13.00', jamSelesai: '14.40' },
    ],
  },
  {
    title: 'Rabu',
    data: [
      { id: 'JM-05', matkul: 'Natural Language Processing', jenis: 'Teori', ruang: '3C.1.03 · Teknik C', jamMulai: '10.30', jamSelesai: '12.10' },
      { id: 'JM-06', matkul: 'Routing & Switching', jenis: 'Teori', ruang: '3C.2.08 · Teknik C', jamMulai: '13.00', jamSelesai: '14.40' },
      { id: 'JM-07', matkul: 'Machine Learning', jenis: 'Teori', ruang: '3A.1.09 · Teknik A', jamMulai: '16.30', jamSelesai: '17.15' },
    ],
  },
  {
    title: 'Kamis',
    data: [
      { id: 'JM-08', matkul: 'Machine Learning', jenis: 'Praktikum', ruang: 'AI Lab · Teknik D', jamMulai: '07.00', jamSelesai: '08.40' },
      { id: 'JM-09', matkul: 'Routing & Switching', jenis: 'Praktikum', ruang: 'Network Lab · Teknik C', jamMulai: '08.45', jamSelesai: '10.25' },
      { id: 'JM-10', matkul: 'Big Data', jenis: 'Praktikum', ruang: 'AI Lab · Teknik D', jamMulai: '10.30', jamSelesai: '12.10' },
    ],
  },
  {
    title: 'Jumat',
    data: [
      { id: 'JM-11', matkul: 'Natural Language Processing', jenis: 'Praktikum', ruang: 'AI Lab · Teknik D', jamMulai: '07.00', jamSelesai: '08.40' },
      { id: 'JM-12', matkul: 'Implementasi dan Pengujian Perangkat Lunak', jenis: 'Teori', ruang: '3A.1.08 · Teknik A', jamMulai: '08.45', jamSelesai: '10.25' },
    ],
  },
];

// -----------------------------------------------------------------------
// Helper murni (bukan komponen) untuk memformat tanggal ISO ("2025-09-01")
// menjadi format Indonesia yang enak dibaca, mis. "Senin, 1 Sep 2025".
// Dipisah dari data supaya array di atas tetap bersih & mudah di-maintain.
// -----------------------------------------------------------------------
const NAMA_HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
const NAMA_BULAN_SINGKAT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
];

export function formatTanggalIndo(tanggalIso) {
  const tgl = new Date(`${tanggalIso}T00:00:00`);
  const hari = NAMA_HARI[tgl.getDay()];
  const bulan = NAMA_BULAN_SINGKAT[tgl.getMonth()];
  return `${hari}, ${tgl.getDate()} ${bulan} ${tgl.getFullYear()}`;
}