import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import COLORS from '../assets/Colors';
export default class Loader extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white'}}>
                <DotIndicator color={COLORS.red} />

            </View>
        )
    }
}
