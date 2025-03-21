import React from 'react';
import { Plus } from 'lucide-react';

interface ButtonAddProps {
    onClick: () => void;
    className?: string;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({ onClick, className }) => {
    return (
        <button
        type="submit"
        onClick={onClick}
        className={
            `bg-green-500
             text-white 
             px-6
             py-2
             rounded-lg
             hover:bg-green-600 
             transition-colors 
             flex
             items-center
             gap-1
             shadow-md
             ${className}`}
             
        >
            <Plus size={24} />
            Add
        </button>
    );
};

export default ButtonAdd;
