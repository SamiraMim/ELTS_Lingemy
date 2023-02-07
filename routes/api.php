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
Route::get('/questions/{id}', [QuizController::class, 'getQuestion']);
Route::post('/questions', [QuizController::class, 'store']);
