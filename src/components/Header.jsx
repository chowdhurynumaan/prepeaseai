import React from 'react';
import { signOutUser } from '../services/authService';

export default function Header({ authState }) {
  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const isApproved = authState?.userData?.status === 'approved';
  const status = authState?.userData?.status || 'pending';

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">PrepEase <span className="text-brand-600">AI</span></h1>
              <p className="text-xs text-slate-500">Universal Modular Lesson Architect</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Status Badge */}
            {!isApproved && (
              <div className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200">
                <p className="text-xs font-semibold text-yellow-700">
                  ⏳ {status === 'rejected' ? 'Access Denied' : 'Awaiting Approval'}
                </p>
              </div>
            )}
            {isApproved && (
              <div className="px-3 py-1 rounded-full bg-green-50 border border-green-200">
                <p className="text-xs font-semibold text-green-700">✓ Approved</p>
              </div>
            )}

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              {authState?.user?.photoURL && (
                <img
                  src={authState.user.photoURL}
                  alt={authState.user.displayName}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {authState?.user?.displayName || 'User'}
                </p>
                <p className="text-xs text-slate-500">{authState?.user?.email}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="ml-4 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
