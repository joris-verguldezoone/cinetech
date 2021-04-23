<?php

namespace App\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class InscriptionController extends Controller
{
    public $login;
    public $email;
    public $password;
    public $confirm_password;
    public function inscription($login, $email, $password,$confirm_password)
    {
        // public function main(Request $request, Response $response, $args)
        // {
            // $this->preloadTwig();
            // $response->getBody()->write($this->twig->render('home.twig.php', ["name" => "Joris"]));
            // return $response;
               
    }
}

class HomeController extends Controller
{
    
}
