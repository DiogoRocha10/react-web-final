import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDsDlWmFluubZAWlCdEYeTb7LG29qU-Cic",
    authDomain: "react-web-80e49.firebaseapp.com",
    databaseURL: "https://react-web-80e49.firebaseio.com",
    projectId: "react-web-80e49",
    storageBucket: "react-web-80e49.appspot.com",
    messagingSenderId: "107309840108",
    appId: "1:107309840108:web:339f04ce03568da5bb17c9"
  };

firebase.initializeApp(firebaseConfig)

export default firebase