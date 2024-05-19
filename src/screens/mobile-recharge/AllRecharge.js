import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import SubScreenHeader from '../../components/SubScreenHeader'
import { useNavigation } from '@react-navigation/native'

export default function AllRecharge() {
    const Navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <SubScreenHeader Name='Airtel Recharge' />
            <View style={{ width: '100%', alignItems: "center", position: "absolute", top: 80 }}>
                <View style={{ height: 59, borderRadius: 35, flexDirection: "row", alignItems: "center", elevation: 5, backgroundColor: "#fff", width: "95%", padding: 20 }}>
                    <Image source={require('../../assets/images/search.png')} style={{ height: 19, width: 19, marginRight: 10 }} />
                    <TextInput style={{ fontSize: 15, fontWeight: "600", color: "#B3B3B3" }} placeholder='Search phone number/name' />
                </View>
            </View>
            <View style={{ marginTop: 30, width: "100%" }}>
                <ScrollView horizontal={true}>
                    <View style={{ width: '95%', flexDirection: "row", padding: 10, alignItems: "center" }}>
                        <TouchableOpacity style={{ height: 48, width: 98, backgroundColor: "#B9EBFF", marginRight: 10, alignItems: "center", borderRadius: 8, justifyContent: "center", borderBottomColor: "#0358F1", borderBottomWidth: 3 }}>
                            <Text style={{ fontWeight: "500", fontSize: 16, color: "#002A77" }}>For You</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Text style={{ fontWeight: "500", fontSize: 16, color: "#666666" }}>Unlimited</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Text style={{ fontWeight: "500", fontSize: 16, color: "#666666" }}>Data Packs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Text style={{ fontWeight: "500", fontSize: 16, color: "#666666" }}>Cricket Pack</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }}>
                            <Text style={{ fontWeight: "500", fontSize: 16, color: "#666666" }}>Top Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ width: "100%", marginTop: 10, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => Navigation.navigate('ProceedRecharge')} style={{ height: 146, width: "95%", marginBottom: 24 }}>
                        <View style={{ height: 98, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "#E6F8FF", flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Data :        3GB/Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :    29 Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Calls :        Unlimited</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :     29 Day</Text>
                            </View>
                            <View style={{ height: 35, width: 72, borderRadius: 16, borderWidth: 0.66, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>₹299</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, backgroundColor: "#F5F5F5", justifyContent: "center", padding: 10, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: 133, }}>
                                <Text style={{ fontSize: 12 }}>More Benifits :</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                    <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                    <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free Hello Tune</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                                    <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                    <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free He..... +1</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.navigate('ProceedRecharge')} style={{ height: 104, width: "95%", marginBottom: 24 }}>
                        <View style={{ height: 98, borderRadius: 12, backgroundColor: "#E6F8FF", flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Data :        3GB/Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :    29 Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Calls :        Unlimited</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :     29 Day</Text>
                            </View>
                            <View style={{ height: 35, width: 72, borderRadius: 16, borderWidth: 0.66, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>₹299</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.navigate('ProceedRecharge')} style={{ height: 146, width: "95%", marginBottom: 24 }}>
                        <View style={{ height: 98, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "#E6F8FF", flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Data :        3GB/Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :    29 Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Calls :        Unlimited</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :     29 Day</Text>
                            </View>
                            <View style={{ height: 35, width: 72, borderRadius: 16, borderWidth: 0.66, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>₹299</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, backgroundColor: "#F5F5F5", justifyContent: "center", padding: 10, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: 133, }}>
                                <Text style={{ fontSize: 12 }}>More Benifits :</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                    <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                    <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free Hello Tune</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                                    <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                    <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free He..... +1</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Navigation.navigate('ProceedRecharge')} style={{ height: 146, width: "95%", marginBottom: 24 }}>
                        <View style={{ height: 98, borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: "#E6F8FF", flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Data :        3GB/Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :    29 Day</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Calls :        Unlimited</Text>
                                <Text style={{ fontSize: 12, fontWeight: "400" }}>Validity :     29 Day</Text>
                            </View>
                            <View style={{ height: 35, width: 72, borderRadius: 16, borderWidth: 0.66, borderColor: "#0358F1", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>₹299</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, backgroundColor: "#F5F5F5", justifyContent: "center", padding: 10, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", width: 133, }}>
                                <Text style={{ fontSize: 12 }}>More Benifits :</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}>
                                    <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                    <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free Hello Tune</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 20 }}>
                                    <Image source={require('../../assets/images/hello-tune.png')} style={{ height: 20, width: 20 }} />
                                    <Text numberOfLines={1} style={{ fontSize: 12, fontWeight: "400", marginLeft: 5 }}>Free He..... +1</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}