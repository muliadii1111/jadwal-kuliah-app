import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, spacing } from '../theme/theme';

// Header editorial yang dipakai di atas ketiga halaman: label kecil (eyebrow),
// judul besar bergaya serif, dan keterangan singkat di bawahnya.
export default function ScreenHeader({ eyebrow, title, description }) {
  return (
    <View style={styles.container}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {description ? <Text style={styles.description}>{description}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.paper,
    borderBottomWidth: 1,
    borderBottomColor: colors.hairline,
  },
  eyebrow: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: colors.accent,
    marginBottom: spacing.xs,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 28,
    color: colors.ink,
  },
  description: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    color: colors.inkSoft,
    marginTop: spacing.xs,
  },
});
