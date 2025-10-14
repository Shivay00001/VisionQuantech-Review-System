import React from 'react';
import type { ReviewResponse } from '../types';
import { FeedbackCard } from './FeedbackCard';
import { Loader } from './Loader';

interface FeedbackDisplayProps {
    feedback: ReviewResponse | null;
    isLoading: boolean;
    error: string | null;
}

const WelcomeMessage: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-0 animate-fade-in-up">
        <div className="bg-primary/10 p-4 rounded-full mb-4 border border-primary/30">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-100">Ready for Review</h3>
        <p className="text-gray-400 mt-2 max-w-sm">
            Paste your code in the editor, and our AI 'Vision' will provide an expert analysis.
        </p>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-red-900/20 border border-red-500/30 rounded-lg opacity-0 animate-fade-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-red-300">An Error Occurred</h3>
        <p className="text-red-400 mt-2">{message}</p>
    </div>
);

export const FeedbackDisplay: React.FC<FeedbackDisplayProps> = ({ feedback, isLoading, error }) => {
    return (
        <div className="glass-effect rounded-lg shadow-2xl shadow-black/30 flex flex-col h-[calc(100vh-15rem)] glowing-border">
            <div className="p-3 border-b border-gray-700/50">
                 <h2 className="text-lg font-semibold text-gray-200">Vision's Feedback</h2>
            </div>
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {isLoading && <Loader />}
                {error && !isLoading && <ErrorMessage message={error} />}
                {!isLoading && !error && feedback && feedback.review.length > 0 && (
                    feedback.review.map((item, index) => (
                        <FeedbackCard key={index} item={item} />
                    ))
                )}
                 {!isLoading && !error && feedback && feedback.review.length === 0 && (
                     <div className="flex flex-col items-center justify-center h-full text-center opacity-0 animate-fade-in-up">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-100">Looks Good!</h3>
                        <p className="text-gray-400 mt-2">Vision didn't find any critical issues in your code.</p>
                     </div>
                 )}
                {!isLoading && !error && !feedback && <WelcomeMessage />}
            </div>
        </div>
    );
};
