import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignSign';

const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator >
            <Screen
                name="SignIn"
                options={{
                    headerShown: false
                    }}
                component={SignIn}
            />
        </Navigator>

    )
}
