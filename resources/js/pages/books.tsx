// import React from 'react';
// import { Head } from '@inertiajs/react';
// import Sidebar from '@/components/lib-ui/sidebar';
// import FormTable from '@/components/lib-ui/form-table';

// export default function Books() {
//     return (
//         <div className="min-h-screen flex bg-[#F5F5F5]">
//             <Head title="Books">
//                 <link rel="preconnect" href="https://fonts.bunny.net" />
//                 <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
//                 <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
//             </Head>
            
//             <div className="fixed left-0 top-0">
//                 <Sidebar />
//             </div>
            
//             <div className="flex-1 ml-64">
//                 <div className="p-8">
//                     <h1 className="text-2xl font-semibold text-gray-700">Book Management</h1>
//                     <p className="text-sm text-gray-500">Book Form</p>

//                     <div className="mt-6">
//                         <FormTable onSubmit={(e) => {
//                             e.preventDefault();
//                             // Handle form submission
//                         }} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import FormTable, { FormField } from '@/components/lib-ui/form-table';

export default function Books() {
    const bookFields: {
        leftColumn: FormField[];
        rightColumn: FormField[];
        fullWidth: FormField[];
    } = {
        leftColumn: [
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
            }
        ],
        rightColumn: [
            {
                name: 'isbn',
                label: 'ISBN',
                type: 'text',
                placeholder: 'e.g. 0070932'
            },
            {
                name: 'genre',
                label: 'Genre',
                type: 'text',
                placeholder: 'e.g. Modern Novel'
            }
        ],
        fullWidth: [
            {
                name: 'publicationDate',
                label: 'Publication Date',
                type: 'date'
            },
            {
                name: 'numberOfCopies',
                label: 'Number of Copy',
                type: 'number',
                placeholder: 'e.g. 100'
            }
        ]
    };

    return (
        <div className="min-h-screen flex bg-[#F5F5F5]">
            <Head title="Books">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            
            <div className="fixed left-0 top-0">
                <Sidebar />
            </div>
            
            <div className="flex-1 ml-64">
                <div className="p-8">
                    <h1 className="text-2xl font-semibold text-gray-700">Book Management</h1>
                    <p className="text-sm text-gray-500 mb-9">Book Form</p>

                    <FormTable 
                        fields={bookFields}
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