import React from 'react';
import { MessageSquareText, Scale, Shield } from 'lucide-react';

const steps = [
  {
    icon: MessageSquareText,
    title: 'Ask Your Question',
    description: 'Type your legal question into our AI-powered chat interface.'
  },
  {
    icon: Scale,
    title: 'Get Instant Analysis',
    description: 'Our AI analyzes your question and provides relevant legal information.'
  },
  {
    icon: Shield,
    title: 'Take Action',
    description: 'Use the provided information to make informed legal decisions.'
  }
];

export default function HowItWorks() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Kanun Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the legal guidance you need in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">→</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}