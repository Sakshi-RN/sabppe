import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'

export default function ProceedRecharge() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Airtel Recharge' />
            <View style={{ width: "100%", alignItems: "center", }}>
                <View style={{ backgroundColor: "#fff", elevation: 5, width: '95%', height: 373, borderRadius: 12, padding: 10 }}>
                    <View style={{ height: 77, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/airtel.png')} style={{ width: 40, height: 40, resizeMode: "contain", marginRight: 5 }} />
                            <View>
                                <Text style={{ fontSize: 14, lineHeight: 16.94, fontWeight: "500", color: "#0E0E0E" }}>MOM</Text>
                                <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "500" }}>+91 1234567891</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ width: 130, height: 35, alignItems: "center", justifyContent: "center", borderRadius: 15, backgroundColor: "#04B5F9" }}>
                            <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>Change Plan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 124, flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>Data :        3GB/Day</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>Validity :    29 Day</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>Calls :        Unlimited</Text>
                            <Text style={{ fontSize: 16, fontWeight: "400" }}>SMS :         300</Text>
                        </View>
                        <View style={{ height: 35, width: 72, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontWeight: "600", fontSize: 22 }}>₹299</Text>
                        </View>
                    </View>
                    <View style={{ height: 107, backgroundColor: "#F5F5F5", justifyContent: "center", padding: 10, borderRadius: 12 }}>
                        <View style={{ width: 133, justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 12, marginBottom: 14 }}>More Benifits :</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 14 }}>
                                <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free Hello Tune</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 14 }}>
                                <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free He..... +1</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center",position: "absolute", bottom: 20,width:'100%' }}>
                <TouchableOpacity style={{ backgroundColor: "#07B5F9", width: '90%', height: 53, borderRadius: 10, alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>Recharge</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}