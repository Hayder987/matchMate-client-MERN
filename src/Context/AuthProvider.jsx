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
import useAxiosPublic from "../hooks/axios/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const serverUrl = useAxiosPublic()


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
    const unSubscribe = onAuthStateChanged(auth, async(currentUser)=>{
      setUser(currentUser)
      // create token and send server
      if(currentUser){
        const jwtUser = {
          email: currentUser?.email
        }
       await serverUrl.post('/jwt',jwtUser, {withCredentials:true})
      }
      else{
        await serverUrl.post('/logout',{}, {withCredentials:true})
        setLoading(false)
      }
      // save user data in DB
      if(currentUser){
        const user ={
          name : currentUser?.displayName,
          email: currentUser?.email,
          photo : currentUser?.photoURL,
          status: "unregistered",
          role: "client",
          type:"normal"
        }

        await serverUrl.post(`/userLogin`, user)
      }
        setLoading(false)
    })

    return ()=>{
        unSubscribe()
    }
  },[serverUrl])

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
