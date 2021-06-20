var firebaseConfig = {
    apiKey: "AIzaSyCWZVIJ4dm4XKguEIs1V6TE-VQTi6iW25M",
    authDomain: "articalpost-7ad5d.firebaseapp.com",
    projectId: "articalpost-7ad5d",
    storageBucket: "articalpost-7ad5d.appspot.com",
    messagingSenderId: "592684645059",
    appId: "1:592684645059:web:ee728b6e0b8cf6f3420076",
    measurementId: "G-JZ4B39RTW0"
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