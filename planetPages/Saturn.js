import React, { Component, useEffect, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';



const Saturn = (props) => {
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
       
      <View style={{ flex: 1, backgroundColor: '#14274e' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Saturn</Text>
          </View>
          <Image
                style={[styles.planet3,{height: 300,width: 400,marginTop:30, borderRadius: 15}]}
                source={require('../assets/saturn1.png')} //แก้
            />   
          <Text style={styles.info}>
              {'\t ดาวเสาร์ เป็นดาวเคราะห์ที่รู้จักกันมาตั้งแต่ก่อนยุคประวัติศาสตร์ กาลิเลโอสังเกตดาวเสาร์ด้วยกล้องโทรทรรศน์เป็นครั้งแรกเมื่อปี พ.ศ. 2153 เขามองเห็นดาวเสาร์มีลักษณะเป็นวงรี จนกระทั่งปี พ.ศ.2202 คริสเตียน ฮอยเกนส์ พบว่าวงรีที่กาลิเลโอเห็นนั้นคือวงแหวนของดาวเสาร์ เป็นที่เชื่อกันว่าดาวเสาร์เป็นดาวเคราะห์เพียงดวงเดียวของระบบสุริยะที่มีวงแหวน '}             
            </Text>
        </View>
     
      </View>
      <View style={{ flex: 1, backgroundColor: '#525252' }}>
        <View style={styles.centerView}>
              <View style={[styles.matter,{marginTop: 50}]}>
              <Text style={{color: 'white',fontSize: 16}}>{'\t  บรรยากาศของดาวเสาร์เป็น ไฮโดรเจน75% ฮีเลียม 25% ปะปนไปด้วยน้ำ มีเทน แอมโมเนีย จำนวนเล็กน้อย แถบสีบนดาวเสาร์เกิดขึ้นจากการหมุนรอบตัวเองเร็วมาก จนทำให้เกิดการหมุนวนของชั้นบรรยากาศที่มีอุณหภูมิแตกต่างกัน จึงปรากฏเป็นแถบเข้มและจางสลับกันไป โครงสร้างภายในของดาวเสาร์มีลักษณะคล้ายคลึงกับของดาวพฤหัสบดี มีแกนกลางที่เป็นหินแข็ง ห่อหุ้มด้วยแมนเทิลชั้นในที่เป็นโลหะไฮโดรเจน และแมนเทิลชั้นนอกที่เป็นไฮโดรเจนและฮีเลียมเหลว'}</Text>
              </View>
              <Image
                style={[styles.planet3,{height: 300,width: 320,marginTop:30, borderRadius: 15}]}
                source={require('../assets/sat.jpg')} //แก้
            />  
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#17223b' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: 300,width: 320,marginTop:30, borderRadius: 15}]}
                source={require('../assets/sats.jpg')} //แก้
            />  
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 14}}>{'\t ดาวเสาร์มีมวลมากจึงมีแรงโน้มถ่วงมาก สามารถดูดจับดาวเคราะห์น้อยและดาวหางมาเป็นบริวาร ได้เป็นจำนวนมาก ปัจจุบันมีดวงจันทร์ที่ถูกค้นพบแล้ว 82 ดวง ดวงจันทร์ที่มีขนาดใหญ่ที่สุดคือ ไททัน มีขนาดใหญ่หว่าดาวพุธ ไททันมีชั้นบรรยากาศหนาแน่นกว่าโลก มีองค์ประกอบเป็นมีเทนทั้งสามสถานะ บนไททันมีฝนมีเทน เมฆมีเทน และมีเทนแข็ง แก๊สไนโตรเจนเป็นส่วนใหญ่ คล้ายคลึงกับชั้นบรรยากาศของโลก ดังนั้นนักวิทยาศาสตร์สนใจไททันมากเป็นพิเศษ เพราะอาจจะมีสิ่งมีชีวิตอาศัยอยู่ ดวงจันทร์ที่มีขนาดรองลงมาได้แก่ รีอา ไดโอนี ไอเอพีทุส เทธิส เอนเซลาดุส และ มิมาส ส่วนใหญ่มีพื้นผิวเป็นน ้าแข็งและมีหินผสมอยู่เล็กน้อย'}</Text>
              </View>
              
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#a7d129' }}>
        <View style={styles.centerView}>
        <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/saturn22.json')}
            />
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 14}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 1,427 ล้านกิโลเมตร \n\n คาบวงโคจร 29.4 ปี \n\n หมุนรอบตัวเองใช้เวลา 10.66 ชั่วโมง \n\n มวล 95.16 ของโลก \n\n ความหนาแน่น 0.7 กรัม/ลูกบาศก์เซนติเมตร (น้อยกว่าน้ำ) \n\n อุณหภูมิ -178°C  \n\n องค์ประกอบหลักของบรรยากาศ ไฮโดรเจน ฮีเลียม'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Saturn;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  Textcenter: {
    fontSize: 48,
    color: 'white',
  },
  centerView: {
    alignItems: 'center',
    marginTop: windowHeight*0.12,
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
    backgroundColor: '#222831',
    padding: 15,
    width: windowWidth*0.75,
    borderRadius: 15,
    marginTop:20,
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