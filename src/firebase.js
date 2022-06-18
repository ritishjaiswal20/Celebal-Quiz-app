import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCfNOhNGv3xRuhVGuElS5r9Jn-NSAtNNz8",
    authDomain: "quiz-hub-9c455.firebaseapp.com",
    projectId: "quiz-hub-9c455",
    storageBucket: "quiz-hub-9c455.appspot.com",
    messagingSenderId: "596545647366",
    appId: "1:596545647366:web:511b45a160695670a5a487"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export{auth,provider};
  export default db;