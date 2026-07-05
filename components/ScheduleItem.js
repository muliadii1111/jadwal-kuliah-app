import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing } from '../theme/theme';

// Satu baris jadwal di dalam section hari tertentu (SectionList).
// Menampilkan: nama mata kuliah, ruang, dan jam mulai-selesai.
export default function ScheduleItem({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.timeColumn}>
        <Text style={styles.jam}>{item.jamMulai}</Text>
        <View style={styles.timeDash} />
        <Text style={styles.jam}>{item.jamSelesai}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.infoColumn}>
        <Text style={styles.matkul}>{item.matkul}</Text>
        <Text style={styles.ruang}>{item.ruang}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.hairline,
    marginHorizontal: spacing.xl,
    marginTop: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  timeColumn: {
    alignItems: 'center',
    width: 56,
  },
  jam: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12.5,
    color: colors.ink,
  },
  timeDash: {
    width: 1,
    height: 10,
    backgroundColor: colors.hairline,
    marginVertical: 3,
  },
  divider: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.hairline,
    marginHorizontal: spacing.md,
  },
  infoColumn: {
    flex: 1,
  },
  matkul: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 14.5,
    color: colors.ink,
    marginBottom: 2,
  },
  ruang: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.inkSoft,
  },
});
