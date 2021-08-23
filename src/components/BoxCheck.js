import React, { Component } from 'react'
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import COLORS from '../assets/Colors';

export default class BoxCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleCheckBox: this.props.item.isDone,
        }
    }
    setToggleCheckBox = (val) => {
        this.setState({
            toggleCheckBox: val,
        })
    }
    render() {
        const { toggleCheckBox } = this.state;
        return (
            <View>
                <CheckBox
                    tintColors={{ true:'green', false:'#0E92C9', }}
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(val)=>{this.props.done(this.props.item,val);this.setToggleCheckBox(val)}}
                />
            </View>
        );
    }
}
