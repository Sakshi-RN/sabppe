import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function BillDetails() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <SubScreenHeader Name='APCPDCL - Andhra Pradesh' />
            <View style={{ width: "100%", padding: 10, alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ width: 141 }} >
                        <Text style={{ fontWeight: "500", fontSize: 22, color: "#3D3D3D", marginBottom: 10 }}>State:</Text>
                        <Text style={{ fontWeight: "500", fontSize: 22, color: "#3D3D3D", marginBottom: 10 }}>Biller:</Text>
                        <Text style={{ fontWeight: "500", fontSize: 22, color: "#3D3D3D", marginBottom: 10 }}>Service Num:</Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontWeight: "500", fontSize: 20, color: "#525252", marginBottom: 10 }}>Andra Pradesh</Text>
                        <Text style={{ fontWeight: "500", fontSize: 20, color: "#525252", marginBottom: 10 }}>APCPDCL</Text>
                        <Text style={{ fontWeight: "500", fontSize: 20, color: "#525252", marginBottom: 10 }}>1330 1131 1287 1234</Text>
                    </View>
                </View>
                <View style={{ marginTop: 50, alignItems: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 24, marginBottom: 20 }}>Your Bill</Text>
                    <View style={{ width: 274, height: 59, borderRadius: 12, borderWidth: 1, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontWeight: "500", fontSize: 22 }}>500.00</Text>
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center",position: "absolute", bottom: 20,width:'100%' }}>
                <TouchableOpacity style={{ backgroundColor: "#07B5F9", width: '90%', height: 53, borderRadius: 10, alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>Pay Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}