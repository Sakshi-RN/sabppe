import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function FastTagRecharge() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='FASTag Recharge' />
            <View style={{ width: '100%', alignItems: "center", position: "absolute", top: 80 }}>
                <View style={{ height: 59, borderRadius: 35, alignItems: "center", elevation: 5, backgroundColor: "#fff", width: "95%", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#3D3D3D" }}>Available Balance :  ₹4,000</Text>
                </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
                <TouchableOpacity onPress={() => Navigation.navigate('FastTagVehicleNum')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '35%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/Money.png')} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E", marginLeft: 5 }}>Recharge</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", flexWrap: 'wrap', alignItems: "center",justifyContent:"flex-start", width: '100%', padding: 10 }}>
                <TouchableOpacity onPress={() => Navigation.navigate('FastTagVehicleNum')} style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10,marginRight:25 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/Bill.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Traffic Challan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('FastTagVehicleNum')} style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10,marginRight:25 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/polution-search.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Pollution Check</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('FastTagVehicleNum')} style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10, }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/toll-road.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Nearby Toll Gate</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('FastTagVehicleNum')} style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10,marginRight:25 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/car-repair.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Nearby Garage</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('FastTagVehicleNum')} style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/fuel-pump.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Petrol Pumps</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}