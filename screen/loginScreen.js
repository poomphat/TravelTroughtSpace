import React, { useState, useRef, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Image, Dimensions, TextInput, Button,Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import LottieView from 'lottie-react-native';

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

    const [loginState, setLoginState] = useState('Login');
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
        if (boxType === 'Login') {
            return (
                <View style={styles.loginBox}>
                    
                    <TextInput
                        placeholder={'Username'}
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => setUsername(email)}
                    />
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TouchableOpacity style={styles.Loginbutton}
                        onPress={() => loginUser(Username, Password)}
                    ><Text style={styles.Textinbutton}>Login</Text></TouchableOpacity>
                    {/*<TouchableOpacity style={styles.Loginbutton}
                        onPress={() => logout()}
            ><Text style={styles.Textinbutton}>Logout Test</Text></TouchableOpacity> */}

                    <Text style={{ color: 'grey', marginTop: 5, }}>Don't have an account?</Text>

                    <TouchableOpacity style={styles.regisbutton}
                        onPress={() => {
                            (onpressLogin('Register'))
                    }}
                    ><Text style={styles.Textinbuttonregis}>Register</Text></TouchableOpacity>
                </View>
            );
        }
        else if (boxType === 'Register') {
            return (
                <View style={[styles.loginBox, styles.regisBox]}>

                    <TextInput
                        placeholder={'Username'}
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => setUsername(email)}
                    />
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TextInput
                        placeholder={'name'}
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        autoCapitalize="none"
                        onChangeText={(name) => setname(name)}
                    />
                    <TextInput
                        placeholder={'Surname'}
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        autoCapitalize="none"
                        onChangeText={(sur) => setsurname(sur)}
                    />

                    <TouchableOpacity style={styles.Loginbutton}
                        onPress={() => signUpUser(Username, Password,name,surname)}
                    ><Text style={styles.Textinbutton}>Register</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.cancelbutton}
                        onPress={() => onpressLogin('Login')}
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
            <Text style={styles.statuslog}>{loginState}</Text>
            <LottieView
                autoPlay={true}
                style={{
                    width: Dimensions.get('window').width*0.7,
                    
                }}
                source={require('../assets/man.json')}
            />
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
        width: Dimensions.get('window').width - 70,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center'
    },
    regisBox: {
        width: Dimensions.get('window').width - 70,

    },
    Label: {
        position: "relative",
        fontSize: 36,
        color: 'white',
    },
    TextBox: {
        padding: 10,
        margin: 10,
        width: Dimensions.get('window').width*0.8,
        height: 50,
        backgroundColor: '#1f4068',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor:'#888',
        borderRadius: 7,

    },
    Loginbutton: {
        marginTop: 10,
        borderRadius: 5,
        width: Dimensions.get('window').width*0.8,
        backgroundColor: "rgb(0,142,255)",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start'
    },
    regisbutton: {
        marginTop: 10,
        borderRadius: 7,
        width: Dimensions.get('window').width*0.8,
        backgroundColor: "#1f4068",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(0,142,255)',
        borderWidth: 3,
      
    },
    cancelbutton: {
        marginTop: 10,
        borderRadius: 5,
        width: Dimensions.get('window').width*0.8,
        backgroundColor: "grey",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Textinbutton: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    Textinbuttonregis:{
        fontSize: 16,
        color: "rgb(0,142,255)",
        fontWeight: 'bold'
    },
    statuslog:{
        
        fontSize: 40,
        color: "rgb(0,142,255)",
        fontWeight: 'bold'
    }
});
