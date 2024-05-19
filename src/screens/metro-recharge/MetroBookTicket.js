import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

export default function MetroBookTicket() {
    const Navigation = useNavigation();
    const [alreadyPaid, setAlreadyPaid] = useState(false)
    const [wrongServiceNum, setWrongServiceNum] = useState(false)
    const [serviceNum, setServiceNum] = useState('')

    const ContunueToPay = () => {
        if (serviceNum === '1234123412341234') {
            setAlreadyPaid(true);
        }
        else if (serviceNum.length < 14) {
            setWrongServiceNum(true);
        }
        else {
            Navigation.navigate('BillDetails')
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Book Ticket' />
            <ScrollView>
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
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: "#E7E7E7", width: 320, height: 56, justifyContent: "center", padding: 10, marginBottom: 20, }}>
                        <TextInput onChangeText={(text) => setServiceNum(text)} style={{ fontSize: 18, color: "#3D3D3D" }} placeholder='From' />
                    </View>
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: "#E7E7E7", width: 320, height: 56, justifyContent: "center", padding: 10, marginBottom: 20, }}>
                        <TextInput onChangeText={(text) => setServiceNum(text)} style={{ fontSize: 18, color: "#3D3D3D" }} placeholder='To' />
                    </View>
                    <View style={{ borderRadius: 10, borderWidth: 1, borderColor: "#E7E7E7", width: 320, height: 56, justifyContent: "center", padding: 10, marginBottom: 20, }}>
                        <TextInput onChangeText={(text) => setServiceNum(text)} style={{ fontSize: 18, color: "#3D3D3D" }} placeholder='Number of Persons' keyboardType='number-pad' />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", padding: 10, marginLeft: 20 }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../../assets/images/options.png')} style={{ height: 18, width: 18, marginRight: 5 }} />
                            <Text style={{ fontSize: 18, color: "#3D3D3D" }}>One way</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                            <Image source={require('../../assets/images/options.png')} style={{ height: 18, width: 18, marginRight: 5 }} />
                            <Text style={{ fontSize: 18, color: "#3D3D3D" }}>Two sides</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "100%", padding: 10, alignItems: "center",marginBottom:80 }}>
                        <View style={{ marginTop: 10, alignItems: "center" }}>
                            <Text style={{ fontWeight: "600", fontSize: 23, marginBottom: 5 }}>Total Amount</Text>
                            <View style={{ width: 274, height: 59, padding: 10, borderRadius: 35, borderWidth: 1, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 20, color: "#3D3D3D" }}>₹299</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ alignItems: "center", position: "absolute", bottom: 20, width: '100%' }}>
                <TouchableOpacity onPress={() => Navigation.navigate('MetroBookTicket')} style={{ backgroundColor: "#07B5F9", width: '90%', height: 53, borderRadius: 10, alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>Pay</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}