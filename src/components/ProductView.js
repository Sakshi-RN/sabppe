import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductView() {
    return (
        <View style={{ width: '100%' }}>
            <ScrollView horizontal={true}>
                <View style={{ flexDirection: "row", padding: 10, alignItems: "center" }}>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#FFEDD2", height: 92, width: 156, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <View style={{ width: 52, height: 44, backgroundColor: '#fff', borderRadius: 8, marginRight: 10 }}>
                            <Image source={require('../assets/images/Cashback.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                        </View>
                        <Text style={{ width: 65 }}>Sabbpe Credit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#DED2FF", height: 92, width: 156, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <View style={{ width: 52, height: 44, backgroundColor: '#fff', borderRadius: 8, marginRight: 10 }}>
                            <Image source={require('../assets/images/Customer-loyalty.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                        </View>
                        <Text style={{ width: 65 }}>SabbPe Loyalty Points</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#F9D2FF", height: 92, width: 156, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <View style={{ width: 52, height: 44, backgroundColor: '#fff', borderRadius: 8, marginRight: 10 }}>
                            <Image source={require('../assets/images/Wallet.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                        </View>
                        <Text style={{ width: 65 }}>Sabbpe Credit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#F9D2FF", height: 92, width: 156, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <View style={{ width: 52, height: 44, backgroundColor: '#fff', borderRadius: 8, marginRight: 10 }}>
                            <Image source={require('../assets/images/Wallet.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                        </View>
                        <Text style={{ width: 65 }}>Sabbpe Credit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderRadius: 12, backgroundColor: "#F9D2FF", height: 92, width: 156, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                        <View style={{ width: 52, height: 44, backgroundColor: '#fff', borderRadius: 8, marginRight: 10 }}>
                            <Image source={require('../assets/images/Wallet.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                        </View>
                        <Text style={{ width: 65 }}>Sabbpe Credit</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}