import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AllElectricityBill from '../screens/electricity-bill/AllElectricityBill';
import ElectricityServiceNum from '../screens/electricity-bill/ElectricityServiceNum';
import BillDetails from '../screens/electricity-bill/BillDetails';


const Stack = createStackNavigator();
const ElectricityBillStack = () => {
    return (
        <Stack.Navigator initialRouteName='AllElectricityBill' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AllElectricityBill" component={AllElectricityBill} />
            <Stack.Screen name='ElectricityServiceNum' component={ElectricityServiceNum} />
            <Stack.Screen name='BillDetails' component={BillDetails} />
        </Stack.Navigator>
    );
}
export default ElectricityBillStack;
