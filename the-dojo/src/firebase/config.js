import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAlZuSjwi4p2I07-UlphVTvE1Y1dmYPAwY",
    authDomain: "thedojosite-f44d8.firebaseapp.com",
    projectId: "thedojosite-f44d8",
    storageBucket: "thedojosite-f44d8.appspot.com",
    messagingSenderId: "770985552961",
    appId: "1:770985552961:web:0935f4c2a94405d6c1aac0",
    measurementId: "G-975WCYWPJ8"
  };

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }