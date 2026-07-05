import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CourseCard from '../components/CourseCard';
import ScreenHeader from '../components/ScreenHeader';
import { mataKuliah } from '../data/data';
import { colors, spacing } from '../theme/theme';

// -----------------------------------------------------------------------
// HALAMAN A — Ringkasan Mata Kuliah
// Ketentuan: render array statis `mataKuliah` menggunakan .map(), setiap
// item wajib menampilkan nama matkul, kode, jumlah SKS, dosen pengampu,
// dan setiap item yang dirender wajib punya key unik.
// -----------------------------------------------------------------------
export default function RingkasanMatkulScreen() {
  const totalSks = mataKuliah.reduce((total, matkul) => total + matkul.sks, 0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader
        eyebrow="Semester Ganjil 2025/2026"
        title="Ringkasan Mata Kuliah"
        description={`${mataKuliah.length} mata kuliah diambil semester ini · ${totalSks} SKS total`}
      />

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {/*
          Di sinilah .map() dipakai sesuai ketentuan tugas bagian A.
          `key` diambil dari matkul.id agar unik dan stabil antar-render.
        */}
        {mataKuliah.map((matkul) => (
          <CourseCard key={matkul.id} matkul={matkul} />
        ))}

        <View style={styles.bottomSpacer} />
      </ScrollView>
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
    paddingTop: spacing.lg,
  },
  bottomSpacer: {
    height: spacing.xl,
  },
});
