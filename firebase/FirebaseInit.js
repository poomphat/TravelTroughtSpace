import React from 'react';
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
const FirebaseInit = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export default FirebaseInit