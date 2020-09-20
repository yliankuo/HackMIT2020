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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebase.firestore();

function submit() {
	var ele = document.getElementsByTagName('input');
	var result = [];
	for (var i = 0; i < ele.length; i++) {
		if(ele[i].checked) result.push(ele[i].value)
	}
	if (result.length != 3) {
		console.log("Please answer all the questions");
		return;
	}
	setAlreadyAnswered();

	// var defaultFirestore = defaultProject.firestore();
	var collection = "DailyForms";
	var d = new Date();
	var todayID = "ayxqXISY6SK1ph5OZEV2_" + d.getMonth() + "_" + d.getDate() + "_" + d.getFullYear();

	// Option 2: Access Firebase services using shorthand notation
	// defaultStorage = firebase.storage();
	// defaultFirestore = firebase.firestore();
	db.collection("DailyForms").doc(todayID).set({
		"contact": result[0],
		"symptoms": result[1],
		"temperature": result[2]
	})
	.then(function() {
	    console.log("Document successfully written!");
	})
	.catch(function(error) {
	    console.error("Error writing document: ", error);
	});
	
}

function setAlreadyAnswered() {
	var form = document.getElementById('form');
	form.style.display = "none";
	var done = document.getElementById('answered');
	done.style.display = "block";
}

function setNotAnswered() {
	var form = document.getElementById('form');
	form.style.display = "block";
	var done = document.getElementById('answered');
	done.style.display = "none";
}


// var defaultFirestore = defaultProject.firestore();
var d = new Date();
var todayID = "ayxqXISY6SK1ph5OZEV2_" + d.getMonth() + "_" + d.getDate() + "_" + d.getFullYear();
console.log(todayID)
var col = "DailyForms";
var docRef = db.collection(col).doc(todayID);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        setAlreadyAnswered();
        // setNotAnswered();
    } else {
        // doc.data() will be undefined in this case
        setNotAnswered();
        console.log("Haven't Submitted");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



// var d = new Date();
// var todayID = "ayxqXISY6SK1ph5OZEV2_" + d.getMonth() + "_" + d.getDate() + "_" + d.getFullYear();
// console.log(todayID)
// var col = "DailyForms";
// window.FirebasePlugin.documentExistsInFirestoreCollection(documentId, collection, function(exists){
//     console.log("Document " + (exists ? "exists" : "doesn't exist"));
//     if(exists) setAlreadyAnswered();
// }, function(error){
//     console.error("Error fetching document: "+error);
// });
