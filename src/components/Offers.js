import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Offers() {
    return (
        <View style={{ flex: 1, width: "100%",marginBottom:0 }}>
            <View style={{ padding: 10,flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%" }}>
                <View style={{ height: 194,width:183 }}>
                    <Image source={require('../assets/images/Offer1.png')} style={{ height: 125, width: 150, resizeMode:"contain" }} />
                    <Text style={{ fontWeight: "500", fontSize: 16 }}>H&M</Text>
                    <Text>Shop in style, get heavy discount on the app</Text>
                </View>
                <View style={{ height: 194,width:183 }}>
                    <Image source={require('../assets/images/Offer2.png')} style={{ height: 125, width: 150, resizeMode:"contain" }} />
                    <Text style={{ fontWeight: "500", fontSize: 16 }}>Flipkart</Text>
                    <Text>Now get 50% off on the selected items</Text>
                </View>
            </View>

        </View>
    )
}