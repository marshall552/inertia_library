import React from 'react';
import { Head } from '@inertiajs/react';
import Sidebar from '@/components/lib-ui/sidebar';

export default function ViewBooks() {
    return (
        <div className="min-h-screen flex bg-[#f5f5f5]">
            <Sidebar />
            <div className="flex-1 p-8">
                <h1 className="text-2xl font-semibold font-lato text-gray-700">BOOK MANAGEMENT</h1>
                <p className="text-sm text-[#8C8F94] mb-9">View Books</p>
            </div>
    );
}
