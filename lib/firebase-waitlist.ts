import { collection, addDoc, query, where, getDocs, Timestamp, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase-config';

export interface WaitlistEntry {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  organization?: string;
  role?: string;
  interestAreas?: string[];
  createdAt?: Date | Timestamp;
  userAgent?: string;
}

const COLLECTION_NAME = 'waitlist';

export const waitlistService = {
  /**
   * Add a new entry to the waitlist
   */
  async addToWaitlist(entry: Omit<WaitlistEntry, 'id' | 'createdAt'>): Promise<{ success: boolean; error?: string; id?: string }> {
    try {
      // Check if email already exists
      const emailQuery = query(collection(db, COLLECTION_NAME), where('email', '==', entry.email));
      const querySnapshot = await getDocs(emailQuery);
      
      if (!querySnapshot.empty) {
        return { success: false, error: 'Email already registered' };
      }
      
      // Add new entry with server timestamp
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...entry,
        createdAt: serverTimestamp(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      });
      
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      return { success: false, error: 'Failed to add to waitlist' };
    }
  },
  
  /**
   * Get waitlist count (for development/admin purposes)
   */
  async getWaitlistCount(): Promise<number> {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      return querySnapshot.size;
    } catch (error) {
      console.error('Error getting waitlist count:', error);
      return 0;
    }
  },
  
  /**
   * Check if email is already registered
   */
  async isEmailRegistered(email: string): Promise<boolean> {
    try {
      const emailQuery = query(collection(db, COLLECTION_NAME), where('email', '==', email));
      const querySnapshot = await getDocs(emailQuery);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking email:', error);
      return false;
    }
  }
};