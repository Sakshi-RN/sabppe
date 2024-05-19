import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'
import Offers from '../../components/Offers';

export default function MetroNewUser() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Metro Recharge' />
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                <View style={{ width: '94%', height: 135, borderRadius: 16, backgroundColor: "#07B5F9", padding: 10, justifyContent: "space-between" }}>
                    <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 22, color: "#FFFFFF" }}>Great job!  your spendings have reduced by 10% from last month</Text>
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: 122.71, height: 41.46, borderRadius: 42, backgroundColor: "#0358F1" }}>
                            <Text style={{ fontWeight: "500", lineHeight: 16.94, fontSize: 14, color: "#FFFFFF" }}>View Details</Text>
                        </TouchableOpacity>
                        <Image source={require('../../assets/images/Right-Side-Design.png')} style={{ width: 86, height: 81 }} />
                    </View>
                </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity onPress={() => Navigation.navigate('MetroBookTicket')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '35%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/Ticket.png')} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E", marginLeft: 5 }}>Book Ticket</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('MetroAddCard')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '35%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/Railcard.png')} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E", marginLeft: 5 }}>Add Card</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}