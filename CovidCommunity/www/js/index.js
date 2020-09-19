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
}

function submitCredentials(){
	username = $('#username').text()
	password = $('#password').text()

	//Do something here regarding login/firebase


	location.href = Constants.statPage;
}
// -----Functions End-----

