// -----Listeners Start-----
document.addEventListener('deviceready', onDeviceReady, false);

// -----Listeners End-----

// -----Functions Start-----
function onDeviceReady() {
    LocalStorage.initialize();
}

function submitCredentials(){

    //Do something here regarding login/firebase
    location.href = Constants.statPage;
}