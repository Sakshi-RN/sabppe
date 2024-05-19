import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function MetroRechargePayment() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <SubScreenHeader Name='Metro Recharge' />
            <View style={{ width: "100%", padding: 10, alignItems: "center" }}>
                <View style={{ marginTop: 30, alignItems: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 24, marginBottom: 5 }}>Enter Amount</Text>
                    <Text style={{ fontSize: 18, fontWeight: "400", marginBottom: 25 }}>indianotc@axl</Text>
                    <View style={{ width: 274, height: 59, padding: 10, borderRadius: 35, borderWidth: 1, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                        <TextInput keyboardType='phone-pad' placeholder='500.00 ' style={{ fontWeight: "500", fontSize: 22, }} />
                    </View>
                </View>
            </View>
            <View style={{ padding: 10, marginTop: 20 }}>
                <Text style={{ fontWeight: "700", fontSize: 18 }}>Available Balances</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: 10 }}>
                    <View style={{ alignItems: "center", height: 84, width: 104, justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1, elevation: 4 }}>
                        <Text style={{ color: "#3D3D3D", fontSize: 16 }}>Credit</Text>
                        <Text style={{ color: "#002A77", fontSize: 18, fontWeight: "600" }}>500</Text>
                    </View>
                    <View style={{ alignItems: "center", height: 84, width: 104, justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1, elevation: 4 }}>
                        <Text style={{ color: "#3D3D3D", fontSize: 16 }}>Loyalty</Text>
                        <Text style={{ color: "#002A77", fontSize: 18, fontWeight: "600" }}>500</Text>
                    </View>
                    <View style={{ alignItems: "center", height: 84, width: 104, justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1, elevation: 4 }}>
                        <Text style={{ color: "#3D3D3D", fontSize: 16 }}>Wallet</Text>
                        <Text style={{ color: "#002A77", fontSize: 18, fontWeight: "600" }}>500</Text>
                    </View>
                </View>
            </View>

            <View style={{ padding: 10, marginTop: 20 }}>
                <Text style={{ fontWeight: "700", fontSize: 18 }}>Select Your Account</Text>
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: 10 }}>

                        <View style={{ alignItems: "center", height: 105, width: 84, justifyContent: "center", marginRight: 20 }}>
                            <View style={{ width: 84, height: 84, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1, elevation: 4 }}>
                                <Image source={require('../../assets/images/hdfc.png')} style={{ height: 40, width: 40 }} />
                            </View>
                            <Text style={{ color: "#0E0E0E", fontSize: 11, fontWeight: "600", marginTop: 10 }}>XXXX2341</Text>
                        </View>
                        <View style={{ alignItems: "center", height: 105, width: 84, justifyContent: "center", marginRight: 20 }}>
                            <View style={{ width: 84, height: 84, alignItems: "center", justifyContent: "center", borderRadius: 10,borderColor: "#E5E1EF", borderWidth: 1,opacity:0.5 }}>
                                <Image source={require('../../assets/images/union-bank.png')} style={{ height: 40, width: 40,resizeMode:"contain",opacity:0.5 }} />
                            </View>
                            <Text style={{ color: "#0E0E0E", fontSize: 11, fontWeight: "600", marginTop: 10 }}>XXXX2341</Text>
                        </View>
                        <View style={{ alignItems: "center", height: 105, width: 84, justifyContent: "center", marginRight: 20 }}>
                            <View style={{ width: 84, height: 84, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1,opacity:0.5 }}>
                                <Image source={require('../../assets/images/bank-logo.png')} style={{ height: 40, width: 40,opacity:0.5,resizeMode:"contain" }} />
                            </View>
                            <Text style={{ color: "#0E0E0E", fontSize: 11, fontWeight: "600", marginTop: 10 }}>XXXX2341</Text>
                        </View>
                        <View style={{ alignItems: "center", height: 105, width: 84, justifyContent: "center", marginRight: 20 }}>
                            <View style={{ width: 84, height: 84, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1,opacity:0.5 }}>
                                <Image source={require('../../assets/images/sbi.png')} style={{ height: 40, width: 40,resizeMode:"contain",opacity:0.5 }} />
                            </View>
                            <Text style={{ color: "#0E0E0E", fontSize: 11, fontWeight: "600", marginTop: 10 }}>XXXX2341</Text>
                        </View>
                        <View style={{ alignItems: "center", height: 105, width: 84, justifyContent: "center", marginRight: 20 }}>
                            <View style={{ width: 84, height: 84, alignItems: "center", justifyContent: "center", borderRadius: 10, backgroundColor: "#fff", borderColor: "#E5E1EF", borderWidth: 1,opacity:0.5 }}>
                                <Image source={require('../../assets/images/hdfc.png')} style={{ height: 40, width: 40,opacity:0.5,resizeMode:"contain" }} />
                            </View>
                            <Text style={{ color: "#0E0E0E", fontSize: 11, fontWeight: "600", marginTop: 10 }}>XXXX2341</Text>
                        </View>

                    </View>
                </ScrollView>

            </View>
            <View style={{ alignItems: "center", position: "absolute", bottom: 20, width: '100%' }}>
                <TouchableOpacity onPress={()=> Navigation.navigate('MetroBookTicket')} style={{ backgroundColor: "#07B5F9", width: '90%', height: 53, borderRadius: 10, alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}