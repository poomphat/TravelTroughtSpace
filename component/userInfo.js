import React, { Component, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import LottieView from 'lottie-react-native';
//progress Bar (Doc : https://github.com/oblador/react-native-progress)
import ProgressBar from 'react-native-progress/Bar'

// expo install expo-constants เอาไว้ใช้รับ system information (doc : https://docs.expo.io/versions/v37.0.0/sdk/constants/)
import Constants from 'expo-constants'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";




const UserInfo = (props) =>{
    const [exp, setExp] = useState(0.7);
    const user = useSelector( (state) => state.user );
    console.log(user)
    return(
        <View style={styles.infoBox}>
            <View style={{width: 200}}>
                
            <TouchableOpacity
                style={styles.Gopro}
                onPress={props.gotoprofile}>
            <View style={{flexDirection: 'row'}}><Image
                style={styles.profilePic}
                source={require("../assets/mheeIconTest.png")} //รอแก้จาก UserDB
            />
              <Text style={styles.profileName_text}>{user.fname}</Text></View>
            </TouchableOpacity>
            <View style={styles.ProgressBar}>
                <ProgressBar
                    progress={exp} 
                    width={200}
                    height={15}
                    animated={true}
                    color={"lime"} //รอแก้สี
                    borderWidth={2}
                    borderColor={"white"}
                />
            </View>
</View>
            {/* เอาไว้เทสหลอด exp
            <TouchableOpacity 
                    style={styles.testButton}
                    onPress={() => {
                        setExp(exp+0.1);
                        console.log(exp);
                    }}
                >
                    <Text>test</Text>
            </TouchableOpacity>
            */}
            <View>
            <TouchableOpacity style={styles.buttonsolar}
            onPress={props.gotoSolar}>
                    <LottieView
                autoPlay={true}
                loop={true}
                speed={0.25}
                style={{
                    width: 60,
                }}
                source={require('../assets/solar.json')}
            /></TouchableOpacity></View>
        </View>
    );
  }
export default UserInfo;

const styles = StyleSheet.create({
    Gopro:{
        height:45,
    },
    infoBox:{
        height: 100,
        marginTop:Constants.statusBarHeight, //ขนาด statusBar
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profilePic:{
        width:45,
        height:45,
        borderColor:"white",
        borderWidth:1.5,
        borderRadius:20,
        margin:10,
    },
    ProgressBar:{
        marginTop:20,
        marginLeft:10,
    },
    profileName_text:{
        fontSize:18,
        color:"white",
        marginTop:17,
    },
    buttonsolar:{
        marginRight: 10,
        marginTop: 10,
        backgroundColor: '#ffffff22',
        borderRadius: 5,
    }
  });