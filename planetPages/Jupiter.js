import React, { Component, useEffect, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';



const Jupiter = (props) => {
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
       
      <View style={{ flex: 1, backgroundColor: '#d65a31' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Jupiter</Text>
          </View>
          <Image
                style={[styles.planet3,{height: 300,width: 300,marginVertical:30, borderRadius: 15}]}
                source={require('../assets/jupi.png')}
            />   
          <Text style={styles.info}>
              {'\t ดาวพฤหัสบดี เป็นวัตถุท้องฟ้าที่มีความสว่างมากเป็นอันดับที่ 4 รองจากดวงอาทิตย์ ดวงจันทร์ และดาวศุกร์ และเป็นที่รู้จักกันมาตั้งแต่ยุคก่อนประวัติศาสตร์ ดาวพฤหัสบดีถูกสำารวจเป็นครั้งแรกโดยยานไพโอเนียร์ 10 ในปี พ.ศ.2516 ตามด้วย ไพโอเนียร์ 11, วอยเอเจอร์ 1, วอยเอเจอร์ 2, ยูลิซิส และกาลิเลโอ ดาวพฤหัสบดีเป็นดาวเคราะห์แก๊สซึ่งบรรยากาศหนาแน่น มีองค์ประกอบหลักเป็นไฮโดรเจน 90% และฮีเลียม 10% ปะปนด้วยมีเทน น้ำ และแอมโมเนียจำนวนเล็กน้อย ลึกลงไปด้านล่างเป็นแมนเทิลชั้นนอกซึ่งประกอบไปด้วยไฮโดรเจนและฮีเลียมเหลว และแมนเทิลชั้นในที่ประกอบไปด้วยไฮโดรเจนซึ่งมีสมบัติเป็นโลหะ และแกนกลางที่เป็นหินแข็งมีขนาดเป็น 2 เท่าของโลก'}             
            </Text>
        </View>
     
      </View>
      <View style={{ flex: 1, backgroundColor: '#1b1c25' }}>
        <View style={styles.centerView}>
  
              <View style={[styles.matter,{marginTop: 100}]}>
              <Text style={{color: 'white',fontSize: 16}}>{'\t ดาวพฤหัสบดีมีขนาดใหญ่กว่าโลกมาก แต่หมุนรอบตัวเองหนึ่งรอบใช้เวลาไม่ถึง 10 ชั่วโมง แรงหนีศูนย์กลางเหวี่ยงให้ดาวมีสัณฐานเป็นทรงแป้น และทำให้การหมุนเวียนของชั้นบรรยากาศแบ่งเป็นแถบสีสลับกัน แถบเหล่านี้เป็นเซลล์การพาความร้อน แถบสีอ่อนคืออากาศร้อนยกตัว แถบสีเข้มคืออากาศเย็นจมตัวลง นอกจากนั้นยังมีจุดแดงใหญ่ เป็นรูปวงรีขนาดใหญ่ซึ่งมีอาณาบริเวณกว้าง 25,000 กิโลเมตร สามารถบรรจุโลกได้สองดวง จุดแดงใหญ่เป็นพายุหมุนซึ่งมีอายุมากกว่า 300 ปี'}</Text>
              </View>
              <Image
                style={[styles.planet3,{height: 200,width: 300,marginVertical:30, borderRadius: 15}]}
                source={require('../assets/js.png')}
            />  
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#1b1c25' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: 300,width: 300,marginVertical:30, borderRadius: 15}]}
                source={require('../assets/juti.jpg')}
            />  
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 18}}>{'\t ปี พ.ศ.2552 ยานวอยเอเจอร์พบว่า ดาวพฤหัสบดีมีวงแหวนเช่นเดียวกับดาวเสาร์ แต่มีขนาดเล็กและบางกว่ามาก วงแหวนเหล่านี้ประกอบไปด้วยเศษหินและฝุ่นที่มีขนาดเล็ก แต่ไม่มีน้ำแข็งเป็นองค์ประกอบ จึงทำให้วงแหวนไม่สว่างมาก (หินและฝุ่นสะท้อนแสงอาทิตย์ได้ไม่ดีเท่ากับน ้าแข็ง) ปัจจุบันพบว่า ดาวพฤหัสมีดวงจันทร์อย่างน้อย 79 ดวง แต่มีเพียง 4 ดวงที่เป็นดวงจันทร์ขนาดใหญ่และมีรูปร่างเป็นทรงกลม ได้แก่ ไอโอยุโรปา แกนีมีด และคัลลิสโต เรียกโดยรวมว่า ดวงจันทร์กาลิเลียน เนื่องจากเป็นดวงจันทร์ที่ค้นพบโดยกาลิเลโอ'}</Text>
              </View>
              
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#ff5722' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: 300,width: 300,marginVertical:30, borderRadius: 10}]}
                source={require('../assets/jn.jpg')}
            />  
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 14}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 778.41 ล้านกิโลเมตร \n\n คาบวงโคจร11.86 ปี    \n\n หมุนรอบตัวเองใช้เวลา 9.92 ชั่วโมง \n\n มวล 317.82 เท่า ของโลก \n\n ความหนาแน่น 1.33 กรัม/ลูกบาศก์เซนติเมตร   \n\n อุณหภูมิ -148°C \n\n องค์ประกอบหลักของบรรยากาศ ไฮโดรเจน ฮีเลียม'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Jupiter;
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
    fontSize: 16,
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