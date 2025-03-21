import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import { Pencil, Trash2 } from 'lucide-react';
import EditModal from '@/components/lib-ui/edit-modal';
import ConfirmationModal from '@/components/lib-ui/confirmation-modal';
import DeleteModal from '@/components/lib-ui/delete-modal';
import UpdateModal from '@/components/lib-ui/update-modal';


export default function ViewBooks() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] = useState(false);
    const [isUpdateSuccessOpen, setIsUpdateSuccessOpen] = useState(false);
    const handleDelete = () => {

        console.log('Deleting item...');
        setIsConfirmationModalOpen(false);
        setIsDeleteSuccessOpen(true);
    };

    return (
        <div className="min-h-screen flex bg-[#F5F5F5]">    
            <Head title="View Books">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            
            <div className="fixed left-0 top-0">
                <Sidebar />
            </div>
            
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <h1 className="text-2xl font-semibold text-gray-700 font[Lato]">Book Management</h1>
                    <p className="text-sm text-gray-500">Book List</p>

                    <div className="mt-6 bg-white rounded-lg shadow-sm">
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-[#2C2F33] text-white">
                                        <th className="px-4 py-3 text-left rounded-tl-lg  ">Title</th>
                                        <th className="px-4 py-3 text-left">Author</th>
                                        <th className="px-4 py-3 text-left">ISBN</th>
                                        <th className="px-4 py-3 text-left">Genre</th>
                                        <th className="px-4 py-3 text-left">Publication Date</th>
                                        <th className="px-4 py-3 text-left">No. of Copy</th>
                                        <th className="px-4 py-3 text-center rounded-tr-lg">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Sample row - you'll map through your data here */}
                                    <tr className="border-b border-gray-100 text-gray-700">
                                        <td className="px-4 py-3">Don Quixote</td>
                                        <td className="px-4 py-3">Miguel de Cervantes</td>
                                        <td className="px-4 py-3">0070932</td>
                                        <td className="px-4 py-3">Modern Novel</td>
                                        <td className="px-4 py-3">2024-02-20</td>
                                        <td className="px-4 py-3">100</td>
                                        <td className="px-4 py-3">
                                            <div className="flex justify-center gap-2">
                                                <button 
                                                    className="p-1 rounded-lg hover:bg-blue-50"
                                                    onClick={() => setIsEditModalOpen(true)}
                                                >
                                                    <Pencil className="w-5 h-5 text-blue-500" />
                                                </button>
                                                <button 
                                                    className="p-1 rounded-lg hover:bg-red-50"
                                                    onClick={() => setIsConfirmationModalOpen(true)}
                                                >
                                                    <Trash2 className="w-5 h-5 text-red-500" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <EditModal 
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={(data) => {
                    console.log(data);
                    setIsEditModalOpen(false);
                    setIsUpdateSuccessOpen(true);
                }}
            />
            <ConfirmationModal
                isOpen={isConfirmationModalOpen}
                onClose={() => setIsConfirmationModalOpen(false)}
                onConfirm={handleDelete}
            />
            <DeleteModal
                isOpen={isDeleteSuccessOpen}
                onClose={() => setIsDeleteSuccessOpen(false)}
            />

            <UpdateModal
                isOpen={isUpdateSuccessOpen}
                onClose={() => setIsUpdateSuccessOpen(false)}
            />
        </div>
    );
}