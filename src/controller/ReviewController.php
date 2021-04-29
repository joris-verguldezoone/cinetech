<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

namespace App\controller;


class ReviewController extends Controller{

    public function get($request, $response, $args)
    {
        $ReviewModel = new \App\Model\ReviewModel();
        $result = $ReviewModel->fetchReview_id_type($args['id'], $args['type']);
        
        
        $result = json_encode($result);

        $response->getBody()->write($result); // write json encodé

        return $response->withHeader('Content-Type', 'application/json');
    }
    

    public function add($request, $response, $args){

        $modelReview = new \Models\Admin(); // on pourrait appeler n'importe laquelle
        $id_user = $modelReview->secure($id_user);
        $commentary = $modelReview->secure($commentary);
        $id_comment = $modelReview->secure($id_comment);
        $id_program = $modelReview->secure($id_article);        
        $type_program = $modelReview->secure($type_program);

        $errorLog = "";

        if(!empty($id_utilisateur) && !empty($commentaire) && !empty($id_program) && !empty($type_program)){
            $commentary_len = strlen($commentary);
            if($commentary_len <1000){
                if($id_comment !== NULL){
                    $modelCommentaire = new \Models\Commentaire();
                    $modelCommentaire->insertReply($id_user, $commentary, $id_program, $type_program, $id_comment);
                }
                else{
                    $modelCommentaire = new \Models\Commentaire();
                    $modelCommentaire->insertComment($id_user, $commentary, $id_program, $type_program);

                }

            }else $errorLog = "La limite de caractere est fixée a 1000";

        }else $errorLog = "Veuillez entrer des caracteres dans les champs";
        
        echo $errorLog;
    }
}