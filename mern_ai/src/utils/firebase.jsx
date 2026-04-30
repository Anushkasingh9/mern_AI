// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5ECj-rryyxPFyuNNo9cFxg90-VCdSCwA",
  authDomain: "mernai-ecf76.firebaseapp.com",
  projectId: "mernai-ecf76",
  storageBucket: "mernai-ecf76.firebasestorage.app",
  messagingSenderId: "107865021490",
  appId: "1:107865021490:web:77dbb8b338c0f3a16b702b",
  measurementId: "G-57GDNZN8X4"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
const provider =new GoogleAuthProvider();

export { auth ,provider };
