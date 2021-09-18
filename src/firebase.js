import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAl2I9jmDBeecV3RqoRDn3KuP9vHY2EFlY",
  authDomain: "fir-react-storage-2b949.firebaseapp.com",
  projectId: "fir-react-storage-2b949",
  storageBucket: "fir-react-storage-2b949.appspot.com",
  messagingSenderId: "1007819731980",
  appId: "1:1007819731980:web:3782acf1f70af6f1ce2a29",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
