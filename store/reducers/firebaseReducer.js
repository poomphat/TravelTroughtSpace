
import * as firebase from 'firebase';
import {LOGIN, UPDATE_SCORE, CHANGE_SHIP} from "../actions/storetemp"
import { useState } from 'react';
const initialState = {
    user:{},
    img:{
        background:"https://firebasestorage.googleapis.com/v0/b/mobileapptroughtthespace.appspot.com/o/bg.png?alt=media&token=eb78cea0-1e29-40f8-91c6-f3a2a66b792f"
    }
    };

    const firebaseReducer = (state = initialState, action) => {
        const ref = firebase.database().ref('UsersList')
        switch (action.type) {
            case LOGIN :
                /*
                console.log("dogshit")
                const ref = firebase.database().ref('UsersList')
                var users = ""
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == action.email){
                        console.log("dogshit-SUCCESS")
                        users = Data.val();
                    }
                })
                console.log("dogshit-PROCEED")
                console.log(users)
                */
                return {...state, user : action.user}
            case UPDATE_SCORE:
                var user = state.user
                var key = ""
                //const plan = action.planet
                console.log(user.gotAchievement[action.planetName])
                user['gotAchievement'][action.planetName] = true
                //console.log('AFTER: '+user.gotAchievement[action.planetName])

                //FIND KEY
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == user.email){
                        console.log(Data.key)
                        key = Data.key
                    }
                })

                //const key = checkUserKey(user.email)
                console.log(user)
                checkShip(user, key)
                firebase.database().ref('UsersList/' + key).set(user)
                return {...state, user : user}
            case CHANGE_SHIP:
                var user = state.user
                user['CurrentShip'] = action.shipIndex

                //FIND KEY
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == user.email){
                        console.log(Data.key)
                        key = Data.key
                    }
                })

                console.log(user)
                firebase.database().ref('UsersList/' + key).set(user)
                return {...state, user : user}

            default:
                return state;
        } 
    }


    const checkUserKey = (email) =>{
        const ref = firebase.database().ref('UsersList')
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == email){
                        console.log(Data.key)
                        return Data.key
                    }
                })
    }
    
    const checkShip = (user, key) =>{
        var user = user
        const ga = user.gotAchievement
        if (ga.Earth == true && ga.Mercury == true && ga.Venus == true){
            user.shipList = [true, true, false]
        }
        if (ga.Mars == true && ga.Jupiter == true && ga.Saturn == true){
            user.shipList = [true, true, true]
        }
        console.log(user)
        firebase.database().ref('UsersList/' + key).set(user)
    }
    /*
    switch (action.type) {
        case TOGGLE_FAVORITE :
            const index = state.favoriteMeals.findIndex(el => (el.id === action.mealId))
            if (index == -1) {
                const selectedMeal = MEALS.find((meal) => meal.id == action.mealId)
                console.log('add')
                const m = [...state.favoriteMeals]
                m.push(selectedMeal)
                return { ...state, favoriteMeals : m };
            }
            else if (index >= 0)
                console.log('delate')
                
                const n = [...state.favoriteMeals]
                n.splice(index)
                return {...state, favoriteMeals : n}
        default:
            console.log('alooooo')
            return state;
    } */




    
        
export default firebaseReducer;