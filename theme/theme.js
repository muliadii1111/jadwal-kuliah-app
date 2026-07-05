// theme.js
// Design token terpusat: warna, spacing, tipografi.
// Tujuannya supaya semua screen konsisten dan gampang diubah dari satu tempat,
// tanpa warna/ukuran "hardcode" yang tersebar di banyak file.

export const colors = {
  // Latar belakang hangat, bukan putih polos, biar terasa lebih "editorial".
  paper: '#F7F4EE',
  paperAlt: '#F1ECE2',
  surface: '#FFFFFF',

  // Teks
  ink: '#232019',
  inkSoft: '#5B564C',
  inkFaint: '#948E80',

  // Garis & pemisah
  hairline: '#E4DED2',

  // Aksen utama: terracotta yang tenang (bukan merah mentah)
  accent: '#A6472F',
  accentSoft: '#F0DAD1',

  // Aksen sekunder: hijau zaitun tua, dipakai seperlunya untuk variasi (SKS, waktu)
  moss: '#586B4A',
  mossSoft: '#DEE6D6',

  // Status kosong / netral
  disabled: '#C9C2B2',

  white: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  pill: 999,
};

// fontFamily di-set setelah font Google selesai dimuat di App.js.
// Nama-nama ini harus sama persis dengan key yang dipakai pada useFonts().
export const fonts = {
  display: 'Fraunces_600SemiBold',
  displayMedium: 'Fraunces_500Medium',
  displayRegular: 'Fraunces_400Regular',
  body: 'IBMPlexSans_400Regular',
  bodyMedium: 'IBMPlexSans_500Medium',
  bodySemiBold: 'IBMPlexSans_600SemiBold',
};

const theme = { colors, spacing, radius, fonts };
export default theme;
