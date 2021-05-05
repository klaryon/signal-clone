import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiWIH5oqfCtlFwNHdc9KXfGp0BWmacvqg",
  authDomain: "signal-clone-dc6ae.firebaseapp.com",
  projectId: "signal-clone-dc6ae",
  storageBucket: "signal-clone-dc6ae.appspot.com",
  messagingSenderId: "1072779212136",
  appId: "1:1072779212136:web:c96ee8b380a97ca7b252dd"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.intializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };