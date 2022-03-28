<?php

namespace App\Traits;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

trait ServiceTrait
{
    public $baseUrl;

    public function performRequest($method, $url, $formParams = [], $headers = [])
    {
        try {
            $client = new Client([
                'base_uri' => $this->baseUrl,
            ]);
            $response = $client->{strtolower($method)}($url, [
                'query' => $formParams,
                'headers' => $headers,
            ]);
            $response = json_decode($response->getBody()->getContents());
            return response()->json($response);
        } catch (GuzzleException $e) {
            return response()->json([
                'message' => 'error fetching records',
                'error' => $e->getMessage(),
                'status' => $e->getCode()
            ], $e->getCode());
        }
    }
}
