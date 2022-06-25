import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(false);


    const loginFunction = (email, password) => {

        setLoading(true);

        axios.post(`${URL}/login`, {
            email,
            password
        }).then(response => {

            let userInfo = response.data;
            setUserInfo({ email, password, 'token': userInfo });
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));

            setLoading(false);

        }).catch(e => {
            console.log('Error login:::: ' + e);
            setLoading(false);
        });

    }

    const logout = () => {
        setLoading(true);

        setTimeout(() => {
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setLoading(false);
        }, 2000);

    }

    const isLogged = async () => {
        try {

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserInfo(userInfo);
            }

        } catch (e) {
            console.log(`Function logged error::: ${e}`);
        }
    };


    useEffect(() => {
        isLogged();
    }, []);

    return (
        <AuthContext.Provider value={{
            loading,
            userInfo,
            loginFunction,
            logout,
            isLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
}
