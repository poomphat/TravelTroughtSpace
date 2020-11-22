


export const LOGIN = "LOGIN";
export const UPDATE_SCORE = "UPDATE_SCORE"
export const CHANGE_SHIP = "CHANGE_SHIP"

export const loginStoreUser = (userObj) => {
    //console.log("THATDOG"+ useremail)
    return { type: LOGIN, user: userObj };
   };

export const updateScore = (planet) => {
    return { type: UPDATE_SCORE, planetName: planet}
}
export const changeShip = (index) =>{
    return { type: CHANGE_SHIP, shipIndex: index}
}
