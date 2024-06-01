// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    set,
    push,
    ref,
    getDatabase,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
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
    measurementId: "G-5EL66RP7GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// get HTML Elements
var inpProfileUrl = document.getElementById('inpProfileUrl');
var inpProfileName = document.getElementById('inpProfileName');
var inpPostUrl = document.getElementById('inpPostUrl');

var allPosts;

window.addPostData = function () {
    var obj = {
        profileURL: inpProfileUrl.value,
        profileName: inpProfileName.value,
        inpPostUrl: inpPostUrl.value,
    };
    var referance = ref(db, `Post/`);
    push(referance, obj);
}

function getData() {
    const referance = ref(db, `Post/`);
    onValue(referance, function (allposts) {
        allPosts = allposts.val();
        console.log(allPosts);
        
    })
}