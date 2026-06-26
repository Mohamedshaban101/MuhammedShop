import React, { createContext, useEffect, useState } from 'react';

export const ContextSlidesPerView = createContext();

const ContextSlidesPerViewProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    const getSlidesPerView = () => {
        if (windowWidth > 1400) return 6;
        if (windowWidth > 1300) return 5;
        if (windowWidth > 992) return 4;
        if (windowWidth > 768) return 3;
        if (windowWidth > 576) return 2;
        return 1;
    }
    return (
        <ContextSlidesPerView.Provider value={{ getSlidesPerView, windowWidth }}>
            {children}
        </ContextSlidesPerView.Provider>
    );
}

export default ContextSlidesPerViewProvider;