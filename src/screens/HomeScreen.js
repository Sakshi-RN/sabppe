import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ProductView from '../components/ProductView'
import HomeCarousal from '../components/HomeCarousal'
import RecentTrasaction from '../components/RecentTrasaction'
import RechargeBill from '../components/RechargeBill'
import Subscriptions from '../components/Subscriptions'
import OtherPayments from '../components/OtherPayments'
import Offers from '../components/Offers'

export default function HomeScreen() {
    return (
        <View style={{ flex: 1 }} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <Header />
                <ProductView />
                <HomeCarousal />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Recent Transactions </Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", textDecorationLine: "underline" }}>See All </Text>
                </View>
                <RecentTrasaction />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Recharge & Bill Payments </Text>
                    <Text style={{ fontSize: 12, fontWeight: "600", textDecorationLine: "underline", color: "#7A7A7A" }}>View More </Text>
                </View>
                <RechargeBill />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Subscription </Text>
                    <Text style={{ fontSize: 12, fontWeight: "600", textDecorationLine: "underline", color: "#7A7A7A" }}>View More </Text>
                </View>
                <Subscriptions />
                <View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: '94%', height: 135, borderRadius: 16, backgroundColor: "#07B5F9", padding: 10, justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "500", fontSize: 14, lineHeight: 22, color: "#FFFFFF" }}>Great job!  your spendings have reduced by 10% from last month</Text>
                        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                            <TouchableOpacity style={{justifyContent: "center", alignItems: "center", width: 122.71, height: 41.46, borderRadius: 42, backgroundColor: "#0358F1" }}>
                                <Text style={{ fontWeight: "500", lineHeight: 16.94, fontSize: 14, color: "#FFFFFF" }}>View Details</Text>
                            </TouchableOpacity>
                            <Image source={require('../assets/images/Right-Side-Design.png')} style={{ width: 86, height: 81 }} />
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Other Payments </Text>
                    <Text style={{ fontSize: 12, fontWeight: "600", textDecorationLine: "underline", color: "#7A7A7A" }}>View More </Text>
                </View>
                <OtherPayments />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 10 }}>
                    <Text style={{ fontSize: 16, fontWeight: "600" }}>Offers </Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: "500", color: "#07B5F9" }}>See All </Text>
                    </TouchableOpacity>
                </View>
                <Offers />
            </ScrollView>
        </View>
    )
}