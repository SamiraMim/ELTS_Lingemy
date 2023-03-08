<?php

namespace App\Http\Controllers\admin;

use App\Models\AccessLink;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;

class ExamCorrectionController extends ApiController
{
   
    public function index()
    {
        $exam_list = AccessLink::paginate(10);
        return $this->successResponse( $exam_list, 201);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
