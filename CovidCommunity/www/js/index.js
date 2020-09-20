

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
    window.FirebasePlugin.subscribe("global", function(){
      console.log("Subscribed to topic");
    }, function(error){
      console.error("Error subscribing to topic: " + error);
    });
    console.log("on ready intialized")
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

