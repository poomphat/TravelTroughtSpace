import React, { Component, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, Platform, TouchableOpacity } from 'react-native';

const tempplanetdata = {
    earth:{
        url:require("../assets/planet/earth.png"),
        subPlanet:{
            name:"moon",
            url:require("../assets/planet/moon.png")
        }
    },
    moon:{
        url:require("../assets/planet/moon.png"),
        subPlanet:{
            name:"earth",
            url:require("../assets/planet/earth.png")
        }
    }
}

const CurrentPlanet = (props) =>{
    const [currentPlanet, setCurrentPlanet] = useState("earth");
    return (
        <View style={styles.container}>
            {/*<View style={styles.planet}>
            </View>*/}
            <TouchableOpacity
                style={styles.touchPlanet}
                onPress={props.planetclicked}
            >   
                <Image 
                    style={styles.planet}
                    source={tempplanetdata[currentPlanet].url} //รอทำ data ดาว
                />
            </TouchableOpacity>
            <Image 
                style={styles.spaceShip}
                source={require("../assets/spaceship/ship1.png")} //รอทำ data ยาน
            />
            {/*asd*/}
            <TouchableOpacity
                style={styles.touchSubPlanet}
                onPress={() => setCurrentPlanet(tempplanetdata[currentPlanet].subPlanet.name)}
            >   
                <Image 
                    style={styles.subPlanet}
                    source={tempplanetdata[currentPlanet].subPlanet.url} //รอทำ data ดาว
                />
            </TouchableOpacity>
        </View>
 
    );
  }
export default CurrentPlanet;

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    container:{
        //backgroundColor:"green",
        width:windowWidth,
        height:windowHeight-100,
    },/*
    planettemp:{
        width: Platform.OS === "ios" ? windowWidth*0.8: windowWidth,
        height:windowHeight*0.6,
        //backgroundColor:"white",
        //left:Platform.OS === "ios" ? windowWidth*0.1 : 0,
        //borderRadius:Math.round((windowWidth + (windowHeight*0.6))/2),
        //top:"60%",
    }*/
    planet:{
        //position:"absolute",
        width:windowWidth,
        height:windowHeight*0.8,
    },
    touchPlanet:{
        top:"60%",
        height:windowHeight*0.8,
    },
    spaceShip:{
        position:"absolute",
        width:windowWidth*0.20,
        height:windowHeight*0.085,
        top:windowHeight*0.300,
        left:windowWidth*0.1,
        
    },
    touchSubPlanet:{
        position:"absolute",
        top:windowHeight*0.080,
        left:windowWidth*0.7,
        width:80,
        height:80,
        
    },
    subPlanet:{
        width:80,
        height:80,
    }
  });