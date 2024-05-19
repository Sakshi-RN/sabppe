import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function OtherPayments() {
    return (
        <View style={{ flex: 1, width: "100%", marginBottom: 20 }}>
            <View style={{ height: 208, flexDirection: "row", flexWrap: 'wrap' }}>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Personal.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Loan Payments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Credit-Card.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Credit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Team.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Housing Societies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Insurance.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Insurance</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Tuition.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13, }}>Education Fee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Hospital.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Hospitals</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Workers.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Clubs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: 90, height: 100, alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                    <View style={{ width: 55, height: 50, borderRadius: 12, backgroundColor: "#B9EBFF", alignItems: "center", justifyContent: "center" }}>
                        <Image source={require('../assets/images/Rent.png')} style={{ height: 32, width: 32 }} />
                    </View>
                    <Text style={{ textAlign: "center", fontWeight: "500", fontSize: 13 }}>Rentals</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}