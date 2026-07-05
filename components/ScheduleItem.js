import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing } from '../theme/theme';
import Pill from './Pill';

// Satu baris jadwal di dalam section hari tertentu (SectionList).
// Menampilkan: nama mata kuliah, jenis pertemuan (Teori/Praktikum), ruang,
// dan jam mulai-selesai. Badge jenis penting karena beberapa matkul (mis.
// Big Data, Machine Learning) punya sesi teori & praktikum di hari berbeda.
export default function ScheduleItem({ item }) {
  const isPraktikum = item.jenis === 'Praktikum';

  return (
    <View style={styles.card}>
      <View style={styles.timeColumn}>
        <Text style={styles.jam}>{item.jamMulai}</Text>
        <View style={styles.timeDash} />
        <Text style={styles.jam}>{item.jamSelesai}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.infoColumn}>
        <View style={styles.headerRow}>
          <Text style={styles.matkul} numberOfLines={2}>
            {item.matkul}
          </Text>
          {item.jenis ? <Pill label={item.jenis} tone={isPraktikum ? 'moss' : 'accent'} /> : null}
        </View>
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  matkul: {
    flex: 1,
    fontFamily: fonts.bodySemiBold,
    fontSize: 14.5,
    color: colors.ink,
    marginRight: spacing.sm,
  },
  ruang: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.inkSoft,
  },
});