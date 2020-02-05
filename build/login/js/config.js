// The core Firebase JS SDK is always required and must be listed first
src = "https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"

//TODO: Add SDKs for Firebase products that you want to use
// https: //firebase.google.com/docs/web/setup#available-libraries 
src = "https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"

// Import Boostrap css, js, font awesome here -->
src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"


var firebaseConfig = {
    apiKey: "AIzaSyBOJY8Sdddvin3x4edZBjHI_3IaOYMGcCc",
    authDomain: "app-demo-231d0.firebaseapp.com",
    databaseURL: "https://app-demo-231d0.firebaseio.com",
    projectId: "app-demo-231d0",
    storageBucket: "app-demo-231d0.appspot.com",
    messagingSenderId: "603311182490",
    appId: "1:603311182490:web:4fa79bd98ac84f9a21c523",
    measurementId: "G-TTYKDSJMMY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();