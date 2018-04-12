import * as firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyB0PPrWiwZpBb3THZNIbY2l3y_O8rxvnDU",
    authDomain: "photowall-e41a3.firebaseapp.com",
    databaseURL: "https://photowall-e41a3.firebaseio.com",
    projectId: "photowall-e41a3",
    storageBucket: "photowall-e41a3.appspot.com",
    messagingSenderId: "35137628924"
  }

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}