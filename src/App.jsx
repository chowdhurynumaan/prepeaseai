import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AuthGuard from './components/AuthGuard';
import LessonTab from './components/LessonTab';
import ProfileTab from './components/ProfileTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('lesson');
  const [authState, setAuthState] = useState(null);

  return (
    <AuthGuard onAuthStateChange={setAuthState}>
      {authState ? (
        <div className="h-full flex flex-col bg-slate-50">
          <Header authState={authState} />
          
          <main className="flex-1 overflow-auto">
            {/* Tab Navigation */}
            <div className="sticky top-16 bg-white border-b border-slate-200 px-6 py-4">
              <div className="flex space-x-4 max-w-7xl mx-auto">
                <button
                  onClick={() => setActiveTab('lesson')}
                  className={`px-4 py-2 font-semibold text-sm transition-colors ${
                    activeTab === 'lesson'
                      ? 'text-brand-600 border-b-2 border-brand-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Daily Lesson Planner
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-4 py-2 font-semibold text-sm transition-colors ${
                    activeTab === 'profile'
                      ? 'text-brand-600 border-b-2 border-brand-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  School Structure
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              {activeTab === 'lesson' && <LessonTab authState={authState} />}
              {activeTab === 'profile' && <ProfileTab authState={authState} />}
            </div>
          </main>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <p className="text-slate-500">Loading...</p>
          </div>
        </div>
      )}
    </AuthGuard>
  );
}
