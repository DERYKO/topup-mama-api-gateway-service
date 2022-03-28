<?php

namespace App\Services;

use App\Traits\ServiceTrait;
use Illuminate\Http\Request;

class BookService
{
    use ServiceTrait;

    public $baseUrl;

    public function __construct()
    {
        $this->baseUrl = env('BOOK_SERVICE_URL');
    }

    public function getBooks(Request $request, $headers = [])
    {
        return $this->performRequest("GET", "api/books", $request->all(), $headers);
    }

    public function getBook(Request $request, $id, $headers = [])
    {
        return $this->performRequest("GET", "api/books/$id", $request->all(), $headers);
    }
}
