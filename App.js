import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import MyloginPage from './component/login';
import LoadingScreen from './component/loadingScreen';
//import Profile from './component/Profile';
//import MainScreen from './screen/mainScreen';
import PlanetNavigator from './navigation/SpaceNavigator'
export default function App() {
  return (
      <PlanetNavigator/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
