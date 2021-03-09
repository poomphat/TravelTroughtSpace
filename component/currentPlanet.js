import React, { Component, useState, useRef, useEffect } from "react";
import {datasystem, spaceShip} from '../dataSystem/data'
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
import { useSelector, useDispatch } from "react-redux";

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
  //const currentShip = useSelector( (state) => state.user.CurrentShip );
  const moveplanet = useRef(new Animated.Value(0)).current;
  console.log(spaceShip[props.spaceShipCurrent])
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
          style={[{ transform: [{ rotate: rotate }]},datasystem[props.planetcurrent].title != 'Saturn' ? {width: 600,height: 600} : {width: 660,height: 600}]}
          source={datasystem[props.planetcurrent].picture} //รอทำ data ดาว
        />
      </TouchableOpacity>
      <Image
        style={styles.spaceShip}
        source={spaceShip[props.spaceShipCurrent].pic} //รอทำ data ยาน
      />
      {datasystem[props.planetcurrent].title == 'Earth' ?
      <TouchableOpacity
        style={styles.touchSubPlanet}
      >
        <Image
          style={styles.subPlanet}
          source={require("../assets/planet/moon.png")} //รอทำ data ดาว
        />
      </TouchableOpacity> : (<View></View>)}
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
    width: 100,
    height: 85,
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
