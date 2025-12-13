import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <Text style={isDark ? styles.darkText : styles.lightText}>
        Hello world
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkBackground: {
    backgroundColor: '#1111111',
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  darkText: {
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
  },
});
