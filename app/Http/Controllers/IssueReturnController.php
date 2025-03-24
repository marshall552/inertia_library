<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IssueReturnController extends Controller
{
    public function index()
    {
        return Inertia::render('issue-return');
    }

    public function viewIssueReturns()
    {
        $issueReturns = IssueReturn::all();
        return Inertia::render('view-issue-returns', [
            'issueReturns' => $issueReturns
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'book_id' => 'required|exists:books,id',
            'member_id' => 'required|exists:members,id',
            'issue_date' => 'required|date',
            'return_date' => 'required|date',
            'status' => 'required|string|max:255',
        ]);

        IssueReturn::create($validated);

        return redirect()->back()->with('success', 'Issue/Return added successfully');
    }

    public function edit(IssueReturn $issueReturn)
    {
        return Inertia::render('edit-issue-return', [
            'issueReturn' => $issueReturn
        ]);
    }

    public function update(Request $request, IssueReturn $issueReturn)
    {
        $validated = $request->validate([
            'book_id' => 'required|exists:books,id',
            'member_id' => 'required|exists:members,id',
            'issue_date' => 'required|date',
            'return_date' => 'required|date',
            'status' => 'required|string|max:255',
        ]);

        $issueReturn->update($validated);

        return redirect()->back()->with('success', 'Issue/Return updated successfully');
    }

    public function destroy(IssueReturn $issueReturn)
    {
        $issueReturn->delete();
        
        return redirect()->back()->with('success', 'Issue/Return deleted successfully');
    }
    
    
}
