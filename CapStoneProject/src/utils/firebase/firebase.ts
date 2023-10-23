// Import the functions you need from the SDKs you need
import { promises } from "dns";
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
  onAuthStateChanged,
  User,
  NextOrObserver,
} from "firebase/auth";
// import {doc,getDoc,getFirestore,setDoc } from './firebase/firestore'

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs,QueryDocumentSnapshot } from "firebase/firestore";
import { Categoreis } from "../../store/categories/categories.actionType";
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
// console.log("Auth:",auth)
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const signInWithGoogleRedirect=()=>{
  return signInWithRedirect(auth,provider)
}

const db = getFirestore();
// console.log("Db",db)
export type ObjectsToAdd={
  title:string
}

export const addCollectionAndDocument=async <T extends ObjectsToAdd>(collectionKey:string,objectsToAdd:T[]):Promise<void>=>{
  const collectionRef=collection(db,collectionKey)
  const batch=writeBatch(db)

  objectsToAdd.forEach((object)=>{
    const docRef=doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  })

  await batch.commit()
  console.log("Done")
}

export const getCategoriesAndDocument=async (categories:string):Promise<Categoreis[]>=>{
  const collectionRef=collection(db,categories);
  // console.log("COLLECTION REF:",collectionRef)
  const q=query(collectionRef)
  // console.log("AUERYS:",q)

  const querySnapShot=await getDocs(q)
  // console.log("QUERY SNAP SHOT:",querySnapShot)
console.log("Get Data:",querySnapShot.docs.map((docSnapShot)=>docSnapShot.data())
)
  return querySnapShot.docs.map((docSnapShot)=>docSnapShot.data() as Categoreis)

  // const categoryMap=querySnapShot.docs.reduce((acc,docShapshot)=>{
  //   const{title,items}=docShapshot.data()
  //   acc[title.toLowerCase()]=items
  //   return acc
  // },{})

  // return categoryMap
}

export type UserData={
  displayName:string;
  createdAt:Date;
  email:string;

}

export const createUserDocumentFromAuth = async (userAuth:User,additionalInformation={}):Promise<void |QueryDocumentSnapshot<UserData>> => {
  console.log("User Auth From FireBase:",userAuth)
  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log("userDocRef", userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log("UserSnapShot:",userSnapShot);
  // console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName:displayName ? displayName:additionalInformation,
        email,
        createdAt
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userSnapShot as QueryDocumentSnapshot<UserData>
};


export const createUserAuthWithEmailAndPassword=(email:string,password:string)=>{
  if(!email || !password) return
  return createUserWithEmailAndPassword(auth,email,password)
}

export const AuthsignInWithEmailAndPassword=(email:string,password:string)=>{
  if(!email || !password) return
  return signInWithEmailAndPassword(auth,email,password)
}

export const UsersignOut=async ()=>{
  return await signOut(auth)
}
 

export const onAuthStateChangedListner=(callback:NextOrObserver<User>)=>{
  // console.log("hello....")
  return onAuthStateChanged(auth,callback)
}

export const getCurrentUser=():Promise<User|null>=>{
  return new Promise((resolve,reject)=>{
    const unsuscribe=onAuthStateChanged(auth,(userAuth)=>{
      unsuscribe();
      resolve(userAuth)
    },reject)
  })
} 