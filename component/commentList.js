import React, { useRef, useState } from 'react';
import UserInfo from "../component/userInfo";
import CurrentPlanet from "../component/currentPlanet";
import { StyleSheet, Text, View, Image, Platform, TextInput, Dimensions, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontDisplay } from 'expo-font';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

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

const commentList = (props) => {



    const renderItem = ({ item, index }) => {
        return (
            <Animatable.View style={styles.box} key={item.Author} animation="bounceIn" delay={50 * index}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={styles.profilePic}
                        source={require("../assets/mheeIconTest.png")} //รอแก้จาก UserDB
                    />
                    <Text style={styles.textTitle}>{item.Author}</Text>
                </View>
                <Text style={styles.Detail}>{item.Detail}</Text>
            </Animatable.View>);
    };
    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.commentlist} resizeMode="repeat">
            <KeyboardAvoidingView
                style={styles.commentlist}
                behavior="padding">
                <Text style={styles.Title}>Comment</Text>
                <FlatList
                    style={styles.commentall}
                    renderItem={renderItem}
                    data={data}
                    keyExtractor={item => item.id}
                    inverted={true}>
                </FlatList>
                <View style={styles.TextBox}>
                    <TextInput
                        placeholder={'Comment'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.Textinput}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.Send}>
                        <Ionicons name="md-send" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    box: {
        padding: 20,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.13,
        backgroundColor: 'grey',
        marginTop: Dimensions.get('window').height * 0.02,
        backgroundColor: '#1f4068',
        borderRadius: 20,
    },
    commentall: {
        height: Dimensions.get('window').height * 0.8
    },
    commentlist: {
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: Dimensions.get('window').height * 0.02,
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width,
        backgroundColor: '#1f4068',
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
    }
})
export default commentList;