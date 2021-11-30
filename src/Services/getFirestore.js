import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHEXmpInxTmtwjyNAOBcg4d9zsWg_nzIo",
    authDomain: "maquillarte-db84b.firebaseapp.com",
    projectId: "maquillarte-db84b",
    storageBucket: "maquillarte-db84b.appspot.com",
    messagingSenderId: "1011882855690",
    appId: "1:1011882855690:web:a35b0050a063e613073ef3"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore(){
      return firebase.firestore(app)
  }