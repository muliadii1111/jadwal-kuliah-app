import { StyleSheet, View } from 'react-native';
import { colors, spacing } from '../theme/theme';

// Dipakai sebagai ItemSeparatorComponent pada FlatList di Halaman Daftar
// Pertemuan. Sengaja dibuat sebagai komponen terpisah (bukan inline style)
// supaya jelas ini memenuhi salah satu dari empat props wajib FlatList.
export default function Divider() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.hairline,
    marginHorizontal: spacing.xl,
  },
});
