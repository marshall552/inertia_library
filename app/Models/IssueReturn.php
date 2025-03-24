<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IssueReturn extends Model
{
    protected $fillable = [
        'book_id',
        'member_id',
        'issue_date',
        'return_date',
        'status',
    ];
}
