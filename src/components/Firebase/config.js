import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  //firebase config goes here
};

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
