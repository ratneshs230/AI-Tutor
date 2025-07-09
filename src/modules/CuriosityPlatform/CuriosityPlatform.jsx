import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { generateCuriosityContent } from '../../utils/api';

const CuriosityPlatform = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!query) {
      setError('Please enter a query.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await generateCuriosityContent(query);
      setContent(response);
    } catch (err) {
      setError('Failed to generate content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Curiosity Platform</h1>
        <p className="text-center text-gray-600 mb-6">Ask me anything! I will generate a multi-modal answer for you.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <InputField
            type="text"
            placeholder="e.g., 'What are black holes?'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow"
          />
          <Button onClick={handleGenerate} disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? <LoadingSpinner /> : 'Generate'}
          </Button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {content && (
          <div className="mt-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Generated Content</h2>
            <div className="prose max-w-none">
              {content.text && <p>{content.text}</p>}
              {content.visual && <img src={content.visual} alt="Generated visual" className="mt-4 rounded-lg shadow-md" />}
              {content.audio && <audio controls src={content.audio} className="mt-4 w-full">Your browser does not support the audio element.</audio>}
              {content.video && <video controls src={content.video} className="mt-4 rounded-lg shadow-md w-full">Your browser does not support the video tag.</video>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CuriosityPlatform;