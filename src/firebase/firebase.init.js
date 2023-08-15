import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjS_sQr0JzQFE0_romlCi3slC9oI7ybNM",
  authDomain: "crespo-recipes.firebaseapp.com",
  projectId: "crespo-recipes",
  storageBucket: "crespo-recipes.appspot.com",
  messagingSenderId: "123862563289",
  appId: "1:123862563289:web:65fb41ca846102388781c8",
};

export const app = initializeApp(firebaseConfig);
