<?php

/** @var Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Laravel\Lumen\Routing\Router;

$router->get('/', function () use ($router) {
    return view('frontend');
});
$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/books', 'Book\BookController@index');
    $router->get('/books/{id}', 'Book\BookController@show');
    $router->get('/comments', 'Comment\CommentController@index');
    $router->post('/comments', 'Comment\CommentController@store');
    $router->get('/characters', 'Character\CharacterController@index');
});
