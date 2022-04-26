import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCc4RG4oExFkRsaFz70zpwmRkF0WkivC8Y",
    authDomain: "auth-20407.firebaseapp.com",
    projectId: "auth-20407",
    storageBucket: "auth-20407.appspot.com",
    messagingSenderId: "350170869003",
    appId: "1:350170869003:web:ed6b441e9f0944191a060e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
