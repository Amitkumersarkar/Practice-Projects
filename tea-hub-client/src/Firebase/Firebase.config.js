import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBr2XgD3IShmrGObbDQm7bObiE4SMSRQlY",
    authDomain: "tea-store-824b4.firebaseapp.com",
    projectId: "tea-store-824b4",
    storageBucket: "tea-store-824b4.firebasestorage.app",
    messagingSenderId: "920654171772",
    appId: "1:920654171772:web:8d773a016b92c6900d03f9"
};

const app = initializeApp(firebaseConfig);
export const auth = (app);