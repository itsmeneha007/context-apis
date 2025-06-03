import React, {createContext, useState} from "react"

export const UserContext = createContext();

export function UserProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleAuth = () => {
        setIsLoggedIn(prev => !prev);
    }

    return (
        <UserContext.Provider value={{isLoggedIn, toggleAuth}}>
        {children}
    </UserContext.Provider>
    )
}