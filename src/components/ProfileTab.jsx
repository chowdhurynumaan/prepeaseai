import React, { useState, useEffect } from 'react';
import { getUserProfiles, createProfile } from '../services/profileService';

export default function ProfileTab({ authState }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    useLevels: true,
    levels: '',
    useSegments: true,
    segments: ''
  });

  const isApproved = authState?.userData?.status === 'approved';

  useEffect(() => {
    loadProfiles();
  }, [authState]);

  const loadProfiles = async () => {
    if (!authState?.user?.uid) return;
    setLoading(true);
    try {
      const userProfiles = await getUserProfiles(authState.user.uid);
      setProfiles(userProfiles);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    if (!isApproved) {
      alert('You must be approved to create profiles');
      return;
    }

    try {
      await createProfile(authState.user.uid, formData.title, formData.description, formData);
      setFormData({
        title: '',
        description: '',
        useLevels: true,
        levels: '',
        useSegments: true,
        segments: ''
      });
      setShowForm(false);
      loadProfiles();
    } catch (error) {
      alert('Error creating profile: ' + error.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">School Structures</h2>
        {isApproved && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
          >
            + New Profile
          </button>
        )}
      </div>

      {/* Create Form */}
      {showForm && (
        <form onSubmit={handleCreateProfile} className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Profile Name *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Elementary Morning Program"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your school structure..."
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.useLevels}
                onChange={(e) => setFormData({ ...formData, useLevels: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm font-medium text-slate-700">Use Grade Levels</span>
            </label>
          </div>

          {formData.useLevels && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Levels (comma-separated)
              </label>
              <input
                type="text"
                value={formData.levels}
                onChange={(e) => setFormData({ ...formData, levels: e.target.value })}
                placeholder="e.g., Grade 1, Grade 2, Grade 3"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          )}

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.useSegments}
                onChange={(e) => setFormData({ ...formData, useSegments: e.target.checked })}
                className="rounded"
              />
              <span className="text-sm font-medium text-slate-700">Use Class Cohorts</span>
            </label>
          </div>

          {formData.useSegments && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Cohorts (comma-separated)
              </label>
              <input
                type="text"
                value={formData.segments}
                onChange={(e) => setFormData({ ...formData, segments: e.target.value })}
                placeholder="e.g., Cohort A, Cohort B"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          )}

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              Create Profile
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Profiles List */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-slate-500">Loading profiles...</p>
        </div>
      ) : profiles.length === 0 ? (
        <div className="bg-slate-50 rounded-lg border border-slate-200 p-12 text-center">
          <p className="text-slate-600 mb-4">No school profiles yet</p>
          {isApproved && (
            <button
              onClick={() => setShowForm(true)}
              className="px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors"
            >
              Create First Profile
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900">{profile.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{profile.description}</p>
              {profile.useLevels && (
                <p className="text-xs text-slate-500 mt-2">
                  <strong>Levels:</strong> {profile.levels}
                </p>
              )}
              {profile.useSegments && (
                <p className="text-xs text-slate-500">
                  <strong>Cohorts:</strong> {profile.segments}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
