import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function FastTagVehicleNum() {
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
            <SubScreenHeader Name='FASTag Recharge' />
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
            <View style={{ alignItems: "center" }}>
                <View style={{ borderRadius: 10, borderWidth: 1, borderColor: "#E7E7E7", width: 320, height: 56, justifyContent: "center", padding: 10, marginBottom: 20, marginTop: 30 }}>
                    <TextInput onChangeText={(text) => setServiceNum(text)} value={serviceNum} style={{ fontSize: 18, color: "#3D3D3D" }} placeholder='Enter Vechile Number' keyboardType='number-pad' />
                </View>
                <TouchableOpacity onPress={() => Navigation.navigate('FastagRechargeBill')} style={{ backgroundColor: "#07B5F9", width: '90%', height: 56, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: '700', color: '#fff' }}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", flexWrap: 'wrap', alignItems: "center", justifyContent: "flex-start", width: '100%', padding: 10, marginTop: 50 }}>
                <TouchableOpacity style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10, marginRight: 25 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/car-repair.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Nearby Garage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10, marginRight: 25 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/fuel-pump.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Petrol Pumps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 95, height: 105, alignItems: "center", justifyContent: "center", marginBottom: 10, }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../../assets/images/toll-road.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 14, width: 67, color: "#3D3D3D" }}>Nearby Toll Gate</Text>
                </TouchableOpacity>
            </View>
            {alreadyPaid ?
                <View style={{ width: "100%", position: 'absolute', bottom: 20 }}>
                    <View style={{ height: 125, padding: 10, alignItems: 'center', justifyContent: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#F5F5F5', }}>
                        <TouchableOpacity onPress={() => setAlreadyPaid(false)} style={{ position: "absolute", right: 15, top: 10 }}>
                            <Image source={require("../../assets/images/close.png")} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16 }}>This month bill is already paid. Lorem ipsum dolor sit lorem ipsum.</Text>
                    </View>
                </View>
                :
                null
            }
            {wrongServiceNum ?
                <View style={{ width: "100%", position: 'absolute', bottom: 20 }}>
                    <View style={{ height: 125, padding: 10, justifyContent: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#F5F5F5', }}>
                        <TouchableOpacity onPress={() => setWrongServiceNum(false)} style={{ position: "absolute", right: 15, top: 10 }}>
                            <Image source={require("../../assets/images/close.png")} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, marginLeft: 10 }}>Enter correct number</Text>
                    </View>
                </View>
                :
                null

            }


        </View>
    )
}