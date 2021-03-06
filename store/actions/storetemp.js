


export const LOGIN = "LOGIN";
export const UPDATE_SCORE = "UPDATE_SCORE"
export const CHANGE_SHIP = "CHANGE_SHIP"
export const CHANGE_PIC = "CHANGE_PIC"
export const SET_CURRENT = "SET_CURRENT"
export const loginStoreUser = (userObj) => {
    return { type: LOGIN, user: userObj };
   };

export const updateScore = (planet) => {
    return { type: UPDATE_SCORE, planetName: planet}
}
export const changeShip = (index) =>{
    return { type: CHANGE_SHIP, shipIndex: index}
}
export const changePic = (index) =>{
    return { type: CHANGE_PIC, picIndex: index}
}
export const setCurrent = (current) =>{
    return { type: SET_CURRENT, current: current}
}
