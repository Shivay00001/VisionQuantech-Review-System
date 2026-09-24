import React, { useState, useCallback } from 'react';
import type { User } from './types';
import LoginPage from './pages/LoginPage';
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = useCallback(() => {
        // Demo mode: no real authentication. The previous version faked a
        // "Sign in with Google" button and fabricated a user — that was
        // dishonest and has been removed. To add REAL Google sign-in, use
        // Google Identity Services with YOUR_GOOGLE_CLIENT_ID from the
        // Google Cloud console and set the user from the GIS credential.
        const demoUser: User = {
            name: 'Demo User',
            email: 'demo@example.local',
            isFounder: false,
        };
        setUser(demoUser);
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
