<?php

namespace App\Model;

class ReviewModel extends Model
{
    public function fetchReview_id_type($id, $type)
    {

        $sql = "SELECT * FROM movie_commentary WHERE id_program = :id AND type_program = :type";
        $result = $this->pdo->prepare($sql);
        $result->bindValue(':id', $id, \PDO::PARAM_INT);
        $result->bindValue(':type', $type, \PDO::PARAM_STR);

        $result->execute();

        $fetch = $result->fetchAll();

        return $fetch;
    }
}
