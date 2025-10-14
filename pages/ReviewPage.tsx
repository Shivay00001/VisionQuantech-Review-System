import React, { useState, useCallback } from 'react';
import { Header } from '../components/Header';
import { CodeInput } from '../components/CodeInput';
import { FeedbackDisplay } from '../components/FeedbackDisplay';
import { Footer } from '../components/Footer';
import { reviewCode } from '../services/geminiService';
import type { ReviewResponse, User } from '../types';

interface ReviewPageProps {
    user: User;
    onLogout: () => void;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ user, onLogout }) => {
    const [code, setCode] = useState<string>('');
    const [feedback, setFeedback] = useState<ReviewResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleReview = useCallback(async () => {
        if (!code.trim()) {
            setError('Please enter some code to review.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setFeedback(null);
        try {
            const result = await reviewCode(code);
            setFeedback(result);
        } catch (err) {
            console.error(err);
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(`An error occurred while reviewing the code. ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    }, [code]);
    
    const handleClear = useCallback(() => {
        setCode('');
        setFeedback(null);
        setError(null);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header user={user} onLogout={onLogout} />
            <main className="container mx-auto p-4 md:p-6 lg:p-8 flex-grow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                    <CodeInput 
                        code={code} 
                        onCodeChange={setCode} 
                        onReview={handleReview}
                        onClear={handleClear}
                        isLoading={isLoading}
                    />
                    <FeedbackDisplay 
                        feedback={feedback}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ReviewPage;
