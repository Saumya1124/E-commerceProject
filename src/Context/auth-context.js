import React, { useState } from "react";

const AuthContext = React.createContext({
    token : '',
    isLoggedIn : false ,
    logIn : (token)=>{},
    logOut : ()=>{}
})

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token')

    const [ token , setToken] = useState(initialToken)

    const userLoggedIn = !!token 

    const logInHandler = (token) => {
        setToken(token)
        localStorage.setItem('token',token)
    }

    const logOutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    setTimeout(logOutHandler , 3000)





    const contextValue = {
        token : token,
        isLoggedIn : userLoggedIn,
        logIn : logInHandler,
        logOut : logOutHandler
    }


    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext