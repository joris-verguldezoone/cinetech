<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

namespace App\controller;


class ReviewController extends Controller{

    public function get($request, $response, $args)
    {
        $ReviewModel = new \App\Model\ReviewModel();
        $result = $ReviewModel->fetchReview_id_type($args['id'], $args['type']);
        
        foreach($result['id_commentary'] as $value){
            fetchReview_id_review_reply($args['id'], $args['type'], $result['id_commentary']);
            $result = json_encode($result);

            $response->withHeader('Content-Type', 'application/json');

            $response->getBody()->write($result); // write json encodé
        }

        $result = json_encode($result);

        $response->getBody()->write($result); // write json encodé

        return $response->withHeader('Content-Type', 'application/json');
    }


    public function writeCommentary($id_utilisateur, $commentaire, $id_article){

        $modelTools = new \Models\Admin(); // on pourrait appeler n'importe laquelle
        $id_utilisateur = $modelTools->secure($id_utilisateur);
        $commentaire = $modelTools->secure($commentaire);
        $id_article = $modelTools->secure($id_article);
        
        $errorLog = "";

        if(!empty($id_utilisateur) && !empty($commentaire) && !empty($id_article)){
            $commentaire_len = strlen($commentaire);
            if($commentaire_len <500){

                $modelCommentaire = new \Models\Commentaire();
                $modelCommentaire->insertComment($id_utilisateur, $commentaire, $id_article);
            }else $errorLog = "La limite de caractere est fixée a 500";

        }else $errorLog = "Veuillez entrer des caracteres dans les champs";
        
        echo $errorLog;
    }
    
    public function commentDisplay($id_article){

        $commentModel = new \Models\Commentaire();
        $tab = $commentModel->commentDisplay($id_article);
        $i = 0;
        foreach($tab as $value)
        {
            echo "<hr id='trait_commentaire'>";
            echo "<div id='bloc_commentaire'><div id='pseudo'><u>".$tab[$i][0]."</u></div><br/>"
                    .$tab[$i][1]."<br/>"
                    . "<div id='margin_date'>" .$tab[$i][3]."</div>"
                    . "<div id='font_date'>" .$tab[$i][2]."<br/></div></div>";
                    $i++;
                    echo "</br>";
        } //login commentaire droit date
    }
}