import React, { Component, useState, useEffect } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';
import LottieView from 'lottie-react-native';
//progress Bar (Doc : https://github.com/oblador/react-native-progress)
import ProgressBar from 'react-native-progress/Bar'

// expo install expo-constants เอาไว้ใช้รับ system information (doc : https://docs.expo.io/versions/v37.0.0/sdk/constants/)
import Constants from 'expo-constants'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";
import { profilePic } from "../dataSystem/data"
import { useIsFocused } from "@react-navigation/native";
import { withNavigation } from 'react-navigation';




const UserInfo = (props) =>{
    const [exp, setExp] = useState(0.7);
    const [user, setUser] = useState({});
    const [progressArch, setProgressArch] = useState(0.0)
    const [fcount, setfCount] = useState(0)
    //const [userload, setUserload] = useState(false)
    const userTemp = useSelector( (state) => state.user );
    

    //const isFocused = useIsFocused();
    
    useEffect(() =>{
        console.log("aaaaaaaaaaaaaaa")
        console.log(userTemp)
        console.log("aaaaaaaaaaaaaaa")
        setUser(userTemp)

        var count = 0
        for (var key in userTemp['gotAchievement']) {
        if (userTemp['gotAchievement'].hasOwnProperty(key)) {
            if (userTemp['gotAchievement'][key]) {
            count += 1
            }
        }
        }
        const progress = parseFloat(count) / parseFloat(Object.keys(userTemp['gotAchievement']).length)
        setfCount(fcount)
        setProgressArch(progress)
        //console.log(progress+ 'pipipipaspcnasodvnhsbdvikbdsvdb')
        //setUserload(true)
    },[userTemp])
    /*
    useEffect(() =>{
        console.log('userInfo FOCUS!!!!!')
    }, [isFocused])
    */
    //console.log(props.userPic)
    return(
        <View style={styles.infoBox}>
            <View style={{width: 200}}>
            
            <TouchableOpacity
                style={styles.Gopro}
                onPress={props.gotoprofile}>
            <View style={{flexDirection: 'row'}}>
                <Image
                style={styles.profilePic}
                source={profilePic[props.userPic].pic} //รอแก้จาก UserDB
            />
              <Text style={styles.profileName_text}>{user.fname}</Text></View>
            </TouchableOpacity>
            <View style={styles.ProgressBar}>
                <ProgressBar
                    progress={progressArch} 
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
export default withNavigation(UserInfo);

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
        borderRadius: 5,
    }
  });