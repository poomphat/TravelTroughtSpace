import React, { Component, useEffect, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome,Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';



const Mars = (props) => {
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
       
      <View style={{ flex: 1, backgroundColor: '#303960' }}>
      
        <View style={styles.centerView}>
          
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Mars</Text>
          </View>
          <Image
                style={[styles.planet3,{height: 300,width: 300,marginTop:30, borderRadius: 15}]}
                source={require('../assets/mar2.png')}
            />   
          <Text style={styles.info}>
              {'\t ดาวอังคาร เป็นดาวเคราะห์ที่อยู่ห่างจากดวงอาทิตย์เป็นอันดับที่ 4 ในบรรดาดาวเคราะห์ทั้งหมด ดาวอังคารมีขนาดเส้นผ่านศูนย์กลางประมาณ 0.5 เท่าของโลก ดาวอังคารมีโครงสร้างภายในประกอบด้วยแก่นของแข็งมีรัศมีประมาณ 1,700 กิโลเมตร ห่อหุ้มด้วยชั้นแมนเทิลที่เป็นหินหนืดหนาประมาณ 1,600 กิโลเมตรและมีเปลือกแข็งเช่นเดียวกับโลก ดาวอังคารมีสีแดงเนื่องจากพื้นผิวประกอบด้วยออกไซด์ของเหล็ก (สนิมเหล็ก) พื้นผิวของดาวอังคารเต็มไปด้วยหุบเหวต่าง ๆ มากมาย หุบเหวขนาดใหญ่ชื่อ หุบเหวมาริเนอริสมีความยาว 4,000 กิโลเมตร กว้าง 600 กิโลเมตร ลึก 8 กิโลเมตร นอกจากนี้ดาวอังคารยังมีภูเขาไฟที่สูงที่สุดในระบบสุริยะชื่อ ภูเขาไฟโอลิมปัส (Mount Olympus) สูง 25 กิโลเมตร ฐานที่แผ่ออกไปมีรัศมี 300 กิโลเมตร'}             
            </Text>
        </View>
     
      </View>
      <View style={{ flex: 1, backgroundColor: '#442727' }}>
        <View style={styles.centerView}>
            <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/moon.json')}
            />
              <View style={styles.matter}>
              <Text style={{color: 'black',fontSize: 18}}>{'\t ดาวอังคารมีบรรยากาศเบาบางมาก ประกอบด้วยคาร์บอนไดออกไซด์เป็นส่วนใหญ่ซึ่งเกิดจากการระเหิดของน้ำแข็งแห้ง ปกคลุมอยู่ทั่วไปบนพื้นผิวดาวอังคาร ที่บริเวณขั้วเหนือและขั้วใต้ของดาวมีน้ำแข็งปกคลุมอยู่ตลอดเวลา การสำรวจพื้นผิวดาวอังคารโดยยานไวกิงออร์บิเตอร์ 1 และยานมาร์สโกลบอลเซอร์เวเยอร์พบร่องรอยท้องแม่น้ำที่เหือดแห้ง นักวิทยาศาสตร์ตั้งสมมติฐานว่า ถ้าเคยมีสิ่งมีชิวิตอยู่บนดาวอังคารมาก่อน ก็น่าจะมีซากหรือฟอสซิลของสิ่งมีชีวิตเหล่านั้นใต้ท้องน้ำหรือใต้น้ำแข็งที่ขั้วทั้งสองของดาวอังคาร'}</Text>
              </View>
              
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#1b1c25' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.25,width: 350,marginTop:Dimensions.get('window').height* 0.2, borderRadius: 15}]}
                source={require('../assets/moonmar.jpg')}
            />
              <View style={styles.matter}>
              <Text style={{color: 'black',fontSize: 18}}>{'\t ดาวอังคารมีดวงจันทร์บริวารขนาดเล็ก 2 ดวง คือ โฟบัสและดีมอส ดวงจันทร์ทั้งสองดวงมีรูปร่างไม่สมมาตร และมีขนาดเล็กกว่า 25 กิโลเมตร สันนิษฐานว่าเป็นดาวเคราะห์น้อยที่ถูกแรงโน้มถ่วงของดาวอังคารดูดจับมาเป็นบริวาร ภายหลังการก่อตัวของระบบสุริยะ'}</Text>
              </View>
              
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#464159' }}>
        <View style={styles.centerView}>
        <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.25,width: 350,marginTop:Dimensions.get('window').height* 0.1, borderRadius: 15}]}
                source={require('../assets/mar3.jpg')}
            />
              <Text style={[styles.Textcenter,{marginVertical: Dimensions.get('window').height*0.02,color: 'white'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'white',fontSize: 14}}>
              {'ระยะทางเฉลี่ยจากดวงอาทิตย์ 227.94 ล้านกิโลเมตร \n\n คาบวงโคจร 1.88 ปี (687 วัน)    \n\n หมุนรอบตัวเองใช้เวลา 24.62 วัน \n\n มวล 0.107 เท่า ของโลก \n\n ความหนาแน่น 0.98 ของโลก  \n\n อุณหภูมิ -87°C ถึง -5°C \n\n องค์ประกอบหลักของบรรยากาศ คาร์บอนไดออกไซด์ ไนโตรเจน อาร์กอน'}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Mars;
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
    width: windowWidth*0.7,

  },
  info: {
    marginTop: 10,
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
    backgroundColor: '#eae7d9',
    padding: 15,
    width: windowWidth*0.75,
    borderRadius: 15,
    marginTop: 20,
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