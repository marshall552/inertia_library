import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import FormTable, { FormField } from '@/components/lib-ui/form-table';

export default function IssueReturn() {
    const issueReturnFields: {
        leftColumn: FormField[];
        rightColumn: FormField[];
    } = {
        leftColumn: [
            {
                label: 'Select User',
                name: 'member_id',
                type: 'select',
                placeholder: '-- select a user',
                options: ['User 1', 'User 2', 'User 3'] // Replace with actual user data
            },
            {
                label: 'Select Book',
                name: 'book_id',
                type: 'select',
                placeholder: '-- select a book',
                options: ['Book 1', 'Book 2', 'Book 3'] // Replace with actual book data
            }
        ],
        rightColumn: [
            {
                label: 'Issue Date',
                name: 'issue_date',
                type: 'date',
                placeholder: 'dd/mm/yyyy'
            },
            {
                label: 'Return Date',
                name: 'return_date',
                type: 'date',
                placeholder: 'dd/mm/yyyy'
            }
        ]
    };

    return (
        <div className="min-h-screen flex bg-[#F5F5F5]">
            <Head title="Issue/Return">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            
            <div className="fixed left-0 top-0">
                <Sidebar />
            </div>
            
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <h1 className="text-2xl font-semibold font-lato text-gray-700">Issue/Return Management</h1>
                    <p className="text-sm text-gray-500 mb-9">Issue Book Form</p>

                    <FormTable 
                        fields={issueReturnFields}
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
