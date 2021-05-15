import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebase.config.js';

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const getFirestoreTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
