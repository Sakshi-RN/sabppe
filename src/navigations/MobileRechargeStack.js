import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MobileRechargeScreen from '../screens/mobile-recharge/MobileRechargeScreen';
import PrePaid from '../screens/mobile-recharge/PrePaid';
import PostPaid from '../screens/mobile-recharge/PostPaid';
import AllRecharge from '../screens/mobile-recharge/AllRecharge';
import ProceedRecharge from '../screens/mobile-recharge/ProceedRecharge';


const Stack = createStackNavigator();
const MobileRechargeStack = () => {
    return (
        <Stack.Navigator initialRouteName='MobileRechargeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MobileRechargeScreen" component={MobileRechargeScreen} />
            <Stack.Screen name='PrePaid' component={PrePaid} />
            <Stack.Screen name='PostPaid' component={PostPaid} />
            <Stack.Screen name='AllRecharge' component={AllRecharge} />
            <Stack.Screen name='ProceedRecharge' component={ProceedRecharge} />
        </Stack.Navigator>
    );
}
export default MobileRechargeStack;
