<?php

namespace App\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class MovieController extends Controller
{
    public function show(Request $request, Response $response, $args)
    {
        $this->preloadTwig();
        $response->getBody()->write($this->twig->render('show.twig.php', ["BASE_PATH" => BASE_PATH, "id" => $args["id"], "type" => 'movie']));
        return $response;
    }
}