import React, { Component } from 'react';
import { Pages } from 'react-native-pages';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlanetInfo = (props) =>{
  
    return (
      <Pages>
        <View style={{ flex: 1, backgroundColor: 'rgb(0,122,255)' }}>
            <View style={styles.centerView}>
            <Text style={styles.Textcenter}>Hello</Text>
            </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'rgb(48,209,88)' }}>
        <View style={styles.centerView}>
            <Text style={styles.Textcenter}>รอรูปอยู่</Text>
            </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'rgb(255,69,58)' }}>
        <View style={styles.centerView}>
            <Text style={styles.Textcenter}>นาจา</Text>
            </View>
        </View>
      </Pages>
 
    );
  }
export default PlanetInfo;

const styles = StyleSheet.create({
    Spaceship:{
        height: 100,
        width: 100,
    },
    Textcenter:{
        fontSize: 48,
        color: 'white',
    },
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    }
  });