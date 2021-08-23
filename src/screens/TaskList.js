import React, { Component, } from 'react'
import { View, Text, Platform, StyleSheet, FlatList, ScrollView, Image, StatusBar, SafeAreaView, TouchableOpacity, Dimensions, TextBase, Button } from 'react-native'
import COLORS from '../assets/Colors'
import Task from '../components/Task'
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputModal from './InputModal';
import TaskData from '../assets/TaskData';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width } = Dimensions.get('screen');

// const json=JSON.stringify(Tasks);
// AsyncStorage.setItem('Tasks',json);
// const TaskData=AsyncStorage.getItem('TaskData');
export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            count: 0,
            TaskArray: [],
        }
    };
    totalTask=()=>{
        const {TaskArray}=this.state;
        this.setState({count:0})
        TaskArray.map((item) => {
            if (item.isDone == true) {
                this.setState({count:this.state.count+1});
            }
        })
    }
    componentDidMount = async () => {
        const { TaskArray } = this.state;
        try {
            const value = await AsyncStorage.getItem('TaskData');
            if (value !== null) {
                this.setState({ TaskArray: JSON.parse(value) })
            }
        } catch (error) {
            alert(error);
        }
        this.totalTask();
    }
    deleteTask = async (iitem) => {
        const { TaskArray } = this.state;
        TaskArray.splice(TaskArray.findIndex(item => item.id == iitem.id), 1);
        await AsyncStorage.setItem('TaskData', JSON.stringify(TaskArray))
        this.totalTask();
        this.setState({});
    }
    doneTask = async (iitem, val) => {
        const { TaskArray, count } = this.state;
        (TaskArray.find((item) => item.id == iitem.id)).isDone = val;
        await AsyncStorage.setItem('TaskData', JSON.stringify(TaskArray))
        this.totalTask();
        this.setState({})
    }
    showModal = () => {
        this.ref.current.toggleModal();
    }
    createTask = async (task) => {
        const { TaskArray } = this.state;
        const list=[...TaskArray,{ id: TaskArray.length + 1, title: task, isDone: false, }]
        this.setState({TaskArray:list})
        await AsyncStorage.setItem('TaskData', JSON.stringify(TaskArray));
    }
    renderHeaderComponent = () => {
        const { TaskArray,count } = this.state;
        return (
            <View>
                <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#F10B5C' }}>taska</Text>
                    <AntDesign name="menu-unfold" size={40} color="#0E92C9" style={{ paddingLeft: 40 }} />
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 50 }}>
                    <Text style={{ color: '#F10B5C', fontSize: 120 }}>{TaskArray.length}</Text>
                    <Text style={{ fontSize: 50 }}>tasks</Text>
                    <Text style={{ fontSize: 50 }}>for today</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}><AntDesign name="check" color='green' size={24} /><Text style={{ fontSize: 20, color: COLORS.grey }}>{count} tasks done</Text></View>
                </View>
            </View>
        )
    }
    renderEmptyContainer = () => (
        <View style={styles.upperContainer}>
            <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#F10B5C' }}>taska</Text>
                <AntDesign name="menu-unfold" size={40} color="#0E92C9" style={{ paddingLeft: 40 }} />
            </View>
            <View style={{ flex: 7, width: width, justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 50 }}>
                <Text style={{ color: '#F10B5C', fontSize: 120 }}>Hey</Text>
                <Text style={{ fontSize: 50 }}>you are</Text>
                <Text style={{ fontSize: 50 }}>free today</Text>
            </View>
        </View>
    )
    renderFooterContainer = () => {
        return <View >
            <TouchableOpacity onPress={this.showModal} style={{ marginTop: 20 }}>
                <View style={[styles.btnStyle]} ><Text style={styles.textStyle}><AntDesign name="pluscircleo" size={50} color={COLORS.red} /></Text></View>
            </TouchableOpacity>
        </View>
    }
    render() {
        const { TaskArray } = this.state;
        return (
            <SafeAreaView style={styles.Container}>
                <StatusBar translucent backgroundColor='#EBFAFF' barStyle={'dark-content'} />
                <View style={styles.lowerContainer}>
                    <FlatList
                        stickyHeaderIndices={[0]}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        disableVirtualization={false}
                        data={TaskArray}
                        renderItem={({ item }) => (
                            <Task item={item} done={this.doneTask} del={this.deleteTask} />
                        )}
                        keyExtractor={item => item.id}
                        ListFooterComponent={this.renderFooterContainer()}
                        ListFooterComponentStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        ListHeaderComponent={TaskArray.length === 0 ? () => <View></View> : this.renderHeaderComponent()}
                        ListHeaderComponentStyle={{
                            bottom: (TaskArray.length == 1) ? 75 : (TaskArray.length == 2) ? 40 : 0,
                            paddingVertical: 30,
                            backgroundColor: '#EBFAFF',
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            elevation: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        ListEmptyComponent={this.renderEmptyContainer()}
                    />
                </View>
                <InputModal ref={this.ref} crTask={this.createTask} />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create(
    {
        Container: {
            flex: 1,
            backgroundColor: '#EBFAFF',
        },
        ImageStyle: {
            width: 300,
            height: 220,
        },
        upperContainer: {
            flex: 1,
            paddingTop: (Platform.OS === 'iOS') ? 20 : 20,
            backgroundColor: '#EBFAFF',
            justifyContent: 'center',

        },
        lowerContainer: {
            flex: 1,
            backgroundColor: '#EBFAFF',
            justifyContent: 'center',
            alignItems: 'center',
        },
        textStyle: {
            fontSize: 30,
            fontWeight: '500',
            color: COLORS.red
        },
        btnStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 70,
            width: 300,
        },

    }
)