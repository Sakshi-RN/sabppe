import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';

const RootNav = () => {
    const [user, setuser] = useState('123');

    return (
        <NavigationContainer>
            {user ?
                <LoginStack />
                :
                <LoginStack />
            }
        </NavigationContainer>
    );
}

export default RootNav;