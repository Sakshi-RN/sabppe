import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../screens/Login';
import LandingPage from '../screens/LandingPage';
import Register from '../screens/Register';
import OtpVerify from '../screens/OtpVerify';
import BottomTab from './BottomTab';
import CurveBottomTab from './CurvyBottomTab';
import MobileRechargeStack from './MobileRechargeStack';
import WaterBillStack from './WaterBillStack';
import ElectricityBillStack from './ElectricityBillStack';
import FastTagRechargeStack from './FastTagRechargeStack';
import MetroRechargeStack from './MetroRechargeStack';
import MunsipalTaxStack from './MunsipalTaxStack';



const Stack = createStackNavigator();
const LoginStack = () => {
    return (
        <Stack.Navigator initialRouteName='LandingPage' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='OtpVerify' component={OtpVerify} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name='BottomTab' component={BottomTab} />
            <Stack.Screen name='MobileRechargeStack' component={MobileRechargeStack} />
            <Stack.Screen name='WaterBillStack' component={WaterBillStack} />
            <Stack.Screen name='ElectricityBillStack' component={ElectricityBillStack} />
            <Stack.Screen name='FastTagRechargeStack' component={FastTagRechargeStack} />
            <Stack.Screen name='MetroRechargeStack' component={MetroRechargeStack} />
            <Stack.Screen name='MunsipalTaxStack' component={MunsipalTaxStack} />
        </Stack.Navigator>
    );
}
export default LoginStack;
