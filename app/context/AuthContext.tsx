import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Replace with your user fetching logic

    const login = (userData) => {
        setUser(userData); // Simulate user login
    };

    const logout = () => {
        setUser(null); // Simulate user logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
