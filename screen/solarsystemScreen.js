import React, { useRef, useState } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, Button, Dimensions, ImageBackground, Animated, Easing,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontDisplay } from 'expo-font';
import {datasystem} from '../dataSystem/data'
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import {
    Grayscale,
  } from 'react-native-color-matrix-image-filters'

const data = [1, 2, 3, 4, 5, 6, 7, 8]
const dataEarth = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

const solarSystemScreen = (props) => {
    const bg = useSelector( (state) => state.img.background );
    const currentShip = useSelector( (state) => state.user.CurrentShip);
    const backbutton = () => {
        return(
            <TouchableOpacity 
              onPress={() => props.navigation.goBack()}
              style={styles.backbutton}>
              <Ionicons name="ios-arrow-back" size={40} color="white"/>
            </TouchableOpacity>
        );
      }
    const carouselRef = useRef('')
    const [indexmain, setindexmain] = useState(props.navigation.getParam("currentPos"))
    const [planetLimit, setPlanetLimit] = useState((3 * currentShip) +2)
    const [cantTravel, setCantTravel] = useState(false)

    console.log(props.navigation.getParam("currentPos"))

    const renderItem = ({ item, index }) => {
        if(index <= planetLimit){
            return (
                <View style={styles.box}>
                    <Image
                        style={styles.star}
                        source={datasystem[index].picture}
                        resizeMode="cover"
                    />
                </View>);
        }
        else{
            return(
                <View style={styles.box}>
                    <Image
                        style={styles.starBlack}
                        source={datasystem[index].picture}
                        resizeMode="cover"
                    />
                </View>
            );
        }
    };
    /*
    const displayplanet = (index) => {
        console.log(index,indexmain)
        if (index < indexmain) {
            Animated.timing(movebg, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }).start(() => {movebg.setValue(0)})
            console.log(move,"left")
        } else {
            Animated.timing(movebg, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }).start(movebg.setValue(0))
            console.log(move,'right')
        }
        setindexmain(index);
        console.log(current);

    };
    */
    const customViewCantTravel = () => {
        return(
            <View style={{alignItems: 'center'}}>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={styles.Textalert}>You can't travel is planet right now</Text>
                    <Text style={styles.Textalertmini}>Try avalible planet</Text>
                </View>
                <TouchableOpacity style={styles.failedlbutton}
                onPress={() => {
                    setCantTravel(false)
                }}>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{flex: 1,
            alignItems: 'center',
            justifyContent: "center",}}>
       {backbutton}
        <Animated.Image source={{uri : bg}} style={{ 
            position: 'absolute',
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,
            transform: [{translateX: 0 }]}} resizeMode="cover">
        
        </Animated.Image>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            <TouchableOpacity 
              onPress={() => props.navigation.goBack()}
              style={styles.backbutton}>
              <Ionicons name="ios-arrow-back" size={40} color="white"/>
            </TouchableOpacity>
                <Carousel
                    ref={carouselRef}
                    data={data}
                    style={styles.Carousel}
                    renderItem={renderItem}
                    firstItem={props.navigation.getParam("currentPos")}
                    scrollToIndex={props.navigation.getParam("currentPos")}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    onSnapToItem={(index) => setindexmain(index)}
                />
            </View>
            <View style={styles.boxdetail}>
                <Text style={{ fontSize: 36 }}>{datasystem[indexmain].title}</Text>
                <TouchableOpacity style={styles.gotravelbutton}
                onPress={() => {
                    if (indexmain <= planetLimit){
                    props.navigation.navigate("mainScreen",{current: indexmain})
                    }
                    else{
                        setCantTravel(true)
                    }
                }}>
                <Text style={{color:'white', fontSize:20,fontWeight: 'bold'}}>Travel!!</Text>
                </TouchableOpacity>
            </View>

            <AwesomeAlert
                        show={cantTravel}
                        showProgress={false}
                        customView={customViewCantTravel()}
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        contentContainerStyle={styles.alert}
                        overlayStyle={styles.bgalert}
                        onDismiss={() => setCantTravel(false)}
                        />
        
        </View>
    );
}
const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.8,
    },
    Carousel: {
        position: 'absolute',
    },
    star: {
        width: 300,
        height: 300,
    },
    boxdetail: {
        width: Dimensions.get('window').width * 0.9,
        height: 250,
        backgroundColor: '#1f4068',
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    gotravelbutton:{
        marginTop: 20,
        backgroundColor: 'rgb(48,209,88)',
        width: Dimensions.get('window').width*0.8,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    backbutton:{
        width: 60,
        height: 60,
        position: 'absolute',
        top: Dimensions.get('window').height*0.08,
        left: Dimensions.get('window').width*0.08,
        zIndex: 1,
        //backgroundColor: 'white'
      },
    starBlack:{
        width: 300,
        height: 300,
        backgroundColor:'rgb(0,0,0)'
    },
    bgalert:{
        backgroundColor: '#000000bb'
    },
    alert:{
        backgroundColor: '#1f4068',
        borderRadius: 10,
        width: Dimensions.get('window').width*0.7,
    },
    Textalert:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    Textalertmini:{
        marginTop: 20,
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
})
export default solarSystemScreen;