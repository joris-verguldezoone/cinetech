{% extends "template.twig.php" %}

{% block content %}
<form method='POST' action="{{ path_for('inscription') }}">

<label for='login'>Login</label>
<input type='text' name='createLogin' id='createLogin'> 

<label for='email'>Email</label>
<input type='email' name='createEmail' id='createEmail'> 

<label for='password'>Mot de passe</label>
<input type='password' name='createPassword' id='createPassword'> 

<label for='password'>Confirmer le mot de passe</label>
<input type='password' name='confirmCreatePassword' id='confirmCreatePassword'> 

<input type='submit' name='submitInscription' id='submitInscription' value="S'inscrire"> 

</form>
<?php

if(isset($_POST['submitInscription'])){

    $inscriptionController = new App\controller\InscriptionController();
    $inscriptionController->inscription($_POST['createLogin'],$_POST['createEmail'], $_POST['createPassword'], $_POST['confirmCreatePassword']);
    var_dump($_POST);
}

?>
{% endblock %}
