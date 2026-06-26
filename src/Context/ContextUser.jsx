import React, { createContext, useEffect, useState } from 'react';
export const ContextUser = createContext();
const ContextUserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : []
    });
    const [currentUser, setCurrentUser] = useState(() => {
        const savedCurrentUser = localStorage.getItem('currentUser');
        return savedCurrentUser ? JSON.parse(savedCurrentUser) : null
    });
    const [infoUser , setInfoUser] = useState(() => {
        const savedInfo = localStorage.getItem('info');
        return savedInfo ? JSON.parse(savedInfo) : []
    });
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    }
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('currentUser' , JSON.stringify(currentUser));
        localStorage.setItem('info' , JSON.stringify(infoUser));
    }, [user , currentUser , infoUser]);
    return (
        <ContextUser.Provider value={{ user, setUser , currentUser , logout , setCurrentUser , infoUser , setInfoUser  }}>
            {children}
        </ContextUser.Provider>
    );
}
export default ContextUserProvider