import React from 'react';
import { MessageSquareText } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            AI-Powered Legal Guidance
            <br />
            <span className="text-indigo-600">At Your Fingertips</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Get instant answers to your legal questions with our advanced AI system.
            Professional, reliable, and available 24/7.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center">
              <MessageSquareText className="mr-2 h-5 w-5" />
              Start Chatting Now
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-md text-lg font-semibold hover:border-gray-400 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform -skew-y-6 rounded-3xl opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200"
              alt="Legal consultation"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}