
import * as firebase from 'firebase';
import LOGIN from "../actions/storetemp"
const initialState = {
    user:{},
    img:{
        background:"https://firebasestorage.googleapis.com/v0/b/mobileapptroughtthespace.appspot.com/o/bg.png?alt=media&token=eb78cea0-1e29-40f8-91c6-f3a2a66b792f"
    }
    };

    const firebaseReducer = (state = initialState, action) => {
        switch (action.type) {
            /*
            case LOGIN :

                return {...state, favoriteMeals : n}
            */
            default:
                console.log('alooooo')
                return state;
        } 
    }

        
export default firebaseReducer;