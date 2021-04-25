<?php

use App\controller\HomeController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use App\controller\InscriptionController;
require __DIR__ . '/vendor/autoload.php';

spl_autoload_register(function ($className) {
    $className = str_replace('App', 'src', $className);
    $filePath =  str_replace('\\', '/', $className) . '.php';
    if (file_exists($filePath)) {
        require($filePath);
    }
});

$app = AppFactory::create();
?>


<?php




if(isset($_POST['submitInscription'])){

    $inscriptionController = new InscriptionController();
    $inscriptionController->inscription($_POST['createLogin'],$_POST['createEmail'], $_POST['createPassword'], $_POST['confirmCreatePassword']);
}



// Adapt rooter to sub directory
define('BASE_PATH', rtrim(dirname($_SERVER["SCRIPT_NAME"]), '/'));
$app->setBasePath(BASE_PATH);

// Add Routing Middleware
$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

$app->get('/', HomeController::class . ':main');

$app->get('/movie/{id}', function (Request $request, Response $response, $args) {
    $response->getBody()->write("want to see movie {$args['id']}");
    return $response;
});

$app->get('/inscription', HomeController::class . ':inscription')->setName('inscription');

$app->run();
