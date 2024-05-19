import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        
            <View style={{ width: "100%", height: 95, justifyContent: "center" }}>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center",  marginLeft: 10 }}>
                        <Image source={require('../assets/images/profilepic.png')} style={{ width: 32, height: 32 }} />
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: '600', fontSize: 20, lineHeight: 24.2 }}> Welcome, </Text>
                            <Text style={{ fontWeight: '600', fontSize: 20, lineHeight: 24.2, color: "#0358F1" }}>Karthik!</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center",marginRight:10,width:'20%',justifyContent:"space-between" }}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/notification-bing.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/Astrology.png')} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
    )
}
