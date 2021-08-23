import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, TextInput, Image,Touchable,TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native'
import COLORS from '../assets/Colors'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            password:null,
            email:null,
            confirmPassword:null,
        }
    }
    render() {
        return (
            <View style={styles.Container}>
                <StatusBar translucent backgroundColor={COLORS.tranparent} barStyle="dark-content" />
                <View>
                    <Image source={require('../assets/images/Login.png')} style={styles.ImageStyle} />
                    <View style={styles.inputStyle}>
                        <Feather name='user' size={30} color="black" />
                        <TextInput onChangeText={(val)=>this.setState({email:val})} placeholder="Enter Email" placeholderTextColor="black" textAlign="center" color={COLORS.dark} style={{ width: 200 }} />
                    </View>
                    <View style={styles.inputStyle}>
                        <AntDesign name='lock1' size={30} color="black" />
                        <TextInput onChangeText={(val)=>this.setState({password:val})} secureTextEntry={true} placeholder="Enter Password" placeholderTextColor="black" textAlign="center" color={COLORS.dark} style={{ width: 200 }} />
                    </View>
                    <TouchableOpacity  activeOpacity={0.9} onPress={()=>{alert('signup')}}>
                        <View style={styles.btnStyle} ><Text style={styles.textStyle}>Signup</Text></View>
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
            marginTop:20

        },
        inputStyle: {
            flexDirection: 'row',
            borderBottomColor: "black",
            backgroundColor: COLORS.light,
            borderWidth: 1,
            paddingHorizontal: 10,
            alignItems: 'center',
            elevation:20,
            marginVertical:7,
            borderRadius:10,
        },
    }
)