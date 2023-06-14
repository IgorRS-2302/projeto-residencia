import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UseUserContext({children}){
    const [userData, setUserData] = useState({});

    function login(user){
        setUserData(()=> user);
    }
    
    function logout(){
        setUserData({})
    }

    return(
    <UserContext.Provider value={{login,logout, userData}}>
        {children}
    </UserContext.Provider>
    )
}