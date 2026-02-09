"use client";

import { Warning2, Refresh2, Home } from "iconsax-reactjs";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 text-center animate-[slideUp_0.4s_ease-out]">
          {/* Error Icon */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-100 dark:bg-red-900/20 rounded-full blur-2xl opacity-50 animate-pulse" />
            <div className="relative flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-red-50 dark:from-red-900/30 dark:to-red-800/20 rounded-full">
              <Warning2 
                size={48} 
                className="text-red-500 dark:text-red-400"
                variant="Bold"
              />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We encountered an unexpected error. Please try again or return to the home page.
          </p>

          {/* Error Details (optional, for development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg text-left">
              <p className="text-xs font-mono text-red-700 dark:text-red-400 break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <Refresh2 size={20} variant="Bold" />
              <span>Try Again</span>
            </button>
            
            <button
              onClick={() => window.location.href = "/"}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 ease-out hover:scale-105 active:scale-95"
            >
              <Home size={20} variant="Bold" />
              <span>Go Home</span>
            </button>
          </div>

          {/* Support Text */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-500">
            If the problem persists, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
