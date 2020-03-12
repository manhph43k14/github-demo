//login
const signupForm = document.querySelector('#login_form');
signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        // sign up user
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(response) {
                console.log(cred.user)
                    // close the login modal and reset form
                const modal = document.querySelector('#modal-login');
                M.Modal.getInstance(modal).close();
                loginForm.reset();
            })
            .catch(function(error) {

            });
    })
    // sign up
const signupForm = document.querySelector('#signup_form');
signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // get user info
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        // sign up user
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(response) {
                // close the sign up modal and reset form
                const modal = document.querySelector('#modal-signup');
                M.Modal.getInstance(modal).close();
                signupForm.reset();
            })
            .catch(function(error) {

            });
    })
    // log out
const logout = document.querySelector('#logout');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    firebase.auth().signOut()
        .then(function() {
            // Sign-out successful.
            Console.log('User loged out')
        }).catch(function(error) {
            // An error happened.
            Console.log('User log out failed')
        });
})