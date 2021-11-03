import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzGKXxJ8IUpYRa5xqQkWZOmUChSAlVKMo",
  authDomain: "fir-auth-react-e8399.firebaseapp.com",
  projectId: "fir-auth-react-e8399",
  storageBucket: "fir-auth-react-e8399.appspot.com",
  messagingSenderId: "962605851630",
  appId: "1:962605851630:web:299f3aab1c08fb9fa9e4ff",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
