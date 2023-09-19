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
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
// import {doc,getDoc,getFirestore,setDoc } from './firebase/firestore'

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
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
console.log("Auth:",auth)
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect=()=>{
  return signInWithRedirect(auth,provider)
}

const db = getFirestore();
console.log("Db",db)


export const addCollectionAndDocument=async (collectionKey,objectsToAdd)=>{
  const collectionRef=collection(db,collectionKey)
  const batch=writeBatch(db)

  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  })

  await batch.commit()
  console.log("Done")
}

export const getCategoriesAndDocument=async ()=>{
  const collectionRef=collection(db,"categories");
  console.log("COLLECTION REF:",collectionRef)
  const q=query(collectionRef)
  console.log("AUERYS:",q)

  const querySnapShot=await getDocs(q)
  console.log("QUERY SNAP SHOT:",querySnapShot)
  const categoryMap=querySnapShot.docs.reduce((acc,docShapshot)=>{
    const{title,items}=docShapshot.data()
    acc[title.toLowerCase()]=items
    return acc
  },{})

  return categoryMap
}



export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("userDocRef", userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log("UserSnapShot:",userSnapShot);
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

export const UsersignOut=async ()=>{
  return await signOut(auth)
}


export const onAuthStateChangedListner=(callback)=>{
  console.log("hello....")
  return onAuthStateChanged(auth,callback)
}