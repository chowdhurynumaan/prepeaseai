import React, { useState } from 'react';

export default function LessonTab({ authState }) {
  const [topic, setTopic] = useState('');
  const [standard, setStandard] = useState('');
  const [generating, setGenerating] = useState(false);
  const [output, setOutput] = useState('');

  const isApproved = authState?.userData?.status === 'approved';

  const handleGenerate = async () => {
    if (!isApproved) {
      alert('Please wait for admin approval before generating lessons');
      return;
    }
    if (!topic || !standard) {
      alert('Please fill in all required fields');
      return;
    }

    setGenerating(true);
    try {
      // TODO: Integrate with Gemini API
      setOutput('Lesson plan will be generated here...');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Panel: Inputs */}
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Generate Lesson Plan</h2>

          {!isApproved && (
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-700">
                ⏳ You need admin approval to generate lessons
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Lesson Topic *
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Understanding Fractions"
              disabled={!isApproved}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-slate-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Learning Standard *
            </label>
            <input
              type="text"
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
              placeholder="e.g., CCSS.MATH.2.NF.A.1"
              disabled={!isApproved}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:bg-slate-50"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating || !isApproved || !topic || !standard}
            className="w-full px-4 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 disabled:bg-slate-300 transition-colors"
          >
            {generating ? 'Generating...' : 'Generate Lesson Plan'}
          </button>
        </div>
      </div>

      {/* Right Panel: Output */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          {output ? (
            <div className="prose prose-sm max-w-none">
              <p className="text-slate-600">{output}</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500">
                Fill in the form and click "Generate Lesson Plan" to create a lesson
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
