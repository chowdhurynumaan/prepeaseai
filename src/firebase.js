// Firebase Configuration
// This file initializes Firebase and exports services

import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  connectAuthEmulator,
  signInWithPopup, 
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore,
  connectFirestoreEmulator,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  orderBy,
  limit
} from 'firebase/firestore';

// Firebase Configuration (apps-e1163 project)
// NOTE: All values are app-restricted in Firebase Console security settings
const firebaseConfig = {
  apiKey: "AIzaSyAjGzS58U5ybbI5CYJUk2NRZBuLJpMJihQ",
  authDomain: "apps-e1163.firebaseapp.com",
  projectId: "apps-e1163",
  storageBucket: "apps-e1163.firebasestorage.app",
  messagingSenderId: "855206153422",
  appId: "1:855206153422:web:2a1366b2e7825304c3d49f",
  measurementId: "G-7YCKESJB8T"
};

console.log('🔧 Firebase Initializing for project:', firebaseConfig.projectId);

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('✅ Firebase app initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  throw error;
}

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export { app };

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Export Firestore methods for use in services
export {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  orderBy,
  limit
};

// App-specific constants
export const APP_ID = 'prepease_lessons';
export const APP_NAME = 'PrepEase AI';

// Firestore collection paths - using artifacts/apps-e1163 document structure
export const COLLECTIONS = {
  users: 'artifacts/apps-e1163/users',
  profiles: 'artifacts/apps-e1163/profiles',
  lessons: 'artifacts/apps-e1163/lessons',
  audit: 'artifacts/apps-e1163/audit'
};
