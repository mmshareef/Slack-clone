// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5DwnIb__oX37Bl5nj7VyJA_Jl0mnzbOg",
  authDomain: "slack-clone-7d86f.firebaseapp.com",
  databaseURL: "https://slack-clone-7d86f.firebaseio.com",
  projectId: "slack-clone-7d86f",
  storageBucket: "slack-clone-7d86f.appspot.com",
  messagingSenderId: "735672095600",
  appId: "1:735672095600:web:72711313627560fc1d35b5",
  measurementId: "G-5BD4G8SJEF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
