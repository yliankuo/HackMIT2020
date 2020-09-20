/**
 * JS code for the index.html page in the application.
 */	
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyC5bX38mIe6wFMWFLyiVZpKQpeBVx8gjWE",
authDomain: "fleet-diagram-290007.firebaseapp.com",
databaseURL: "https://fleet-diagram-290007.firebaseio.com",
projectId: "fleet-diagram-290007",
storageBucket: "fleet-diagram-290007.appspot.com",
messagingSenderId: "961698630902",
appId: "1:961698630902:web:1e9e23ed8469f0d28ab0d7",
measurementId: "G-HRW5TJ8BPN"
};

// -----Local variable declaration start-----
// If you want to pass variables between scripts use LocalStorage

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// -----Local variable declaration end-----


// -----Listeners Start-----
document.addEventListener('deviceready', onDeviceReady, false);

// -----Listeners End-----

// -----Functions Start-----
function onDeviceReady() {
    LocalStorage.initialize();
    window.FirebasePlugin.getToken(function(token){
    	console.log(`Firebase ID: ${token}`);
    	if(!LocalStorage.get("firebasetoken")){
    		LocalStorage.set("firebasetoken",token);
    	}
    });
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

function submitCredentials(){
	username = document.getElementById("username").textContent;
	LocalStorage.set("username", username);
	password = document.getElementById("password").textContent;
	LocalStorage.set("password", password);
	if(!LocalStorage.get('firstlogin')){
		LocalStorage.set("firstlogin", true);
		location.href = "html/" + Constants.privacyPage;
	}
  else{
    location.href = "html/" + Constants.statPage;
  }
  //Do something here regarding login/firebase

}

// -----Functions End-----

