var firebaseConfig = {
    apiKey: "AIzaSyARzGHwP1lC4v-p7NIaEsAjcKP1X2f_qgQ",
    authDomain: "signup-2f69c.firebaseapp.com",
    projectId: "signup-2f69c",
    storageBucket: "signup-2f69c.appspot.com",
    messagingSenderId: "205861761204",
    appId: "1:205861761204:web:58492d1510add6aaa8e7e1",
    measurementId: "G-BEJQGWD685"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var datab = firebase.database().ref('forms');
function UserRegister(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){

    }).catch(function (error) {
        var errorcode = error.code;
        var errormsg = error.message;
    window.location.replace("signin.html"); 
})};
    
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    window.location.replace("frontpage.html");            
}
  document.getElementById('form').addEventListener("submit", (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId("fname"),
        email : getId("eemail"),
        password : getId('lpassword')
    });
    console.log('Sent');
    document.getElementById('form').reset();
    });
function getId(id){
    return document.getElementById(id).value;
};