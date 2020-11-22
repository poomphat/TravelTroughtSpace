


export const LOGIN = "LOGIN";

export const loginStoreUser = (userObj) => {
    //console.log("THATDOG"+ useremail)
    return { type: LOGIN, user: userObj };
   };
