import firebase from "firebase/app";
import "firebase/storage";

const APIKEY = process.env.REACT_APP_FIREBASE_APPKEY;
const AUTH = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_FIREBASE_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const MESSAGESENDER = process.env.REACT_APP_FIREBASE_MESSAGEINGSENDER;
const FIRBASEAPPID = process.env.REACT_APP_FIREBASE_APPID;
const MEASUREMENTID = process.env.MEASUREREACT_APP_FIREBASE_MEASUREMENTID;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTH,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGESENDER,
  appId: FIRBASEAPPID,
  measurementId: MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
