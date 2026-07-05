import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Divider from '../components/Divider';
import EmptyState from '../components/EmptyState';
import MeetingCard from '../components/MeetingCard';
import ScreenHeader from '../components/ScreenHeader';
import { pertemuan } from '../data/data';
import { colors, fonts, radius, spacing } from '../theme/theme';

// Info ringkas + tombol demo, dirender sebagai ListHeaderComponent (props
// wajib #3). Tombol "lihat versi kosong" murni untuk membuktikan bahwa
// ListEmptyComponent benar-benar berfungsi, karena pada kondisi normal
// (data selalu terisi) komponen itu tidak akan pernah terlihat.
function ListHeaderInfo({ total, showEmpty, onToggle }) {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listHeaderTitle}>
        {showEmpty ? 'Mode pratinjau: data kosong' : `Total ${total} pertemuan · Semester Ganjil`}
      </Text>
      <Pressable onPress={onToggle} style={styles.toggleButton} hitSlop={8}>
        <Text style={styles.toggleButtonText}>
          {showEmpty ? 'Tampilkan data' : 'Lihat versi kosong'}
        </Text>
      </Pressable>
    </View>
  );
}

// -----------------------------------------------------------------------
// HALAMAN B — Daftar Pertemuan
// Ketentuan: FlatList minimal 10 item, dengan keyExtractor,
// ItemSeparatorComponent, ListHeaderComponent, dan ListEmptyComponent.
// -----------------------------------------------------------------------
export default function DaftarPertemuanScreen() {
  const [showEmpty, setShowEmpty] = useState(false);
  const data = showEmpty ? [] : pertemuan;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader
        eyebrow="Semua Mata Kuliah"
        title="Daftar Pertemuan"
        description="Riwayat & rencana pertemuan kuliah, diurutkan berdasarkan tanggal."
      />

      <FlatList
        style={styles.list}
        data={data}
        // 1. keyExtractor — key unik per item pertemuan
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeetingCard item={item} />}
        // 2. ItemSeparatorComponent — pemisah visual antar item
        ItemSeparatorComponent={Divider}
        // 3. ListHeaderComponent — judul/ringkasan di atas daftar
        ListHeaderComponent={
          <ListHeaderInfo
            total={pertemuan.length}
            showEmpty={showEmpty}
            onToggle={() => setShowEmpty((prev) => !prev)}
          />
        }
        // 4. ListEmptyComponent — tampil otomatis saat `data` kosong
        ListEmptyComponent={
          <EmptyState
            title="Belum ada pertemuan"
            description="Data pertemuan untuk semester ini belum tersedia. Coba lagi nanti."
          />
        }
        contentContainerStyle={styles.listContent}
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
    backgroundColor: colors.surface,
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    backgroundColor: colors.paperAlt,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  listHeaderTitle: {
    flex: 1,
    fontFamily: fonts.bodyMedium,
    fontSize: 12.5,
    color: colors.inkSoft,
    marginRight: spacing.sm,
  },
  toggleButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  toggleButtonText: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 11.5,
    color: colors.accent,
  },
});
