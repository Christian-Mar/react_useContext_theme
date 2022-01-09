import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD1qkt615qdJS9FToncKky0KoeRVWwBvYM',
	authDomain: 'sandbox-1b354.firebaseapp.com',
	projectId: 'sandbox-1b354',
	storageBucket: 'sandbox-1b354.appspot.com',
	messagingSenderId: '341455704622',
	appId: '1:341455704622:web:e84d192214c99a9ddec5bf',
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services from firebase
const db = getFirestore(app);

export {db}