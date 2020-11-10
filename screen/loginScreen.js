import React, { useState, useRef, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Image, Dimensions, TextInput, Button,Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7hO4qUYDmmucGuiEvXAlN2WZQfh4Q5DY",
    authDomain: "mobileapptroughtthespace.firebaseapp.com",
    databaseURL: "https://mobileapptroughtthespace.firebaseio.com",
    projectId: "mobileapptroughtthespace",
    storageBucket: "mobileapptroughtthespace.appspot.com",
    messagingSenderId: "580594228095",
    appId: "1:580594228095:web:fc4cde3c0326b0f482584a",
    measurementId: "G-W6H3W2SL6P"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const MyloginPage = (props) => {

    const movebg = useRef(new Animated.Value(0)).current;
    const translate = movebg.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg','360deg'],
    });
    const ani = () => {
        Animated.loop(
            Animated.timing(
            movebg, {
            toValue: 1,
            duration: 50000,
            useNativeDriver: true,
            easing : Easing.linear,
        })).start( ()=>{movebg.setValue(0)});
    }

    const [loginState, setLoginState] = useState('login');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [Id, setId] = useState('');
    const onpressLogin = (text) => {
        setLoginState(text)
        console.log(firebase.auth().currentUser);
        
    }
    const logout = () => {
        firebase.auth().signOut()
        console.log(firebase.auth().currentUser);
        
    }
    const signUpUser = (email, password,fname,lname) => {
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {  
                console.log("User ID :- ", data.user.uid);
                setId(data.user.uid);
             })
            firebase.database().ref('UsersList/').push({
                    userId,
                    email,
                    fname,
                    lname,
                }).then((data)=>{
                    //success callback
                    console.log('data ' , data)
                }).catch((error)=>{
                    //error callback
                    console.log('error ' , error)
                })
            
        }
        catch (error) {
            console.log(error.toString())
        }
    }
    const loginUser = (email, password) => {

        try {

            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                console.log('finishlogin')
                props.navigation.navigate('mainScreen')

            })
            
        }
        catch (error) {
            console.log(error.toString())
        }
    }
    const RenderTheBox = (boxType) => {
        if (boxType === 'login') {
            return (
                <View style={styles.loginBox}>
                    <Text style={styles.Label}>Login</Text>
                    <TextInput
                        placeholder={'Username'}
                        style={styles.TextBox}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => setUsername(email)}
                    />
                    <TextInput
                        placeholder={'Password'}
                        style={styles.TextBox}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TouchableOpacity style={styles.Loginbutton}
                        onPress={() => loginUser(Username, Password)}
                    ><Text style={styles.Textinbutton}>Login</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.Loginbutton}
                        onPress={() => logout()}
                    ><Text style={styles.Textinbutton}>Logout Test</Text></TouchableOpacity>

                    <Text style={{ color: 'grey', marginTop: 5, }}>Don't have an account?</Text>

                    <TouchableOpacity style={styles.regisbutton}
                        onPress={() => (onpressLogin('register'))}
                    ><Text style={styles.Textinbutton}>Register</Text></TouchableOpacity>
                </View>
            );
        }
        else if (boxType === 'register') {
            return (
                <View style={[styles.loginBox, styles.regisBox]}>
                    <Text style={styles.Label}>Register</Text>
                    <TextInput
                        placeholder={'Username'}
                        style={styles.TextBox}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => setUsername(email)}
                    />
                    <TextInput
                        placeholder={'Password'}
                        style={styles.TextBox}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TextInput
                        placeholder={'name'}
                        style={styles.TextBox}
                        autoCapitalize="none"
                        onChangeText={(name) => setname(name)}
                    />
                    <TextInput
                        placeholder={'Surname'}
                        style={styles.TextBox}
                        autoCapitalize="none"
                        onChangeText={(sur) => setsurname(sur)}
                    />
                    <TextInput
                        placeholder={'Confirm Password'}
                        style={styles.TextBox}
                    />
                    <TouchableOpacity style={styles.regisbutton}
                        onPress={() => signUpUser(Username, Password,name,surname)}
                    ><Text style={styles.Textinbutton}>Register</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.cancelbutton}
                        onPress={() => onpressLogin('login')}
                    ><Text style={styles.Textinbutton}>Cancel</Text></TouchableOpacity>
                </View>
            );
        }
    }

    return (
        <View style={styles.container}>
            <Animated.Image source={require('../assets/bg.png')} style={{
                transform: [{ rotate: translate }], 
                position: 'absolute',
                height: '150%',
            }} resizeMode="repeat" />
            {RenderTheBox(loginState)}
            {ani()}
        </View>
    );
};
export default MyloginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    loginBox: {
        alignItems: 'center',
        width: Dimensions.get('window').width - 70,
        height: Platform.isPad?Dimensions.get('window').height*0.4:Dimensions.get('window').height*0.5,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.70,
        shadowRadius: 15.19,

        elevation: 23,
    },
    regisBox: {
        width: Dimensions.get('window').width - 70,
        height: Dimensions.get('window').height - Dimensions.get('window').height*0.5,
    },
    Label: {
        position: "relative",
        fontSize: 20
    },
    TextBox: {
        padding: 10,
        margin: 10,
        width: Dimensions.get('window').width - Dimensions.get('window').width*0.3,
        height: 50,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius: 7,
    },
    Loginbutton: {
        marginTop: 10,
        borderRadius: 7,
        width: Dimensions.get('window').width - Dimensions.get('window').width*0.3,
        backgroundColor: "rgb(0,142,255)",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    regisbutton: {
        marginTop: 10,
        borderRadius: 7,
        width: Dimensions.get('window').width - Dimensions.get('window').width*0.3,
        backgroundColor: "rgb(0,142,255)",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelbutton: {
        marginTop: 10,
        borderRadius: 7,
        width: 200,
        backgroundColor: "grey",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Textinbutton: {
        color: 'white',
    }

});
