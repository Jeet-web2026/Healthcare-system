import { Alert, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fonts } from './font';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
    const router = useRouter();

    const prevFormData = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const prevAgree = false;

    const [getAgree, setAgree] = useState(prevAgree);
    type FormData = {
        email: string;
        password: string;
        confirmPassword: string;
    };
    const [getFormData, setFormData] = useState<FormData>(prevFormData);
    const handleChange = (key: keyof FormData, value: string) => {
        setFormData({
            ...getFormData,
            [key]: value
        });
    }
    const submitSignupForm = () => {
        try {
            if (!getFormData.email || !getFormData.password || !getFormData.confirmPassword) {
                Alert.alert('Error', 'Please fill all the fields');
                return;
            }
            if (getFormData.password !== getFormData.confirmPassword) {
                Alert.alert('Error', 'Password does not match!');
                return;
            }
            if (!getAgree) {
                Alert.alert('Error', 'Please agree the terms and conditions')
                return;
            }
            setFormData(prevFormData);
            setAgree(prevAgree);
        } catch (error) {
            Alert.alert('Error', 'Unexpected error occured! ' + error);
        }
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
                        value={getFormData.email}
                        onChangeText={(text) => handleChange('email', text)}
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
                        value={getFormData.password}
                        onChangeText={(text) => handleChange('password', text)}
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
                        value={getFormData.confirmPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Switch
                        value={getAgree}
                        onValueChange={setAgree}
                    />
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
                <Text style={styles.signIntext}>Already have an account? <Text style={{ color: 'blue', fontFamily: fonts.medium, textDecorationLine: 'underline' }}>Sign In</Text></Text>
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
        height: 115,
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
    signIntext: {
        textAlign: 'center',
        fontFamily: fonts.regular,
        fontSize: 16,
        marginTop: 10,
    }
});
