import { createContext, useState } from "react";
import api from "../../api/api";

import styled from 'styled-components/native';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);   



    const signIn = async (username, password) => {
        setUser({ username });
        //api.defaults.headers.authorization = `Bearer ${email}`;
        let response
        try {
            response = await api.post('/noauth/merchants/login', {
                username,
                password
            });            
            const { merchant, token } = response.data;
            
            
            api.defaults.headers.authorization = token;
            setUser(merchant);
            
            setIsLogged(true);
        } catch (error) {
            console.log(error.response.data.message)
            const text = error?.response?.data?.message || error?.message;            
            console.log("ERRO AO FAZER LOGIN ")
            throw new Error(text)
            
                     
        }
     
    }

    const signOut = () => {
        setUser(null);
        setIsLogged(false);
    }

    return (
       
        <AuthContext.Provider value={{ name: null, isLogged, user, signIn, signOut } }>
           
            { children }
            
        </AuthContext.Provider>
        
    );
}

export { AuthContext, AuthProvider };

