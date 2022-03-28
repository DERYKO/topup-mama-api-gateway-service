<?php
namespace App\Services;

use App\Traits\ServiceTrait;
use Illuminate\Http\Request;

class CommentService
{
    use ServiceTrait;

    public $baseUrl;

    public function __construct()
    {
        $this->baseUrl = env('COMMENT_SERVICE_URL');
    }

    public function getComments(Request $request, $headers = [])
    {
        return $this->performRequest("GET", "api/comments", $request->all(), $headers);
    }

    public function createComment(Request $request, $headers = [])
    {
        return $this->performRequest("POST", "api/comments", $request->all(), $headers);
    }
}
