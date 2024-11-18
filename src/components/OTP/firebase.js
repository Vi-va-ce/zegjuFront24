import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArBtsAD7LO_M-nKKH1YGzKoNRoB2yze98",
  authDomain: "zegeju-1453f.firebaseapp.com",
  projectId: "zegeju-1453f",
  storageBucket: "zegeju-1453f.appspot.com",
  messagingSenderId: "406587931812",
  appId: "1:406587931812:web:57a7c73bdddc7a37ac7a31",
  measurementId: "G-XQ4RXYT7H6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
