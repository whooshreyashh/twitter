import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyALrv2BVuEINgw5ABkVayrAG8mGWrdudr0",
  authDomain: "twitter-469cb.firebaseapp.com",
  projectId: "twitter-469cb",
  storageBucket: "twitter-469cb.appspot.com",
  messagingSenderId: "259566403771",
  appId: "1:259566403771:web:fdce7a0b0f6799ec20699e",
  measurementId: "G-6H22NS4FCW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default auth;