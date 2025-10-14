import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
             <div className="w-16 h-16 relative">
                 <div className="absolute top-0 left-0 w-full h-full border-4 border-accent/50 rounded-full"></div>
                 <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
             </div>
             <p className="mt-4 text-gray-400 text-lg tracking-wider">Vision is analyzing your code...</p>
             <p className="text-sm text-gray-500 mt-1">This may take a moment.</p>
        </div>
    );
};
