// Lesson Service
// Handles lesson plan generation and storage

import {
  db,
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  serverTimestamp,
  APP_ID,
  COLLECTIONS
} from '../firebase';
import { logAuditEntry } from './auditService';

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

/**
 * Generate lesson plan using Gemini API
 */
export async function generateLesson(
  profileId,
  level,
  segment,
  topic,
  learningStandard,
  customNotes,
  routineTarget,
  apiKey
) {
  try {
    // Build prompt from profile and inputs
    const prompt = buildLessonPrompt({
      level,
      segment,
      topic,
      learningStandard,
      customNotes,
      routineTarget
    });

    // Call Gemini API
    const response = await fetch(
      `${GEMINI_API_ENDPOINT}?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    if (!generatedText) {
      throw new Error('No content generated');
    }

    return {
      success: true,
      markdown: generatedText,
      tokens: data.usageMetadata?.outputTokens || 0
    };
  } catch (error) {
    console.error('Lesson generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Save generated lesson to Firestore
 */
export async function saveLesson(
  createdBy,
  profileId,
  level,
  segment,
  topic,
  learningStandard,
  customNotes,
  routineTarget,
  generatedMarkdown,
  tokenCount
) {
  try {
    const lessonDoc = await addDoc(collection(db, COLLECTIONS.lessons), {
      createdBy,
      profileId,
      generatedAt: serverTimestamp(),
      date: new Date().toISOString().split('T')[0],
      
      input: {
        level,
        segment,
        topic,
        learningStandard,
        customNotes,
        routineTarget
      },
      
      output: {
        markdown: generatedMarkdown,
        generatedBy: 'gemini-2.5-flash',
        tokenCount
      },
      
      metadata: {
        duration: '120 minutes', // Could be dynamic
        activities: 5
      },
      
      history: [
        {
          timestamp: serverTimestamp(),
          action: 'generated',
          model: 'gemini-2.5-flash'
        }
      ],
      
      appId: APP_ID
    });

    // Log audit entry
    await logAuditEntry(createdBy, 'LESSON_GENERATED', 'lesson', lessonDoc.id, {
      topic,
      level,
      profileId
    });

    return lessonDoc.id;
  } catch (error) {
    console.error('Error saving lesson:', error);
    throw error;
  }
}

/**
 * Get lessons for current user
 */
export async function getUserLessons(userId, limit = 20) {
  try {
    const q = query(
      collection(db, COLLECTIONS.lessons),
      where('createdBy', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    const lessons = [];
    
    querySnapshot.forEach((doc) => {
      lessons.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return lessons;
  } catch (error) {
    console.error('Error getting lessons:', error);
    return [];
  }
}

/**
 * Log lesson action (print, copy, share)
 */
export async function logLessonAction(userId, lessonId, action) {
  try {
    const lessonRef = doc(db, COLLECTIONS.lessons, lessonId);
    const lessonDoc = await getDoc(lessonRef);
    
    if (lessonDoc.exists()) {
      const currentHistory = lessonDoc.data().history || [];
      currentHistory.push({
        timestamp: serverTimestamp(),
        action: action
      });
      
      await updateDoc(lessonRef, {
        history: currentHistory
      });
    }
    
    await logAuditEntry(userId, `LESSON_${action.toUpperCase()}`, 'lesson', lessonId);
  } catch (error) {
    console.error('Error logging lesson action:', error);
  }
}

/**
 * Build prompt for Gemini from profile and inputs
 */
function buildLessonPrompt({
  level,
  segment,
  topic,
  learningStandard,
  customNotes,
  routineTarget
}) {
  return `
You are an expert curriculum director. Create a detailed, actionable lesson plan.

**Context:**
- Grade/Level: ${level || 'Not specified'}
- Class Segment: ${segment || 'Not specified'}
- Learning Standard: ${learningStandard || 'Not specified'}
- Teacher Notes: ${customNotes || 'None'}

**Lesson Topic:** ${topic}

**Routine Target (if applicable):** ${routineTarget || 'Not applicable'}

**Requirements:**
1. Structure lesson with clear timing and activities
2. Include engagement strategies
3. Provide assessment options
4. Suggest differentiation strategies
5. Use warm, encouraging tone
6. Be specific and actionable
7. Assume standard classroom resources (whiteboards, notebooks, projectors)

**Output Format:**
Use markdown with clear sections for Hook, Instruction, Practice, Assessment, and Closure.

Please create the lesson plan now:
  `;
}

/**
 * Get lesson details
 */
export async function getLesson(lessonId) {
  try {
    const lessonRef = doc(db, COLLECTIONS.lessons, lessonId);
    const lessonDoc = await getDoc(lessonRef);
    
    if (lessonDoc.exists()) {
      return {
        id: lessonDoc.id,
        ...lessonDoc.data()
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting lesson:', error);
    return null;
  }
}

import { updateDoc } from '../firebase';
