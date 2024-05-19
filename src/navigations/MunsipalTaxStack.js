import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AllElectricityBill from '../screens/electricity-bill/AllElectricityBill';
import ElectricityServiceNum from '../screens/electricity-bill/ElectricityServiceNum';
import BillDetails from '../screens/electricity-bill/BillDetails';
import MunsipalTax from '../screens/musipal-tax/MunsipalTax';
import MuncipalHouseNum from '../screens/musipal-tax/MuncipalHouseNum';
import MuncipalBill from '../screens/musipal-tax/MucipalBill';


const Stack = createStackNavigator();
const MunsipalTaxStack = () => {
    return (
        <Stack.Navigator initialRouteName='MunsipalTax' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MunsipalTax' component={MunsipalTax} />
            <Stack.Screen name='MuncipalHouseNum' component={MuncipalHouseNum} />
            <Stack.Screen name='MuncipalBill' component={MuncipalBill} />
        </Stack.Navigator>
    );
}
export default MunsipalTaxStack;
