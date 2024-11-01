import React from 'react';
import { Check, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '0',
    description: 'Perfect for getting started',
    features: [
      '5 legal questions per month',
      'Basic AI responses',
      'Email support',
      'Access to knowledge base'
    ]
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Best for professionals',
    features: [
      'Unlimited legal questions',
      'Priority AI responses',
      'Priority support',
      'Custom document templates',
      'Detailed legal explanations',
      'Save chat history'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '99',
    description: 'For growing businesses',
    features: [
      'Everything in Pro',
      'API access',
      'Custom AI training',
      'Dedicated account manager',
      'Team collaboration',
      'Advanced analytics'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Scale className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your legal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-sm p-8 relative ${
                plan.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/signup"
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need a custom plan? <a href="/contact" className="text-indigo-600 font-medium">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}