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
import * as Animatable from 'react-native-animatable';
//https://www.npmjs.com/package/react-native-image-filter
import {
    Grayscale,
  } from 'react-native-color-matrix-image-filters'
import { spring } from 'react-native-reanimated';
import { setCurrent } from '../store/actions/storetemp'

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
    const dispatch = useDispatch();

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
                        style={[styles.star, {tintColor: '#000000aa'}]}//STAR BUT NOT STAR BUT BLACK STAR
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
            justifyContent: "center",backgroundColor: '#1f4068'}}>
            {backbutton}
        <ImageBackground source={{uri : bg}} style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',}} resizeMode="repeat">
        
        </ImageBackground>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
            <TouchableOpacity 
              onPress={() => props.navigation.goBack()}
              style={styles.backbutton}>
              <Ionicons name="ios-arrow-back" size={40} color="white"/>
            </TouchableOpacity>
            <Animatable.Text animation="zoomIn" delay={70} duration={500}
            style={{position: 'absolute', color: 'white', fontWeight: 'bold',fontSize:36,top: Dimensions.get('window').height*0.08,alignSelf:'center'}}>
                <Text style={{color:'rgb(0,142,255)'}}>Solar</Text> System
            </Animatable.Text>
                <Carousel
                    ref={carouselRef}
                    data={data}
                    style={styles.Carousel}
                    renderItem={renderItem}
                    firstItem={props.navigation.getParam("currentPos")}
                    scrollToIndex={props.navigation.getParam("currentPos")}
                    inactiveSlideScale={0.5}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    onSnapToItem={(index) => setindexmain(index)}
                />
            </View>
            <Animatable.View style={styles.boxdetail} animation="zoomIn" delay={70} duration={500}>
                <Text style={{ fontSize: 36,color:'black',fontWeight: 'bold' }}>{datasystem[indexmain].title}</Text>
                <Text style={{ fontSize: 20,color:'black',fontWeight: 'bold',marginTop:5 }}>ดวงดาวลำดับที่  {indexmain+1} ของระบบสุริยะ</Text>
                <Text style={{ fontSize: 20,color:'black',fontWeight: 'bold',marginTop:5 }}></Text>
                <TouchableOpacity style={styles.gotravelbutton}
                onPress={() => {
                    if (indexmain <= planetLimit){
                    props.navigation.navigate("mainScreen",{current: indexmain})
                    dispatch(setCurrent(indexmain));
                    }
                    else{
                        setCantTravel(true)
                    }
                }}>
                <Text style={{color:'white', fontSize:20,fontWeight: 'bold'}}>Travel!!</Text>
                </TouchableOpacity>
            </Animatable.View>

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
        height: 200,
        backgroundColor: '#9ba4b4',
        borderRadius: 20,
        marginBottom: 20,
        padding: 20,
        borderColor: 'black',
        borderWidth: 5

    },
    gotravelbutton:{
        marginTop: 5,
        backgroundColor: '#1f4068',
        width: Dimensions.get('window').width*0.8,
        height: 60,
        borderWidth: 5,
        borderColor: 'rgb(0,142,255)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
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