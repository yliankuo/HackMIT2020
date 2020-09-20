/**
 * JS code for the index.html page in the application.
 */	

// -----Local variable declaration start-----
// If you want to pass variables between scripts use LocalStorage



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
}

function submitCredentials(){
	username = document.getElementById("username").textContent;
	LocalStorage.set("username", username);
	password = document.getElementById("password").textContent;
	LocalStorage.set("password", username);
	//Do something here regarding login/firebase


	location.href = "html/stats.html";
}
// -----Functions End-----

