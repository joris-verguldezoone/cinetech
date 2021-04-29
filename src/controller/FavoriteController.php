<?php

namespace App\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class FavoriteController extends Controller
{
    public function main(Request $request, Response $response, $args)
    {
        $this->preloadTwig();
        $response->getBody()->write($this->twig->render('favorite.twig.php', ["BASE_PATH" => BASE_PATH, "HTTP_HOST" => HTTP_HOST]));
        return $response;
    }
}
