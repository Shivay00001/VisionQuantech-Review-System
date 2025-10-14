import React, { useState, useCallback } from 'react';
import type { User } from './types';
import LoginPage from './pages/LoginPage';
import ReviewPage from './pages/ReviewPage';

const FOUNDER_EMAIL = 'shivam.kumar@visionquantech.com'; // Example founder email

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = useCallback(() => {
        // In a real app, this would be the result of a Google OAuth flow
        const loggedInUser: User = {
            name: 'Shivam Kumar',
            email: FOUNDER_EMAIL,
            avatarUrl: 'https://i.pravatar.cc/150?u=shivam',
            isFounder: true // Let's assume the founder is logging in
        };
        setUser(loggedInUser);
    }, []);

    const handleLogout = useCallback(() => {
        setUser(null);
    }, []);

    return (
        <div className="min-h-screen text-gray-200 font-sans">
            {!user ? (
                <LoginPage onLogin={handleLogin} />
            ) : (
                <ReviewPage user={user} onLogout={handleLogout} />
            )}
        </div>
    );
};

export default App;
