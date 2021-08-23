import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Login from '../screens/Login';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import TaskList from '../screens/TaskList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class StackNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isfirstLaunch: null,
        }
    }
    componentWillUnmount = async () => {
        const res = await AsyncStorage.getItem('@firstLaunch');
        if (res === null) {
            await AsyncStorage.setItem('@firstLaunch', 'true');
            this.setState({ isfirstLaunch: true })
        }else {
            this.setState({ isfirstLaunch: false });
        }
    }
    render() {
        const { isfirstLaunch } = this.state
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                {isfirstLaunch == true ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Onboard" component={OnBoardingScreen} />
                        <Stack.Screen name="TaskList" component={TaskList} />
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="TaskList" component={TaskList} />
                    </Stack.Navigator>
                )   
                }
            </NavigationContainer >
        )
    }

}