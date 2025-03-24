<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\BookController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::controller(BookController::class)->group(function () {
    Route::get('books', 'index')->name('books');
    Route::get('view-books', 'viewBooks')->name('view-books');
    Route::post('books', 'store')->name('books.store');
    Route::get('books/{book}/edit', 'edit')->name('books.edit');
    Route::put('books/{book}', 'update')->name('books.update');
    Route::delete('books/{book}', 'destroy')->name('books.destroy');
});

Route::get('members', function () {
    return Inertia::render('members');
})->name('members');

Route::get('view-members', function () {
    return Inertia::render('view-members');
})->name('view-members');

Route::get('issue-return', function () {
    return Inertia::render('issue-return');
})->name('issue-return');

Route::get('view-issue-return', function () {
    return Inertia::render('view-issue-return');
})->name('view-issue-return');




require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
