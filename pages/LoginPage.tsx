import React from 'react';

const GoogleIcon = () => (
    <svg className="w-6 h-6 mr-3" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.022,35.244,44,30.038,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md mx-auto text-center p-8 space-y-8 glass-effect rounded-2xl shadow-2xl shadow-black/30 opacity-0 animate-fade-in-up">
                <div className="flex justify-center items-center space-x-3">
                     <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 9l-1 1 1 1m8-2l1 1-1 1M9 15l-1-1 1-1m8 2l1-1-1-1" />
                    </svg>
                    <h1 className="text-4xl font-bold tracking-tighter text-gray-100">VRS</h1>
                </div>
                
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-200">VisionQuantech Review System</h2>
                    <p className="text-gray-400">
                        World-class AI-powered code analysis to solve vulnerabilities and enforce best practices.
                    </p>
                </div>

                <button
                    onClick={onLogin}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface transition-all duration-300 transform hover:scale-105"
                >
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
