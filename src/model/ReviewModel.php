<?php 

namespace App\Model;

class ReviewModel extends Model {

    public function fetchReview_id_type($id,$type){

        $sql = "SELECT m.id as id_commentaire, u.login as author, m.date as created_at , u.image , m.commentary as content FROM user AS u 
        INNER JOIN movie_commentary AS m ON u.id = m.id_user WHERE m.type_program = :type AND id_program= :id";
        $result = $this->pdo->prepare($sql);
        $result->bindValue(':id',$id,\PDO::PARAM_INT);
        $result->bindValue(':type',$type,\PDO::PARAM_STR);
        $result->execute();

        $fetch = $result->fetchAll();
        

        return $fetch;

    }
    public function fetchReview_id_review_reply($id,$type,$id_commentary){

        $sql = "SELECT u.login as author, m.date as created_at , u.image , m.reply as content FROM user AS u 
        INNER JOIN movie_commentary_reply AS m ON u.id= id_user WHERE m.type_program = :type AND id_program = :id AND id_commentary = :id_commentary ";

        $result = $this->pdo->prepare($sql);
        $result->bindValue(':id',$id,\PDO::PARAM_INT);
        $result->bindValue(':type',$type,\PDO::PARAM_STR);
        $result->bindValue(':id_commentary',$id_commentary,\PDO::PARAM_STR);
        $result->execute();

        $fetch = $result->fetchAll();


        return $fetch;
    }

}