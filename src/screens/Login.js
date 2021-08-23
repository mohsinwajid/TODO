import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Image, TouchableOpacity, Text } from 'react-native'
import COLORS from '../assets/Colors'
import Feather from 'react-native-vector-icons/Feather';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <StatusBar translucent backgroundColor={COLORS.tranparent} barStyle="dark-content" />
                <View>
                    <Image source={require('../assets/images/Login.png')} style={styles.ImageStyle} />
                    <View style={styles.inputStyle}>
                        <Feather name='user' size={30} color="black" />
                        <TextInput placeholder="Enter your Name" placeholderTextColor="black" textAlign="center" color={COLORS.dark} style={{ width: 200 }} />
                    </View>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TaskList')}} style={{ marginTop: 20 }}>
                        <View style={styles.btnStyle} ><Text style={styles.textStyle}>Done</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        Container: {
            backgroundColor: COLORS.white,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        },
        ImageStyle: {
            width: 300,
            height: 320,
        },
        textStyle: {
            fontSize: 25,
            fontWeight: '500',
            color: COLORS.white
        },
        btnStyle: {
            backgroundColor: '#F9A826',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            elevation: 15,

        },
        inputStyle: {
            flexDirection: 'row',
            borderBottomColor: "black",
            backgroundColor: COLORS.light,
            borderWidth: 1,
            paddingHorizontal: 10,
            alignItems: 'center',
            elevation:20,
            borderRadius:10,
        },
    }
)