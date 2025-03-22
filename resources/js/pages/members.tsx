import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import FormTable, { FormField } from '@/components/lib-ui/form-table';

export default function Members() {
    const memberFields: {
        leftColumn: FormField[];
        rightColumn: FormField[];
        fullWidth?: FormField[];
    } = {
        leftColumn: [
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
                placeholder: 'e.g. john.doe@example.com'
            }
        ], 
        rightColumn: [
            {
                name: 'phone',
                label: 'Phone',
                type: 'tel',
                placeholder: 'e.g. +1234567890'
            },
            {
                name: 'role',
                label: 'Role',
                type: 'select',
                options: ['Teacher', 'Student', 'Staff'],
                placeholder: 'Select role'
            }
        ]
    };

    return (
        <div className="min-h-screen flex bg-[#f5f5f5]">
            <Head title="Members">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="fixed left-0 top-0">
                <Sidebar />
            </div>
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <h1 className="text-2xl font-semibold font-lato text-gray-700">Member Management</h1>
                    <p className="text-sm text-[#8C8F94] mb-9">Member Form</p>
                    <FormTable 
                        fields={memberFields}
                        onSubmit={(e) => {
                            e.preventDefault();
                            // Handle form submission
                        }}
                    />
                </div>
            </div>
        </div>
    );
}


