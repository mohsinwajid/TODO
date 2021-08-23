import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../assets/Colors'
import TaskData from '../assets/TaskData';
import BoxCheck from './BoxCheck';
export default class Task extends Component {

    render() {
        return (
            <View style={{ width: 300, height: 80, borderBottomColor: 'black', borderBottomWidth: 0.4, }}>
                <View style={{ width: 300, height: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'grey',textDecorationLine:this.props.item.isDone?'line-through':null }}>{this.props.item.title}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:70,}}>
                        <BoxCheck done={this.props.done} item={this.props.item}/>
                        <TouchableOpacity onPress={() => { this.props.del(this.props.item) }}><AntDesign name="delete" size={22} color={COLORS.red} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
