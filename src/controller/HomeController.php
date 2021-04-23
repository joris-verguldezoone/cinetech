<?php

namespace App\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class HomeController extends Controller
{
    public function main(Request $request, Response $response, $args)
    {
        $this->preloadTwig();
        $results;
        $response->getBody()->write($this->twig->render('home.twig.php', ["name" => "Joris"]));
        return $response;
    }
}
