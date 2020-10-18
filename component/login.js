import React, {useState} from 'react';
import { ImageBackground,StyleSheet, Text, View, Animated, Image, Dimensions,TextInput, Button} from 'react-native';
import LoginBox from "./loginBox";



const MyloginPage = (props) =>{
    const [loginState, setLoginState] = useState('login');
    const onpressLogin = (text) => {
        setLoginState(text)
    }
    const RenderTheBox = (boxType) => {
        if (boxType === 'login'){
            return(
                <View style={styles.loginBox}>
                        <Text style={styles.Label}>Login</Text>
                        <TextInput 
                            placeholder={'Username'} 
                            style={styles.TextBox}
                        />
                        <TextInput 
                            placeholder={'Password'} 
                            style={styles.TextBox}
                        />
                        <View style={styles.logbutton}>
                        <Button
                            title={'login'}
                        />
                        </View>
                        <Text style={{color:'grey', margin:5,}}>Don't have an account?</Text>
                        <View style={styles.regisbutton}>
                        <Button
                            title={'register'}
                            color="grey"
                            onPress={() => onpressLogin('register')}
                        />
                        </View>
                    </View>
            );
        }
        else if(boxType === 'register'){
            return(
                <View style={[styles.loginBox, styles.regisBox]}>
                        <Text style={styles.Label}>Register</Text>
                        <TextInput 
                            placeholder={'Username'} 
                            style={styles.TextBox}
                        />
                        <TextInput 
                            placeholder={'Password'} 
                            style={styles.TextBox}
                        />
                        <TextInput 
                            placeholder={'Confirm Password'} 
                            style={styles.TextBox}
                        />
                        <TextInput 
                            placeholder={'Email'} 
                            style={styles.TextBox}
                        />
                        <View style={styles.regisbutton}>
                        <Button
                            title={'register'}
                            
                        />
                        
                        </View>

                        <View style={styles.cancelbutton}>
                        <Button
                            title={'cancel'}
                            color="grey"
                            onPress={() => onpressLogin('login')}
                        />
                        </View>
                    </View>
            );
        }
    }        
    
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.png')} style={styles.bg} resizeMode="repeat"/>
            {RenderTheBox(loginState)} 
        </View>  
    );
};
export default MyloginPage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: "center",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    bg:{
        position: 'absolute',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
    loginBox:{
        alignItems: 'center',
        width:Dimensions.get('window').width - 70,
        height:Dimensions.get('window').height - 435,
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.70,
        shadowRadius: 15.19,

        elevation: 23,
    },
    regisBox:{
        width:Dimensions.get('window').width - 70,
        height:Dimensions.get('window').height - 320,
    },
    Label:{
        position:"relative",
        fontSize:20
    },
    TextBox:{
        padding: 10,
        margin:10,
        width:200, 
        height:50, 
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius:7,
    },
    logbutton:{
        marginTop: 10,
        borderRadius: 10,
        color: "white",
        width: 200,
    },
    regisbutton:{
        borderRadius: 10,
        color: "white",
        width: 200,
    },
    cancelbutton:{
        margin: 10,
        borderRadius: 10,
        color: "white",
        width: 200,
    }
  });
