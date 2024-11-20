// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAb-4CC-aTslGW3bA6vj-hsuGHovEwtQo0',
	authDomain: 'klipster-7bcbb.firebaseapp.com',
	projectId: 'klipster-7bcbb',
	storageBucket: 'klipster-7bcbb.firebasestorage.app',
	messagingSenderId: '656722762720',
	appId: '1:656722762720:web:7fbb2c12b958d821736985',
	measurementId: 'G-8Y6NV1XPXT',
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Підключення до Firestore
const db = getFirestore(app);

export default db;
