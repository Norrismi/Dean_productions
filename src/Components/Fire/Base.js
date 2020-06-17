// import * as firebase from "firebase/app";
// import "firebase/auth";
// import 'firebase/database'


// const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

// const provider = new firebase.auth.GoogleAuthProvider()
// const auth = firebase.auth()

// module.exports = {
//   firebase,
//   provider,
//   auth,

// }

// export default app;

const firebase = require('firebase')
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}
firebase.initializeApp(config)
const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
module.exports = {
  firebase,
  provider,
  auth
}
