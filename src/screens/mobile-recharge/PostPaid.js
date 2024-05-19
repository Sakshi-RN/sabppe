import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function PostPaid() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Post Paid' />
            <View style={{ width: '100%', alignItems: "center", position: "absolute", top: 80 }}>
                <View style={{ height: 59, borderRadius: 35, flexDirection: "row", alignItems: "center", elevation: 5, backgroundColor: "#fff", width: "95%", padding: 20 }}>
                    <Image source={require('../../assets/images/search.png')} style={{ height: 19, width: 19, marginRight: 10 }} />
                    <TextInput style={{ fontSize: 15, fontWeight: "600", color: "#B3B3B3" }} placeholder='Search phone number/name' />
                </View>
            </View>
            <ScrollView>
                <View style={{ width: "100%", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
                            Mobile Operators
                        </Text>
                    </View>
                    <TouchableOpacity onPress={()=>Navigation.navigate('AllRecharge')} style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/airtel-logo.png')} style={{ width: 56, height: 56, resizeMode: "contain", marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontWeight: "700", color: "#0E0E0E" }}>Airtel</Text>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/jio-logo.png')} style={{ width: 56, height: 56, resizeMode: "contain", marginRight: 10 }} />
                            <Text style={{ fontSize: 16, fontWeight: "700", color: "#0E0E0E" }}>Jio</Text>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}