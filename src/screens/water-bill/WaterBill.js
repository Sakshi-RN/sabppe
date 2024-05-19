import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function WaterBill() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Water Bill' />
            <View style={{ width: '100%', alignItems: "center", position: "absolute", top: 80 }}>
                <View style={{ height: 59, borderRadius: 35, flexDirection: "row", alignItems: "center", elevation: 5, backgroundColor: "#fff", width: "95%", padding: 20 }}>
                    <Image source={require('../../assets/images/search.png')} style={{ height: 19, width: 19, marginRight: 10 }} />
                    <TextInput style={{ fontSize: 15, fontWeight: "600", color: "#B3B3B3" }} placeholder='Search Billers' />
                </View>
            </View>
            <ScrollView>
                <View style={{ width: "100%", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20, marginLeft: 10, marginTop: 20 }}>
                            Select Biller
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => Navigation.navigate('WaterServiceNum')} style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: "75%" }}>
                            <Image source={require('../../assets/images/electrcity-logo.png')} style={{ width: 56, height: 56, resizeMode: "contain", marginRight: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#0E0E0E" }}>Eastern Power Distribution company of A.P.Ltd.</Text>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.navigate('WaterServiceNum')} style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: "75%" }}>
                            <Image source={require('../../assets/images/electrcity-logo.png')} style={{ width: 56, height: 56, resizeMode: "contain", marginRight: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#0E0E0E" }}>Eastern Power Distribution company of A.P.Ltd.</Text>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.navigate('WaterServiceNum')} style={{ height: 77, marginBottom: 16, flexDirection: "row", alignItems: "center", width: "95%", justifyContent: "space-between", borderColor: "#E5E1EF", borderRadius: 15, borderWidth: 1, padding: 10 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", width: "75%" }}>
                            <Image source={require('../../assets/images/electrcity-logo.png')} style={{ width: 56, height: 56, resizeMode: "contain", marginRight: 10 }} />
                            <Text style={{ fontSize: 14, fontWeight: "500", color: "#0E0E0E" }}>Eastern Power Distribution company of A.P.Ltd.</Text>
                        </View>
                        <Image source={require('../../assets/images/right-vector.png')} style={{ width: 14.63, height: 16.23 }} />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}