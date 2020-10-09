import firebase from 'firebase'
require('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQ4a-YZ8O3pON_GGx4adpnMLbKwO-x4y8",
    authDomain: "bartersystem-51fa5.firebaseapp.com",
    databaseURL: "https://bartersystem-51fa5.firebaseio.com",
    projectId: "bartersystem-51fa5",
    storageBucket: "bartersystem-51fa5.appspot.com",
    messagingSenderId: "153669088658",
    appId: "1:153669088658:web:649d74a00853e3519f3d4b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();