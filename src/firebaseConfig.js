import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB8JAVJDm4zdBfi6MIfOAtQNQWYIcoECMA",
  authDomain: "mydropbox-51111.firebaseapp.com",
  projectId: "mydropbox-51111",
  storageBucket: "mydropbox-51111.appspot.com",
  messagingSenderId: "682833862633",
  appId: "1:682833862633:web:81fc6ad58ec2a13952f578",
  measurementId: "G-NVHK0612Q0"
})

const firestore = app.firestore()


export const db = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
