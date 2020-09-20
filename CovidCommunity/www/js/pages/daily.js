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
	var todayID = LocalStorage.get("firebasetoken");
	console.log(todayID)
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

function submitLocation() {
	if(document.getElementById("location").value != "") {
		var id = "ayxqXISY6SK1ph5OZEV2";
		db.collection("LocationInformation").doc(id).set({
			"location": document.getElementById("location").value,
			"comment": document.getElementById("comment").value
		})
		.then(function() {
			document.getElementById("location").value = ""
			document.getElementById("comment").value = ""
		    console.log("Document successfully written!");
		})
		.catch(function(error) {
		    console.error("Error writing document: ", error);
		});
	}
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
var todayID = LocalStorage.get("firebasetoken");
console.log(todayID)
var col = "DailyForms";
var docRef = db.collection(col).doc(todayID);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        // setAlreadyAnswered();
        setNotAnswered();
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
