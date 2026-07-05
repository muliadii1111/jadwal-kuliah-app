import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing } from '../theme/theme';
import Pill from './Pill';

// Satu kartu ringkasan mata kuliah: nama, kode, dosen, dan badge jumlah SKS.
export default function CourseCard({ matkul }) {
  return (
    <View style={styles.card}>
      <View style={styles.textColumn}>
        <Text style={styles.nama}>{matkul.nama}</Text>
        <Text style={styles.meta}>
          {matkul.kode} · {matkul.dosen}
        </Text>
      </View>
      <Pill label={`${matkul.sks} SKS`} tone="moss" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.hairline,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginHorizontal: spacing.xl,
    marginBottom: spacing.md,
  },
  textColumn: {
    flex: 1,
    marginRight: spacing.md,
  },
  nama: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 15.5,
    color: colors.ink,
    marginBottom: 3,
  },
  meta: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.inkSoft,
  },
});
