import React from 'react';
import type { FeedbackItem } from '../types';
import { FeedbackType } from '../types';
import { BugIcon, PerformanceIcon, SecurityIcon, StyleIcon, BestPracticeIcon } from './Icons';

interface FeedbackCardProps {
    item: FeedbackItem;
}

const typeDetails: Record<FeedbackType, { icon: React.FC, title: string, classes: string, textClass: string }> = {
    [FeedbackType.BUG]: { icon: BugIcon, title: 'Potential Bug', classes: 'border-red-500/50', textClass: 'text-red-400' },
    [FeedbackType.PERFORMANCE]: { icon: PerformanceIcon, title: 'Performance', classes: 'border-yellow-500/50', textClass: 'text-yellow-400' },
    [FeedbackType.SECURITY]: { icon: SecurityIcon, title: 'Security Risk', classes: 'border-purple-500/50', textClass: 'text-purple-400' },
    [FeedbackType.STYLE]: { icon: StyleIcon, title: 'Style Suggestion', classes: 'border-blue-500/50', textClass: 'text-blue-400' },
    [FeedbackType.BEST_PRACTICE]: { icon: BestPracticeIcon, title: 'Best Practice', classes: 'border-green-500/50', textClass: 'text-green-400' },
};

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ item }) => {
    const details = typeDetails[item.type] || typeDetails[FeedbackType.BEST_PRACTICE];
    const Icon = details.icon;

    return (
        <div className={`glass-effect border rounded-lg overflow-hidden ${details.classes} opacity-0 animate-fade-in-up`}>
            <div className="p-4">
                <div className="flex items-start">
                    <div className={`flex-shrink-0 mr-4 mt-1 ${details.textClass}`}>
                        <Icon />
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-baseline justify-between">
                            <h4 className={`text-md font-semibold ${details.textClass}`}>{details.title}</h4>
                            {item.line && <span className="text-xs font-mono bg-gray-900/50 px-2 py-1 rounded">{`Line ${item.line}`}</span>}
                        </div>
                        <h5 className="text-lg font-medium text-gray-100 mt-2">{item.suggestion}</h5>
                        <p className="mt-2 text-sm text-gray-400 whitespace-pre-wrap font-light">{item.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
