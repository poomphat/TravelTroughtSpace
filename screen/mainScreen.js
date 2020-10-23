import React from 'react';
import UserInfo from "../component/userInfo";
import { StyleSheet, Text, View, Image, Platform, Button, Dimensions, ImageBackground } from 'react-native';
const MainScreen = (props) =>{
    return(
        <ImageBackground source={require('../assets/bg.png')} style={styles.container} resizeMode="repeat">
        <UserInfo/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //alignItems: 'center',
        //justifyContent: "center",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
})
export default MainScreen;