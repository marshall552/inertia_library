import React, { useState } from 'react';
import { Head, usePage, PageProps } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import { Pencil, Trash2 } from 'lucide-react';
import EditModal from '@/components/lib-ui/edit-modal';
import ConfirmationModal from '@/components/lib-ui/confirmation-modal';
import DeleteModal from '@/components/lib-ui/delete-modal';
import UpdateModal from '@/components/lib-ui/update-modal';
import DataTable from '@/components/lib-ui/data-table';
import { FormField } from '@/components/lib-ui/edit-modal';

interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    genre: string;
    publication_date: string;
    no_of_copies: number;
}

type Props = {
    books: Book[];
};

export default function ViewBooks() {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] = useState(false);
    const [isUpdateSuccessOpen, setIsUpdateSuccessOpen] = useState(false);
    
    const props = usePage<PageProps<Props>>().props;
    const books = props.books || [];

    const columns = [
        { key: 'title', header: 'Title' },
        { key: 'author', header: 'Author' },
        { key: 'isbn', header: 'ISBN' },
        { key: 'genre', header: 'Genre' },
        { key: 'publication_date', header: 'Publication Date' },
        { key: 'no_of_copies', header: 'No. of Copy' },
    ];

    const actions = [
        {
            icon: Pencil,
            label: 'Edit',
            color: 'text-blue-500',
            hoverColor: 'bg-blue-50',
            onClick: () => setIsEditModalOpen(true),
        },
        {
            icon: Trash2,
            label: 'Delete',
            color: 'text-red-500',
            hoverColor: 'bg-red-50',
            onClick: () => setIsConfirmationModalOpen(true),
        },
    ];

    const bookFields: FormField[] = [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            placeholder: 'e.g. Don Quixote'
        },
        {
            name: 'author',
            label: 'Author',
            type: 'text',
            placeholder: 'e.g. Miguel de Cervantes'
        },
        {
            name: 'isbn',
            label: 'ISBN',
            type: 'text',
            placeholder: 'e.g. 0875328'
        },
        {
            name: 'genre',
            label: 'Genre',
            type: 'text',
            placeholder: 'e.g. Modern Novel'
        },
        {
            name: 'publication_date',
            label: 'Publication Date',
            type: 'date'
        },
        {
            name: 'no_of_copies',
            label: 'No. of Copy',
            type: 'number',
            placeholder: 'e.g. 100',
            min: 0
        }
    ];

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

                    <div className="mt-6">
                        <DataTable
                            columns={columns}
                            data={books}
                            actions={actions}
                        />
                        {books.length === 0 && (
                            <div className="text-center py-4 text-gray-500">
                                No books available
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <EditModal 
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={(data) => {
                    console.log(data);
                    setIsEditModalOpen(false);
                    setIsUpdateSuccessOpen(true);
                }}
                title="Edit Book"
                fields={bookFields}
            />
            <ConfirmationModal
                isOpen={isConfirmationModalOpen}
                onClose={() => setIsConfirmationModalOpen(false)}
                onConfirm={() => {
                    setIsConfirmationModalOpen(false);
                    setIsDeleteSuccessOpen(true);
                }}
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