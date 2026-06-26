import React, { createContext, useEffect, useState } from 'react';
export const ContextReview = createContext();

const ContextReviewProvider = ({ children }) => {

    const [reviews, setReviews] = useState(() => {
        const savedReview = localStorage.getItem('reviews');
        return savedReview ? JSON.parse(savedReview) : []
    });

    const addReview = (text , rate) => {
        setReviews([...reviews, { text : text , rate : rate }]);
    }

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);
    return (
        <ContextReview.Provider value={{ reviews, setReviews, addReview }}>
            {children}
        </ContextReview.Provider>
    );
}
export default ContextReviewProvider;