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



const Uranus = (props) => {
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
       
      <View style={{ flex: 1, backgroundColor: '#892cdc' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Uranus</Text>
          </View>
          <Text style={[styles.info, {marginTop: 20,}]}>
              {'\t ยูเรนัส ถูกค้นพบครั้งแรกโดย วิลเลี่ยม เฮอส์เชล ในปี พ.ศ.2534  สองร้อยปีต่อมา ยานวอยเอเจอร์ 2 ทำการสำรวจดาวยูเรนัสในปี พ.ศ. 2529 พบว่า บรรยากาศของดาวยูเรนัสประกอบด้วยไฮโดรเจน 83%, ฮีเลียม 15% และมีเทน 2% ดาวยูเรนัสมีสีฟ้าเนื่องจากแก๊สมีเทนดูดกลืนสีแดงและสะท้อนสีน้ำเงิน'}             
            </Text>
        
        <Image
                style={[styles.planet3,{height: 300,width:300,marginTop:30, borderRadius: 15}]}
                source={require('../assets/uranus.png')} //แก้
            /> 
          </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fd3a69' }}>
        <View style={styles.centerView}>
            <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/Venus.json')}
            />
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 18}}>{'\t ดาวยูเรนัสมีวงแหวนเช่นเดียวกับดาวเคราะห์ชั้นนอกดวงอื่นๆ วงแหวนของดาวยูเรนัสมีความสว่างไม่มาก เนื่องจากประกอบด้วยอนุภาคขนาดเล็ก มีขนาดตั้งแต่ฝุ่นผงจนถึง 10 เมตร'}</Text>
              </View>
           
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#21e6c1' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: 300,width:350,marginTop:30, borderRadius: 15}]}
                source={require('../assets/us.jpg')}
            />  
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 16}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 2,870 ล้านกิโลเมตร \n\n คาบวงโคจร 80 ปี \n\n หมุนรอบตัวเองใช้เวลา 17.24 ชั่วโมง \n\n มวล 14.371 เท่า ของโลก \n\n อุณหภูมิพื้นผิว -216°C \n\n ดวงจันทร์ที่ค้นพบแล้ว 27 ดวง วงแหวนที่ค้นพบแล้ว 13 วง'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Uranus;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  Textcenter: {
    fontSize: 48,
    color: 'white',
  },
  centerView: {
    alignItems: 'center',
    marginTop: windowHeight*0.1,
  },
  centerView2: {
    alignItems: 'center',
  },
  planet: {
    width: windowWidth*0.9,
  },
  planet3: {
    width: windowWidth*2,

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