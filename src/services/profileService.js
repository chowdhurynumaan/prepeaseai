// Profile Service
// Handles school structure profiles

import {
  db,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  APP_ID,
  COLLECTIONS
} from '../firebase';
import { logAuditEntry } from './auditService';

/**
 * Create a new school profile
 */
export async function createProfile(
  userId,
  title,
  description,
  config
) {
  try {
    const profileDoc = await addDoc(collection(db, COLLECTIONS.profiles), {
      createdBy: userId,
      title,
      description,
      useLevels: config.useLevels ?? true,
      levels: config.levels || '',
      useSegments: config.useSegments ?? true,
      segments: config.segments || '',
      size: config.size || '24',
      demoNotes: config.demoNotes || '',
      resources: config.resources || '',
      accommodations: config.accommodations || '',
      scheduleBlocks: config.scheduleBlocks || [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isPublic: false,
      sharedWith: [],
      appId: APP_ID
    });

    // Log audit entry
    await logAuditEntry(userId, 'PROFILE_CREATED', 'profile', profileDoc.id, {
      title,
      description
    });

    return profileDoc.id;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw error;
  }
}

/**
 * Get profiles for current user
 */
export async function getUserProfiles(userId) {
  try {
    const q = query(
      collection(db, COLLECTIONS.profiles),
      where('createdBy', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const profiles = [];
    
    querySnapshot.forEach((doc) => {
      profiles.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return profiles;
  } catch (error) {
    console.error('Error getting profiles:', error);
    return [];
  }
}

/**
 * Get single profile by ID
 */
export async function getProfile(profileId) {
  try {
    const profileRef = doc(db, COLLECTIONS.profiles, profileId);
    const profileDoc = await getDoc(profileRef);
    
    if (profileDoc.exists()) {
      return {
        id: profileDoc.id,
        ...profileDoc.data()
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting profile:', error);
    return null;
  }
}

/**
 * Update existing profile
 */
export async function updateProfile(
  userId,
  profileId,
  updates
) {
  try {
    const profileRef = doc(db, COLLECTIONS.profiles, profileId);
    const profileDoc = await getDoc(profileRef);
    
    // Check ownership
    if (profileDoc.data().createdBy !== userId) {
      throw new Error('Unauthorized: You do not own this profile');
    }
    
    await updateDoc(profileRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });

    // Log audit entry
    await logAuditEntry(userId, 'PROFILE_UPDATED', 'profile', profileId, {
      updates
    });

  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
}

/**
 * Delete profile
 */
export async function deleteProfile(userId, profileId) {
  try {
    const profileRef = doc(db, COLLECTIONS.profiles, profileId);
    const profileDoc = await getDoc(profileRef);
    
    // Check ownership
    if (profileDoc.data().createdBy !== userId) {
      throw new Error('Unauthorized: You do not own this profile');
    }
    
    await deleteDoc(profileRef);

    // Log audit entry
    await logAuditEntry(userId, 'PROFILE_DELETED', 'profile', profileId);

  } catch (error) {
    console.error('Error deleting profile:', error);
    throw error;
  }
}

/**
 * Share profile with other users
 */
export async function shareProfile(userId, profileId, shareWithUids) {
  try {
    const profileRef = doc(db, COLLECTIONS.profiles, profileId);
    const profileDoc = await getDoc(profileRef);
    
    // Check ownership
    if (profileDoc.data().createdBy !== userId) {
      throw new Error('Unauthorized: You do not own this profile');
    }
    
    await updateDoc(profileRef, {
      sharedWith: shareWithUids,
      updatedAt: serverTimestamp()
    });

    // Log audit entry
    await logAuditEntry(userId, 'PROFILE_SHARED', 'profile', profileId, {
      sharedWithCount: shareWithUids.length
    });

  } catch (error) {
    console.error('Error sharing profile:', error);
    throw error;
  }
}

/**
 * Make profile public
 */
export async function makeProfilePublic(userId, profileId) {
  try {
    const profileRef = doc(db, COLLECTIONS.profiles, profileId);
    const profileDoc = await getDoc(profileRef);
    
    // Check ownership
    if (profileDoc.data().createdBy !== userId) {
      throw new Error('Unauthorized: You do not own this profile');
    }
    
    await updateDoc(profileRef, {
      isPublic: true,
      updatedAt: serverTimestamp()
    });

    // Log audit entry
    await logAuditEntry(userId, 'PROFILE_MADE_PUBLIC', 'profile', profileId);

  } catch (error) {
    console.error('Error making profile public:', error);
    throw error;
  }
}
