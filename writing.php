<?php

$fileState = file_get_contents('filmHorreur.json');

// $fileState = json_encode($fileState);


if(isset($_POST['dataTransmitted'])){

    $writing = $_POST['dataTransmitted'];

    echo $fileState;
    var_dump($fileState);    
    
    $fileState = json_encode($fileState);
    echo $fileState;
    var_dump($fileState);
    $fileState += $writing;
    echo $fileState;
    var_dump($fileState);
    // file_put_contents('filmHorreur.json', $fileState);
    // file_put_contents('filmHorreur.json', $writing);
}
$fileState = json_encode($fileState);

var_dump($fileState);
$fileState = $fileState . $fileState;

var_dump($fileState);
// $fileState += $writing;
// file_put_contents('filmHorreur.json', $fileState);
// file_put_contents('filmHorreur.json', $writing);






// $fileState = json_decode($fileState);

var_dump($fileState);

// echo '<br/>';

// echo $writing;

?>