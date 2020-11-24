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
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



const Mercury = (props) => {
  // มันมี lib ที่ช่วยเรื่อง stiky อยู่จะเอามะ
  /* const navigation = useNavigation();
  const route = useRoute(); */
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
    <View style={{flex:1,backgroundColor: '#1f4068'}}>
        {backbutton()}
    <Pages> 
       
      <View style={{ flex: 1, backgroundColor: '#222831' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Mercury</Text>
          </View>
          <Image
                style={[styles.planet3,{height: 300,width: 300,marginTop:30, borderRadius: 15}]}
                source={require('../assets/Mercury.png')}
            />   
          <Text style={styles.info}>
              {'\t ดาวพุธ เป็นดาวเคราะห์ซึ่งอยู่ใกล้กับดวงอาทิตย์มากที่สุด เป็นดาวเคราะห์ขนาดเล็ก และไม่มีดวงจันทร์เป็นบริวาร โครงสร้างภายในของดาวพุธประกอบไปด้วยแกนเหล็กขนาดใหญ่มีรัศมีประมาณ 1,800 ถึง 1,900 กิโลเมตร ล้อมรอบด้วยชั้นที่เป็นซิลิเกต ซึ่งหนาเพียง 500 ถึง 600 กิโลเมตร บางส่วนของแกนอาจจะยังหลอมละลายอยู่'}             
            </Text>
        </View>
     
      </View>
      <View style={{ flex: 1, backgroundColor: '#1b1c25' }}>
        <View style={styles.centerView}>
            <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/mercury.json')}
            />
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 16}}>{'\t ในปี พ.ศ.2517 สหรัฐอเมริกาได้ส่งยานมารีเนอร์ 10 ไปสำรวจและทำแผนที่พื้นผิวดาวพุธเป็นครั้งแรกแต่เนื่องจากดาวพุธอยู่ใกล้ดวงอาทิตย์มาก จึงสามารถทำแผนที่ได้เพียงร้อยละ 45 ของพื้นที่ทั้งหมด พื้นผิวดาวพุธเต็มไปด้วยหลุมบ่อมากมายคล้ายกับพื้นผิวดวงจันทร์ มีเทือกเขาสูงใหญ่และแอ่งที่ราบขนาดใหญ่อยู่ทั่วไป แอ่งที่ราบแคลอริสมีขนาดเส้นผ่านศูนย์กลางประมาณ 1,300 กิโลเมตร นักดาราศาสตร์สันนิษฐานว่าแอ่งที่ราบขนาดใหญ่เช่นนี้เกิดจากการพุ่งชนของอุกกาบาตในยุคเริ่มแรกของระบบสุริยะ'}</Text>
              </View>
              
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#f05454' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: 300,width: 300,marginTop:30, borderRadius: 15}]}
                source={require('../assets/mersur.jpg')}
            />   
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 14}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 57.91 ล้านกิโลเมตร \n\n คาบวงโคจร 87.97 วัน \n\n หมุนรอบตัวเองใช้เวลา 58.65 วัน \n\n มวล 0.055 เท่า ของโลก \n\n ความหนาแน่น 0.98 ของโลก  \n\n อุณหภูมิ -180°C ถึง 430°C \n\n ไม่มีดวงจันทร์ไม่มีวงแหวน'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Mercury;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  Textcenter: {
    fontSize: 48,
    color: 'white',
  },
  centerView: {
    alignItems: 'center',
    marginTop: windowHeight*0.08,
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
      marginTop: 20,
    fontSize: 18,
    paddingLeft: 40,
    paddingRight: 40,
    color: 'white',
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
      marginTop: 20,
    backgroundColor: '#00334e',
    padding: 15,
    width: windowWidth*0.75,
    borderRadius: 15,
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
  }
});