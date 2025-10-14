export enum FeedbackType {
    BUG = 'BUG',
    PERFORMANCE = 'PERFORMANCE',
    STYLE = 'STYLE',
    SECURITY = 'SECURITY',
    BEST_PRACTICE = 'BEST_PRACTICE'
}

export interface FeedbackItem {
    type: FeedbackType;
    line?: number;
    suggestion: string;
    explanation: string;
}

export interface ReviewResponse {
    review: FeedbackItem[];
}

export interface User {
    name: string;
    email: string;
    avatarUrl?: string;
    isFounder?: boolean;
}
