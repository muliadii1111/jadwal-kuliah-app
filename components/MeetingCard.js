import { StyleSheet, Text, View } from 'react-native';
import { formatTanggalIndo } from '../data/data';
import { colors, fonts, spacing } from '../theme/theme';
import Pill from './Pill';

// Satu baris pada FlatList Halaman Daftar Pertemuan.
// Menampilkan: nama mata kuliah, pertemuan ke-, topik, dan tanggal.
export default function MeetingCard({ item }) {
  return (
    <View style={styles.row}>
      <View style={styles.headerRow}>
        <Text style={styles.matkul} numberOfLines={1}>
          {item.matkul}
        </Text>
        <Pill label={`Pertemuan ${item.pertemuanKe}`} tone="accent" />
      </View>
      <Text style={styles.topik}>{item.topik}</Text>
      <Text style={styles.tanggal}>{formatTanggalIndo(item.tanggal)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md + 2,
    backgroundColor: colors.surface,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  matkul: {
    flex: 1,
    fontFamily: fonts.bodySemiBold,
    fontSize: 14.5,
    color: colors.ink,
    marginRight: spacing.sm,
  },
  topik: {
    fontFamily: fonts.displayRegular,
    fontSize: 16,
    color: colors.ink,
    marginBottom: 6,
    lineHeight: 21,
  },
  tanggal: {
    fontFamily: fonts.body,
    fontSize: 12.5,
    color: colors.inkFaint,
  },
});
