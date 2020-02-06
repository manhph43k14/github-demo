var app_firebase = {};
(function() {
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

    app_firebase = firebase;
})()

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById('user_div').style.display = "initial";
        document.getElementById('login_div').style.display = "none";
    } else {
        // No user is signed in.
        document.getElementById('user_div').style.display = "none";
        document.getElementById('login_div').style.display = "initial";
    }
});

function login() {

    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;
    window.alert(userEmail + " " + userPassword);
}   