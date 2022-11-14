interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button 
            className="bg-gray-700 py-3 px-5 rounded-full hover:scale-105 transition-all"
            onClick={onClick}
        >
            <span className="text-white font-main">{text}</span>
        </button>
    );
}

export default Button;