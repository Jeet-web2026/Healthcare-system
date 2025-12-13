import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from '../font';

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={[
        styles.container,
        styles.baseBackground
      ]}
    >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  baseBackground: {
    backgroundColor: '#ffffff',
  },
  basicText: {
    color: '#1c398e',
  },
  secondaryText: {
    color: '#6599FF'
  },
  textWhite: {
    color: '#ffffff',
  },
  inputLabel: {
    fontFamily: fonts.medium,
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderColor: '#1c398e',
    borderWidth: 1,
    padding: 18,
    height: 55,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#5A9BFF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: fonts.semibold,
    fontSize: 22,
  }
});
