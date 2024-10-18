import React from 'react';

const Button = ({ onClick, children, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`py-2 px-4 rounded-lg transition duration-300 ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
            {children}
        </button>
    );
};

export default Button;
