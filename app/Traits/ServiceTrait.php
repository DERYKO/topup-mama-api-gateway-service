<?php

namespace App\Traits;

use GuzzleHttp\Client;

trait ServiceTrait
{
    public $baseUrl;

    public function performRequest($method, $url, $formParams = [], $headers = [])
    {
        $client = new Client([
            'base_uri' => $this->baseUrl,
        ]);
        $response = $client->request($method, $url, [
            'query' => $formParams,
            'headers' => $headers,
        ]);
        return $response->getBody()->getContents();
    }
}
