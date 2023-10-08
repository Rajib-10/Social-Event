/* eslint-disable react/prop-types */
import { GoogleAuthProvider,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})

    // google login 
    const googleLogin =()=>{
        return signInWithPopup(auth,provider)
    }
   
    // user create 
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sing in user 

    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user log out 

    const userLogOut =()=>{
        return signOut(auth)
    }

    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    // observer auth state 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log("current user",currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        googleLogin,
        createUser,
        signInUser,
        user,
        userLogOut,
        updateUserProfile
    }
        
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;