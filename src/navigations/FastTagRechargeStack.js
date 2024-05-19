import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FastTagRecharge from '../screens/fasttag-recharge/FastTagRecharge';
import FastTagVehicleNum from '../screens/fasttag-recharge/FastTagVehicleNum';
import FastagRechargeBill from '../screens/fasttag-recharge/FastagRechargeBill';


const Stack = createStackNavigator();
const FastTagRechargeStack = () => {
    return (
        <Stack.Navigator initialRouteName='FastTagRecharge' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FastTagRecharge" component={FastTagRecharge} />
            <Stack.Screen name='FastTagVehicleNum' component={FastTagVehicleNum} />
            <Stack.Screen name='FastagRechargeBill' component={FastagRechargeBill} />
        </Stack.Navigator>
    );
}
export default FastTagRechargeStack;
