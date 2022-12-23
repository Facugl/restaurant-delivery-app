import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD48cACEjo6Nn75Zripio_RhlVpsYu_qyE",
  authDomain: "restaurantapp-329bb.firebaseapp.com",
  databaseURL: "https://restaurantapp-329bb-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-329bb",
  storageBucket: "restaurantapp-329bb.appspot.com",
  messagingSenderId: "140540358637",
  appId: "1:140540358637:web:40e99ae056d976993e81e4",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
