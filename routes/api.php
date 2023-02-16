<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\QuizController;

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

Route::get('/quiz/{token}', [QuizController::class, 'index']);
Route::post('/quiz', [QuizController::class, 'startQuiz']);

Route::post('/current-question', [QuizController::class, 'getCurrentQuestion']);
Route::post('/general-question', [QuizController::class, 'generalQuestionHandler']);
Route::post('/english-level', [QuizController::class, 'levelHandler']);

Route::post('/current-english-question', [QuizController::class, 'getCurrentEngQuestion']);
Route::post('/english-question', [QuizController::class, 'englishQuestionHandler']);

