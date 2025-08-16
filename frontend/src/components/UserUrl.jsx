import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllUserUrls } from '../api/user.api';

const UserUrls = () => {
  const [copiedId, setCopiedId] = useState(null);

  const { data: urlsData, isLoading, error } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getAllUserUrls,
  });

  const handleCopy = async (shortUrl, id) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  if (isLoading) return <div className="text-center py-4">Loading your URLs...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error loading URLs</div>;

  const urls = urlsData?.urls || [];

  if (urls.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No URLs created yet. Create your first short URL above!</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Your URLs</h2>
      <div className="space-y-4">
        {urls.reverse().map((url) => (
          <div key={url._id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="space-y-2">
              {/* Full URL */}
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Original URL
                </label>
                <p className="text-sm text-gray-800 break-all">{url.full_url}</p>
              </div>

              {/* Short URL */}
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Short URL
                </label>
                <div className="flex items-center justify-between">
                  <a 
                    href={`http://localhost:5000/${url.short_url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 underline break-all"
                  >
                    {`http://localhost:5000/${url.short_url}`}
                  </a>
                  <button
                    onClick={() => handleCopy(`http://localhost:5000/${url.short_url}`, url._id)}
                    className="ml-2 bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700 transition flex-shrink-0"
                  >
                    {copiedId === url._id ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Clicks */}
              <div>
                <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Clicks
                </label>
                <p className="text-sm font-semibold text-gray-800">{url.clicks}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserUrls;