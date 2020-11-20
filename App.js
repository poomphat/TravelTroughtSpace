import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import MyloginPage from './component/login';
//import Profile from './component/Profile';
import MainScreen from './screen/mainScreen';
import PlanetNavigator from './navigation/SpaceNavigator';
import SolarSystemScreen from "./screen/solarsystemScreen";
import CommentList from "./component/commentList";
import Quiz from "./component/Quiz";
import FireBaseInit from "./firebase/FirebaseInit";

FireBaseInit();
export default function App() {
  return (
      <Quiz planet={0}/>
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
