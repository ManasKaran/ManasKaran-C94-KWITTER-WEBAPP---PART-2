var firebaseConfig = {
  apiKey: "AIzaSyCeIF6MDBrEItHjwnl-V2DactgJ9AQKW6Q",
  authDomain: "kwitter2-84019.firebaseapp.com",
  databaseURL: "https://kwitter2-84019-default-rtdb.firebaseio.com",
  projectId: "kwitter2-84019",
  storageBucket: "kwitter2-84019.appspot.com",
  messagingSenderId: "84734911390",
  appId: "1:84734911390:web:1a7e18379c9929e6332c8f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

  UserName= localStorage.getItem("User");
  document.getElementById("welcome_user").innerHTML= "Welcome " + UserName + " !";

  function logout(){
    window.location="index.html";
    localStorage.removeItem("User");
  }

  function addRoom() {
    room_name= document.getElementById("RoomName_input").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding Room"
    });
  }