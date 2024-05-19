import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function RechargeBill() {
    const Navigation = useNavigation()
  return (
    <View style={{flex:1,width:"100%",marginBottom:20}}>
      <View style={{height:208,flexDirection:"row",flexWrap:'wrap'}}>
        <TouchableOpacity onPress={()=> Navigation.navigate('MobileRechargeStack')} style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Power-bank.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Mobile Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Navigation.navigate('FastTagRechargeStack')} style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/fasttaglogo.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>FASTag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Navigation.navigate('ElectricityBillStack')} style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Save-energy.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Electricity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Gas-tank.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Gas/LPG</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Navigation.navigate('MetroRechargeStack')} style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Train.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Metro Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Navigation.navigate('WaterBillStack')} style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Faucet.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Water Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Navigation.navigate('MunsipalTaxStack')} style={{width:90,height:100,alignItems:"center",justifyContent:"center",marginBottom:10}}>
            <View style={{width:55,height:50,borderRadius:12,backgroundColor:"#B9EBFF",alignItems:"center",justifyContent:"center"}}>
                <Image source={require('../assets/images/Tax.png')} style={{height:32,width:32}} />
            </View>
            <Text style={{textAlign:"center",fontWeight:"500",fontSize:13}}>Municipal Tax</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}