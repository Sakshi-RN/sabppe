import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WaterBill from '../screens/water-bill/WaterBill';
import WaterServiceNum from '../screens/water-bill/WaterServiceNum';
import WaterBillDetails from '../screens/water-bill/WaterBillDetails';


const Stack = createStackNavigator();
const WaterBillStack = () => {
    return (
        <Stack.Navigator initialRouteName='WaterBill' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WaterBill" component={WaterBill} />
            <Stack.Screen name='WaterServiceNum' component={WaterServiceNum} />
            <Stack.Screen name='WaterBillDetails' component={WaterBillDetails} />
        </Stack.Navigator>
    );
}
export default WaterBillStack;
