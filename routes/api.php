<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExamController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Admin\MentorController;
use App\Http\Controllers\Admin\QuestionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/request', [HomeController::class, 'validateRequest']);

Route::get('/exam/{token}', [ExamController::class, 'index']);
Route::post('/exam', [ExamController::class, 'startExam']);

Route::post('/current-question', [ExamController::class, 'getCurrentQuestion']);
Route::post('/general-question', [ExamController::class, 'generalQuestionHandler']);
Route::post('/english-level', [ExamController::class, 'levelHandler']);

Route::post('/current-english-question', [ExamController::class, 'getCurrentEngQuestion']);
Route::post('/english-question', [ExamController::class, 'englishQuestionHandler']);

// Admin Routes
Route::apiResource('/admin/english-question', QuestionController::class);
Route::apiResource('/admin/client-user', MentorController::class);


