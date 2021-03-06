import React from 'react';
import { Text, View, Animated, Image, Dimensions,TextInput, Button, StyleSheet} from 'react-native';

const RegisBox = (props) =>{
    return (
        <View style={styles.loginBox}>
                <Text style={styles.loginLabel}>Login</Text>
                <TextInput 
                    placeholder={'Username'} 
                    style={styles.loginTextBox}
                />
                <TextInput 
                    placeholder={'Password'} 
                    style={styles.loginTextBox}
                />
                <View style={styles.logbutton}>
                <Button
                    title={'login'}
                />
                </View>
                <Text>don't have an account?</Text>
                <View style={styles.regisbutton}>
                <Button
                    title={'register'}
                    color="orange"
                />
                </View>
            </View>
    );
} 
export default RegisBox;

const styles = StyleSheet.create({
    RegisBox:{
        alignItems: 'center',
        //justifyContent: 'center',
        width:Dimensions.get('window').width - 70,
        height:Dimensions.get('window').height - 450,
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
    },
    RegisLabel:{
        position:"relative",
        fontSize:20
    },
    RegisTextBox:{
        padding: 10,
        margin:10,
        width:200, 
        height:50, 
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius:7,
    },
    regisbutton:{
        borderRadius: 10,
        color: "white",
        width: 200,
        
    }
  });
