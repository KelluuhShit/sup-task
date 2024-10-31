// src/components/DefaultButton.js
const DefaultButton = ({ label, onClick, className }) => {
    return (
        <button
            className={`text-white font-bold py-2 px-4 rounded ${className}`} // Incorporating className
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default DefaultButton;
