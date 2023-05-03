import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const gitProvider=new GithubAuthProvider()


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub=()=>{
    setLoading(true)
    return signInWithPopup(auth, gitProvider);


  }
  const resetPassword = (email) => {
    setLoading(true);

    return sendPasswordResetEmail(auth, email);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscibe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    signInWithGithub,
    resetPassword,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
