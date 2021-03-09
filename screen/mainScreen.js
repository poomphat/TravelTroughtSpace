import React, { useState,useEffect } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, Button, Dimensions, ImageBackground, Modal,KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, AntDesign,Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Assets } from 'react-navigation-stack';
import { useSelector, useDispatch } from "react-redux";
import {datasystem, spaceShip} from '../dataSystem/data'
const MainScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [current,setcurrent] = useState(props.navigation.getParam("current"))
    const [p,setp] = useState(0)
    
    //bg
    const bg = useSelector( (state) => state.img.background );
    const user = useSelector( (state) => state.img.background );
    const currentShip = useSelector( (state) => state.user.CurrentShip );
    const userTemp = useSelector( (state) => state.user );
    useEffect(() => {
        setcurrent(props.navigation.getParam("current"))

    })
    useEffect(() => {
        setp(p+1)
    },[])

    useEffect(() => {
        console.log(userTemp.current + "currwnt")
    }, [currentShip, userTemp])
    const gotoSolar = (current) =>{
        props.navigation.navigate("solarSystem", {currentPos:current})
    }
    return(
        <View style={{backgroundColor: '#1f4068'}}>
        <ImageBackground source={{uri:bg}} style={styles.container} resizeMode="repeat">
            <Text style={{display: 'none'}}>{p}</Text>
                    <View>
                        <UserInfo
                            gotoprofile={() => { props.navigation.navigate("profile") }}
                            gotoSolar={() => gotoSolar(current)}
                            userPic={userTemp.Profile}
                            userA={userTemp}
                             />
                        <CurrentPlanet
                            planetclicked={() => {
                                setModalVisible(true);
                            }
                            }
                            onSolarClicked={() => { props.navigation.navigate("solarSystem") }}
                            planetcurrent={props.navigation.getParam("current")}
                            spaceShipCurrent={currentShip}
                        />
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>{datasystem[props.navigation.getParam("current")].title}</Text>
                                    <View style={styles.closebuttonView}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                            }}
                                        ><FontAwesome name="close" size={30} color="white" />
                                        </TouchableOpacity></View>
                                    <Animatable.View style={{alignItems: 'center', marginBottom:  Dimensions.get('window').height * 0.02}} animation="zoomIn" delay={20} duration={500}>
                                        <TouchableOpacity style={styles.buttonW}
                                                            onPress={() => {
                                                                setModalVisible(!modalVisible);
                                                                props.navigation.navigate(datasystem[props.navigation.getParam("current")].title, {planet: props.navigation.getParam("current")})}}>
                                        <Entypo name="magnifying-glass" size={40} color="white" /><Text style={{fontWeight: 'bold',color: 'white'}}> Discover </Text>
                                        </TouchableOpacity>
                                        </Animatable.View>
                                        <Animatable.View style={styles.doublebutton} animation="zoomIn" delay={70} duration={500}>
                                        <TouchableOpacity style={styles.buttonQ}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                            props.navigation.navigate("quiz",{planet: props.navigation.getParam("current")})}}>
                                            <AntDesign name="form" size={40} color="white" /><Text style={{fontWeight: 'bold',color: 'white'}}> Quiz</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonC}
                                            onPress={() => {
                                                setModalVisible(!modalVisible);
                                                props.navigation.navigate("comment",{planet: props.navigation.getParam("current")})}}>
                                            <FontAwesome name="comments" size={40} color="white" /><Text style={{fontWeight: 'bold',color: 'white'}}>Comment</Text>
                                        </TouchableOpacity>
                                    </Animatable.View>
                                </View>
                            </View>
                        </Modal>

                    </View>
            </ImageBackground>
            </View>
        );
                              
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.35,
        margin: 20,
        backgroundColor: "#1f4068",
        borderRadius: 20,
        padding: 35,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",

    },
    modalText: {
        marginBottom: 15,
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold'
    },
    closebuttonView: {
        padding: 2,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        
        position: 'absolute',
        right: Dimensions.get('window').width * 0.05,
        top: Dimensions.get('window').height * 0.02,
    },
    doublebutton:{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    buttonQ:{
        width: Dimensions.get('window').width * 0.325,
        backgroundColor: '#3ca59d',
        marginRight: Dimensions.get('window').width * 0.05,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },
    buttonC:{
        width: Dimensions.get('window').width * 0.325,
        backgroundColor: '#212121',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonW:{
        width: Dimensions.get('window').width * 0.7,
        backgroundColor: 'rgb(0,142,255)',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',

    },
})
export default MainScreen;