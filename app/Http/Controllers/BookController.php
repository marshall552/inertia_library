<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        return Inertia::render('books');
    }

    public function viewBooks()
    {
        $books = Book::all();
        
        return Inertia::render('view-books', [
            'books' => $books->map(function ($book) {
                return [
                    'id' => $book->id,
                    'title' => $book->title,
                    'author' => $book->author,
                    'isbn' => $book->isbn,
                    'genre' => $book->genre,
                    'publication_date' => $book->publication_date,
                    'no_of_copies' => $book->no_of_copies,
                ];
            })
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'publication_date' => 'required|date',
            'isbn' => 'required|string|unique:books,isbn',
            'genre' => 'required|string|max:255',
            'no_of_copies' => 'required|integer|min:0',
        ]);

        try {
            Book::create($validated);
            return redirect()->route('books')->with('success', 'Book added successfully');
        } catch (\Exception $e) {
            \Log::error('Error creating book: ' . $e->getMessage());
            return redirect()->back()->withErrors(['error' => 'Failed to add book']);
        }
    }

    public function edit(Book $book)
    {
        return Inertia::render('edit-book', [
            'book' => $book
        ]);
    }

    public function update(Request $request, Book $book)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'author' => 'required|string|max:255',
            'publication_date' => 'required|date',
            'isbn' => 'required|string|unique:books,isbn',
            'genre' => 'required|string|max:255',
            'no_of_copies' => 'required|integer|min:0',
        ]);

        $book->update($validated);

        return redirect()->back()->with('success', 'Book updated successfully');
    }

    public function destroy(Book $book)
    {
        $book->delete();
        
        return redirect()->back()->with('success', 'Book deleted successfully');
    }
}
