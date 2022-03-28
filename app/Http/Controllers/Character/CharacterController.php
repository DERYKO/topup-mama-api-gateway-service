<?php

namespace App\Http\Controllers\Character;

use App\Http\Controllers\Controller;
use App\Services\CharacterService;
use Illuminate\Http\Request;

class CharacterController extends Controller
{
    public $character_service;

    /**
     * CharacterController constructor.
     */
    public function __construct()
    {
        $this->character_service = new CharacterService();
    }

    public function index(Request $request)
    {
        return $this->character_service->getCharacters($request);
    }

}
