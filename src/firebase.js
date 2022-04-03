import { initializeApp } from "firebase";

const config = {
  apiKey: "AIzaSyBm2DGt9hkKY7QKjV_PDiUdnp7x7GePi78",
  authDomain: "samer-twitter.firebaseapp.com",
  projectId: "samer-twitter",
  storageBucket: "samer-twitter.appspot.com",
  messagingSenderId: "993009538564",
  appId: "1:993009538564:web:1aae62fb6e30e3e66b4751",
};

const app = initializeApp(config);

const db = app.firestore();

export default db;
