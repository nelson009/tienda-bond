import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD9Baq6PtnKTR_qmDIHOYRjMyQP2VqzRJ8",
    authDomain: "react-tienda-bond09.firebaseapp.com",
    projectId: "react-tienda-bond09",
    storageBucket: "react-tienda-bond09.appspot.com",
    messagingSenderId: "1057621924720",
    appId: "1:1057621924720:web:cb90ef2900ce712edf8db5"
}
// export default firebase.initializeApp(firebaseConfig);
const fb = firebase.initializeApp(firebaseConfig)
export const dataBase = fb.firestore();

console.log('fb:',fb)
console.log('dataBase:', dataBase)