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

var perantPostCard = document.getElementById("perantPostCard");

var allPostsData;

window.delPost = function (id) {
    const referance = ref(db, `Post/${id}`);
    remove(referance);
    console.log(id);
  };
  
  function getData() {
    const referance = ref(db, `Post/`);
    onValue(referance, function (allposts) {
      allPostsData = allposts.val();
      // console.log(allPostsData);
      var arr = Object.values(allPostsData);
      console.log(arr);
  
      perantPostCard.innerHTML = "";
      for (let i = 0; i < arr.length; i++) {
        perantPostCard.innerHTML += `
          <div class="container border border-2 shadow p-3 mb-5 bg-body-tertiary rounded my-4 crdMain">
          <div class="m-0 p-0">
  
          <nav class="navbar navbar-expand-lg bg-body-light p-0">
              <div class="container-fluid">
                  <a class="navbar-brand p-0" href="#"><img class="rounded-circle" width="60px" height="60px"
                          src="${arr[i].profileURL}"
                          alt=""></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse " id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                          <il class="nav-item">
                              <a class="nav-link fw-bold p-0" aria-current="page" href="#">${arr[i].profileName}</a>
                              </li>
                              <il class="nav-item">
                                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                      <li class="nav-item">
                                          <a class="nav-link fs-6 p-0" href="#">2 hours ago.</a>
                                      </li>
                                      <li class="nav-item p-0">
                                          <a class="nav-link fs-6 p-0" href="#"><i class="fa-solid fa-user-group"></i></a>
                                      </li>
                                  </ul>
                              </il>
  
  
                      </ul>
                      <form class="d-flex " role="search">
  
                          <button class="btn btn me-4 fs-3 p-0" type="submit"><i
                                  class="fa-solid fa-ellipsis"></i></button>
                          <button onclick="delPost(${arr[i].id})" class="btn fs-3 p-0" type="submit"><i class="fa-solid fa-xmark"></i></button>
                      </form>
                  </div>
              </div>
          </nav>
      </div>
      <div class="postImage border border-1 rounded-2 m-2">
          <img height="100%" width="100%"
              src="${arr[i].postUrl}"
              alt="">
      </div>
      <div class="row ">
          <button type="button" class="col-md-4 btn btn-light fw-bold"><i class="fa-solid fa-thumbs-up"></i><span class="ms-2">Like</span></button><button type="button"
              class="col-md-4 btn btn-light fw-bold"><i class="fa-regular fa-comment"></i><span class="ms-2">Comment</span></button><button type="button" class="col-md-4 btn btn-light fw-bold"><i class="fa-solid fa-share"></i><span class="ms-2">Shear</span></button>
      </div>
      </div>`;
      }
    });
  }
  getData();
  
  console.log(perantPostCard);
  