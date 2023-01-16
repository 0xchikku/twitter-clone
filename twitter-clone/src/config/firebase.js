// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtdxEtg5Go07NH52t0cS32W0c-zhusrjE",
    authDomain: "twitter-clone-c66a0.firebaseapp.com",
    projectId: "twitter-clone-c66a0",
    storageBucket: "twitter-clone-c66a0.appspot.com",
    messagingSenderId: "352554762567",
    appId: "1:352554762567:web:14e59df0871cfdb4130c62",
    measurementId: "G-07X835WYNS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;