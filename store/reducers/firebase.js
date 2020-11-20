import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction"
import * as firebase from 'firebase';

const initialState = {
    user = {}
    };

    const mealReducer = (state = initialState, action) => {
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
        } 
    }

        
export default mealReducer;