import React from 'react';

interface CodeInputProps {
    code: string;
    onCodeChange: (code: string) => void;
    onReview: () => void;
    onClear: () => void;
    isLoading: boolean;
}

const Button: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode; primary?: boolean }> = ({ onClick, disabled, children, primary = false }) => {
    const baseClasses = "px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100";
    const primaryClasses = "bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-lg shadow-primary/30";
    const secondaryClasses = "bg-secondary text-gray-200 hover:bg-gray-600 focus:ring-gray-500";
    
    return (
        <button onClick={onClick} disabled={disabled} className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}>
            {children}
        </button>
    );
};

export const CodeInput: React.FC<CodeInputProps> = ({ code, onCodeChange, onReview, onClear, isLoading }) => {
    return (
        <div className="flex flex-col glass-effect rounded-lg shadow-2xl shadow-black/30 overflow-hidden h-[calc(100vh-15rem)] glowing-border">
            <div className="flex items-center justify-between p-3 border-b border-gray-700/50">
                <h2 className="text-lg font-semibold text-gray-200">Code Editor</h2>
                <div className="flex items-center space-x-2">
                    <Button onClick={onClear} disabled={isLoading || !code}>Clear</Button>
                    <Button onClick={onReview} disabled={isLoading} primary>
                        {isLoading ? 'Analyzing...' : 'Review Code'}
                    </Button>
                </div>
            </div>
            <textarea
                value={code}
                onChange={(e) => onCodeChange(e.target.value)}
                placeholder="Paste your code here to get a review from Vision AI..."
                className="w-full h-full p-4 bg-background-start/50 text-gray-300 font-mono text-sm resize-none focus:outline-none"
                spellCheck="false"
            />
        </div>
    );
};
