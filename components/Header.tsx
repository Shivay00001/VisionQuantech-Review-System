import React from 'react';
import { UserProfile } from './UserProfile';
import type { User } from '../types';

interface HeaderProps {
    user: User;
    onLogout: () => void;
}

const LogoIcon = () => (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 9l-1 1 1 1m8-2l1 1-1 1M9 15l-1-1 1-1m8 2l1-1-1-1" />
    </svg>
)

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
    return (
        <header className="bg-surface/50 backdrop-blur-sm border-b border-gray-700/50 sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <LogoIcon />
                        <h1 className="text-xl font-bold text-gray-100 tracking-tight">
                            VRS - VisionQuantech Review System
                        </h1>
                    </div>
                    <UserProfile user={user} onLogout={onLogout} />
                </div>
            </div>
        </header>
    );
};
