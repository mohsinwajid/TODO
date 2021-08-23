/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import {name as appName} from './app.json';
import  Signup from './src/screens/Signup';
import Route from './src/navigations/Route'
import AuthProvider from './src/navigations/AuthProvider'
AppRegistry.registerComponent(appName, () =>App);
