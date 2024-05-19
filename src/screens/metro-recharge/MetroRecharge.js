import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'
import Offers from '../../components/Offers';

export default function MetroRecharge() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Metro Recharge' />
            <View style={{ width: '100%', alignItems: "center", position: "absolute", top: 80 }}>
                <View style={{ height: 59, borderRadius: 35, alignItems: "center", elevation: 5, backgroundColor: "#fff", width: "95%", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#3D3D3D" }}>Available Balance :  ₹4,000</Text>
                </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
                <TouchableOpacity onPress={() => Navigation.navigate('MetroNewUser')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '35%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/Money.png')} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E", marginLeft: 5 }}>Recharge</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('MetroBookTicket')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '35%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/Ticket.png')} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E", marginLeft: 5 }}>Book Ticket</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>Offers </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 14, fontWeight: "500", color: "#07B5F9" }}>See All </Text>
                </TouchableOpacity>
            </View>
            <Offers />
        </View>
    )
}