import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import ProgressBar from 'react-native-progress/Bar'


const LoadingScreen = (props) => {


    const [loaded] = useFonts({
        Kanit: require('../assets/fonts/Kanit-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay={true}
                style={{
                    width: 200,
                    height: 200,
                }}
                source={require('../assets/load.json')}
            />
            <ProgressBar
                indeterminate={true}
                indeterminateAnimationDuration={1500}
                width={200}
                height={20}
                animated={true}
                color={"white"}
                borderWidth={2}
                useNativeDriver={true}
                borderColor={"white"}
            />
            <Text style={styles.textload}>Loading ...</Text>
        </View>
    );
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgb(0,122,255)'
    },
    textload: {
        marginTop: 10,
        color: 'white',
        fontSize: 24,
        fontFamily: 'Kanit'
    }
});