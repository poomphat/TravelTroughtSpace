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



const Neptune = (props) => {
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
       
      <View style={{ flex: 1, backgroundColor: '#f30a49' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Neptune</Text>
          </View>
          <Text style={[styles.info, {marginTop: 20,}]}>
              {'\t ดาวเนปจูน ถูกค้นพบเนื่องจากนักดาราศาสตร์พบว่า ตำแหน่งของดาวยูเรนัสในวงโคจรรอบดวงอาทิตย์ไม่ได้เป็นไปตามกฏของนิวตันจึงตั้งสมมติฐานว่า จะต้องมีดาวเคราะห์อีกดวงหนึ่งที่อยู่ไกลถัดออกไปมารบกวนวงโคจรของดาวยูเรนัส ในที่สุดดาวเนปจูนก็ถูกค้นพบโดย โจฮานน์ กัลเล ในปี พ.ศ.2389'}             
            </Text>
        
        <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.40,marginTop:30, borderRadius: 15}]}
                source={require('../assets/nep.png')}
            /></View>  
      </View>
      <View style={{ flex: 1, backgroundColor: '#0c3c78' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{ height: 180,width:300,marginTop:90, borderRadius: 15}]}
                source={require('../assets/napsi.jpg')}
            /> 
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 18}}>{'\t ในช่วงเวลาที่ยานวอยเอเจอร์ 2 เข้าใกล้ดาวเนปจูนได้ถ่ายภาพ จุดมืดใหญ่ ทางซีกใต้ของดาวมีขนาดใหญ่เกือบครึ่งหนึ่งของจุดแดงใหญ่บนดาวพฤหัสบดี จุดมืดใหญ่นี้เป็นพายุหมุนเช่นเดียวกับจุดแดงใหญ่บนดาวพฤหัสบดี มีกระแสลมพัดแรงที่สุดในระบบสุริยะ ความเร็วลม 300 เมตร/วินาที หรือ 1,080 กิโลเมตรต่อชั่วโมง'}</Text>
              </View>
            <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.40,marginTop:30, borderRadius: 15}]}
                source={require('../assets/ve sur.jpg')}
            />  
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#28df99' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.40,marginTop:40, borderRadius: 15}]}
                source={require('../assets/nepgod.jpg')}
            /> 
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 14}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 4,498 ล้านกิโลเมตร \n\n คาบวงโคจร 164.8 ปี \n\n หมุนรอบตัวเองใช้เวลา 16.11 ชั่วโมง \n\n มวล 17.147 เท่า ของโลก \n\n อุณหภูมิพื้นผิว -214°C  \n\n ดวงจันทร์ที่ค้นพบแล้ว 13 ดวง วงแหวนที่ค้นพบแล้ว 6 วง'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Neptune;
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
    fontSize: 20,
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
    marginTop: 50,
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