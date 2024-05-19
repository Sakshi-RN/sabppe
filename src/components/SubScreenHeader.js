import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SubScreenHeader(Name) {
    console.log(Name);
    const Navigation = useNavigation();
    return (
        <View style={{ marginBottom: 15 }}>
            <View style={{ backgroundColor: "#0358F1", height: 100, width: "100%", alignItems: "center", justifyContent: "center", padding: 10, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>
                <View style={{ flexDirection: "row", alignItems: "center", width: '100%' }}>
                    <View style={{ flexDirection: "row", alignItems: "center", width: "85%" }}>
                        <TouchableOpacity onPress={() => Navigation.goBack()} style={{ marginRight: 10 }}>
                            <Image source={require('../assets/images/BackButton.png')} style={{ height: 24, width: 24 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: "600", color: "#fff" }}>{Name?.Name}</Text>
                    </View>
                    <Image source={require('../assets/images/header-logo.png')} style={{ height: 34, width: 40 }} />
                </View>
            </View>
        </View>
    )
}