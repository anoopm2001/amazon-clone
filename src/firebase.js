import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAmVAOhDDr1oA1d8FyogQXE8vEwEbLjZgU",
  authDomain: "clone-afd02.firebaseapp.com",
  projectId: "clone-afd02",
  storageBucket: "clone-afd02.appspot.com",
  messagingSenderId: "288582789222",
  appId: "1:288582789222:web:18062d3dba451f180365a7",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
export { db, auth };
