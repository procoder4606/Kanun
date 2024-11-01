import React from 'react';
import { MessageSquareText, Scale, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: MessageSquareText,
    title: 'AI-Powered Chat',
    description: 'Get instant answers to your legal questions through our advanced AI chatbot.'
  },
  {
    icon: Scale,
    title: 'Legal Expertise',
    description: 'Access a vast knowledge base of legal information and precedents.'
  },
  {
    icon: Shield,
    title: 'Secure & Confidential',
    description: 'Your conversations are encrypted and protected with enterprise-grade security.'
  },
  {
    icon: BookOpen,
    title: 'Legal Resources',
    description: 'Access comprehensive guides and documentation for common legal issues.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kanun?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of legal assistance with our cutting-edge features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}