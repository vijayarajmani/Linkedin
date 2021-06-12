import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBx5c1Az8_ixaCmKWEHobxFoKlPEGXIt4w",
  authDomain: "linkedin-clone-56af4.firebaseapp.com",
  projectId: "linkedin-clone-56af4",
  storageBucket: "linkedin-clone-56af4.appspot.com",
  messagingSenderId: "781357988324",
  appId: "1:781357988324:web:16cf95f5985b3b7d9aaff1",
  measurementId: "G-DF83GSBRDX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
