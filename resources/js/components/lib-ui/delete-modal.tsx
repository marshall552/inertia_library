import React, { useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed top-4 right-4 z-50 pointer-events-none">
                    <motion.div 
                        className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-lg"
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                        }}
                    >
                        <motion.div 
                            className="bg-red-500 rounded-full p-2"
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Trash2 className="w-5 h-5 text-white" />
                        </motion.div>
                        <motion.p 
                            className="text-gray-800 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Deleted Successfully!
                        </motion.p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DeleteModal;
