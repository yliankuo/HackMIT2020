/**
 * JS code for the index.html page in the application.
 */	

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
/*document.addEventListener('deviceready', onDeviceReady, false);

// -----Listeners End-----

// -----Functions Start-----
function onDeviceReady() {
    LocalStorage.initialize();
}

function submitCredentials(){
	username = $('#username').text()
	password = $('#password').text()

	//Do something here regarding login/firebase


	location.href = Constants.statPage;
}*/
// -----Functions End-----

