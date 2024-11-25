// Import the Firebase library
import { initializeApp, FirebaseOptions } from "firebase/app";

// Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Ensure configuration values are not undefined

// if (
//   !firebaseConfig.apiKey ||
//   !firebaseConfig.authDomain ||
//   !firebaseConfig.projectId ||
//   !firebaseConfig.storageBucket ||
//   !firebaseConfig.messagingSenderId ||
//   !firebaseConfig.appId
// ) {
//   throw new Error(
//     "Missing Firebase environment variables. Check your .env.local file."
//   );
// }

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
