import React, { Component, useEffect, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

const Listdata = [
          'ความหนาแน่นเฉลี่ย 5,520 กิโลกรัม/ลูกบาศก์เมตร',
          'คาบการโคจรรอบดวงอาทิตย์ 365.26 วัน',
          'หมุนรอบตัวเอง ใช้เวลา 23 ชั่วโมง 56 นาที 4.09 วินาที',
          'ระยะห่างจากดวงอาทิตย์เฉลี่ย 150 ล้านกิโลเมตร',
          'ความเอียงของแกนโลกจากแนวตั้งฉาก 23.5 องศา',
          'ความเร็วเฉลี่ยในการเคลื่อนที่ 29.78 กิโลเมตร/วินาที',
          'อุณหภูมิพื้นผิวเฉลี่ย 15 องศา'
]


const PlanetInfo = (props) => {
  // มันมี lib ที่ช่วยเรื่อง stiky อยู่จะเอามะ
  const [loaded] = useFonts({
    Kanit: require('../assets/fonts/Kanit-Regular.ttf'),
  });
  if (!loaded) {
      return null;
  }
  const datailfirst = Listdata.map((data, index) => {
    return (<View style={styles.list}>
      <Text style={{color: 'white', fontFamily:'Kanit', fontSize: 16,padding: 15,}}>{data}
      </Text>
      </View>)
  });
  const backbutton = () => {
    return(
        <TouchableOpacity 
          onPress={() => props.navigation.goBack()}
          style={styles.backbutton}>
          <Ionicons name="ios-arrow-back" size={40} color="white"/>
        </TouchableOpacity>
    );
  }
  return (
    <Pages> 
      <View style={{ flex: 1, backgroundColor: '#021F36' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Earth</Text>
          </View>
          <LottieView
                autoPlay={true}
                style={styles.planet}
                source={require('../assets/earth.json')}
            />
          <Text style={styles.info}>
              {'\t โลกเป็นดาวเคราะห์เพียงดวงเดียวที่ไม่ได้ถูกตั้งชื่อตามเทพนิยายกรีกและโรมัน (สังเกตว่าดาวเคราะห์ดวงอื่นจะถูกตั้งชื่อเป็นชื่อเทพเจ้าหมด เช่น เทพยูเรนัส เทพเนปจูน  เป็นต้น) คำว่า "Earth" มาจากภาษาอังกฤษและเยอรมันโบราณ และยังมีชื่อเรียกอย่างอื่นอีกหลายร้อยชื่อ ตามภาษาต่างๆ'}
            </Text>
        </View>
        {backbutton()}
      </View>

      <View style={{ flex: 1, backgroundColor: '#ff6c00' }}>
      {backbutton()}
        <View style={styles.centerView2}>

        <Image
          style={styles.planet2}
          source={require("../assets/planet/1.png")}
          resizeMode="contain"
        />
        <Text style={styles.Textin}>Fact</Text>
        {datailfirst}
        
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#28DF99' }}>
        <View style={styles.centerView}>
              <View style={styles.matter}>
              <Text style={styles.Textcenter}>Minerals </Text>
              <Text style={{color: 'white', fontFamily:'Kanit',fontSize: 20}}>{' 34.6% เหล็ก \n 29.5% ออกซิเจน \n 15.2% ซิลิคอน \n 12.7% แมกนิเซียม \n 2.4% นิเกิล \n 1.9% กำมะถัน \n 0.05% ไททาเนียม'}</Text>
              </View>
          <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/mine.json')}
            />
        </View>
        {backbutton()}
      </View>
    </Pages>
    

  );
}
export default PlanetInfo;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  Textcenter: {
    fontSize: 48,
    color: 'white',
    fontFamily: 'Kanit'
  },
  centerView: {
    alignItems: 'center',
    marginTop: windowWidth*0.2,
  },
  centerView2: {
    alignItems: 'center',
  },
  planet: {
    width: windowWidth*0.9,
  },
  planet3: {
    width: windowWidth*0.9,

  },
  info: {
    fontSize: 20,
    paddingLeft: 40,
    paddingRight: 40,
    color: 'white',
    fontFamily: 'Kanit',
  },

  planet2:{
    width: windowWidth,
    height: windowHeight*0.6,
    marginTop: -windowHeight*0.3,

  },
  Quiz: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth*0.8,
    height: windowHeight*0.3,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,

  },
  Comment: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: windowWidth*0.8,
    height: windowHeight*0.3,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    
  },
  list:{
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#DB6400',
    marginBottom: 10,
    borderRadius: 10,
    width: windowWidth*0.9,
  },
  matter:{
    backgroundColor: '#2Ec1AC',
    padding: 20,
    width: windowWidth*0.8,
    borderRadius: 30,
    marginTop: windowHeight*0.1,
  },
  backbutton:{
    width: 60,
    height: 60,
    position: 'absolute',
    top: windowHeight*0.08,
    left: windowWidth*0.08,
    zIndex: 1,
  },
  Textin:{
    marginTop: -windowHeight*0.05,
    fontSize: 96,
    color: 'white',
    fontFamily: 'Kanit'
  }
});