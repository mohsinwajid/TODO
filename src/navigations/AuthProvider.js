import React, { Component } from 'react'
import { Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import Route from './Route';
export const AuthContext = React.createContext();

export default class AuthProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
    };
    setUser = (user) => {
        this.setState(
            { user: user }
        )
    }
    render() {
        const { user } = this.state;
        return (
            <AuthContext.Provider
                value={{
                    user: user,
                    setUser: this.setUser,
                    login: async (email, password) => {
                        try {
                            await auth().signInWithEmailAndPassword(email, password)
                        } catch (e) {
                            console.log(e)
                        }
                    },
                    signup: async (email, password) => {
                        try {
                            await auth().createUserWithEmailAndPassword(email, password);
                        } catch (e) { console.log(e) }
                    },
                    logout: async () => {
                        try {
                            await auth().signOut();
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }}
            >
                {this.props.childern}
            </AuthContext.Provider>
        )
    }
}

