import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBq2tKNdz3BsSGC8c5Zmn0v9jwkG3Dd734",
  authDomain: "blog-test-af435.firebaseapp.com",
  projectId: "blog-test-af435",
  storageBucket: "blog-test-af435.appspot.com",
  messagingSenderId: "344918880906",
  appId: "1:344918880906:web:43580f2645707d352b7373"
};

try {
  firebase.initializeApp(firebaseConfig);
}

catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
