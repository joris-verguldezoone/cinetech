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

    public function inscription($login,$email,$password,$confirm_password){

        $modelInscription = new \App\model\InscriptionModel();
        $modelInscription->createAccount($login,$email,$password,$confirm_password);
    }


}
