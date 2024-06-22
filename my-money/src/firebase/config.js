import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTZ4kuKqNwFJcFqSkbjM_zoDQesnFQRZQ",
    authDomain: "mymany-7a2f5.firebaseapp.com",
    projectId: "mymany-7a2f5",
    storageBucket: "mymany-7a2f5.appspot.com",
    messagingSenderId: "1278725216",
    appId: "1:1278725216:web:219a0f9264584e6e588705",
    measurementId: "G-GZJKET7631",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

export { projectFirestore, projectAuth, serverTimestamp };