import React, { useRef, useState } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, Button, Dimensions, ImageBackground, Animated, Easing } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontDisplay } from 'expo-font';

const data = [1, 2, 3, 4, 5, 6, 7, 8]
const dataEarth = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

const solarSystemScreen = (props) => {
    const [current, setcurrent] = useState(0)
    const movebg = useRef(new Animated.Value(0)).current;
    const move = movebg.interpolate({
        inputRange: [0,1],
        outputRange: [0,Dimensions.get('window').width]
    });

    const carouselRef = useRef('')
    const [indexmain, setindexmain] = useState(0)



    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.box}>
                <Text>{item}</Text>
                <Image
                    style={styles.star}
                    source={require("../assets/planet/earth.png")}
                    resizeMode="cover"
                />
            </View>);
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
    return (
        <View style={{flex: 1,
            alignItems: 'center',
            justifyContent: "center",}}>
        
        <Animated.Image source={require('../assets/bg.png')} style={{ 
            position: 'absolute',
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,
            transform: [{translateX: 0 }]}} resizeMode="cover">
        
        </Animated.Image>
        
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <Carousel
                    ref={carouselRef}
                    data={data}
                    style={styles.Carousel}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    onSnapToItem={(index) => setindexmain(index)}
                />
            </View>
            <View style={styles.boxdetail}>
                <Text style={{ fontSize: 36 }}>{dataEarth[indexmain]}</Text>
            </View>
        
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

    }
})
export default solarSystemScreen;