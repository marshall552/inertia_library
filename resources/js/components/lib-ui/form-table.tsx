import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import ButtonAdd from './button-add';
import AddModal from './add-modal';

export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'date' | 'tel' | 'select';
    placeholder?: string;
    options?: string[];
}

interface FormTableProps {
    fields: {
        leftColumn: FormField[];
        rightColumn: FormField[];
        fullWidth?: FormField[];
    };
    onSubmit?: (e: React.FormEvent) => void;
}

const FormTable: React.FC<FormTableProps> = ({ fields, onSubmit }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const renderField = (field: FormField) => (
        <div key={field.name}>
            <label className="block text-sm text-gray-600 mb-1">{field.label}</label>
            <div className="relative">
                {field.type === 'select' ? (
                    <select
                        name={field.name}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700 appearance-none [&>option[value='']]:text-gray-400"
                    >
                        <option value="" className="text-gray-400">{field.placeholder}</option>
                        {field.options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input 
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700 placeholder:text-gray-400"
                    />
                )}
                {field.type === 'date' && (
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                )}
                {field.type === 'select' && (
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm p-6">
                <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    {/* Left Column */}
                    <div className="space-y-4">
                        {fields.leftColumn.map(renderField)}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {fields.rightColumn.map(renderField)}
                    </div>

                    {/* Full Width Fields */}
                    {fields.fullWidth && fields.fullWidth.length > 0 && (
                        <div className="col-span-2 grid grid-cols-2 gap-6">
                            {fields.fullWidth.map(renderField)}
                        </div>
                    )}

                    {/* Add Button */}
                    <div className="col-span-2">
                        <ButtonAdd onClick={() => {}} />
                    </div>
                </form>
            </div>
            
            <AddModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </>
    );
};

export default FormTable;
