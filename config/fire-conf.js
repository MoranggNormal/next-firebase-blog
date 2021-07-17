import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAhco62lO9gRZWc7x3yPewcl18ViiDlfe4",
  authDomain: "blog-next-2b5f8.firebaseapp.com",
  projectId: "blog-next-2b5f8",
  storageBucket: "blog-next-2b5f8.appspot.com",
  messagingSenderId: "505562537482",
  appId: "1:505562537482:web:3d6944f238036fc5f709f3"
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
