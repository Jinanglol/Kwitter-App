//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAlVWd40YHz3n7sWX0T1KrdkDvuAnB8VD8",
  authDomain: "kwitter-app-85a66.firebaseapp.com",
  databaseURL: "https://kwitter-app-85a66-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-85a66",
  storageBucket: "kwitter-app-85a66.appspot.com",
  messagingSenderId: "385535512691",
  appId: "1:385535512691:web:47e1b5dbde54c24e4b1a06"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

function addRoom(){
  room_name = document.getElementById("room_input").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("display room name " + Room_names);
        row = "<div class = 'room_name' id = " + Room_names +"onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location =  "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}