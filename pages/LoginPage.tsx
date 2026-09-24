import React from 'react';

/**
 * Demo-mode entry page.
 *
 * This demo does NOT perform a real Google sign-in. There is intentionally
 * no "Sign in with Google" button here: the previous version faked one,
 * which was dishonest. The demo runs entirely locally in "demo mode".
 *
 * To wire up REAL Google sign-in, use Google Identity Services:
 *   1. Create an OAuth client at https://console.cloud.google.com/apis/credentials
 *   2. Set YOUR_GOOGLE_CLIENT_ID below (or via an env var) and add the
 *      GIS script + credential callback (see App.tsx).
 */
const DemoIcon = () => (
    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 9l-1 1 1 1m8-2l1 1-1 1M9 15l-1-1 1-1m8 2l1-1-1-1" />
    </svg>
);

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md mx-auto text-center p-8 space-y-8 glass-effect rounded-2xl shadow-2xl shadow-black/30 opacity-0 animate-fade-in-up">
                <div className="flex justify-center items-center space-x-3">
                    <DemoIcon />
                    <h1 className="text-4xl font-bold tracking-tighter text-gray-100">VRS</h1>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-200">VisionQuantech Review System</h2>
                    <p className="text-gray-400">
                        World-class AI-powered code analysis to solve vulnerabilities and enforce best practices.
                    </p>
                </div>

                <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                    Demo mode — no real Google sign-in. You will be logged in as a
                    local demo user; nothing is authenticated.
                </div>

                <button
                    onClick={onLogin}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface transition-all duration-300 transform hover:scale-105"
                >
                    <span>Continue in demo mode</span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
