import React, { Component, useEffect, useState } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const PlanetInfo = (props) => {
  // มันมี lib ที่ช่วยเรื่อง stiky อยู่จะเอามะ
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true)
  })
  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(0,122,255)' }}>
      <ScrollView>
        <View style={styles.centerView}>
          <View style={styles.sticky}>
            <Text style={styles.Textcenter}>Earth</Text>
          </View>
          <View style={styles.pic}>
            <Image
              style={styles.planet}
              source={require("../assets/planet/earth.png")}
            /></View>

          <Text style={styles.info}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of
            Lorem Ipsum.
            </Text>
        </View>
      </ScrollView>
      <View style={styles.fixed}>
        <TouchableOpacity style={styles.Quiz}>
          <AntDesign name="form" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Comment}>
          <FontAwesome name="comments" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>

  );
}
export default PlanetInfo;
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  Spaceship: {
    height: 100,
    width: 100,
  },
  Textcenter: {
    fontSize: 48,
    color: 'white',
  },
  centerView: {
    flex: 1,
    marginTop: windowHeight * 0.1,
    alignItems: 'center',
    marginBottom: 80,
  },
  pic: {
    margin: windowHeight * 0.05,
    width: windowWidth * 0.65,
    height: windowHeight * 0.3,
  },
  planet: {
    width: '100%',
    height: '100%',
  },
  info: {
    fontSize: 20,
    margin: windowWidth * 0.1,
    color: 'white',
  },
  fixed: {
    width: windowWidth,
    height: windowHeight * 0.1,
    position: 'absolute',
    top: windowHeight * 0.925,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  Quiz: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginLeft: 30,
  },
  Comment: {
    right: 0,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginRight: 30,
  }
});