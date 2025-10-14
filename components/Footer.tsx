import React from 'react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full text-center py-4 mt-8 border-t border-gray-700/50">
            <p className="text-sm text-gray-400">
                &copy; {currentYear} VisionQuantech. Created by Shivam Kumar (Shivay Singh Rajput).
            </p>
        </footer>
    );
};
