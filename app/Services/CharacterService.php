<?php

namespace App\Services;

use App\Traits\ServiceTrait;
use Illuminate\Http\Request;

class CharacterService
{
    use ServiceTrait;

    public $baseUrl;

    public function __construct()
    {
        $this->baseUrl = env('CHARACTER_SERVICE_URL');
    }

    public function getCharacters(Request $request, $headers = [])
    {
        return $this->performRequest("GET", "api/characters", $request->all(), $headers);
    }
}
