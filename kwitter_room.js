const firebaseConfig = {
  apiKey: "AIzaSyAyNT4QeQPyak_gA8LSfRE-uhO-DpuvX6g",
  authDomain: "kwitter-c561a.firebaseapp.com",
  databaseURL: "https://kwitter-c561a-default-rtdb.firebaseio.com",
  projectId: "kwitter-c561a",
  storageBucket: "kwitter-c561a.appspot.com",
  messagingSenderId: "593368902156",
  appId: "1:593368902156:web:13fff5fa50d70d55c7dc29"
};
firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="index.html";
    }

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    
    Room_names = childKey;
    console.log("Room name- "+Room_names);
    row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML+=row
    
    });});}
getData()
function redirectToRoomName(name)
 {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
 }