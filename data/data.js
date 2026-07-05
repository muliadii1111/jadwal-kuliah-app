// data.js
// SUMBER DATA STATIS TUNGGAL untuk seluruh aplikasi (sesuai ketentuan tugas:
// "Data seluruh aplikasi bersumber dari array statis (hardcode) yang
// didefinisikan di dalam proyek"). Tidak ada fetch/API, semua di-hardcode
// di sini lalu dipakai ulang oleh ketiga halaman.

// -----------------------------------------------------------------------
// A. Data untuk Halaman Ringkasan Mata Kuliah (di-render dengan .map())
// -----------------------------------------------------------------------
export const mataKuliah = [
  {
    id: 'MK-01',
    kode: 'IF-401',
    nama: 'Pemrograman Mobile',
    sks: 3,
    dosen: 'Dr. Ahmad Fauzi',
  },
  {
    id: 'MK-02',
    kode: 'IF-312',
    nama: 'Basis Data Lanjut',
    sks: 3,
    dosen: 'Dr. Sari Dewi',
  },
  {
    id: 'MK-03',
    kode: 'IF-405',
    nama: 'Kecerdasan Buatan',
    sks: 3,
    dosen: 'Dr. Rizal Hakim',
  },
  {
    id: 'MK-04',
    kode: 'IF-308',
    nama: 'Jaringan Komputer',
    sks: 2,
    dosen: 'Dr. Putri Indah',
  },
  {
    id: 'MK-05',
    kode: 'IF-402',
    nama: 'Rekayasa Perangkat Lunak',
    sks: 3,
    dosen: 'Dr. Hendra Putra',
  },
];

// -----------------------------------------------------------------------
// B. Data untuk Halaman Daftar Pertemuan (dirender dengan FlatList)
//    Minimal 10 item — di bawah ini sengaja dibuat 13 agar terlihat jelas
//    saat di-scroll, dan supaya ItemSeparatorComponent benar-benar teruji.
// -----------------------------------------------------------------------
export const pertemuan = [
  { id: 'PT-01', matkul: 'Pemrograman Mobile', pertemuanKe: 1, topik: 'Pengenalan React Native & Expo', tanggal: '2025-09-01' },
  { id: 'PT-02', matkul: 'Kecerdasan Buatan', pertemuanKe: 1, topik: 'Pengantar Kecerdasan Buatan & Machine Learning', tanggal: '2025-09-01' },
  { id: 'PT-03', matkul: 'Basis Data Lanjut', pertemuanKe: 1, topik: 'Review SQL Dasar & ERD', tanggal: '2025-09-02' },
  { id: 'PT-04', matkul: 'Jaringan Komputer', pertemuanKe: 1, topik: 'Pengenalan Model OSI & TCP/IP', tanggal: '2025-09-02' },
  { id: 'PT-05', matkul: 'Rekayasa Perangkat Lunak', pertemuanKe: 1, topik: 'Software Development Life Cycle (SDLC)', tanggal: '2025-09-03' },
  { id: 'PT-06', matkul: 'Pemrograman Mobile', pertemuanKe: 2, topik: 'Komponen & Props di React Native', tanggal: '2025-09-08' },
  { id: 'PT-07', matkul: 'Kecerdasan Buatan', pertemuanKe: 2, topik: 'Algoritma Searching: BFS & DFS', tanggal: '2025-09-08' },
  { id: 'PT-08', matkul: 'Basis Data Lanjut', pertemuanKe: 2, topik: 'Normalisasi Database (1NF - 3NF)', tanggal: '2025-09-09' },
  { id: 'PT-09', matkul: 'Jaringan Komputer', pertemuanKe: 2, topik: 'Subnetting & IP Addressing', tanggal: '2025-09-09' },
  { id: 'PT-10', matkul: 'Rekayasa Perangkat Lunak', pertemuanKe: 2, topik: 'Requirement Elicitation & SRS', tanggal: '2025-09-10' },
  { id: 'PT-11', matkul: 'Pemrograman Mobile', pertemuanKe: 3, topik: 'State, Lifecycle, & Hooks', tanggal: '2025-09-15' },
  { id: 'PT-12', matkul: 'Kecerdasan Buatan', pertemuanKe: 3, topik: 'Decision Tree & Naive Bayes', tanggal: '2025-09-15' },
  { id: 'PT-13', matkul: 'Pemrograman Mobile', pertemuanKe: 4, topik: 'Handling List: map, FlatList & SectionList', tanggal: '2025-09-22' },
];

// -----------------------------------------------------------------------
// C. Data untuk Halaman Jadwal per Hari (dirender dengan SectionList)
//    Setiap section = satu hari. `title` dipakai sebagai judul section
//    (konvensi standar SectionList), `data` berisi jadwal di hari itu.
// -----------------------------------------------------------------------
export const jadwalMingguan = [
  {
    title: 'Senin',
    data: [
      { id: 'JM-01', matkul: 'Pemrograman Mobile', ruang: 'A201', jamMulai: '08.00', jamSelesai: '10.30' },
      { id: 'JM-02', matkul: 'Kecerdasan Buatan', ruang: 'B102', jamMulai: '13.00', jamSelesai: '15.30' },
    ],
  },
  {
    title: 'Selasa',
    data: [
      { id: 'JM-03', matkul: 'Basis Data Lanjut', ruang: 'C301', jamMulai: '09.00', jamSelesai: '11.30' },
      { id: 'JM-04', matkul: 'Jaringan Komputer', ruang: 'Lab Jaringan', jamMulai: '13.00', jamSelesai: '14.40' },
    ],
  },
  {
    title: 'Rabu',
    data: [
      { id: 'JM-05', matkul: 'Rekayasa Perangkat Lunak', ruang: 'A301', jamMulai: '10.00', jamSelesai: '12.30' },
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
