import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc, getDoc, onSnapshot, increment, collection } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhGbeBBzcZjztxL-8NFDfIXPSK8o5HstI",
  authDomain: "points-system-bed03.firebaseapp.com",
  projectId: "points-system-bed03",
  storageBucket: "points-system-bed03.firebasestorage.app",
  messagingSenderId: "633156992686",
  appId: "1:633156992686:web:6d29209dcc2b01bcf1b73f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.doc = doc;
window.setDoc = setDoc;
window.updateDoc = updateDoc;
window.getDoc = getDoc;
window.onSnapshot = onSnapshot;
window.increment = increment;
window.collection = collection;
