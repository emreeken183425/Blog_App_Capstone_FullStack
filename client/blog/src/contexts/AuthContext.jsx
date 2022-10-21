import axios from "axios"
import { createContext } from "react"
import { useState } from "react";
import {toastSuccessNotify} from '../helper/ToastNotify'

//! Defining

export const AuthContext = createContext()



//! Provider
const AuthContextProvider = (props) => {
const url ="http://127.0.0.1:8000/"

const [currentUser,setCurrentUser] =useState(sessionStorage.getItem("username")||false)
let keys=sessionStorage.getItem("Token")
const [key,setKey] =useState(keys && window.atob(keys) )

//?************************REGİSTER*********************

const createUser =async(email,password,firstName,lastName,userName,navigate) =>{
    const response = await axios.post(`${url}users/register/`,{
            "username": userName,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password,
            "password1": password,
    })
    if(response.data.token){
      setCurrentUser(response.data.username )
      sessionStorage.setItem("username",response.data.username)
      setKey(response.data.token)
      toastSuccessNotify("user register successfully")
      navigate("/")
    }
   console.log(response);
}

//?************************LOGİN*********************

const signIn=async(email,password,username,navigate)=>{
  try {
    const res=await axios.post(`${url}users/auth/login/ `,{
      
        "username": username,
        "email": email,
        "password": password
    
    } )
    if(res.data.key){
      setCurrentUser(res.data.username)
      sessionStorage.setItem("username",res.data.user.username )
      setKey(res.data.key)
      const myKey=window.btoa(res.data.key)
      sessionStorage.setItem("Token",myKey)
      toastSuccessNotify("user login successfully")
      navigate("/")
    }
  

  } catch (err) {
    console.log(err);
  }
}
//?************************LOGOUT*********************

const logout =async(navigate) =>{
  try{
   
   const res = await axios.post(`${url}users/auth/logout/`)
   console.log(res)
   if(res.status===200){
    setCurrentUser(false)
    setKey(false)
    sessionStorage.clear()
    toastSuccessNotify("User logout succesfully")
    navigate("/login")
   }
  }
  catch(err){
    console.log(err)
  }
}

let values ={
    createUser,
    currentUser,
    signIn,
    logout,
    key
}

  return (
    <AuthContext.Provider value={values} >{props.children}</AuthContext.Provider>
  )
}

export default AuthContextProvider