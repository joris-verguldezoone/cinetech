<?php

namespace App\controller;

use App\Model\ApiModel;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class TdmapiController extends Controller
{
    protected $model;

    public function __construct()
    {
        $this->model = new ApiModel;
    }

    public function getToken(Request $request, Response $response, $args)
    {
        if ($_SESSION['connected']) {
            if ($token = $this->model->getToken($_SESSION['user']['id'])) {
                $json = ["success" => true, "message" => "Token successfully get.", "token" => $token];
            } else {
                $json = ["success" => false, "message" => "Token were not get. Issue when query db"];
            }
        } else {
            $json = ["success" => false, "message" => "User is not connected"];
        }
        $this->returnJson($response, $json);
    }

    public function setToken(Request $request, Response $response, $args)
    {
        if ($_SESSION['connected']) {
            if ($this->model->setToken($_SESSION['user']['id'], $args['token'])) {
                $json = ["success" => true, "message" => "Token successfully set."];
            } else {
                $json = ["success" => false, "message" => "Token were not set. Issue when updated in db"];
            }
        } else {
            $json = ["success" => false, "message" => "User is not connected"];
        }
        $this->returnJson($response, $json);
    }

    public function getSession(Request $request, Response $response, $args)
    {
        if ($_SESSION['connected']) {
            if ($session = $this->model->getSession($_SESSION['user']['id'])) {
                $json = ["success" => true, "message" => "Session successfully get.", "session" => $session];
            } else {
                $json = ["success" => false, "message" => "Session were not get. Issue when query db"];
            }
        } else {
            $json = ["success" => false, "message" => "User is not connected"];
        }
        $this->returnJson($response, $json);
    }

    public function setSession(Request $request, Response $response, $args)
    {
        if ($_SESSION['connected']) {
            if ($this->model->setSession($_SESSION['user']['id'], $args['session'])) {
                $json = ["success" => true, "message" => "Session successfully set."];
            } else {
                $json = ["success" => false, "message" => "Session were not set. Issue when updated in db"];
            }
        } else {
            $json = ["success" => false, "message" => "User is not connected"];
        }
        $this->returnJson($response, $json);
    }

    public function returnJson(Response $response, array $data)
    {
        $payload = json_encode($data);
        $response->getBody()->write($payload);
        return $response->withHeader('ContentType', 'application/json');
    }
}
