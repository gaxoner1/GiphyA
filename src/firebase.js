import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCeFl8RSb2IWTyIuoFv3O5Ehr4IbNlZb6o",
  authDomain: "recipeapp-30bee.firebaseapp.com",
  databaseURL: "https://recipeapp-30bee.firebaseio.com",
  projectId: "recipeapp-30bee",
  storageBucket: "recipeapp-30bee.appspot.com",
  messagingSenderId: "477076744593",
  appId: "1:477076744593:web:05386067428dc668d71230",
  measurementId: "G-PKN3GYJ54D"
};

firebase.initializeApp(config);

export default firebase;
