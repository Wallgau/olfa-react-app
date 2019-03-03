
import firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyB-VoZCFnl8PDCHESbt71fCUpqxHEp6S0s",
	authDomain: "new-olfa-maslah-react.firebaseapp.com",
	databaseURL: "https://new-olfa-maslah-react.firebaseio.com",
	projectId: "new-olfa-maslah-react",
	storageBucket: "new-olfa-maslah-react.appspot.com",
	messagingSenderId: "357669127720"
};
firebase.initializeApp(config);

export default firebase;