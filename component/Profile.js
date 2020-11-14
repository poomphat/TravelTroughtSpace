import React, { Component,useRef } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
//https://docs.expo.io/versions/latest/sdk/linear-gradient/
import Carousel from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import ProgressBar from 'react-native-progress/Bar';
import { FontAwesome,Ionicons } from '@expo/vector-icons';

const data = [1, 2, 3]

const Profile = (props) => {
  const carouselRef = useRef('')
  const renderItem = ({ item, index }) => {
    return (
        <View style={styles.box}>
            <Image
              style={styles.spaceShip}
              source={require("../assets/spaceship/ship1.png")} //รอทำ data ยาน
            />
        </View>);
};
  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.container} resizeMode="repeat">
      <View>
      <TouchableOpacity 
          onPress={() => props.navigation.goBack()}
          style={styles.backbutton}>
          <Ionicons name="ios-arrow-back" size={40} color="white"/>
        </TouchableOpacity>
        <Animatable.View style={styles.Bgprofile}  animation="fadeInDown" delay={0}>
          <Image
            style={styles.profilePic}
            source={require("../assets/mheeIconTest.png")} //รอแก้จาก UserDB
          />
        <Text style={styles.textTitle}>Towa Tenshi</Text>
        </Animatable.View>
        <View style={styles.detail}>
        <Animatable.View style={styles.box} animation="fadeInUp"  delay={200}>
          <View style={styles.DetailBox}>
            <Text style={{ fontSize: 15 ,color: 'white',fontWeight: 'bold' }}>Name: Towa Tenshi</Text>
            <Text style={{ fontSize: 15,color: 'white',fontWeight: 'bold' }}>Age: xxx</Text>
            <Text style={{ fontSize: 15,color: 'white',fontWeight: 'bold' }}>Kawaii</Text>
          </View>
        </Animatable.View>

        <Animatable.View style={styles.ship} animation="fadeInUp"  delay={300}>

          <View style={styles.topship}>
            <Text style={styles.titleship}>Your Ship</Text>
            <TouchableOpacity style={styles.Select}>
              <Text style={{ fontSize: 14,fontWeight: 'bold',color:'rgb(0,142,255)' }}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.bottomship}>

            <Carousel
                    ref={carouselRef}
                    data={data}
                    style={styles.Carousel}
                    renderItem={renderItem}
                    sliderWidth={Dimensions.get('window').width*0.9}
                    itemWidth={Dimensions.get('window').width*0.30}
                    activeSlideAlignment={'start'}
                    loop={true}
                    loopClonesPerSide={5}
                />
          </View>

          </View>
        </Animatable.View>
        <Animatable.View style={styles.box} animation="fadeInUp"  delay={400}>
          <View style={styles.DetailBox}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.titleship}>Achievement</Text>
          <TouchableOpacity style={styles.Select}>
              <Text style={{ fontSize: 14,fontWeight: 'bold',color:'rgb(0,142,255)' }}>View</Text>
            </TouchableOpacity></View>

            <Text style={{ fontSize: 15 ,color: 'white',fontWeight: 'bold'
                            ,marginTop: Dimensions.get('window').height*0.01
                            ,marginBottom: Dimensions.get('window').height*0.015 }}>Progess : 48%</Text>
            <ProgressBar
                    progress={0.48} 
                    width={Dimensions.get('window').width*0.8}
                    height={20}
                    animated={true}
                    color={"lime"} //รอแก้สี
                    borderWidth={2}
                    borderColor={"white"}
                />
          </View>
        </Animatable.View>
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
    marginRight: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  textTitle: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold'
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
    marginTop: windowHeight * 0.06,
    marginBottom: windowHeight * 0.04,
  },
  profilePic: {
    width: 180,
    height: 180,
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 90,
    margin: 10,
    marginBottom: windowHeight * 0.04,
  },
  detail:{
    height: '70%',
    alignItems: 'center',
  },
  DetailBox: {
    backgroundColor: '#1f4068',
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

  ship: {
    borderRadius: 15,
    width: windowWidth * 0.9,
    marginTop:30,
    backgroundColor: '#1f4068',
    paddingBottom: 10,
    
  },
  topship: {
    height: 40,
    width: windowWidth * 0.45,
    borderRadius: 15,
    marginTop:15,
    marginLeft: windowWidth *0.05,
    flexDirection: 'row',
  },
  bottomship: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceShip: {
    width: windowWidth*0.3,
    height: windowHeight*0.1,


  },
  Select: {
    height:30,
    backgroundColor: "#0f3057",
    borderColor: 'rgb(0,142,255)',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  linear: {
    width: windowWidth,
    height: windowHeight * 0.45,
    borderRadius: 10,
  },
  backbutton:{
    width: 60,
    height: 60,
    position: 'absolute',
    top: windowHeight*0.08,
    left: windowWidth*0.08,
    zIndex: 1,
  },
});