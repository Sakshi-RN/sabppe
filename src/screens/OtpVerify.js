import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import OTPInput from '../components/OTPInput';

export default function OtpVerify() {
    const navigation = useNavigation();
    const [ otpCode, setOTPCode ] = useState("");
    const [ isPinReady, setIsPinReady ] = useState(false);


    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center", }}>
                <View style={{ backgroundColor: "#b9ebff", width: "100%", alignItems: "center", height: 200, justifyContent: "center" }}>
                    <Image resizeMode='contain' source={require('../assets/images/logo.png')} style={{ height: 100, width: 200 }} />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", width: '100%', marginTop: -40, backgroundColor: "#fff", borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
                    <Text style={{ fontWeight: "600", fontSize: 24, lineHeight: 29.05, marginTop: 50, marginBottom: 20 }}>Verification</Text>
                    <Text style={{ color: "#0079A7", fontSize: 20, width: 303, textAlign: 'center', lineHeight: 24.2 }}>We have sent OTP to the mobile number *******98</Text>
                    <View style={{
                        paddingTop: 20,
                        marginBottom: 20
                    }}>
                        <OTPInput
                            code={otpCode}
                            setCode={setOTPCode}
                            maximumLength={4}
                            setIsPinReady={setIsPinReady}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTab')} style={{ backgroundColor: "#07B5F9", width: '90%', height: 56, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>Submit</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#7A7A7A', fontSize: 14, lineHeight: 19.1, marginTop: 20, textDecorationLine: "underline" }}>Resend OTP</Text>
                </View>
            </View>
        </View>
    );
}