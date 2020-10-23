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

        </View>
        <View style={styles.box}>

          <View style={styles.TitleBox}>

            <Text style={styles.textTitle}>Rank 7</Text>
          </View>

          <View style={styles.DetailBox}>
            <Text style={{ fontSize: 15 }}>Name: Towa Tenshi</Text>
            <Text style={{ fontSize: 15 }}>Age: xxx</Text>
            <Text style={{ fontSize: 15 }}>Kawaii</Text>
          </View>
        </View>
      
        <View style={styles.ship}>
        <LinearGradient colors={['#485563', '#29323c']} style={styles.linear} start={[0, 0]} end={[1, 1]}>
          <View style={styles.topship}>
          <Text style={styles.titleship}>Your Ship</Text>
          </View>
          <View style={styles.bottomship}>
          <Image 
                style={styles.spaceShip}
                source={require("../assets/spaceship/ship1.png")} //รอทำ data ยาน
            />
          </View>
        
        <View style={{justifyContent:'center',alignItems: 'center', marginTop:windowHeight* 0.05}}>
          <TouchableOpacity style={styles.Select}>
            <Text style={{fontSize: 18}}>Select spaceship</Text>
          </TouchableOpacity>
        </View>
         </LinearGradient>
      </View>
     
      </View>
    </ImageBackground>

  );
}
export default Profile;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  titleship:{
    fontSize: 24,
    textAlign: 'center',
    color: 'white'
  },
  textTitle: {
    fontSize: 18,
    color: 'black',
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
    position: "absolute",
    width: 180,
    height: 180,
    borderColor: "white",
    borderWidth: 1.5,
    borderRadius: 90,
    margin: 10,
  },
  TitleBox: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.25,
    marginTop: windowHeight * 0.26,
    alignSelf: 'center',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    padding: 20,
    backgroundColor: '#ffc93c',
    justifyContent: 'center',
  },
  DetailBox: {
    height: windowHeight * 0.1,
    backgroundColor: 'white',
    width: windowWidth * 0.6,
    marginTop: windowHeight * 0.26,
    alignSelf: 'center',
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.19,
    elevation: 20,
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
  ship:{
    marginTop: windowHeight * 0.08,
    height: windowHeight*0.45,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.60,
    shadowRadius: 10.19,
    elevation: 20,
    borderRadius: 10,
  },
  topship:{
    height: 60,
    width: windowWidth * 0.45,
    borderRadius: 15,
    justifyContent: 'center',
    alignSelf:'center',
  },
  bottomship:{
    height: windowHeight * 0.21,
    width: windowWidth * 0.85,
    justifyContent:'center',
    alignItems:'center',
    marginLeft: windowWidth*0.075
  },
  spaceShip:{
    width: '70%',
    height: '70%',
  },
  Select:{
    width: windowWidth*0.85,
    height: 60,
    backgroundColor: "#ffc93c",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linear:{
    width: windowWidth,
    height: windowHeight*0.45,
    borderRadius: 10,
  }
});