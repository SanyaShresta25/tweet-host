import React from 'react';
import { X } from 'lucide-react';

interface PricingModalProps {
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Simple Pricing</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-center text-gray-600 mb-8">
          Choose the plan that works best for you. All plans include our core features with
          different usage limits.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Free Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Free</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">
              $0 <span className="text-lg font-normal text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">10 minutes of audio per month</span></li>
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">Standard transcription quality</span></li>
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">5 languages supported</span></li>
              <li className="flex items-center text-red-500"><span className="mr-2">✗</span><span className="text-gray-700">No AI agent access</span></li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-medium">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-600 text-white relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">
              $20 <span className="text-lg font-normal opacity-80">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center"><span className="mr-2">✓</span><span>5 hours of audio per month</span></li>
              <li className="flex items-center"><span className="mr-2">✓</span><span>High-quality transcription</span></li>
              <li className="flex items-center"><span className="mr-2">✓</span><span>20+ languages supported</span></li>
              <li className="flex items-center"><span className="mr-2">✓</span><span>Priority processing</span></li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-md hover:bg-gray-100 font-medium">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise</h3>
            <div className="text-3xl font-bold text-gray-800 mb-4">Custom</div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">Unlimited audio processing</span></li>
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">Highest quality transcription</span></li>
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">All languages supported</span></li>
              <li className="flex items-center text-green-600"><span className="mr-2">✓</span><span className="text-gray-700">Dedicated support team</span></li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 font-medium">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <button onClick={onClose} className="text-purple-600 hover:underline">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
