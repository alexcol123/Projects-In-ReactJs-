
import *as firebase from 'firebase'



  var config = {
    apiKey: "AIzaSyCHV9h-M5FW7_Xy4s1aMQzCt9DZvmYzEPU",
    authDomain: "photowall1-22057.firebaseapp.com",
    databaseURL: "https://photowall1-22057.firebaseio.com",
    projectId: "photowall1-22057",
    storageBucket: "photowall1-22057.appspot.com",
    messagingSenderId: "1005621383535"
  };


  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}