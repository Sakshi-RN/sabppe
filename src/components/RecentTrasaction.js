import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function RecentTrasaction() {
    return (
        <View style={{ width: '100%', padding: 16, }}>
            <ScrollView horizontal={true}>
                <TouchableOpacity style={{ height: 93, width: 56, alignItems: "center", justifyContent: "center",marginRight:5}}>
                    <View style={{ width: 56, height: 56, borderColor: "#E5E1EF", borderWidth: 1, borderRadius: 30,alignItems:"center",justifyContent:"center" }}>
                            <View style={{ width: 48, height: 48, backgroundColor: '#DED2FF', alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <Image source={require('../assets/images/taxi.png')} style={{ width: 22, height: 18,}} />
                            </View>
                    </View>
                    <Text style={{fontWeight:"600",fontSize:12,lineHeight:14}}>₹846</Text>
                    <Text style={{color:"#B3B3B3",fontSize:10,fontWeight:'500'}}>Cab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 93, width: 56, alignItems: "center", justifyContent: "center",marginRight:5}}>
                    <View style={{ width: 56, height: 56, borderColor: "#E5E1EF", borderWidth: 1, borderRadius: 30,alignItems:"center",justifyContent:"center" }}>
                            <View style={{ width: 48, height: 48, backgroundColor: '#FFEDD2', alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <Image source={require('../assets/images/burger.png')} style={{ width: 22, height: 18,resizeMode:"contain"}} />
                            </View>
                    </View>
                    <Text style={{fontWeight:"600",fontSize:12,lineHeight:14}}>₹3000</Text>
                    <Text style={{color:"#B3B3B3",fontSize:10,fontWeight:'500'}}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 93, width: 56, alignItems: "center", justifyContent: "center",marginRight:5}}>
                    <View style={{ width: 56, height: 56, borderColor: "#E5E1EF", borderWidth: 1, borderRadius: 30,alignItems:"center",justifyContent:"center" }}>
                            <View style={{ width: 48, height: 48, backgroundColor: '#FFD6E5', alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <Image source={require('../assets/images/line-increcase.png')} style={{ width: 22, height: 18,resizeMode:"contain"}} />
                            </View>
                    </View>
                    <Text style={{fontWeight:"600",fontSize:12,lineHeight:14}}>₹1000</Text>
                    <Text style={{color:"#B3B3B3",fontSize:10,fontWeight:'500'}}>Stock</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 93, width: 56, alignItems: "center", justifyContent: "center",marginRight:5}}>
                    <View style={{ width: 56, height: 56, borderColor: "#E5E1EF", borderWidth: 1, borderRadius: 30,alignItems:"center",justifyContent:"center" }}>
                            <View style={{ width: 48, height: 48, backgroundColor: '#D2E7FF', alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <Image source={require('../assets/images/rupee.png')} style={{ width: 22, height: 18,resizeMode:'contain'}} />
                            </View>
                    </View>
                    <Text style={{fontWeight:"600",fontSize:12,lineHeight:14}}>₹10,000</Text>
                    <Text style={{color:"#B3B3B3",fontSize:10,fontWeight:'500'}}>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 93, width: 56, alignItems: "center", justifyContent: "center",marginRight:5}}>
                    <View style={{ width: 56, height: 56, borderColor: "#E5E1EF", borderWidth: 1, borderRadius: 30,alignItems:"center",justifyContent:"center" }}>
                            <View style={{ width: 48, height: 48, backgroundColor: '#F9D2FF', alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <Image source={require('../assets/images/taxi.png')} style={{ width: 22, height: 18,}} />
                            </View>
                    </View>
                    <Text style={{fontWeight:"600",fontSize:12,lineHeight:14}}>₹122</Text>
                    <Text style={{color:"#B3B3B3",fontSize:10,fontWeight:'500'}}>Cab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: 93, width: 56, alignItems: "center", justifyContent: "center",marginRight:5}}>
                    <View style={{ width: 56, height: 56, borderColor: "#E5E1EF", borderWidth: 1, borderRadius: 30,alignItems:"center",justifyContent:"center" }}>
                            <View style={{ width: 48, height: 48, backgroundColor: '#FFEDD2', alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <Image source={require('../assets/images/burger.png')} style={{ width: 22, height: 18,resizeMode:"contain"}} />
                            </View>
                    </View>
                    <Text style={{fontWeight:"600",fontSize:12,lineHeight:14}}>₹3000</Text>
                    <Text style={{color:"#B3B3B3",fontSize:10,fontWeight:'500'}}>Food</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}