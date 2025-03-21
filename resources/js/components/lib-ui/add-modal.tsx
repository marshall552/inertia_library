// import React, { useEffect } from 'react';
// import { Check } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface AddModalProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose }) => {
//     useEffect(() => {
//         if (isOpen) {
//             const timer = setTimeout(() => {
//                 onClose();
//             }, 2000);

//             return () => clearTimeout(timer);
//         }
//     }, [isOpen, onClose]);

//     return (
//         <AnimatePresence>
//             {isOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
//                     <motion.div 
//                         className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg"
//                         initial={{ opacity: 0, y: -20, scale: 0.8 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 20, scale: 0.8 }}
//                         transition={{ 
//                             type: "spring",
//                             stiffness: 400,
//                             damping: 25
//                         }}
//                     >
//                         <motion.div 
//                             className="bg-green-500 rounded-full p-4 mb-3"
//                             initial={{ rotate: -180, opacity: 0 }}
//                             animate={{ rotate: 0, opacity: 1 }}
//                             transition={{ delay: 0.2 }}
//                         >
//                             <Check className="w-6 h-6 text-white" />
//                         </motion.div>
//                         <motion.p 
//                             className="text-gray-800 font-medium text-lg"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ delay: 0.3 }}
//                         >
//                             Added Successfully!
//                         </motion.p>
//                     </motion.div>
//                 </div>
//             )}
//         </AnimatePresence>
//     );
// };

// export default AddModal;

import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AddModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose }) => {
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
                <div className="fixed top-4 right-4 pointer-events-none">
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
                            className="bg-green-500 rounded-full p-2"
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Check className="w-5 h-5 text-white" />
                        </motion.div>
                        <motion.p 
                            className="text-gray-800 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Added Successfully!
                        </motion.p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AddModal;