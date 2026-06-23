import React, { useEffect, useState } from 'react';
import { subscribeToAuthState, signInWithGoogle } from '../services/authService';

export default function AuthGuard({ onAuthStateChange, children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuthState((authState) => {
      onAuthStateChange(authState);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [onAuthStateChange]);

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading PrepEase AI...</p>
        </div>
      </div>
    );
  }

  return children;
}
