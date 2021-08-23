import React, { Component } from 'react'
import { View } from 'react-native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'
import AuthStack from './AuthStack'
import StackNavigator from './StackNavigator'
import Loader from '../screens/Loader'
import { NavigationContainer } from '@react-navigation/native'
export default class Route extends Component {
    static contextType = AuthContext
    constructor(props) {
        super(props);
        alert('construocr')
        this.state = {
            initializing: true,
        }
    }
    componentDidMount = async () => {
        alert('component did munt');
        const subscriber = await auth().onAuthStateChanged(this.onAuthStateChanged);
        return subscriber;
    }
    onAuthStateChanged = (user) => {
        alert(user);
        this.context.setUser(user);
        if (this.state.initializing) this.setState({ initializing: false });
    }
    render() {
        if (this.state.initializing) {
            return <Loader />;
        } else {
            return (
                <NavigationContainer>
                    {this.context.user ? <StackNavigator /> : <AuthStack />}
                </NavigationContainer>
            )
        }
    }
}
