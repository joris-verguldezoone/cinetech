<?php
namespace App\Model;

abstract class  Model {

    protected $pdo = 'NULL';

    public function connect()
    {
        $pdo = new \PDO('mysql:host=localhost;dbname=cinetech;charset=utf8', 'root', '' );

        $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        $pdo->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_ASSOC);
 
        return $pdo;
    }
}


?>