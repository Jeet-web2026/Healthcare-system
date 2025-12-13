import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from './font';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
    const router = useRouter();
    const submitSignupForm = () => {
        router.replace('/(tabs)');
    }
    return (
        <SafeAreaView
            style={[
                styles.container,
                styles.baseBackground
            ]}
        >
            <View style={styles.topSection}>
                <Text
                    style={[
                        styles.welcomeText,
                        styles.secondaryText
                    ]}
                >
                    SIGN UP
                </Text>
            </View>
            <View style={{ gap: 20 }}>
                <View>
                    <Text style={[styles.inputLabel,
                    styles.basicText
                    ]}>Email Addressss</Text>
                    <TextInput
                        placeholder='e.g. example@gmail.com'
                        style={styles.input}
                        placeholderTextColor='#1c398e'
                        keyboardType='email-address'
                    />
                </View>
                <View>
                    <Text style={[styles.inputLabel,
                    styles.basicText
                    ]}>Password</Text>
                    <TextInput
                        placeholder='Enter your password'
                        style={styles.input}
                        placeholderTextColor='#1c398e'
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Text style={[styles.inputLabel,
                    styles.basicText
                    ]}>Confirm Password</Text>
                    <TextInput
                        placeholder='Re-enter your password'
                        style={styles.input}
                        placeholderTextColor='#1c398e'
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch />
                    <Text style={[
                        styles.basicText,
                        styles.checkboxFont
                    ]}>
                        I agree to the Terms and Conditions
                    </Text>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={submitSignupForm}>
                    <Text style={[styles.textWhite, styles.buttonText]}>Submit</Text>
                </TouchableOpacity>
                <View style={styles.anotherOptions}>
                    <Text style={[styles.basicText, styles.anotherText]}>Or Sign Up with</Text>
                </View>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="google" size={22} color="#DB4437" />
                        <Text style={styles.socialText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <FontAwesome name="facebook" size={22} color="#1877F2" />
                        <Text style={styles.socialText}>Facebook</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
    topSection: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 35,
        fontFamily: fonts.bold,
    },
    inputLabel: {
        fontFamily: fonts.medium,
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderColor: '#6d84b5',
        borderWidth: 1,
        padding: 18,
        height: 55,
        borderRadius: 5,
    },
    checkboxFont: {
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#5A9BFF',
        paddingVertical: 18,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        fontFamily: fonts.semibold,
        fontSize: 23,
    },
    anotherText: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: fonts.regular,
        position: 'absolute',
        top: -10,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        zIndex: 1,
    },
    anotherOptions: {
        borderTopWidth: 0.5,
        marginTop: 20,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
        marginTop: 24,
        gap: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingVertical: 13,
        paddingHorizontal: 20,
        gap: 10,
    },

    socialText: {
        fontSize: 16,
        fontFamily: fonts.medium,
    },

});
