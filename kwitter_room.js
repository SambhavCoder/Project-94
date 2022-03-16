const firebaseConfig = {
    apiKey: "AIzaSyDwX2bB4l_WG-IB_6DD5R7QvtfsNvBzhFQ",
    authDomain: "kwitter-bd33d.firebaseapp.com",
    projectId: "kwitter-bd33d",
    storageBucket: "kwitter-bd33d.appspot.com",
    messagingSenderId: "791971755109",
    appId: "1:791971755109:web:8a0fd8ee9aea5bf7a2028c",
    measurementId: "G-GEM113RG0T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
