var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyDO6H_crOY8FEKllLAGlm91xMXCKbl5gUQ",
    authDomain: "lassie-8224e.firebaseapp.com",
    serviceAccount: "LASSIE-a580bc838978.json",
    databaseURL: "https://lassie-8224e.firebaseio.com",
    projectId: "lassie-8224e",
    storageBucket: "lassie-8224e.appspot.com",
    messagingSenderId: "987089950504"
});

var clientRef = firebase.database().ref('lassie/clients');

export default clientRef;


