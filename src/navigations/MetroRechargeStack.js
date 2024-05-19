import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MetroRecharge from '../screens/metro-recharge/MetroRecharge';
import MetroNewUser from '../screens/metro-recharge/MetroNewUser';
import MetroAddCard from '../screens/metro-recharge/MetroAddCard';
import MetroRechargePayment from '../screens/metro-recharge/MetroRechargePayment';
import MetroBookTicket from '../screens/metro-recharge/MetroBookTicket';

const Stack = createStackNavigator();
const MetroRechargeStack = () => {
    return (
        <Stack.Navigator initialRouteName='MetroRecharge' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MetroRecharge" component={MetroRecharge} />
            <Stack.Screen name='MetroNewUser' component={MetroNewUser} />
            <Stack.Screen name='MetroAddCard' component={MetroAddCard} />
            <Stack.Screen name='MetroRechargePayment' component={MetroRechargePayment} />
            <Stack.Screen name='MetroBookTicket' component={MetroBookTicket} />
        </Stack.Navigator>
    );
}
export default MetroRechargeStack;
