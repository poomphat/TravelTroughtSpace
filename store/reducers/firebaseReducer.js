
import * as firebase from 'firebase';
import {LOGIN, UPDATE_SCORE, CHANGE_SHIP,CHANGE_PIC, SET_CURRENT} from "../actions/storetemp"
import { useState } from 'react';
const initialState = {
    user:{},
    img:{
        background:"https://lh3.googleusercontent.com/fife/ABSRlIqvyiaDRVM8TIm9l7DiNBPR-Sw1F-tGjVYUlmY-7yLc3i_K95AQSz4P_nmbyBFL1zEa0nIaYtpFyF1znogsflbIquMS6WvnMW78Nu35kpiCYzlfB6PTVB-yPg4JfFhw_Ehpx9lu0PLbnpOOI8YflYlBD7lGkkMiPqGbycgGVLNGVVV1od13D6QHitTNcGyIJ3MrT1OwFdWxjRobxjlwkffBk5dZgPMY0QejFL9B19FMWimRMQjPapoAEONbhgjFqRsOVGotRrDLMXEMsC1QdubmtZHG5E8-a3aWlYC-6_mQzEI9D4lTMkMRipO4rwWykTlFh6hYIkArXoGtmwi0_hIvHw31IpN4js55KbYsy_BuZy7GKFSHIEmxNmRtqPNTjwDs11dzTP8QY57MoZ4pQd9GJLt0_DgznAsPGvDSTiwINN5bZdMpDAb3CpDa3dC0T9BhfOeBAfJotrwQRgigJS4oqWpe_NyWU2HYcYPJ-o-xsPMQVVZNJwfQf9Pytp4t2EQVDZCRU1PH6cjOCfcIv2ERebQyoSDXb_mVsyiEEs1utwDUSMVTuxIVwpYsuTIcuPVoMfiUFXCb7boD1SFEHUQsEAFAPrNU3HmPBM3Gr-qbes8iGC9TWv8aOMKGyBVDPVlkLYwBeln6g50YOIprtEs1ZY--x1ZSquiJkI1ZyN5EHNlO_zkE63a555iHCbkReWo4ME6vhhp9_qwhzvvVBJWTJv5JWDqi=w1920-h1007-ft"
    },
    achive:{
        "Earth" : {
          "name" : "Wise guy of the world"
        },
        "Jupiter" : {
          "name" : "This Planet so BEEG"
        },
        "Mars" : {
          "name" : "Want some potatoes?"
        },
        "Mercury" : {
          "name" : "Mercury guy"
        },
        "Neptune" : {
          "name" : "Wow! We come so far"
        },
        "Saturn" : {
          "name" : "I want to drive a car on that rings"
        },
        "Uranus" : {
          "name" : "The ice cube"
        },
        "Venus" : {
          "name" : "I think i know alot of Venus"
        }
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
                var user = {...state.user}
                var key = ""
                //const plan = action.planet
                //console.log(user.gotAchievement[action.planetName])
                user['gotAchievement'][action.planetName] = true
                //console.log('AFTER: '+user.gotAchievement[action.planetName])

                //FIND KEY
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == user.email){
                        //console.log(Data.key)
                        key = Data.key
                    }
                })

                //const key = checkUserKey(user.email)
                //console.log(user)
                checkShip(user, key)
                firebase.database().ref('UsersList/' + key).set(user)
                return {...state, user : user}
            case CHANGE_SHIP:
                var user = {...state.user}
                user['CurrentShip'] = action.shipIndex

                //FIND KEY
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == user.email){
                        //console.log(Data.key)
                        key = Data.key
                    }
                })

                //console.log(user)
                firebase.database().ref('UsersList/' + key).set(user)
                return {...state, user : user}
            case CHANGE_PIC:
                var user = {...state.user}
                user['Profile'] = action.picIndex

                //FIND KEY
                ref.orderByChild('email').on("child_added", function(Data){
                    if(Data.val().email == user.email){
                        //console.log(Data.key)
                        key = Data.key
                    }
                })

                //console.log(user)
                firebase.database().ref('UsersList/' + key).set(user)
                return {...state, user : user}
            case SET_CURRENT:
                var user = {...state.user}
                user['current'] = action.current

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