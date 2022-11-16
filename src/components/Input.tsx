import React from "react";

interface InputProps {
    value: string;
    setValue: (value: string) => void;
    type: 'text' | 'password';
    className?: string;
}

const Input = ({ value, setValue, type, className="" }: InputProps) => {
    return (
        <input
            className={`border-b-2 border-b-gray-200 w-full text-sm pl-1 mt-2 ${className}`}
            type={type}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            data-testid="input"
        />
    );
}

export default Input;