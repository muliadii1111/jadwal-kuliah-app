import { SectionList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import DaySectionHeader from '../components/DaySectionHeader';
import ScheduleItem from '../components/ScheduleItem';
import ScreenHeader from '../components/ScreenHeader';
import { jadwalMingguan } from '../data/data';
import { colors, spacing } from '../theme/theme';

// -----------------------------------------------------------------------
// HALAMAN C — Jadwal per Hari
// Ketentuan: SectionList yang mengelompokkan jadwal berdasarkan hari,
// setiap item menampilkan matkul/ruang/jam, dan header section (nama hari)
// wajib punya gaya visual yang jelas berbeda dari item biasa.
// -----------------------------------------------------------------------
export default function JadwalMingguanScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader
        eyebrow="TI-5B"
        title="Jadwal Mingguan"
        description="Jadwal kuliah rutin, dikelompokkan per hari."
      />

      <SectionList
        style={styles.list}
        sections={jadwalMingguan}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ScheduleItem item={item} />}
        renderSectionHeader={({ section }) => (
          <DaySectionHeader title={section.title} jumlahKelas={section.data.length} />
        )}
        stickySectionHeadersEnabled
        contentContainerStyle={styles.listContent}
        SectionSeparatorComponent={() => <View style={styles.sectionGap} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.paper,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: spacing.xxl,
  },
  sectionGap: {
    height: spacing.sm,
  },
});
