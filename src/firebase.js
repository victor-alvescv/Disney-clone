import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyCXrQRcPaF1f8X2rIeoHvdbqNzyixo9EOk",
    authDomain: "disney-clone-f8efe.firebaseapp.com",
    projectId: "disney-clone-f8efe",
    storageBucket: "disney-clone-f8efe.appspot.com",
    messagingSenderId: "360983090538",
    appId: "1:360983090538:web:e77e5c09bf6c825c360113"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;