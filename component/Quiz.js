// กูทำเอง

import { quiznaja } from '../dataQuiz/quiz'
import React, { useRef, useState, useEffect } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, TextInput, Dimensions, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontDisplay } from 'expo-font';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Pages } from 'react-native-pages';
import LoadingScreen from "../component/LoadingScreen";
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
const color = ['rgb(10,132,255)', 'rgb(235, 235, 235)']
const Quiz = (props) => {
    const countquest = quiznaja[props.navigation.getParam("planet")].quizplan.length
    const [answerplan, setanswerplan] = useState([])
    const [hidden, sethidden] = useState(0)
    const [loaded, setloaded] = useState(false)
    const [loadedimge, setloadedimge] = useState(false)
    const [imageBg, setimageBg] = useState('')
    const backbutton = () => {
        return(
            <TouchableOpacity 
              onPress={() => props.navigation.goBack()}
              style={styles.backbutton}>
              <Ionicons name="ios-arrow-back" size={40} color="white"/>
            </TouchableOpacity>
        );
      }
    useEffect(() => {
        if (!loaded) {
            const list = answerplan
            /*
            imageBruh =  new Image().
            imageBruh.src = '../assets/bg.png'
            */
           setimageBg(require('../assets/bg.png'))
            for (let index = 0; index < countquest; index++) {
                list.push([0, 0, 0, 0])
            }
            setanswerplan(list)
            setloaded(true);
        }
    }, [])
    const answerQuest = (index, indexchoice) => {
        const listQ = answerplan
        if (listQ[index][indexchoice] != 1) {
            listQ[index] = [0, 0, 0, 0]
            listQ[index][indexchoice] = 1
        }
        else {
            listQ[index] = [0, 0, 0, 0]
        }
        setanswerplan(listQ)
        sethidden(hidden + 1)
    }
    const quizplanet = quiznaja[props.navigation.getParam("planet")].quizplan
    if (loaded) {
        return (
            <Pages style={{backgroundColor: '#021F36'}}>
                {quizplanet.map((item, index) => {
                    return (

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={{uri : 'https://firebasestorage.googleapis.com/v0/b/mobileapptroughtthespace.appspot.com/o/bg.png?alt=media&token=eb78cea0-1e29-40f8-91c6-f3a2a66b792f'}} style={styles.img} resizeMode="repeat"/>
                        {backbutton()}
                            <View style={[styles.questionbox, { backgroundColor: item.color }]}>
                                <Text style={styles.textquest}>{index + 1}. {item.question}</Text>
                            </View>
                            <View style={{ width: Dimensions.get('window').width * 0.9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                {item.choice.map((itemin, indexchoice) => {
                                    return (
                                        <TouchableOpacity style={[styles.answer, answerplan[index][indexchoice] == 0
                                            ? { backgroundColor: color[1]}
                                            : { backgroundColor: color[0]}]}
                                            onPress={() => {
                                                answerQuest(index, indexchoice);
                                            }}>
                                            <Text style={{ display: 'none'}}>{hidden}</Text>
                                            <Text style={[styles.textans, answerplan[index][indexchoice] == 0
                                                ? { color: 'black'}
                                                : { color: 'white'}]}>{itemin}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                    )
                })}</Pages>
        )
    } else {
        return (
            <LoadingScreen></LoadingScreen>
        )
    }

}


export default Quiz;


const styles = StyleSheet.create({
    questionbox: {
        alignItems: 'center',
        //justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 13,
    },
    textquest: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textans: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    answer: {
        marginTop: Dimensions.get('window').height * 0.01,
        width: Dimensions.get('window').width * 0.44,
        height: Dimensions.get('window').height * 0.15,
        padding: 13,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    img: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    backbutton:{
        width: 60,
        height: 60,
        position: 'absolute',
        top: Dimensions.get('window').height*0.08,
        left: Dimensions.get('window').width*0.08,
        zIndex: 1,
      },
})