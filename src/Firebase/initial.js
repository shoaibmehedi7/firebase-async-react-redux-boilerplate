var firebase = require('firebase');
// var firebaseui = require('firebaseui');
require('firebase/auth')
require("firebase/firestore");
var config = {
  apiKey: "AIzaSyChjazUOel4CSMaAp7k2pItH0oB7pRQq5g",
  authDomain: "ui299-953a5.firebaseapp.com",
  databaseURL: "https://ui299-953a5.firebaseio.com",
  projectId: "ui299-953a5",
  storageBucket: "ui299-953a5.appspot.com",
  messagingSenderId: "777949332892"
};
firebase.initializeApp(config);
export { firebase }