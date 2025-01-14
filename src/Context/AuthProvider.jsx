import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const registerUser = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (name, photoPath) => {
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoPath,
    });
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async()=>{
    setLoading(true)
    return await signInWithPopup(auth, googleProvider)
  }

//   get current User
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })

    return ()=>{
        unSubscribe()
    }
  },[])

  const logOutUser = async()=>{
    setLoading(false)
    return await signOut(auth)
  }


  const authInfo = {
    user,
    loading,
    registerUser,
    updateUser,
    loginUser,
    googleLogin,
    logOutUser

  };

  console.log(user)

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
