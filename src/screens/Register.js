import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Register() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('')
    const [warning, setWarning] = useState('#E7E7E7')
    console.log(userName);

    const RegisterNow = () => {
        if (userName.length < 5) {
            setWarning('red')
        }
        else {
            navigation.navigate('OtpVerify')
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center", }}>
                <View style={{ backgroundColor: "#b9ebff", width: "100%", alignItems: "center", height: 200, justifyContent: "center" }}>
                    <Image resizeMode='contain' source={require('../assets/images/logo.png')} style={{ height: 100, width: 200 }} />
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", width: '100%', marginTop: -40, backgroundColor: "#fff", borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
                    <Text style={{ fontWeight: "600", fontSize: 24, lineHeight: 29.05, marginTop: 75 }}>Register</Text>
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: "#E7E7E7", width: 320, height: 56, justifyContent: "center", padding: 10, marginBottom: 20, marginTop: 30 }}>
                        <TextInput style={{ fontSize: 18 }} placeholder='Mobile Number' keyboardType='number-pad' maxLength={10} />
                    </View>
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: warning === "#E7E7E7" ? "#E7E7E7" : 'red', width: 320, height: 56, justifyContent: "center", padding: 10, marginBottom: 20, }}>
                        <TextInput onChangeText={(text) => setUserName(text)} value={userName} style={{ fontSize: 18 }} placeholder='User Name' />
                    </View>
                    <TouchableOpacity onPress={() => RegisterNow()} style={{ backgroundColor: "#07B5F9", width: '90%', height: 56, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>Register</Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#0E0E0E', fontSize: 18, lineHeight: 24.55, marginTop: 20 }}>Or</Text>
                    <Text style={{ color: "#0358F1", fontWeight: "400", fontSize: 12, lineHeight: 16.37, marginTop: 20 }}>Continue with</Text>
                    <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center", justifyContent: "space-between", width: 128 }}>
                        <TouchableOpacity style={{ borderRadius: 25, padding: 10, alignItems: "center", height: 52, width: 52, justifyContent: "center" }}>
                            <Image source={require('../assets/images/google1.png')} style={{ width: 52, height: 52 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderRadius: 25, padding: 10, alignItems: "center", height: 52, width: 52, justifyContent: "center" }}>
                            <Image source={require('../assets/images/facebook1.png')} style={{ width: 52, height: 52 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}>
                        <TouchableOpacity style={{ borderRadius: 4, borderWidth: 1, borderColor: "#000000", height: 18, width: 18, marginRight: 5 }}>
                        </TouchableOpacity>
                        <Text>I agree to</Text>
                        <TouchableOpacity>
                            <Text style={{ color: "#0358F1", fontWeight: "400", fontSize: 14, textDecorationLine: "underline" }}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}