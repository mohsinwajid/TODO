import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import ForgetPassword from '../screens/ForgetPassword'
export default class AuthStack extends Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="signup" component={Signup} />
                    <Stack.Screen name="login" component={Login} />
                    <Stack.Screen name="forgetpassword" component={ForgetPassword} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
