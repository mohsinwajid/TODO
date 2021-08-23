import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Dimensions, Keyboard } from 'react-native';
import Modal from 'react-native-modal';
import COLORS from '../assets/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import React, { Component } from 'react';
import TaskData from '../assets/TaskData';
const deviceWidth = Dimensions.get('window').width;

export default class InputModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyboardSpace: 0,
            nicknameModalVisible: true,
            isModalVisible: false,
            task:null,
        };
        Keyboard.addListener('keyboardDidShow', (frames) => {
            if (!frames.endCoordinates) return;
            this.setState({ keyboardSpace: frames.endCoordinates.height });
        });
        Keyboard.addListener('keyboardDidHide', (frames) => {
            this.setState({ keyboardSpace: 0 });
        });
    };
    toggleModal = () => {
        this.setState({isModalVisible:!this.state.isModalVisible})
    }; 
    getTask=(val)=>{
        this.setState({task:val});
    }
    createTask=()=>{
        this.props.crTask(this.state.task);
        this.toggleModal();
    }
    render() {
        return (
            <View>
                <Modal isVisible={this.state.isModalVisible}
                    hideModalContentWhileAnimating={true}
                    style={{
                        position: 'absolute',
                        bottom: -150,
                        //change modal position by keyboardspace
                        top: this.state.keyboardSpace ? -10 - this.state.keyboardSpace : -250,
                        width: 320,
                
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>taska</Text>
                            <TouchableOpacity onPress={this.toggleModal}><Entypo name="cross" size={40} color="#0E92C9" /></TouchableOpacity>
                        </View>
                        <View style={styles.textInputContainer}>
                            <TextInput onChangeText={this.getTask} multiline={true} numberOfLines={4} color="grey" placeholder="Enter your task" placeholderTextColor="black" />
                        </View>
                        <View style={styles.btnContainer}>
                            <Button onPress={this.createTask} color="#0E92C9" title="create" />
                            <Button onPress={()=>{this.toggleModal();this.setState({task:null})}} color={COLORS.red} title="cancel" />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    };
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 0.3,
        backgroundColor:'white',
        borderTopLeftRadius: 20,
        top:90,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 10,
        elevation: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.red
    },
    titleContainer: {
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    textInputContainer: {
        paddingHorizontal: 5,
        borderWidth: 0.1,
        borderColor: 'black',
        borderRadius: 3,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        flex: 1,
    }
})