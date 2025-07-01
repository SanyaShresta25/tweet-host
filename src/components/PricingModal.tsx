import React from 'react';
import { X } from 'lucide-react';

interface PricingModalProps {
  onClose: () => void;
}

const plans = [
  {
    name: "Free",
    price: "$0",
    unit: "/month",
    description: "Transcribe up to 2GB per session, analyze your Space, and generate Twitter threads.",
    features: [
      "Transcription up to 2GB per session",
      "Space Analyzer",
      "Thread Generator"
    ],
    button: "Get Started",
    highlight: false,
    badge: "",
    detailsClass: "border border-gray-200 bg-gray-50 text-gray-800",
    buttonClass: "bg-purple-600 text-white hover:bg-purple-700"
  },
  {
    name: "Premium",
    price: "$20",
    unit: "/month",
    description: "AI agent joins your Space, summarizes in real-time, and answers questions from your uploaded knowledge base.",
    features: [
      "AI agent joins your Space and summarizes at intervals",
      "Upload your knowledge base for expert Q&A",
      "Advanced Space Analyzer",
      "Thread Generator",
    ],
    button: "Get Started",
    highlight: true,
    badge: "Most Popular",
    detailsClass: "border-2 border-purple-500 bg-purple-600 text-white relative",
    buttonClass: "bg-white text-purple-600 hover:bg-gray-100"
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    description: "For large organizations",
    features: [
      "All Premium features",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees"
    ],
    button: "Contact Sales",
    highlight: false,
    badge: "",
    detailsClass: "border border-gray-200 bg-gray-50 text-gray-800",
    buttonClass: "bg-purple-600 text-white hover:bg-purple-700"
  },
];

const PricingModal: React.FC<PricingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Simple Pricing</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <p className="text-center text-gray-600 mb-8">
          Choose the plan that works best for you. All plans include core features with different usage limits.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-6 shadow-lg flex flex-col items-center ${plan.detailsClass} ${
                plan.highlight ? "scale-105 z-10" : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md uppercase tracking-wider">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-800"}`}>{plan.name}</h3>
              <div className={`text-3xl font-bold mb-2 flex items-end gap-1 ${plan.highlight ? "text-white" : "text-gray-800"}`}>
                {plan.price}
                {plan.unit && <span className="text-lg font-normal opacity-80">{plan.unit}</span>}
              </div>
              <div className={`text-sm mb-4 ${plan.highlight ? "text-purple-100/90" : "text-gray-600"}`}>{plan.description}</div>
              <ul className="space-y-3 mb-8 w-full">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <span className={`mr-2 text-lg ${plan.highlight ? "text-green-200" : "text-green-600"}`}>✓</span>
                    <span className={plan.highlight ? "text-white" : "text-gray-700"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-md font-medium transition-all duration-150 ${plan.buttonClass}`}>
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button onClick={onClose} className="text-purple-600 hover:underline font-medium">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
