import { ArrowRight, MessageSquare, Shield, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';

export default function LandingPage() {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Legal Guidance Made Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant AI-powered legal advice and guidance for your questions
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}