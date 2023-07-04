 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
//  createUserWithEmailAndPassword
 
 const firebaseConfig = {
   apiKey: "AIzaSyD94PJz4LtqCWyXfYLVvagbulv3mtdLjHo",
   authDomain: "authentication-test-6132b.firebaseapp.com",
   projectId: "authentication-test-6132b",
   storageBucket: "authentication-test-6132b.appspot.com",
   messagingSenderId: "155185458929",
   appId: "1:155185458929:web:1d5e80c090bda6df458350",
   measurementId: "G-ZQS6M435DZ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 console.log(app);

 const auth = getAuth(app);
 console.log(auth);



 let email = document.getElementById("email")
 let password = document.getElementById("password")
 let register_btn = document.getElementById("register_btn")
 register_btn.addEventListener("click" ,register)


 
  function register()  
  {
     createUserWithEmailAndPassword(auth, email.value, password.value)
     .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // console.log(email);
        // ..
    });
}

let email_log = document.getElementById("email_log")
 let password_log = document.getElementById("password_log")
 let login_btn = document.getElementById("login_btn")
 login_btn.addEventListener("click" ,login)


 function login()  
 {
    signInWithEmailAndPassword(auth, email_log.value, password_log.value)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
     console.log(user);
     // ...
   })
   .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage);
    //    console.log(email);
       // ..
   });
}


