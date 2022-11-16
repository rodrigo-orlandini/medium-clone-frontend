import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
    return (
        <button 
            className={`bg-gray-700 py-3 px-5 rounded-full hover:scale-105 transition-all ${className}`}
            onClick={onClick}
        >
            <span className="text-white font-main">{text}</span>
        </button>
    );
}

export default Button;