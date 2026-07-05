import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, radius, spacing } from '../theme/theme';

// Pill kecil yang dipakai berulang: badge SKS, "Pertemuan ke-N", jam kelas, dst.
// tone menentukan kombinasi warna supaya tetap konsisten di seluruh app.
export default function Pill({ label, tone = 'accent' }) {
  const toneStyle = tone === 'moss' ? styles.moss : styles.accent;
  const toneText = tone === 'moss' ? styles.mossText : styles.accentText;

  return (
    <View style={[styles.pill, toneStyle]}>
      <Text style={[styles.text, toneText]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radius.pill,
    alignSelf: 'flex-start',
  },
  accent: { backgroundColor: colors.accentSoft },
  moss: { backgroundColor: colors.mossSoft },
  text: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 12,
    letterSpacing: 0.2,
  },
  accentText: { color: colors.accent },
  mossText: { color: colors.moss },
});
