import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Fraunces_400Regular, Fraunces_500Medium, Fraunces_600SemiBold } from '@expo-google-fonts/fraunces';
import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
} from '@expo-google-fonts/ibm-plex-sans';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RingkasanMatkulScreen from './screens/RingkasanMatkulScreen';
import DaftarPertemuanScreen from './screens/DaftarPertemuanScreen';
import JadwalMingguanScreen from './screens/JadwalMingguanScreen';
import { colors, fonts } from './theme/theme';

// Cegah splash screen hilang otomatis sebelum font kustom (Fraunces & IBM
// Plex Sans) selesai dimuat, supaya tidak ada "kedipan" font default.
SplashScreen.preventAutoHideAsync().catch(() => {
  // Aman diabaikan bila dipanggil lebih dari sekali (mis. saat fast refresh).
});

const Tab = createBottomTabNavigator();

// Ikon tab berupa monogram huruf dalam lingkaran, bukan library ikon eksternal,
// biar ringan dan konsisten dengan palet warna aplikasi.
function TabGlyph({ label, focused }) {
  return (
    <View style={[styles.glyph, focused && styles.glyphFocused]}>
      <Text style={[styles.glyphText, focused && styles.glyphTextFocused]}>{label}</Text>
    </View>
  );
}

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Fraunces_400Regular,
    Fraunces_500Medium,
    Fraunces_600SemiBold,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null; // splash screen masih tampil selama font dimuat
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.inkFaint,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
          }}
        >
          <Tab.Screen
            name="Ringkasan"
            component={RingkasanMatkulScreen}
            options={{
              tabBarLabel: 'Ringkasan',
              tabBarIcon: ({ focused }) => <TabGlyph label="MK" focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Pertemuan"
            component={DaftarPertemuanScreen}
            options={{
              tabBarLabel: 'Pertemuan',
              tabBarIcon: ({ focused }) => <TabGlyph label="≡" focused={focused} />,
            }}
          />
          <Tab.Screen
            name="Jadwal"
            component={JadwalMingguanScreen}
            options={{
              tabBarLabel: 'Jadwal',
              tabBarIcon: ({ focused }) => <TabGlyph label="7H" focused={focused} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.surface,
    borderTopColor: colors.hairline,
    height: 64,
    paddingTop: 6,
    paddingBottom: 10,
  },
  tabBarLabel: {
    fontFamily: fonts.bodyMedium,
    fontSize: 11.5,
    marginTop: -2,
  },
  glyph: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.paperAlt,
  },
  glyphFocused: {
    backgroundColor: colors.accentSoft,
  },
  glyphText: {
    fontFamily: fonts.bodySemiBold,
    fontSize: 11,
    color: colors.inkFaint,
  },
  glyphTextFocused: {
    color: colors.accent,
  },
});
