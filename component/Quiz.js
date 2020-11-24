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
import LottieView from 'lottie-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector, useDispatch } from "react-redux";
import {updateScore} from "../store/actions/storetemp"
import { datasystem } from "../dataSystem/data"

const color = ['rgb(10,132,255)', 'rgb(235, 235, 235)']
const Quiz = (props) => {
    const countquest = quiznaja[props.navigation.getParam("planet")].quizplan.length
    const [answerplan, setanswerplan] = useState([])
    const [hidden, sethidden] = useState(0)
    const [loaded, setloaded] = useState(false)
    const [score, setscore] = useState(0)
    const [alertans, setalertans] = useState(false)
    const [countDown,setcountDown] = useState(3)

    const dispatch = useDispatch();
    const Backbutton = () => {
        return (
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.backbutton}>
                <Ionicons name="ios-arrow-back" size={40} color="white" />
                <Text style={{ color: 'white' }}>{quiznaja[props.navigation.getParam("planet")].title}</Text>
            </TouchableOpacity>
        );
    }
    useEffect(() => {
        if (!loaded) {
            const list = answerplan
            for (let index = 0; index < countquest; index++) {
                list.push([-1, -1, -1, -1])
            }
            setanswerplan(list)
            setloaded(true);
        }
    }, [])
    const answerQuest = (index, indexchoice) => {
        const listQ = answerplan
        if (listQ[index][indexchoice] != 1) {
            listQ[index] = [-1, -1, -1, -1]
            listQ[index][indexchoice] = 1
        }
        else {
            listQ[index] = [-1, -1, -1, -1]
        }
        setanswerplan(listQ)
        sethidden(hidden + 1)
    }
    const submitanswer = () => {

        let tempScore = 0
        quiznaja[props.navigation.getParam("planet")].quizplan.map((item, index) => {
            if (answerplan[index].findIndex(items => items == 1) == item.rightchoice) {
                tempScore += 1;
            }


            //const index = state.favoriteMeals.findIndex(el => (el.id === action.mealId))
        })
        const planetName = datasystem[props.navigation.getParam("planet")].title
        dispatch(updateScore(planetName))
        setscore(tempScore)
        setalertans(true)
        setTimeout(() => {
            setcountDown(3)
        }, 1000);
        setTimeout(() => {
            setcountDown(2)
        }, 2000);
        setTimeout(() => {
            setcountDown(1)
        }, 3000);
        setTimeout(() => {
            setalertans(false)
        }, 4000);
        setTimeout(() => {
            props.navigation.goBack()
        }, 4500);
    }
    const quizplanet = quiznaja[props.navigation.getParam("planet")].quizplan

    //bg
    const bg = useSelector((state) => state.img.background);

    const renderWhenAnswer = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <LottieView
                    autoPlay={true}
                    loop={false}
                    style={{
                        width: Dimensions.get('window').width * 0.2,

                    }}
                    source={require('../assets/quiz.json')}
                />
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={styles.Textalert}>Your score is {score} in {countquest}</Text>
                    {(score == countquest)?<Text style={styles.Textalert}>Wow Sugoi!!!</Text>:<Text style={styles.Textalert}>Try again next time.</Text>}
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.Textinbutton}>
                Going to {quiznaja[props.navigation.getParam("planet")].title}! in {countDown}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    if (loaded) {
        return (
            <View style={{ flex: 1, backgroundColor: '#1f4068' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: Dimensions.get('window').height * 0.01, paddingHorizontal: 20, marginTop: Dimensions.get('window').height * 0.05, }}>
                    <Backbutton/>
                    <View style={styles.titile}>
                        <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold' }}>
                            Quiz
                                </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.submit}
                            onPress={() => {
                                submitanswer()
                            }}>
                            <Text style={{ fontSize: 14, color: 'white' }}>ส่งคำตอบ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Pages style={{ backgroundColor: '#021F36' }}>
                    {quizplanet.map((item, index) => {
                        return (

                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image source={{ uri: bg }} style={styles.img} resizeMode="repeat" />
                                <View style={[styles.questionbox, { backgroundColor: item.color }]}>
                                    <Text style={styles.textquest}>{index + 1}. {item.question}</Text>
                                </View>
                                <View style={{ width: Dimensions.get('window').width * 0.9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: Dimensions.get('window').height * 0.03 }}>
                                    {item.choice.map((itemin, indexchoice) => {
                                        return (
                                            <TouchableOpacity style={[styles.answer, answerplan[index][indexchoice] == -1
                                                ? { backgroundColor: color[1] }
                                                : { backgroundColor: color[0] }]}
                                                onPress={() => {
                                                    answerQuest(index, indexchoice);
                                                }}>
                                                <Text style={{ display: 'none' }}>{hidden}</Text>
                                                <Text style={[styles.textans, answerplan[index][indexchoice] == -1
                                                    ? { color: 'black' }
                                                    : { color: 'white' }]}>{itemin}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </View>
                        )
                    })}
                </Pages>
                <AwesomeAlert
                    show={alertans}
                    showProgress={false}
                    customView={renderWhenAnswer()}
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    contentContainerStyle={styles.alert}
                    overlayStyle={styles.bgalert}
                />
            </View>
        )
    } else {
        return (
            <LoadingScreen></LoadingScreen>
        )
    }

}


export default Quiz;


const styles = StyleSheet.create({
    titile: {
        justifyContent: 'center'
    },
    questionbox: {
        marginTop: Dimensions.get('window').height * 0.05,
        alignItems: 'center',
        //justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        padding: 13,
        borderRadius: 10,
    },
    textquest: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textans: {
        fontSize: 14,
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
    backbutton: {
        width: 60,
        height: 60,
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    submit: {
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
        height: 35,
        backgroundColor: "#1f4068",
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0779e4',
        borderWidth: 3,
    },
    alert: {
        backgroundColor: '#1f4068',
        borderRadius: 10,
        width: Dimensions.get('window').width,
    },
    bgalert: {
        backgroundColor: '#000000bb'
    },
    Textinbutton:{
        color: 'white',
        fontWeight: 'bold',
    },
    Textalert:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    button:{
        marginTop: 20,
        backgroundColor: 'rgb(48,209,88)',
        width: Dimensions.get('window').width*0.6,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    }
})