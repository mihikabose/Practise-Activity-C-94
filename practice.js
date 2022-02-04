
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAd4tMfmWMB67CJGIfa9_JY6PCZ8D7X1XM",
    authDomain: "class-test-8d7ef.firebaseapp.com",
    databaseURL: "https://class-test-8d7ef-default-rtdb.firebaseio.com",
    projectId: "class-test-8d7ef",
    storageBucket: "class-test-8d7ef.appspot.com",
    messagingSenderId: "925955800612",
    appId: "1:925955800612:web:7aeb34ff22ac191e4f62b1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding User"
      });
  }