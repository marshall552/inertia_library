import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import DataTable from '@/components/lib-ui/data-table';
import { RotateCw } from 'lucide-react';

export default function ViewIssueReturn() {
    const columns = [
        { key: 'bookTitle', header: 'Book Title' },
        { key: 'memberName', header: 'Member Name' },
        { key: 'issueDate', header: 'Issue Date' },
        { key: 'dueDate', header: 'Due Date' },
        { key: 'status', header: 'Status', 
          render: (status: 'Returned' | 'Borrowed' | 'Overdue') => {
            const statusStyles = {
                'Returned': 'bg-green-100 text-green-700',
                'Borrowed': 'bg-blue-100 text-blue-700',
                'Overdue': 'bg-red-100 text-red-700'
            } as const;

            return (
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
                    {status}
                </span>
            );
          }
        }
    ];

    const sampleData = [
        {
            bookTitle: 'Don Quixote',
            memberName: 'John Doe',
            issueDate: '2024-02-20',
            dueDate: '2024-03-20',
            status: 'Returned'
        },
        {
            bookTitle: 'The Great Gatsby',
            memberName: 'Jane Smith',
            issueDate: '2024-02-25',
            dueDate: '2024-03-25',
            status: 'Borrowed'
        },
        {
            bookTitle: '1984',
            memberName: 'Bob Wilson',
            issueDate: '2024-01-15',
            dueDate: '2024-02-15',
            status: 'Overdue'
        }
    ];

    const handleReturn = (item: any) => {
        console.log('Returning book:', item);
        // Handle return logic
    };

    return (
        <div className="min-h-screen flex bg-[#F5F5F5]">
            <Head title="View Issue/Return">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            
            <div className="fixed left-0 top-0">
                <Sidebar />
            </div>
            
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <h1 className="text-2xl font-semibold text-gray-700">ISSUE/RETURN MANAGEMENT</h1>
                    <p className="text-sm text-gray-500 mb-6">Issue/Return List</p>

                    <DataTable 
                        columns={columns}
                        data={sampleData}
                        actions={[
                            {
                                icon: RotateCw,
                                label: 'Return Book',
                                onClick: handleReturn,
                                color: '',
                                hoverColor: '',
                                render: (item: any) => (
                                    item.status !== 'Returned' && (
                                        <button
                                            onClick={() => handleReturn(item)}
                                            className="text-green-500 hover:text-green-600 font-medium"
                                        >
                                            Return Book
                                        </button>
                                    )
                                )
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
