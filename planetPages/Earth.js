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


const Earth = (props) => {
/*   const navigation = useNavigation();
  const route = useRoute(); */
  // มันมี lib ที่ช่วยเรื่อง stiky อยู่จะเอามะ
  const datailfirst = Listdata.map((data, index) => {
    return (<View style={styles.list} key={index}>
      <Text style={{color: 'white',fontSize: 16,padding: 15,}}>{data}
      </Text>
      </View>)
  });
  const backbutton = () => {
    return(
        <TouchableOpacity 
          onPress={() => {
            props.navigation.goBack()
          }}
          style={styles.backbutton}>
          <Ionicons name="ios-arrow-back" size={40} color="white"/>
        </TouchableOpacity>
    );
  }
  return (
    <View style={{flex:1,backgroundColor: '#1f4068'}}>
        {backbutton()}
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
        
      </View>

      <View style={{ flex: 1, backgroundColor: '#ff6c00' }}>
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
      <View style={{ flex: 1, backgroundColor: '#145374' }}>
        <View style={styles.centerView}>
              <View style={styles.matter}>
              <Text style={{color: 'white',fontSize: 18}}>{'\t นอกจากนี้โลกยังมีสนามแม่เหล็กซึ่งเกิดจากการเคลื่อนที่ของแก่นชั้นนอกซึ่งเป็นเหล็กเหลว ถึงแม้ว่าสนามแม่เหล็กโลกจะมีความเข้มไม่มาก แต่ก็ช่วยปกป้องไม่ให้อนุภาคที่มีพลังงานสูงจากดวงอาทิตย์เดินทางผ่านมาที่ผิวโลกได้ โดยสนามแม่เหล็กจะกักให้อนุภาคเดินทางไปตามเส้นแรงแม่เหล็ก และเข้าสู่ชั้นบรรยากาศได้เพียงที่ขั้วโลกเหนือและขั้วโลกใต้เท่านั้น เมื่ออนุภาคพลังงานสูงปะทะกับโมเลกุลของแก๊สในชั้นบรรยากาศทำให้เกิดแสงสีสวยงาม สังเกตเห็นบนท้องฟ้ายามค่ำคืน เรียกว่า "แสงเหนือแสงใต้"'}</Text>
              </View>
          <Image
                style={[styles.planet3,{height: Dimensions.get('window').height*0.35,marginTop:30, borderRadius: 15}]}
                source={require('../assets/aurora.jpg')}
            />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#222831' }}>
        <View style={styles.centerView}>
          
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.05,}]}>Moon</Text>
              <View style={{width: Dimensions.get('window').width*0.9}}>
              <Text style={{color: 'white',fontSize: 18}}>
              {' \t ดวงจันทร์ เป็นบริวารดวงเดียวของโลกและมีขนาดเล็กกว่าโลกมาก หลังจากการก่อตัวของระบบสุริยะดวงจันทร์เย็นตัวอย่างรวดเร็วจนโครงสร้างภายในกลายเป็นของแข็งทั้งหมดจึงไม่มีสนามแม่เหล็ก ดวงจันทร์มีมวลน้อยจึงมีแรงโน้มถ่วงน้อยจนไม่สามารถดึงดูดบรรยากาศไว้ได้ การที่ไม่มีชั้นบรรยากาศห่อหุ้มอยู่เลย ทำให้อุกกาบาตพุ่งชนพื้นผิวโดยอิสระไร้แรงเสียดทาน ดวงจันทร์หันด้านเดียวเข้าหาโลก เนื่องจากปฏิสัมพันธ์ของแรงไทดัลของโลกและดวงจันทร์ ทำให้ดวงจันทร์หมุนรอบตัวเองใช้เวลาเท่ากับที่ดวงจันทร์โคจรรอบโลก ด้านตรงข้ามที่หันออกจากโลก '}
              </Text>
          </View>
          <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/moon.json')}
            />
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: '#f2efea' }}>
        <View style={styles.centerView}>
        <LottieView
                autoPlay={true}
                style={styles.planet3}
                source={require('../assets/moon2.json')}
            />
              <Text style={[styles.Textcenter,{marginBottom: Dimensions.get('window').height*0.02,color: 'black'}]}>Fact</Text>
              <View style={{width: Dimensions.get('window').width*0.9,backgroundColor: '#00000033',padding: 20,borderRadius: 10}}>
              <Text style={{color: 'black',fontSize: 18}}>
              {'ระยะทางเฉลี่ยจากโลก 384,400 กิโลเมตร \n\n คาบวงโคจรรอบโลก 27.32 วัน \n\n หมุนรอบตัวเองใช้เวลา 27.32 ชั่วโมง \n\n ความหนาแน่น 3.341 กรัม/ลูกบาศก์เซนติเมตร \n\n ไม่มีบรรยากาศ และยังไม่ตรวจพบน้ำ '}
              </Text>
          </View>
    
        </View>
      </View>
    </Pages>
    
    </View>
  );
}
export default Earth;
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