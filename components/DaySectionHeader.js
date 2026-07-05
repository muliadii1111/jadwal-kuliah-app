import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing } from '../theme/theme';

// Header section pada SectionList (satu per hari). Sengaja diberi gaya yang
// benar-benar berbeda dari item biasa (latar gelap penuh warna aksen, teks
// putih, huruf kapital + letter-spacing) supaya nama hari langsung menonjol
// saat di-scroll, sesuai ketentuan tugas.
export default function DaySectionHeader({ title, jumlahKelas }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>
        {jumlahKelas} kelas
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.ink,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xl,
  },
  title: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 13,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    color: colors.white,
  },
  count: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.paperAlt,
  },
});
