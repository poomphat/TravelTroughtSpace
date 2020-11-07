import React, { Component, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Platform, Button } from 'react-native';

//progress Bar (Doc : https://github.com/oblador/react-native-progress)
import ProgressBar from 'react-native-progress/Bar'

// expo install expo-constants เอาไว้ใช้รับ system information (doc : https://docs.expo.io/versions/v37.0.0/sdk/constants/)
import Constants from 'expo-constants'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserInfo = (props) =>{
    const [exp, setExp] = useState(0.7);
    return(
        <View style={styles.infoBox}>
            <TouchableOpacity
                style={styles.Gopro}
                onPress={props.Gotoprofile}>
            <Image
                style={styles.profilePic}
                source={require("../assets/mheeIconTest.png")} //รอแก้จาก UserDB
            />
            </TouchableOpacity>
            <View style={styles.ProgressBar}>
                <ProgressBar
                    progress={exp} 
                    width={200}
                    height={20}
                    animated={true}
                    color={"lime"} //รอแก้สี
                    borderWidth={2}
                    borderColor={"yellow"}
                />
            </View>
            <View style={styles.profileName}>
                <Text style={styles.profileName_text}>Towasama {/*รอแก้จาก DB*/} </Text> 
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
        width: "100%",
        marginTop:Constants.statusBarHeight, //ขนาด statusBar
    },
    profilePic:{
        position:"absolute",
        width:45,
        height:45,
        borderColor:"white",
        borderWidth:1.5,
        borderRadius:20,
        margin:10,
    },
    ProgressBar:{
        position:"absolute",
        margin:10,
        top: 55,
    },
    profileName:{
        position:"absolute",
        margin:10,
        left:50,
        top:10,
    },
    profileName_text:{
        fontSize:18,
        color:"white",
    }
  });