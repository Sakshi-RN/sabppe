import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MobileRechargeStack from './MobileRechargeStack';
import ElectricityBillStack from './ElectricityBillStack';
import WaterBillStack from './WaterBillStack';
import FastTagRechargeStack from './FastTagRechargeStack';
import MetroRechargeStack from './MetroRechargeStack';
import MunsipalTaxStack from './MunsipalTaxStack';

const Stack = createStackNavigator();
const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name='ElectricityBillStack' component={ElectricityBillStack} />
            <Stack.Screen name='MobileRechargeStack' component={MobileRechargeStack} />
            <Stack.Screen name='WaterBillStack' component={WaterBillStack} />
            <Stack.Screen name='FastTagRechargeStack' component={FastTagRechargeStack} />
            <Stack.Screen name='MetroRechargeStack' component={MetroRechargeStack} />
            <Stack.Screen name='MunsipalTaxStack' component={MunsipalTaxStack} />
        </Stack.Navigator>
    );
}
export default HomeStack;
