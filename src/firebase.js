import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAifwyiLm7PdK9cwzei0RFUFQj1_b-J47I",
    authDomain: "solemates-2a7db.firebaseapp.com",
    databaseURL: "https://solemates-2a7db.firebaseio.com",
    projectId: "solemates-2a7db",
    storageBucket: "solemates-2a7db.appspot.com",
    messagingSenderId: "725135531144"
  };
  firebase.initializeApp(config);

  export default firebase;
  