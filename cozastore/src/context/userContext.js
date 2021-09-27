import { createContext } from "react";


export const userContext=createContext({
    username:"",
    setUsername:()=>{},
    email:"",
    setEmail:()=>{},
    password:"",
    setPassword:()=>{},
    phone:"",
    setPhone:()=>{},
    policy:"",
    setPolicy:()=>{},
    gender:"",
    setGender:()=>{},
    token:"",
    setToken:()=>{},
    validator:null,
    forceUpdate:()=>{},
    handleLogin:()=>{},
    handleRegister:()=>{},
})