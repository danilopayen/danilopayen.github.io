(function () {

    const firebaseConfig = {
        apiKey: "AIzaSyDukj08f7e50c9q9ORdxKt4ydrgOMxCQPY",
        authDomain: "web-login-page.firebaseapp.com",
        databaseURL: "https://web-login-page.firebaseio.com",
        projectId: "web-login-page",
        storageBucket: "",
        messagingSenderId: "282158610767",
        appId: "1:282158610767:web:7e8c887d558b56eb"
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

    // Firestore Reference

    var firestore = firebase.firestore();

    const docRef = firestore.doc("Users/Email");

    // Get Elements

    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogIn = document.getElementById("btnLogIn");
    const btnSignUp = document.getElementById("btnSignUp");
    const btnLogOut = document.getElementById("btnLogOut");

    // Add Login Event

    btnLogIn.addEventListener('click', e => {

        // Get Email & Pass

        const email = txtEmail.value;
        const passkey = txtPassword.value;
        const auth = firebase.auth();

        // Sign In 

        auth.signInWithEmailAndPassword(email, passkey);

        /*promise.catch(e => console.log(e.message));*/

    });

    // Add Logout Event

    btnLogOut.addEventListener('click', e => {

        firebase.auth().signOut();

    });

    // Add Sign Up Event

    btnSignUp.addEventListener('click', e => {

        // Get Email & Pass

        const email = txtEmail.value;
        const passkey = txtPassword.value;
        const auth = firebase.auth();

        // Sign in 

        auth.createUserWithEmailAndPassword(email, passkey).catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert("Invalid Email");
                    break;
                // handle other codes ...
            }
        });;

        /*promise.catch(e => console.log(e.message));*/

        // Initiate data to database
        console.log("I'm going to save" + email + "database");
        docRef.set({

            Email: email

        });

    });

    // Add Real Time Listener

    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            btnLogOut.classList.remove('d-none');
            console.log(firebaseUser);
        }

        else {
            btnLogOut.classList.add('d-none');
            console.log("Not Loging");
        }

    });

})();