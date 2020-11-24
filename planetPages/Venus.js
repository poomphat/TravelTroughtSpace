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



const Venus = (props) => {
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
       
      <View style={{ flex: 1, backgroundColor: '#206a5d' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Venus</Text>
          </View>
          <Text style={[styles.info, {marginTop: 20,}]}>
              {'\t ดาวศุกร์ อยู่ห่างจากดวงอาทิตย์เป็นลำดับที่ 2 เป็นดาวเคราะห์ที่มีขนาดใหญ่เป็นอันดับที่ 6 ไม่มีดวงจันทร์บริวาร ดาวศุกร์มีลักษณะที่คล้ายคลึงกับโลก จนได้ชื่อว่าเป็นดาวเคราะห์ฝาแฝดกับโลกของเราโครงสร้างภายในของดาวศุกร์ ประกอบด้วย แกนกลางที่เป็นเหล็กมีรัศมีประมาณ 3,000 กิโลเมตร ห่อหุ้มด้วยชั้นแมนเทิลที่มีความหนาประมาณ 3,000 กิโลเมตร และเปลือกแข็งที่ประกอบด้วยหินซิลิเกต'}             
            </Text>
        
        <Image
                style={[styles.planet3,{height: 300,width:300,marginTop:30, borderRadius: 15}]}
                source={require('../assets/ve.png')}
            /></View>  
      </View>
      <View style={{ flex: 1, backgroundColor: '#1b1c25' }}>
        <View style={styles.centerView}>
            <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/Venus2.json')}
            />
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 18}}>{'\t ยานอวกาศลำแรกที่เดินทางไปดาวศุกร์คือ มาริเนอร์ 2 ในปี พ.ศ.2505 หลังจากนั้นก็มีอีกหลายลำจนกระทั่งในปี พ.ศ. 2532 ยานอวกาศแมกเจลแลนได้ใช้เรดาร์ในการสำรวจผ่านชั้นบรรยากาศที่หนาแน่นของดาวศุกร์เพื่อทำแผนที่พื้นผิวของดาว การสำรวจโดยใช้สัญญาณเรดาร์ทำให้ทราบระดับสูงของพื้นผิวดาวศุกร์และพบว่าพื้นผิวดาวศุกร์ปกคลุมไปด้วยภูเขาไฟใหญ่และที่ราบที่เกิดจากการระเบิดของภูเขาไฟหลายแห่งนอกจากนี้ยังพบว่า พื้นผิวดาวศุกร์ไม่มีหลุมอุกกาบาตขนาดเล็ก เนื่องจากว่า อุกกาบาตจะถูกเผาไหม้ไปจนหมดในระหว่างที่ตกเข้าสู่ชั้นบรรยากาศที่หนาแน่นของดาวศุกร์'}</Text>
              </View>
            <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.40,marginTop:30, borderRadius: 15}]}
                source={require('../assets/ve sur.jpg')}
            />  
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#fbd46d' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: 300,width:300,marginTop:30, borderRadius: 15}]}
                source={require('../assets/Venus.jpg')}
            />
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 14}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 108.21 ล้านกิโลเมตร \n\n คาบวงโคจร 224.70 วัน  \n\n หมุนรอบตัวเองใช้เวลา 243.02 วัน (หมุนย้อนทางกับดาวเคราะห์ดวงอื่น) \n\n มวล 0.815 เท่า ของโลก \n\n อุณหภูมิพื้นผิว 470°C \n\n ไม่มีดวงจันทร์ไม่มีวงแหวน'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Venus;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  Textcenter: {
    fontSize: 48,
    color: 'white',
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