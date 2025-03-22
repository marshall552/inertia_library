import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import DataTable from '@/components/lib-ui/data-table';
import { Pencil, Trash2 } from 'lucide-react';
import EditModal from '@/components/lib-ui/edit-modal';
import ConfirmationModal from '@/components/lib-ui/confirmation-modal';
import DeleteModal from '@/components/lib-ui/delete-modal';
import UpdateModal from '@/components/lib-ui/update-modal';
import { FormField } from '@/components/lib-ui/edit-modal';

export default function ViewMembers() {
    // Add state management for modals
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [isDeleteSuccessOpen, setIsDeleteSuccessOpen] = useState(false);
    const [isUpdateSuccessOpen, setIsUpdateSuccessOpen] = useState(false);

    const columns = [
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
        { key: 'contactNumber', header: 'Contact Number' },
        { key: 'role', header: 'Role' },
    ];

    const actions = [
        {
            icon: Pencil,
            label: 'Edit',
            color: 'text-blue-500',
            hoverColor: 'bg-blue-50',
            onClick: () => setIsEditModalOpen(true), // Update to use state
        },
        {
            icon: Trash2,
            label: 'Delete',
            color: 'text-red-500',
            hoverColor: 'bg-red-50',
            onClick: () => setIsConfirmationModalOpen(true), // Update to use state
        },
    ];

    const memberData = [
        {
            name: 'John Doe',
            email: 'john@example.com',
            contactNumber: '123-456-7890',
            role: 'Student',
        },
        // Add more member data as needed
    ];

    const memberFields: FormField[] = [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            placeholder: 'e.g. John Doe'
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'e.g. john@example.com'
        },
        {
            name: 'contactNumber',
            label: 'Contact Number',
            type: 'tel',
            placeholder: 'e.g. 123-456-7890'
        },
        {
            name: 'role',
            label: 'Role',
            type: 'select',
            options: ['Student', 'Teacher', 'Staff']
        }
    ];

    return (
        <div className="min-h-screen flex bg-[#F5F5F5]">    
            <Head title="View Members">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            
            <div className="fixed left-0 top-0">
                <Sidebar />
            </div>
            
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <h1 className="text-2xl font-semibold text-gray-700 font[Lato]">Member Management</h1>
                    <p className="text-sm text-gray-500">Member List</p>

                    <div className="mt-6">
                        <DataTable
                            columns={columns}
                            data={memberData}
                            actions={actions}
                        />
                    </div>
                </div>
            </div>

            {/* Add Modals */}
            <EditModal 
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={(data) => {
                    console.log(data);
                    setIsEditModalOpen(false);
                    setIsUpdateSuccessOpen(true);
                }}
                title="Edit Member"
                fields={memberFields}
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
