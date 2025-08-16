import { useState } from "react";
import axios from "axios";
import { createShortUrl } from "../api/shortUrl.api";
import { QueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

export default function UrlShortener() {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null)
  const [customSlug, setCustomSlug] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  const queryClient = new QueryClient();


  const handleShorten = async (e) => {
    e.preventDefault();
    if (!url) return;

    try{
      const data = await createShortUrl(url, customSlug);
      console.log(data);
      setShortUrl(data);
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
      setError(null);
    } catch(err){
      setError(err.message || "Shortening failed");
    }

    
  };
  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2 sec
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  

  return (
        <form>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 ">
            Enter your URL:
          </label>
        <input
          type="text"
          placeholder="Enter your long URL"
          value={url}
          onChange={(e) => seturl(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {isAuthenticated && (
        <div className="mt-4">
          <label htmlFor="customSlug" className="block text-sm font-medium text-gray-700">
            Custom Short URL (optional):
          </label>
          <input
            type="text"
            id="customSlug"
            placeholder="Enter custom slug (e.g., my-link)"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}



        <button
          onClick={handleShorten}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Shorten URL
        </button>

        {shortUrl && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-700">Short URL:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline break-all">
              {shortUrl}
            </a>
            <button
                onClick={handleCopy}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm ml-5"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
          </div>
        )}
      </form>
  );
}
