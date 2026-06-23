// Audit Service
// Handles audit logging of all user actions

import {
  db,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
  APP_ID,
  COLLECTIONS
} from '../firebase';

/**
 * Log an audit entry for any user action
 */
export async function logAuditEntry(
  userId,
  action,
  resourceType,
  resourceId,
  changes = {}
) {
  try {
    await addDoc(collection(db, COLLECTIONS.audit), {
      timestamp: serverTimestamp(),
      userId,
      action,
      resourceType,
      resourceId,
      status: 'success',
      changes,
      metadata: {
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      },
      appId: APP_ID
    });
  } catch (error) {
    console.error('Error logging audit entry:', error);
    // Don't throw - audit logging shouldn't break app functionality
  }
}

/**
 * Get audit logs for a user
 */
export async function getUserAuditLogs(userId, limitCount = 50) {
  try {
    const q = query(
      collection(db, COLLECTIONS.audit),
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const logs = [];
    
    querySnapshot.forEach((doc) => {
      logs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return logs.sort((a, b) => 
      (b.timestamp?.toMillis?.() || 0) - (a.timestamp?.toMillis?.() || 0)
    ).slice(0, limitCount);
  } catch (error) {
    console.error('Error getting audit logs:', error);
    return [];
  }
}

/**
 * Get audit logs for a specific resource
 */
export async function getResourceAuditLogs(resourceId) {
  try {
    const q = query(
      collection(db, COLLECTIONS.audit),
      where('resourceId', '==', resourceId)
    );
    
    const querySnapshot = await getDocs(q);
    const logs = [];
    
    querySnapshot.forEach((doc) => {
      logs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return logs.sort((a, b) => 
      (b.timestamp?.toMillis?.() || 0) - (a.timestamp?.toMillis?.() || 0)
    );
  } catch (error) {
    console.error('Error getting resource audit logs:', error);
    return [];
  }
}

/**
 * Get all audit logs (admin only)
 */
export async function getAllAuditLogs(limitCount = 100) {
  try {
    const q = query(
      collection(db, COLLECTIONS.audit)
    );
    
    const querySnapshot = await getDocs(q);
    const logs = [];
    
    querySnapshot.forEach((doc) => {
      logs.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return logs.sort((a, b) => 
      (b.timestamp?.toMillis?.() || 0) - (a.timestamp?.toMillis?.() || 0)
    ).slice(0, limitCount);
  } catch (error) {
    console.error('Error getting all audit logs:', error);
    return [];
  }
}

/**
 * Export audit logs as CSV
 */
export function exportAuditLogsAsCSV(logs) {
  const headers = ['Timestamp', 'User ID', 'Action', 'Resource Type', 'Resource ID', 'Status'];
  const rows = logs.map(log => [
    log.timestamp?.toDate?.()?.toISOString() || '',
    log.userId,
    log.action,
    log.resourceType,
    log.resourceId,
    log.status
  ]);
  
  const csv = [
    headers.join(','),
    ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
  ].join('\n');
  
  return csv;
}

/**
 * Log specific common actions with helper functions
 */
export async function logLessonGenerated(userId, lessonId, topic) {
  return logAuditEntry(userId, 'LESSON_GENERATED', 'lesson', lessonId, { topic });
}

export async function logProfileCreated(userId, profileId, title) {
  return logAuditEntry(userId, 'PROFILE_CREATED', 'profile', profileId, { title });
}

export async function logProfileUpdated(userId, profileId) {
  return logAuditEntry(userId, 'PROFILE_UPDATED', 'profile', profileId);
}

export async function logUserApproved(adminId, userId) {
  return logAuditEntry(adminId, 'USER_APPROVED', 'user', userId);
}

export async function logUserRejected(adminId, userId, reason) {
  return logAuditEntry(adminId, 'USER_REJECTED', 'user', userId, { reason });
}
