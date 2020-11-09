import React, { useRef, useState } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, Button, Dimensions, ImageBackground, Animated, Easing } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontDisplay } from 'expo-font';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const MainScreen = (props) => {
    const [current, setcurrent] = useState(0)
    const movebg = useRef(new Animated.Value(0)).current;
    const move = movebg.interpolate({
        inputRange: [0,0.125,0.250,0.375,0.500,0.625,0.750,0.875,1],
        outputRange: [0,200,400,600,800,1000,1200,1400,1600]
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
    const displayplanet = (index) => {
        console.log(index,indexmain)
        if (index < indexmain) {
            Animated.timing(movebg, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }).start()
            console.log(move,"left")
        } else {
            Animated.timing(movebg, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
                easing: Easing.out(Easing.ease),
            }).start()
            console.log(move,'right')
        }
        setindexmain(index);
        console.log(current);

    };
    return (
        <View style={{flex: 1,
            alignItems: 'center',
            justifyContent: "center",}}>
        <Animated.Image source={require('../assets/bg.png')} style={{ 
            position: 'absolute',
            width:Dimensions.get('window').width*2,
            height:Dimensions.get('window').height*2,
            transform: [{translateX: move }]}} resizeMode="cover"></Animated.Image>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', }}>
                <Carousel
                    ref={carouselRef}
                    data={data}
                    style={styles.Carousel}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width}
                    itemWidth={Dimensions.get('window').width}
                    onSnapToItem={(index) => displayplanet(index)}
                />
            </View>
            <View style={styles.boxdetail}>
                <Text style={{ fontSize: 36 }}>{indexmain}</Text>
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
        width: Dimensions.get('window').width * 0.8,
        height: 170,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',

    }
})
export default MainScreen;