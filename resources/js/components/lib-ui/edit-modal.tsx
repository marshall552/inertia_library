import React from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'number' | 'date' | 'tel' | 'select';
    placeholder?: string;
    options?: string[];
    min?: number;
    validation?: {
        required?: boolean;
        pattern?: RegExp;
        minLength?: number;
        maxLength?: number;
    };
}

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: Record<string, any>) => void;
    title: string;
    fields: FormField[];
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, title, fields }) => {
    // Create initial form data based on fields
    const initialFormData = React.useMemo(() => {
        return fields.reduce((acc, field) => ({
            ...acc,
            [field.name]: ''
        }), {});
    }, [fields]);

    const [formData, setFormData] = React.useState<Record<string, any>>(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        setFormData((prev) => ({
            ...prev,
            [name]: type === "number" ? Math.max(0, Number(value)).toString() : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleClear = () => {
        setFormData(initialFormData);
    };

    const renderField = (field: FormField) => {
        const commonClasses = "w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700";

        switch (field.type) {
            case 'select':
                return (
                    <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={commonClasses}
                    >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                );
            case 'date':
                return (
                    <div className="relative">
                        <input
                            type="date"
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className={commonClasses}
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                );
            default:
                return (
                    <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        min={field.min}
                        className={commonClasses}
                    />
                );
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/5 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg p-8 w-[400px] relative shadow-lg"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }}
                        >
                            {/* Title */}
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">{title}</h2>

                            {/* Close Button */}
                            <motion.button
                                onClick={onClose}
                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="w-5 h-5" />
                            </motion.button>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {fields.map((field) => (
                                    <div key={field.name}>
                                        <label className="block text-sm text-gray-600 mb-1">
                                            {field.label}
                                        </label>
                                        {renderField(field)}
                                    </div>
                                ))}

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-4">
                                    <motion.button
                                        type="button"
                                        onClick={handleClear}
                                        className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-100 rounded-lg transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Clear
                                    </motion.button>
                                    <motion.button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Save
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EditModal;