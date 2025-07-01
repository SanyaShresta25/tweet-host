import React from "react";
import { Github, Twitter, Globe } from "lucide-react";

const Footer: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => (
  <footer className={`py-12 px-5 mt-24 ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-purple-950" : "bg-gradient-to-br from-purple-50 to-white"}`}>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
      {/* Left: Logo & tagline */}
      <div className="flex flex-col gap-3 items-center lg:items-start">
        <span className="font-black text-2xl text-purple-500 flex items-center gap-2">
          <span className="inline-block animate-spin-slow">✧</span> SpacesCoHost
        </span>
        <p className="text-sm text-gray-400 max-w-xs">
          AI-powered co-host for your Twitter Spaces. <br />
          Transcribe, summarize, and generate content in real-time.
        </p>
        <div className="flex space-x-3 mt-2">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <Twitter size={22} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <Github size={22} />
          </a>
          <a href="https://spacescohost.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <Globe size={22} />
          </a>
        </div>
      </div>
      {/* Right: Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
        <div>
          <div className="font-bold mb-3">Product</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#features" className="hover:text-purple-500">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-purple-500">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-purple-500">Pricing</a></li>
            <li><a href="#roadmap" className="hover:text-purple-500">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">Resources</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-500">Documentation</a></li>
            <li><a href="#" className="hover:text-purple-500">Guides</a></li>
            <li><a href="#" className="hover:text-purple-500">Support</a></li>
            <li><a href="#" className="hover:text-purple-500">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-3">Company</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-500">About</a></li>
            <li><a href="#" className="hover:text-purple-500">Blog</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
            <li><a href="#" className="hover:text-purple-500">Careers</a> <span className="text-xs text-green-400">Hiring</span></li>
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="font-bold mb-3">Legal</div>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-500">Terms</a></li>
            <li><a href="#" className="hover:text-purple-500">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 mt-8">
      © {new Date().getFullYear()} SpacesCoHost by NexusVoidAI. All rights reserved.
    </div>
  </footer>
);

export default Footer;
