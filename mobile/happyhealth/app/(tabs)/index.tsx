import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '../font';

export default function HomeScreen() {
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDark ? styles.darkBackground : styles.lightBackground
      ]}
    >
      <View style={styles.topSection}>
        <Text
          style={[
            styles.welcomeText,
            isDark ? styles.darkText : styles.lightText
          ]}
        >
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkBackground: {
    backgroundColor: '#111111',
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  darkText: {
    color: '#6599FF',
    fontFamily: fonts.semibold,
  },
  lightText: {
    color: '#6599FF',
    fontFamily: fonts.semibold,
  },
  topSection: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
  }
});
