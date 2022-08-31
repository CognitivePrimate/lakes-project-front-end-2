import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';
import { 
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    User} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { fetchExistingVolunteerAndSetUser } from '../services/volunteerServices';
import Volunteer from '../model/volunteer';

// const baseURL = process.env.REACT_APP_BASE_URL

export interface AuthContextModel {
    // user if not logged in be null FIX ANY TYPE HOLY SHIT
    user: Volunteer | null;
    signInWithGoogle: () => void;
    register: (registerEmail: string, registerPassword: string) => void;
    login: (loginEmail: string, loginPassword: string) => void;
    logout: () => void;
};

const defaultValue: AuthContextModel = {
    user: null,
    signInWithGoogle: () => {},
    register: () => {},
    login: () => {},
    logout: () => {},
};

export const AuthContext = createContext(defaultValue);

export const AuthContextProvider = ({children}: {children: ReactNode}) => {
    // sets initial User state to null BUT HOLY SHIT FIX ANY TYPE
    const [user, setUser] = useState<any | null>(null);
    // let navigate = useNavigate()
    // const functions = require('firebase-functions')
    
    // USEEFFECT HERE?! THEN REDIRECT?
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // TODO
            // get authIdToken from Firebase
            // send authIdToken to backend
            // fetch volunteer data
            // set user with v data from backend
            // OR JUST USE MONGODB OBJECTID??
            // TEST -- retrieve token from Firebase
            if (auth.currentUser != null) {
                auth.currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                    console.log('IdToken', idToken)
                    // Send token to your backend via HTTPS
                    fetchExistingVolunteerAndSetUser(idToken).then((user: Volunteer) => {
                        setUser(user)
                        console.log('User Set:', user.firstName + user.lastName)
                    } )
                    
                }).catch(function(error) {
                    console.log(error)
                });
            }
            // END TEST
            //THIS SHOULD ONLY 
            setUser(currentUser);
            console.log('currentUser', currentUser, typeof(currentUser));
        })
    }, [])

    // to sign in with Google via a redirect
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        try {
            console.log('signinwithgoogtest')
            signInWithRedirect(auth, provider).then((results) => {
                console.log('SignInWithRedirectResults:', results);
            })
        } catch (error) {
            console.log('error:', error)
        }
    }

    // to login or sign-up via email
    const register = async (registerEmail: string, registerPassword: string) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            setUser(user)
            
            console.log('register user:', user);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (loginEmail: string, loginPassword: string) => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };
    
    const logout = async () => {
        setUser(null)
        await signOut(auth);
    };


    return (
        <AuthContext.Provider value={{user, signInWithGoogle, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}