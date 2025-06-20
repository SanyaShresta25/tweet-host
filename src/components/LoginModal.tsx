import React from 'react';

interface LoginModalProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onClose: () => void;
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  onClose,
  onLogin,
  onSwitchToSignup,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 w-96 max-w-md shadow-xl transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Login to Your Account
      </h2>
      <div className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
          placeholder="Email"
          autoFocus
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
          placeholder="Password"
        />
      </div>
      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 dark:hover:bg-purple-800 dark:text-purple-400 dark:border-purple-500"
        >
          Cancel
        </button>
        <button
          onClick={onLogin}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          Login
        </button>
      </div>
      <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
        Don't have an account?{' '}
        <button
          onClick={onSwitchToSignup}
          className="text-purple-600 dark:text-purple-400 hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  </div>
);

export default LoginModal;
