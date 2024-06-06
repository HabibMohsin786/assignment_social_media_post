// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  set,
  push,
  ref,
  getDatabase,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa8-kA9gGEpC-QMvjZ4143PopfWN8xk44",
  authDomain: "practice-bootstrap-03412.firebaseapp.com",
  databaseURL: "https://practice-bootstrap-03412-default-rtdb.firebaseio.com",
  projectId: "practice-bootstrap-03412",
  storageBucket: "practice-bootstrap-03412.appspot.com",
  messagingSenderId: "389015875183",
  appId: "1:389015875183:web:854db25f0502912df3a79a",
  measurementId: "G-5EL66RP7GL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth();

var userName = document.getElementById('userName');
var email = document.getElementById('email');
var password = document.getElementById('password');


window.signUp = function () {
  var obj ={
    userName : userName.value,
    email : email.value,
    password : password.value,
  };
createUserWithEmailAndPassword(auth, obj.email, obj.password)
.then(function(res){
  console.log(res)
  obj.id = res.user.uid;
  var refrance = ref(db, `users/${obj.id}`);
set(refrance, obj);
})
.catch(function(err) {
  console.log(err.message)
})
}