import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const Navigation = (props) => {

    const { userInfo, loading } = useContext(AuthContext);


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    userInfo.token
                        ?

                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ headerShown: false }}
                        />

                        :

                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />

                }


            </Stack.Navigator>
        </NavigationContainer>
    )

};

export default Navigation;
