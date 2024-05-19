import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Subscriptions() {
  return (
    <View style={{flex:1,width:"100%"}}>
      <View style={{height:120,flexDirection:"row",flexWrap:'wrap'}}>
        <TouchableOpacity style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B8D1FF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Cable-tv.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Cable</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B8D1FF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Satellite-dish.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>DTH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B8D1FF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Watch-tv.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>OTT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B8D1FF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Wifi.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Broad-band</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}