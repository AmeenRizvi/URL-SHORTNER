import React from 'react'
import UrlShortener from '../components/URLShortner'
import AuthPage from './AuthPage'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 wallPaper">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">URL Shortener</h1>
        <UrlShortener />
        {/* <AuthPage /> */}
      </div>
    </div>
  )
}

export default HomePage