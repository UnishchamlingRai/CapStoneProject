// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
// import {doc,getDoc,getFirestore,setDoc } from './firebase/firestore'

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVGRc8nO8nKiLskI7WC8U5dZXmQP70IU8",
  authDomain: "corwn-clothing-db.firebaseapp.com",
  projectId: "corwn-clothing-db",
  storageBucket: "corwn-clothing-db.appspot.com",
  messagingSenderId: "621420583059",
  appId: "1:621420583059:web:a1520482343ec3526e5566",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect=()=>{
  return signInWithRedirect(auth,provider)
}

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.user.uid);

  console.log("userDocRef", userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef
};


export const createUserAuthWithEmailAndPassword=(email,password)=>{
  if(!email || !password) return
  return createUserWithEmailAndPassword(auth,email,password)
}

export const AuthsignInWithEmailAndPassword=(email,password)=>{
  if(!email || !password) return
  return signInWithEmailAndPassword(auth,email,password)
}