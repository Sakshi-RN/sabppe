import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function MobileRechargeScreen() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Mobile Recharge' />
            <View style={{ width: "100%", alignItems: "center" }}>
                <TouchableOpacity onPress={() => Navigation.navigate('PrePaid')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '35%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/pre-paid-sim.png')} style={{ width: 35, height: 35, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E" }}>Pre Paid</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Navigation.navigate('PostPaid')} style={{ height: 85, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                    <View style={{ width: '38%', justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../../assets/images/post-paid-sim.png')} style={{ width: 41, height: 38, resizeMode: "contain" }} />
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#0E0E0E" }}>Post Paid</Text>
                    </View>
                    <Image source={require('../../assets/images/next-button-arrow.png')} style={{ width: 21, height: 13.38 }} />
                </TouchableOpacity>
            </View>
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
            <View style={{ width: "100%", }}>
                <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
                    Recent Recharges
                </Text>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/airtel.png')} style={{ width: 40, height: 40, resizeMode: "contain", marginRight: 5 }} />
                            <View>
                                <Text style={{ fontSize: 14, lineHeight: 16.94, fontWeight: "500", color: "#0E0E0E" }}>MOM</Text>
                                <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "500" }}>+91 1234567891</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/jio.png')} style={{ width: 40, height: 40, resizeMode: "contain", marginRight: 5 }} />
                            <View>
                                <Text style={{ fontSize: 14, lineHeight: 16.94, fontWeight: "500", color: "#0E0E0E" }}>MOM</Text>
                                <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "500" }}>+91 1234567891</Text>
                            </View>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}