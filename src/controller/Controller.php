<?php

namespace App\controller;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Controller
{
    protected $twig;

    public function preloadTwig()
    {
        $loader = new FilesystemLoader('view');
        $this->twig = new Environment($loader);
    }
}
