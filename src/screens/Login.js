import { View, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import Checkbox from 'expo-checkbox';

export default function Login() {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('window');
    const [ isChecked, setChecked ] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <FlatList
                data={[ 1 ]}
                showsVerticalScrollIndicator={false}
                renderItem={() => {
                    return (
                        <>
                            <View style={{ width: width, alignItems: "center", justifyContent: "center", }}>
                                <View style={{ backgroundColor: "#b9ebff", width: width, alignItems: "center", height: 200, justifyContent: "center" }}>
                                    <Image resizeMode='contain' source={require('../assets/images/logo.png')} style={{ height: 100, width: 200 }} />
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "center", width: width, marginTop: -40, backgroundColor: "#fff", borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
                                    <Text style={{ fontWeight: "600", fontSize: 24, lineHeight: 29.05, marginTop: 75 }}>Login</Text>

                                    <CustomTextInput placeholder={"Mobile Number"} keyboardType={"number-pad"} />
                                    <CustomButton
                                        onPress={() => navigation.navigate('OtpVerify')}
                                        title={"Get OTP"}
                                    />
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
                                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 80, marginBottom: 20 }}>
                                        <Checkbox
                                            style={{ margin: 5,borderRadius:5,marginRight:15 }}
                                            value={isChecked}
                                            onValueChange={setChecked}
                                            color={isChecked ? '#000' : undefined}
                                        />
                                        <Text>I agree to</Text>
                                        <TouchableOpacity>
                                            <Text style={{ color: "#0358F1", fontWeight: "400", fontSize: 14, textDecorationLine: "underline" }}>Terms & Conditions</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </>
                    );
                }}
            />
        </View>
    );
}