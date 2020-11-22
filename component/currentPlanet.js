import React, { Component, useState, useRef, useEffect } from "react";
import { Pages } from "react-native-pages";
import {datasystem} from '../dataSystem/data'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

const tempplanetdata = {
  earth: {
    url: require("../assets/planet/earth.png"),
    subPlanet: {
      name: "moon",
      url: require("../assets/planet/moon.png"),
    },
  },
  moon: {
    url: require("../assets/planet/moon.png"),
    subPlanet: {
      name: "earth",
      url: require("../assets/planet/earth.png"),
    },
  },
};

const CurrentPlanet = (props) => {
  const moveplanet = useRef(new Animated.Value(0)).current;
  const rotate = moveplanet.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  useEffect (() =>{
    Animated.loop(
      Animated.timing(moveplanet, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  },[])
  return (
    <View style={styles.container}>
      {/*<View style={styles.planet}>
            </View>*/}
      <TouchableOpacity
        style={styles.touchPlanet}
        onPress={props.planetclicked}
      >
        <Animated.Image
          style={{ transform: [{ rotate: rotate }],width: 600,height: 600}}
          source={datasystem[props.planetcurrent].picture} //รอทำ data ดาว
        />
      </TouchableOpacity>
      <Image
        style={styles.spaceShip}
        source={require("../assets/spaceship/ship1.png")} //รอทำ data ยาน
      />
      <TouchableOpacity
        style={styles.touchSubPlanet}
      >
        <Image
          style={styles.subPlanet}
          source={require("../assets/planet/moon.png")} //รอทำ data ดาว
        />
      </TouchableOpacity>
    </View>
  );
};
export default CurrentPlanet;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    //backgroundColor:"green",

    height: windowHeight - 100,
  } /*
    planettemp:{
        width: Platform.OS === "ios" ? windowWidth*0.8: windowWidth,
        height:windowHeight*0.6,
        //backgroundColor:"white",
        //left:Platform.OS === "ios" ? windowWidth*0.1 : 0,
        //borderRadius:Math.round((windowWidth + (windowHeight*0.6))/2),
        //top:"60%",
    }*/,
  touchPlanet: {
    top: "55%",
    height: windowHeight * 0.7,
    width: windowWidth,
    alignItems: "center",
  },
  spaceShip: {
    position: "absolute",
    width: windowWidth * 0.2,
    height: windowHeight * 0.085,
    top: windowHeight * 0.3,
    left: windowWidth * 0.1,
  },
  touchSubPlanet: {
    position: "absolute",
    top: windowHeight * 0.08,
    left: windowWidth * 0.7,
    width: 80,
    height: 80,
  },
  subPlanet: {
    width: 80,
    height: 80,
  },
});
