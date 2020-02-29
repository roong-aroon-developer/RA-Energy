// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

var time = {
  date: undefined,
  month: undefined,
  year: undefined
};
var tempData = {
  stRoom: 0,
  ndRoom: 0,
  tdRoom: 0
};
var classRoom = {
  stRoom: "",
  ndRoom: "",
  tdRoom: ""
}
var successValidate = {
  stRoom: false,
  ndRoom: false,
  tdRoom: false
}

var file;

function signInHandler(user, pass) {
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
    });
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            window.location.replace("dashboard.html")
        }
    })
}

function getFile() {
    document.getElementById("text-file").addEventListener(
        "change",
        e => {
        file = e
        },
        false
    );
}
function getData() {
    time.year = Number(document.getElementById("date-input").value.split("-")[0]);
    time.month = Number(document.getElementById("date-input").value.split("-")[1]); 
    time.date = Number(document.getElementById("date-input").value.split("-")[2]);
    classSelectionValidate(document.getElementById("class-selection").value)
    handleFileSelect(file)
}

function classSelectionValidate(data) {
  if(data === 'g10-f2') {
    classRoom.stRoom = 'g10-1'
    classRoom.ndRoom = 'g10-2'
    classRoom.tdRoom = 'g10-3'
  }
  if(data === 'g10-f1') {
    classRoom.stRoom = 'g8-3' 
    classRoom.ndRoom = 'g8-4'
    classRoom.tdRoom = 'com'
  }
  if(data === 'g7-f1') {
    classRoom.stRoom = 'g7-3' 
    classRoom.ndRoom = 'g7-2'
    classRoom.tdRoom = 'g7-1'
  }
}

function sendData(energy, room) {
  db.collection("energy").doc(room.stRoom).update({
    "value": energy.stRoom,
    "updated": firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function() {
    successValidate.stRoom = true
    console.log("Room1 successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
  db.collection("energy").doc(room.ndRoom).update({
    "value": energy.ndRoom,
    "updated": firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function() {
    successValidate.ndRoom = true
    console.log("Room2 successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
  db.collection("energy").doc(room.tdRoom).update({
    "value": energy.tdRoom,
    "updated": firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(function() {
    successValidate.tdRoom = true
    console.log("Room1 successfully written!");
    if(successValidate.stRoom === true && successValidate.stRoom === true && successValidate.stRoom === true) {
      alert('success');
    }
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

function findEnergy(data) {
  for (i = 0; i < data.length; i += 17) {
    if (data[i] === time.date && data[i + 1] === time.month && data[i + 2] === time.year) { 
      tempData.stRoom = tempData.stRoom + data[i + 8];
      tempData.ndRoom = tempData.ndRoom + data[i + 12];
      tempData.tdRoom = tempData.tdRoom + data[i + 16];
    }
  }
  
  if(tempData.stRoom === 0 && tempData.ndRoom === 0 && tempData.tdRoom === 0) {
    alert('Make sure you entered the right date, the cumulative energy = 0');
  }
  else {
    sendData(tempData, classRoom);
  }
  
}

function processData(data) {
  let splited = data.split(/[\s,]+/);
  for (i = 0; i < splited.length; i++) {
    if (isNaN(splited[i])) {
      splited[i] = 0;
    } else {
      splited[i] = Number(splited[i]);
    }
  }
  findEnergy(splited);
}

function handleFileSelect(event) {
  const reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function handleFileLoad(event) {
  let data = event.target.result;
  processData(data);
}

function logout() {
  firebase.auth().signOut().then(function() {
    alert('Signed out');
    window.location.replace("index.html")
  }).catch(function(error) {
    alert(error)
  });
}
