import React, { useState, useEffect, useRef } from 'react';
import type { User } from '../types';

interface UserProfileProps {
    user: User;
    onLogout: () => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 focus:outline-none">
                <img
                    src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.name}&background=8b5cf6&color=fff`}
                    alt="User Avatar"
                    className="w-9 h-9 rounded-full border-2 border-primary"
                />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-64 glass-effect rounded-lg shadow-2xl shadow-black/50 py-2 z-20 origin-top-right animate-fade-in-up" style={{ animationDuration: '0.2s'}}>
                    <div className="px-4 py-2 border-b border-gray-600">
                        <p className="font-semibold text-gray-100">{user.name}</p>
                        <p className="text-sm text-gray-400 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                        {user.isFounder && (
                             <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary/20">Admin Panel</a>
                        )}
                        <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-primary/20">Profile</a>
                    </div>
                    <div className="py-1 border-t border-gray-600">
                         <button
                            onClick={onLogout}
                            className="w-full text-left block px-4 py-2 text-sm text-red-400 hover:bg-red-500/20"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
