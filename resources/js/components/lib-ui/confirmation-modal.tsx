// import React from 'react';

// interface ConfirmationModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     onConfirm: () => void;
// }

// const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
//                 <div className="text-center mb-6">
//                     <p className="text-gray-700 text-lg">Are you sure you want to delete?</p>
//                 </div>
                
//                 <div className="flex justify-center gap-4">
//                     <button
//                         onClick={onClose}
//                         className="px-6 py-2 bg-[#2C2F33] text-white rounded hover:bg-gray-700 transition-colors"
//                     >
//                         No
//                     </button>
//                     <button
//                         onClick={() => {
//                             onConfirm();
//                             onClose();
//                         }}
//                         className="px-6 py-2 bg-white border text-[#2C2F33] border-gray-200 rounded hover:bg-gray-50 transition-colors"
//                     >
//                         Yes
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConfirmationModal;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
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
                            className="bg-white rounded-lg shadow-lg w-[400px] p-6"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 300,
                                damping: 25 
                            }}
                        >
                            <motion.div 
                                className="text-center mb-6"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-gray-700 text-lg">Are you sure you want to delete?</p>
                            </motion.div>
                            
                            <div className="flex justify-center gap-4">
                                <motion.button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-[#2C2F33] text-white rounded hover:bg-gray-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    No
                                </motion.button>
                                <motion.button
                                    onClick={() => {
                                        onConfirm();
                                        onClose();
                                    }}
                                    className="px-6 py-2 bg-white border text-[#2C2F33] border-gray-200 rounded hover:bg-gray-50 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Yes
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConfirmationModal;