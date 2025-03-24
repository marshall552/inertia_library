<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'author',
        'publication_date',
        'isbn',
        'genre',
        'no_of_copies'
    ];

    protected $casts = [
        'publication_date' => 'date',
        'no_of_copies' => 'integer'
    ];
}
