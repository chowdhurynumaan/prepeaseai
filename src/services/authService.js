// Authentication Service
// Handles user authentication and approval workflow

import {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  collection,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  APP_ID,
  COLLECTIONS
} from '../firebase';

/**
 * Sign in user with Google
 */
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Create or update user document
    await ensureUserExists(user);
    
    return user;
  } catch (error) {
    console.error('Sign-in error:', error);
    throw error;
  }
}

/**
 * Sign out current user
 */
export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Sign-out error:', error);
    throw error;
  }
}

/**
 * Create user document if it doesn't exist
 */
export async function ensureUserExists(user) {
  try {
    const userDocRef = doc(db, COLLECTIONS.users, user.uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'User',
        photoUrl: user.photoURL || '',
        status: 'pending', // 'pending', 'approved', 'rejected'
        role: 'user', // 'user', 'admin'
        createdAt: serverTimestamp(),
        appAccess: {
          [APP_ID]: true
        }
      });
    }
  } catch (error) {
    console.error('Error ensuring user exists:', error);
    throw error;
  }
}

/**
 * Get current user's approval status
 * Returns: 'approved', 'pending', 'rejected', or null
 */
export async function getUserApprovalStatus(uid) {
  try {
    const userDocRef = doc(db, COLLECTIONS.users, uid);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      return userDoc.data().status;
    }
    return null;
  } catch (error) {
    console.error('Error getting user status:', error);
    return null;
  }
}

/**
 * Get full user data
 */
export async function getUserData(uid) {
  try {
    const userDocRef = doc(db, COLLECTIONS.users, uid);
    const userDoc = await getDoc(userDocRef);
    
    if (userDoc.exists()) {
      return userDoc.data();
    }
    return null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
}

/**
 * Subscribe to auth state changes
 */
export function subscribeToAuthState(callback) {
  console.log('📡 Setting up auth state listener...');
  
  try {
    return onAuthStateChanged(
      auth,
      async (user) => {
        console.log('👤 Auth state changed:', user ? `User: ${user.email}` : 'No user');
        
        if (user) {
          try {
            console.log('📋 Fetching user data for:', user.uid);
            const userData = await getUserData(user.uid);
            console.log('✅ User data fetched:', userData ? 'Found' : 'Not found');
            
            callback({
              user,
              userData,
              status: userData?.status || 'pending'
            });
          } catch (error) {
            console.error('❌ Error in auth state callback:', error);
            callback(null);
          }
        } else {
          console.log('🔓 No authenticated user');
          callback(null);
        }
      },
      (error) => {
        console.error('🔴 Auth listener error:', error);
        callback(null);
      }
    );
  } catch (error) {
    console.error('❌ Failed to set up auth listener:', error);
    callback(null);
    return () => {};
  }
}

/**
 * Check if user is approved
 */
export async function isUserApproved(uid) {
  const status = await getUserApprovalStatus(uid);
  return status === 'approved';
}

/**
 * Get current user (from auth state)
 */
export function getCurrentUser() {
  return auth.currentUser;
}
