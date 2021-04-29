<?php

namespace App\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class SearchController extends Controller
{
    public function results(Request $request, Response $response, $args)
    {
        $this->preloadTwig();
        $response->getBody()->write($this->twig->render('search.twig.php', ["BASE_PATH" => BASE_PATH, "HTTP_HOST" => HTTP_HOST, "keywords" => $args["keywords"]]));
        return $response;
    }
}
