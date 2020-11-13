import React, { useState } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, Button, Dimensions, ImageBackground, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, AntDesign,Entypo } from '@expo/vector-icons';

const MainScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.container} resizeMode="repeat">
            <View>
                <UserInfo
                    Gotoprofile={() => { props.navigation.navigate("profile") }} />
                <CurrentPlanet
                    planetclicked={() => {
                        setModalVisible(true);
                    }
                    }
                    onSolarClicked={() => { props.navigation.navigate("solarSystem") }}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Earth</Text>
                            <View style={styles.closebuttonView}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                ><FontAwesome name="close" size={30} color="white" />
                                </TouchableOpacity></View>
                            <View style={{alignItems: 'center', marginBottom:  Dimensions.get('window').height * 0.02}}>
                            <TouchableOpacity style={styles.buttonW}
                                                onPress={() => {
                                                    setModalVisible(!modalVisible);
                                                    props.navigation.navigate("planetInfo")}}>
                            <Entypo name="magnifying-glass" size={40} color="white" /><Text style={{fontWeight: 'bold',color: 'white'}}> Discover </Text>
                            </TouchableOpacity>
                            </View>
                            <View style={styles.doublebutton}>
                            <TouchableOpacity style={styles.buttonQ}>
                                <AntDesign name="form" size={40} color="white" /><Text style={{fontWeight: 'bold',color: 'white'}}> Quiz</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonC}>
                                <FontAwesome name="comments" size={40} color="white" /><Text style={{fontWeight: 'bold',color: 'white'}}>Comment</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </ImageBackground>
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

    }
})
export default MainScreen;