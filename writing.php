<?php

$fileState = file_get_contents('filmHorreur.json');

$fileState = json_encode($fileState);


if(isset($_POST['dataTransmitted'])){

    $writing = $_POST['dataTransmitted'];

    $fileState += $writing;
    file_put_contents('filmHorreur.json', $fileState);
}

// $fileState = json_encode($fileState);





?>