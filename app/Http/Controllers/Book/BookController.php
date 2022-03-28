<?php

namespace App\Http\Controllers\Book;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\BookService;


class BookController extends Controller
{
    public $book_service;

    /**
     * BookController constructor.
     * @param $book_service
     */
    public function __construct()
    {
        $this->book_service = new BookService();
    }

    public function index(Request $request)
    {
        return $this->book_service->getBooks($request);
    }

    public function show(Request $request, $id)
    {
        return $this->book_service->getBook($request,$id);
    }

}
