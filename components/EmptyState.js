import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing } from '../theme/theme';

// ListEmptyComponent untuk FlatList di Halaman Daftar Pertemuan.
// Muncul otomatis kalau array data pertemuan kosong ([]).
export default function EmptyState({ title, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>0</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: spacing.xxl * 1.5,
    paddingHorizontal: spacing.xxl,
  },
  badge: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.paperAlt,
    borderWidth: 1,
    borderColor: colors.hairline,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  badgeText: {
    fontFamily: fonts.display,
    fontSize: 22,
    color: colors.inkFaint,
  },
  title: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 15,
    color: colors.ink,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.inkSoft,
    textAlign: 'center',
    lineHeight: 19,
  },
});
