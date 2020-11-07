import React, { Component } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/linear-gradient/
import { LinearGradient } from 'expo-linear-gradient';

const Profile = (props) => {

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container} resizeMode="repeat">
      <View>
        <View style={styles.pictitleout}>
          <Image
            style={styles.pictitle}
            source={require("../assets/pro.png")}
          />
        </View>
        <View style={styles.Bgprofile}>
          <Image
            style={styles.profilePic}
            source={require("../assets/mheeIconTest.png")} //รอแก้จาก UserDB
          />
        <Text style={styles.textTitle}>Towa Tenshi</Text>
        </View>
        <View style={styles.detail}>
        <View style={styles.box}>
          <View style={styles.DetailBox}>
            <Text style={{ fontSize: 15 }}>Name: Towa Tenshi</Text>
            <Text style={{ fontSize: 15 }}>Age: xxx</Text>
            <Text style={{ fontSize: 15 }}>Kawaii</Text>
          </View>
        </View>

        <View style={styles.ship}>

          <View style={styles.topship}>
            <Text style={styles.titleship}>Your Ship</Text>
          </View>
          <View style={styles.bottomship}>
            <Image
              style={styles.spaceShip}
              source={require("../assets/spaceship/ship1.png")} //รอทำ data ยาน
            />
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={styles.Select}>
              <Text style={{ fontSize: 18 }}>Select spaceship</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
    </ImageBackground>

  );
}
export default Profile;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  titleship: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black'
  },
  textTitle: {
    fontSize: 36,
    color: 'white',
  },
  Spaceship: {
    height: 100,
    width: 100,
  },
  linearGradient: {
    height: windowHeight,
  },
  Textcenter: {
    fontSize: 48,
    color: 'black',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Bgprofile: {
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.40,
    shadowRadius: 10.19,
    elevation: 20,
  },
  profilePic: {
    width: 180,
    height: 180,
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 90,
    margin: 10,
  },
  detail:{
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity:1,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    height: '70%',
    alignItems: 'center',
  },
  DetailBox: {
    height: windowHeight * 0.1,
    backgroundColor: '#dddddd',
    width: windowWidth * 0.9,
    marginTop:30,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  pictitle: {
    width: 150,
    height: 80,
    marginTop: windowHeight * 0.04,
  },
  ship: {
    borderRadius: 15,
    width: windowWidth * 0.9,
    marginTop:30,
    backgroundColor: '#dddddd',
    paddingBottom: 10,
    
  },
  topship: {
    height: 60,
    width: windowWidth * 0.45,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  bottomship: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceShip: {
    width: 180,
    height: 180,
    marginTop:30,
  },
  Select: {
    width: windowWidth * 0.85,
    height: 60,
    backgroundColor: "#ffc93c",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linear: {
    width: windowWidth,
    height: windowHeight * 0.45,
    borderRadius: 10,
  }
});