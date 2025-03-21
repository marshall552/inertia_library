<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('books', function () {
    return Inertia::render('books');
})->name('books');

Route::get('view-books', function () {
    return Inertia::render('view-books');
})->name('view-books');

Route::get('members', function () {
    return Inertia::render('members');
})->name('members');

Route::get('view-members', function () {
    return Inertia::render('view-members');
})->name('view-members');

Route::get('issue-return', function () {
    return Inertia::render('issue-return');
})->name('issue-return');










require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
