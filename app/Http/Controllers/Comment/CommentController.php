<?php

namespace App\Http\Controllers\Comment;

use App\Http\Controllers\Controller;
use App\Services\CommentService;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public $comment_service;

    /**
     * CommentController constructor.
     * @param $comment_service
     */
    public function __construct()
    {
        $this->comment_service = new CommentService();
    }

    public function index(Request $request)
    {
        return $this->comment_service->getComments($request);
    }

    public function store(Request $request)
    {
        return $this->comment_service->createComment($request);
    }
}
