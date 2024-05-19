import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PayScreen from '../screens/PayScreen';
import Recieve from '../screens/Recieve';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          elevation: 5,
          borderTopLeftRadius:25,
          borderTopRightRadius:25,
          alignItems:"center",
          justifyContent:"center",
          padding:10,
          backgroundColor:"#0358F1"
        },
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#5E97FF",
        tabBarLabelStyle: {
          fontSize: 10,
          lineHeight: 14,
          fontWeight: '600',
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/images/home-2.png')} style={{ height: 30.95, width: 30.95, tintColor: color, resizeMode: 'contain' }} />
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle:{color:'#000',fontWeight:"600",fontSize:10,},
          tabBarIcon: ({ color, size }) => (
            <View style={{width:60,height:60,borderRadius:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",marginTop:5}}>
              <Image source={require('../assets/images/Qrcode.png')} style={{ height: 25, width: 25, tintColor: '#000', resizeMode: 'contain',marginTop:5 }} />
              <Text style={{fontSize:10,fontWeight:"600",marginTop:2}}>Pay</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Receive"
        component={Recieve}
        options={{
          tabBarLabel: 'Receive',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/images/moneys.png')} style={{ height: 30.95, width: 30.95, tintColor: color, resizeMode: 'contain' }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})

export default BottomTab;
