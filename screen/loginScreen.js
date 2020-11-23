import React, { useState, useRef, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Dimensions, TextInput, Button,Easing,KeyboardAvoidingView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import FirebastInit from "../firebase/FirebaseInit"
import LottieView from 'lottie-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { useSelector, useDispatch } from "react-redux";
import { loginStoreUser } from '../store/actions/storetemp'

/*
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
*/
FirebastInit()

const MyloginPage = (props) => {
    const movebg = useRef(new Animated.Value(0)).current;
    const translate = movebg.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg','360deg'],
    });

    useEffect (() => {
        Animated.loop(
            Animated.timing(
            movebg, {
            toValue: 1,
            duration: 50000,
            useNativeDriver: true,
            easing : Easing.linear,
        })).start( ()=>{movebg.setValue(0)});
    })

    const [alertsuccess, setalertsuccess] = useState(false);
    const [alertfailed, setalertfailed] = useState(false);

    const [alertregissuccess, setalertregissuccess] = useState(false);
    const [alertregisfailed, setalertregisfailed] = useState(false);

    const [loginState, setLoginState] = useState('Travel Trought Space');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [Id, setId] = useState('');

    //bg
    const bg = useSelector( (state) => state.img.background );
    //console.log("login : "+bg)

    const onpressLogin = (text) => {
        setLoginState(text)
        console.log(firebase.auth().currentUser);
        
    }
    const logout = () => {
        firebase.auth().signOut()
        console.log(firebase.auth().currentUser);
        
    }
    const signUpUser = (email, password,fname,lname) => {
        //try {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {  
                console.log("User ID :- ", data.user.uid);
                setId(data.user.uid);
                firebase.database().ref('UsersList/').push({
                    email,
                    fname,
                    lname,
                    level:1,
                    shipList:[true, false, false],
                    Profile:0,
                    gotAchievement:{
                        "Earth" : false,
                        "Jupiter" : false,
                        "Mars" : false,
                        "Mercury" : false,
                        "Neptune" : false,
                        "Saturn" : false,
                        "Uranus" : false,
                        "Venus" : false
                      }
                })
               setalertregissuccess(true)
                setTimeout(() => {
                    setalertregissuccess(false)
                }, 2500);
                setTimeout(() => {
                    setLoginState('Travel Trought Space')
                }, 3000);
                //useDispatch()
             }).catch(error =>{
                console.log(error.toString())
                setalertregisfailed(true)
             })
            
            
        //}
    }
    const dispatch = useDispatch();
    const loginUser = (email, password) => {

        //try {
            firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
                setalertsuccess(true)
                setTimeout(() => {
                    console.log('Waitng')
                    props.navigation.navigate('mainScreen',{current: 2})
                    setalertsuccess(false)
                  }, 1500);
                console.log(user.user.email)
                var userObj = {}
                const ref = firebase.database().ref('UsersList')
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == user.user.email){
                        userObj = Data.val();
                        dispatch(loginStoreUser(userObj))
                    }
                })
                console.log('finishlogin')
            
            }).catch(error => {
                console.log('error ' , error)
                setalertfailed(true)
            })
        //}
        /*
        catch (error) {
            console.log(error.toString())
        }
        */
    }
    const renderCustomAlertView = () => {
        return(
            <View style={{alignItems: 'center'}}>
                 <LottieView
                autoPlay={true}
                speed={2}
                loop={false}
                style={{
                    width: Dimensions.get('window').width*0.2,
                    
                }}
                source={require('../assets/success.json')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={styles.Textalert}>Login success!!</Text>
                <Text style={styles.Textalertmini}>Now you ready to travel in space.</Text>
            </View>
            <TouchableOpacity style={styles.gotravelbutton}
                onPress={() => {
                    setalertsuccess(false)
                }}>
                <Text style={styles.Textinbutton}>Travel!!</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderCustomAlertViewFailed = () => {
        return(
            <View style={{alignItems: 'center'}}>
                 <LottieView
                autoPlay={true}
                loop={false}
                speed={2}
                style={{
                    width: Dimensions.get('window').width*0.2,
                    
                }}
                source={require('../assets/failure.json')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={styles.Textalert}>Failed to login</Text>
                <Text style={styles.Textalertmini}>Check your E-mail and password!!</Text>
            </View>
            <TouchableOpacity style={styles.failedlbutton}
            onPress={() => {
                setalertfailed(false)
            }}>
                <Text style={styles.Textinbutton}>
                OK</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderCustomAlertViewregis = () => {
        return(
            <View style={{alignItems: 'center'}}>
                 <LottieView
                autoPlay={true}
                loop={false}
                speed={2}
                style={{
                    width: Dimensions.get('window').width*0.2,
                    
                }}
                source={require('../assets/success.json')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={styles.Textalert}>Register success!!</Text>
                <Text style={styles.Textalertmini}>Go to login and travel trought Universe.</Text>
            </View>
            <TouchableOpacity style={styles.failedlbutton}
            onPress={() => {
                setalertregissuccess(false)
            }}>
                <Text style={styles.Textinbutton}>
                OK</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const renderCustomAlertViewFailedregis = () => {
        return(
            <View style={{alignItems: 'center'}}>
                 <LottieView
                autoPlay={true}
                loop={false}
                speed={2}
                style={{
                    width: Dimensions.get('window').width*0.2,
                    
                }}
                source={require('../assets/failure.json')}
            />
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={styles.Textalert}>Failed to register</Text>
                <Text style={styles.Textalertmini}>Check your information</Text>
            </View>
            <TouchableOpacity style={styles.failedlbutton}
            onPress={() => {
                setalertregisfailed(false)
            }}>
                <Text style={styles.Textinbutton}>
                OK</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const RenderTheBox = (boxType) => {
        if (boxType === 'Travel Trought Space') {
            return (
                <View style={styles.loginBox}>
                    
                    <TextInput
                        placeholder={'Email'}
                        color='white'
                        fontWeight='bold'
                        placeholderTextColor="#ccc"
                        style={styles.TextBox}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => setUsername(email)}
                    />
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.TextBox}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TouchableOpacity style={styles.Loginbutton}
                        onPress={() => {loginUser(Username, Password)}}
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
                        placeholder={'Email'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.TextBox}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(email) => setUsername(email)}
                    />
                    <TextInput
                        placeholder={'Password'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.TextBox}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(pass) => setPassword(pass)}
                    />
                    <TextInput
                        placeholder={'name'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.TextBox}
                        autoCapitalize="none"
                        onChangeText={(name) => setname(name)}
                    />
                    <TextInput
                        placeholder={'lastname'}
                        placeholderTextColor="#ccc"
                        color='white'
                        fontWeight='bold'
                        style={styles.TextBox}
                        color
                        autoCapitalize="none"
                        onChangeText={(sur) => setsurname(sur)}
                    />

                    <TouchableOpacity style={styles.Loginbutton}
                        onPress={() => signUpUser(Username, Password,name,surname)}
                    ><Text style={styles.Textinbutton}>Register</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.cancelbutton}
                        onPress={() => onpressLogin('Travel Trought Space')}
                    ><Text style={styles.Textinbutton}>Cancel</Text></TouchableOpacity>
                </View>
            );
        }
    }

    return (
        <View style={styles.container}>
 <KeyboardAvoidingView
                style={{alignItems: 'center',
                justifyContent: "center"}}
                behavior={Platform.OS == "ios" ? "padding" :'height'}>
            <Animated.Image source={{uri : bg}} style={{
                transform : [{rotate : translate}],
                position: 'absolute',
                height: '250%',
                width:"250%"
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
            <AwesomeAlert
                show={alertsuccess}
                showProgress={false}
                customView={renderCustomAlertView()}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                contentContainerStyle={styles.alert}
                overlayStyle={styles.bgalert}
                />
             <AwesomeAlert
                show={alertfailed}
                showProgress={false}
                customView={renderCustomAlertViewFailed()}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                contentContainerStyle={styles.alert}
                overlayStyle={styles.bgalert}
                />
            <AwesomeAlert
                show={alertregissuccess}
                showProgress={false}
                customView={renderCustomAlertViewregis()}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                contentContainerStyle={styles.alert}
                overlayStyle={styles.bgalert}
                />
             <AwesomeAlert
                show={alertregisfailed}
                showProgress={false}
                customView={renderCustomAlertViewFailedregis()}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                contentContainerStyle={styles.alert}
                overlayStyle={styles.bgalert}
                />
            </KeyboardAvoidingView>
        </View>
    );
};
export default MyloginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
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
    },
    alert:{
        backgroundColor: '#1f4068',
        borderRadius: 10,
        width: Dimensions.get('window').width*0.7,
    },
    Textalert:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    Textalertmini:{
        marginTop: 20,
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    gotravelbutton:{
        marginTop: 20,
        backgroundColor: 'rgb(48,209,88)',
        width: Dimensions.get('window').width*0.6,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    bgalert:{
        backgroundColor: '#000000bb'
    },
    failedlbutton:{
        marginTop: 20,
        backgroundColor: 'rgb(255,69,58)',
        width: Dimensions.get('window').width*0.6,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    }

});
