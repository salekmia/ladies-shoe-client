import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [isLoding, setIsLoding] = useState(true)
    const [admin, setAdmin] = useState(false)

    // google sign in
    const signInUsignGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // email passsword sign up
    const signUpUsingPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .finally(()=> setIsLoding(false))
    }

    // email password sign in
    const signInUsingPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .finally(()=> setIsLoding(false))
        
    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
        .finally(()=> setIsLoding(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            } else {
                
            }
            setIsLoding(false)
        })
    }, [])


    // save user to data base
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName}
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    // logout
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(()=> setIsLoding(false))
    }


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user?.email])
    
    return {
        user,
        signInUsignGoogle,
        signUpUsingPassword,
        signInUsingPassword,
        logOut, 
        setUserName,
        setUser,
        isLoding,
        saveUser,
        admin
    }
}

export default useFirebase;