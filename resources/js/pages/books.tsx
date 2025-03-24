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
import { Head, useForm } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';
import FormTable from '@/components/lib-ui/form-table';

export default function Books() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        author: '',
        publication_date: '',
        isbn: '',
        genre: '',
        no_of_copies: ''
    });

    const bookFields = {
        leftColumn: [
            {
                name: 'title',
                label: 'Title',
                type: 'text',
                placeholder: 'e.g. Don Quixote',
                value: data.title,
                onChange: (e) => setData('title', e.target.value),
                error: errors.title
            },
            {
                name: 'author',
                label: 'Author',
                type: 'text',
                placeholder: 'e.g. Miguel de Cervantes',
                value: data.author,
                onChange: (e) => setData('author', e.target.value),
                error: errors.author
            }
        ],
        rightColumn: [
            {
                name: 'isbn',
                label: 'ISBN',
                type: 'text',
                placeholder: 'e.g. 0070932',
                value: data.isbn,
                onChange: (e) => setData('isbn', e.target.value),
                error: errors.isbn
            },
            {
                name: 'genre',
                label: 'Genre',
                type: 'text',
                placeholder: 'e.g. Modern Novel',
                value: data.genre,
                onChange: (e) => setData('genre', e.target.value),
                error: errors.genre
            }
        ],
        fullWidth: [
            {
                name: 'publication_date',
                label: 'Publication Date',
                type: 'date',
                value: data.publication_date,
                onChange: (e) => setData('publication_date', e.target.value),
                error: errors.publication_date
            },
            {
                name: 'no_of_copies',
                label: 'Number of Copy',
                type: 'number',
                placeholder: 'e.g. 100',
                value: data.no_of_copies,
                onChange: (e) => setData('no_of_copies', e.target.value),
                error: errors.no_of_copies
            }
        ]
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('books.store'), {
            onSuccess: () => {
                reset();
            },
        });
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
                    <p className="text-sm text-gray-500">Book Form</p>

                    <div className="mt-6">
                        <FormTable 
                            fields={bookFields}
                            onSubmit={handleSubmit}
                        />
                        {/* Display success message */}
                        {flash.success && (
                            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                                {flash.success}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}