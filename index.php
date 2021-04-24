<?php

use App\controller\HomeController;
use App\controller\TvController;
use App\controller\MovieController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';

spl_autoload_register(function ($className) {
    $className = str_replace('App', 'src', $className);
    $filePath =  str_replace('\\', '/', $className) . '.php';
    if (file_exists($filePath)) {
        require($filePath);
    }
});

$app = AppFactory::create();

// Adapt rooter to sub directory
define('BASE_PATH', rtrim(dirname($_SERVER["SCRIPT_NAME"]), '/'));
$app->setBasePath(BASE_PATH);

// Add Routing Middleware
$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$app->get('/', HomeController::class . ':main');

$app->get('/movie/{id}', MovieController::class . ':show');

$app->get('/tv/{id}', TvController::class . ':show');

$app->run();
