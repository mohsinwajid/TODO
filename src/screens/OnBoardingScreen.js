import React, { Component } from 'react'
import COLORS from '../assets/Colors';
import { View, StyleSheet, StatusBar, Image, Button } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import DummyData from '../assets/DummyData';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class OnBoardingScreen extends Component {
    firstSession = async () => {
        try {
            await AsyncStorage.setItem('@firstLaunch', 'false')
        } catch (e) {
            // saving error
        }
    }
    render() {
        return (
            <View style={styles.Container}>
                <StatusBar translucent backgroundColor={COLORS.white} />
                <Onboarding
                    titleStyles={{ fontWeight: 'bold', fontSize: 22 }}
                    onDone={() => {this.firstSession(); this.props.navigation.replace('TaskList');  }}
                    onSkip={() => { this.firstSession() ;this.props.navigation.replace('TaskList'); }}
                    pages={[
                        {
                            backgroundColor: '#fff',
                            image: <Image style={styles.ImageStyle} source={DummyData[0].image} />,
                            title: DummyData[0].title,
                            subtitle: DummyData[0].description,

                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={styles.ImageStyle} source={DummyData[1].image} />,
                            title: DummyData[1].title,
                            subtitle: DummyData[1].description,
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={styles.ImageStyle} source={DummyData[2].image} />,
                            title: DummyData[2].title,
                            subtitle: DummyData[2].description,
                        },
                        {
                            backgroundColor: '#fff',
                            image: <Image style={styles.ImageStyle} source={DummyData[3].image} />,
                            title: DummyData[3].title,
                            subtitle: DummyData[3].description,
                        },
                    ]}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        Container: {
            backgroundColor: COLORS.white,
            flex: 1
        },
        ImageStyle: {
            width: 300,
            height: 220,
        }
    }
)