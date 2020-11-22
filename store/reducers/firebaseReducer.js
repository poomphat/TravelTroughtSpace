
import * as firebase from 'firebase';
import {LOGIN} from "../actions/storetemp"
import { useState } from 'react';
const initialState = {
    user:{},
    img:{
        background:"https://firebasestorage.googleapis.com/v0/b/mobileapptroughtthespace.appspot.com/o/bg.png?alt=media&token=eb78cea0-1e29-40f8-91c6-f3a2a66b792f"
    }
    };

    const firebaseReducer = (state = initialState, action) => {
        
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
            
            default:
                return state;
        } 
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