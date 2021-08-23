import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import colors from '../assets/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from '../navigations/StackNavigator'
import AuthProvider from '../navigations/AuthProvider';
import Route from '../navigations/Route';
export default class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    Alert.alert('DF', 'DFFD')
    return (
      <AuthProvider>
        <Route/>
      </AuthProvider>
    )
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: colors.lightBlue,
    flex: 1,
    alignSelf: 'center',
  }

})