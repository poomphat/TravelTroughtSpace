import React, { useRef, useState, useEffect } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, TextInput, Dimensions, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontDisplay } from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import * as firebase from 'firebase'
import LoadingScreen from '../component/LoadingScreen';
import { useSelector, useDispatch } from "react-redux";
import {datasystem} from '../dataSystem/data'


/*
const data = [
    {
        Author: 'MheekungZa',
        Detail: 'ว้าวสุดยอดไปเลยครับ'
    },
    {
        Author: 'PoomphatZaGod',
        Detail: 'That so cool'
    },
    {
        Author: 'TawanZaZeed',
        Detail: 'ได้ความรู้มากๆเลยครับ'
    },
    {
        Author: 'JerrySoBig',
        Detail: 'เป็นดาวที่สวยจริงๆ'
    },
    {
        Author: 'TimSoCool',
        Detail: 'ว้าวซ่า'
    },
    {
        Author: 'RicadoZ',
        Detail: 'กระตุกจิตกระชากใจ'
    },
    {
        Author: 'Doraemon',
        Detail: 'กระเป๋าวิเศษษษษษษษษ'
    },
]
*/

const commentList = (props) => {
    const flat = useRef()
    const [text,settext] = useState('')
    const [data,setdata] = useState([])
    const [hidden,sethidden] = useState(0)
    const [loaded,setloaded] = useState(false)
    const bg = useSelector( (state) => state.img.background );
    const user = useSelector( (state) => state.user );
    useEffect (() => {
        const ref = firebase.database().ref('Comment/'+datasystem[props.navigation.getParam("planet")].title)
        const list = data
        ref.on("child_added", function(Data){
                list.push(Data.val())
        })
        setdata(list)
        setTimeout(() => {
             setloaded(true)
        }, 1000);
      },[])
      
    const sendComment = () =>{
        console.log(text)
        const ref = firebase.database().ref('Comment/'+datasystem[props.navigation.getParam("planet")].title)
        firebase.database().ref('Comment/'+datasystem[props.navigation.getParam("planet")].title).push({
            Author: user.fname,
            Detail: text
        })
        sethidden(hidden+1);
        console.log('send')
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.box} key={item.Author}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={styles.profilePic}
                        source={require("../assets/mheeIconTest.png")} //รอแก้จาก UserDB
                    />
                    <Text style={styles.textTitle}>{item.Author}</Text>
                </View>
                <Text style={styles.Detail}>{item.Detail}</Text>
            </View>);
    };
    if(loaded){
    return (
        <ImageBackground source={{uri:bg}} style={styles.commentlist} resizeMode="repeat">
            <TouchableOpacity 
              onPress={() => props.navigation.goBack()}
              style={styles.backbutton}>
              <Ionicons name="ios-arrow-back" size={40} color="white"/>
            </TouchableOpacity>
            <KeyboardAvoidingView
                style={styles.commentlist}
                behavior="padding">
                <Text style={styles.Title}>Comment</Text>
                <FlatList
                    keyExtractor={item => item}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={styles.commentall}
                    renderItem={renderItem}
                    data={data}
                    keyExtractor={item => item.id}
                    inverted={false}
                    ref={flat}
                    onContentSizeChange={() =>{
                        flat.current.scrollToEnd({animation: true});
                    }}
                    />
                <View style={styles.TextBox}>
                    <TextInput
                        placeholder={'Comment'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.Textinput}
                        onChangeText={(text) => {settext(text)}}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.Send}
                    onPress={() => {
                        sendComment();
                    }}>
                        <Ionicons name="md-send" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );}
    else{
        return(
            <ImageBackground source={{uri:bg}} style={styles.commentlist} resizeMode="repeat">
            <KeyboardAvoidingView
                style={styles.commentlist}
                behavior="padding">
                <Text style={styles.Title}>Comment</Text>
                <FlatList
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={styles.commentall}
                    renderItem={renderItem}
                    data={[]}
                    keyExtractor={item => item.id}
                    inverted={true}
                    ref={flat}
                    />
                <View style={styles.TextBox}>
                    <TextInput
                        placeholder={'Comment'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.Textinput}
                        autoCapitalize="none"
                        onChangeText={(text) => settext(text.value)}
                    />
                    <TouchableOpacity style={styles.Send}>
                        <Ionicons name="md-send" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        paddingVertical: 15,
        paddingHorizontal:30,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: 'grey',
        marginVertical: Dimensions.get('window').height * 0.01,
        backgroundColor: '#1f4068',
        borderRadius: 20,
    },
    commentall: {
        height: Dimensions.get('window').height * 0.85,
    },
    commentlist: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        marginLeft: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
    },
    Detail: {
        marginTop: 15,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    Title: {
        marginTop: Dimensions.get('window').height * 0.06,
        marginBottom: Dimensions.get('window').height * 0.01,
        marginLeft: Dimensions.get('window').width * 0.1,
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    TextBox: {
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width,
        backgroundColor: '#29435c',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Textinput: {
        marginTop: Dimensions.get('window').height * 0.02,
        width: Dimensions.get('window').width * 0.8,
        height: 40,
        backgroundColor: '#021f36',
        padding: 10,
        borderRadius: 7
    },
    Send: {
        marginLeft: 15,
        marginTop: Dimensions.get('window').height * 0.02,
        height: 40,
        padding: 7,
        backgroundColor: '#021f36',
        borderRadius: 7,
    },
    backbutton:{
        width: 60,
        height: 60,
        position: 'absolute',
        top: Dimensions.get('window').height*0.06,
        left: Dimensions.get('window').width*0.05,
        zIndex: 1,
        //backgroundColor: 'white'
      },
})
export default commentList;