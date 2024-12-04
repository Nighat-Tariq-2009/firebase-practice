
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 
 import { getAuth,
     createUserWithEmailAndPassword,
     onAuthStateChanged,
     updateProfile,
     signInWithEmailAndPassword,
     signOut,
     sendEmailVerification,
     GoogleAuthProvider,
     signInWithPopup,
     

  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import {getFirestore,collection, addDoc , doc, setDoc , getDocs,deleteDoc,updateDoc, serverTimestamp,getDoc,onSnapshot, increment} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "AIzaSyDo7aOzdSBD6IkaFJlDtI-k3-A6X-b48X4",
   authDomain: "authentication-form1.firebaseapp.com",
   projectId: "authentication-form1",
   storageBucket: "authentication-form1.firebasestorage.app",
   messagingSenderId: "48259782491",
   appId: "1:48259782491:web:224e50553804393d056c7e"
 };


 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 const db = getFirestore(app);

 

 export{ auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    provider,
    db,
    collection,
    addDoc,
    increment,
    onSnapshot,
    getDocs,
    doc,
    setDoc,
    deleteDoc,
    updateDoc,
    serverTimestamp, 
    getDoc,
    
    
 }