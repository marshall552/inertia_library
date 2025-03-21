import React from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: BookData) => void;
}

interface BookData {
    title: string;
    author: string;
    isbn: string;
    genre: string;
    publicationDate: string;
    numberOfCopies: string;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = React.useState<BookData>({
        title: '',
        author: '',
        isbn: '',
        genre: '',
        publicationDate: '',
        numberOfCopies: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: name === "numberOfCopies" ? Math.max(0, Number(value)).toString() : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const handleClear = () => {
        setFormData({
            title: '',
            author: '',
            isbn: '',
            genre: '',
            publicationDate: '',
            numberOfCopies: ''
        });
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
                                {/* Title */}
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Don Quixote"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700"
                                    />
                                </div>

                                {/* Author */}
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Author</label>
                                    <input
                                        type="text"
                                        name="author"
                                        value={formData.author}
                                        onChange={handleChange}
                                        placeholder="e.g. Miguel de Cervantes"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700"
                                    />
                                </div>

                                {/* ISBN */}
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">ISBN</label>
                                    <input
                                        type="text"
                                        name="isbn"
                                        value={formData.isbn}
                                        onChange={handleChange}
                                        placeholder="e.g. 0875328"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700"
                                    />
                                </div>

                                {/* Genre */}
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Genre</label>
                                    <input
                                        type="text"
                                        name="genre"
                                        value={formData.genre}
                                        onChange={handleChange}
                                        placeholder="e.g. Modern Novel"
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700"
                                    />
                                </div>

                                {/* Publication Date */}
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Publication Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="publicationDate"
                                            value={formData.publicationDate}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700"
                                        />
                                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                                    </div>
                                </div>

                                {/* Number of Copies */}
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">No. of Copy</label>
                                    <input
                                        type="number"
                                        name="numberOfCopies"
                                        value={formData.numberOfCopies}
                                        onChange={handleChange}
                                        placeholder="e.g. 100"
                                        min={0}
                                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] text-gray-700"
                                    />
                                </div>

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