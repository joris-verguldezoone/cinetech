{% extends "template.twig.php" %}
{% block content %}
<h1>Hello {{ name }} ! </h1>




<form method='POST'>

<label for='login'>Login</label>
<input type='text' name='createLogin' id='createLogin'> 

<label for='email'>Email</label>
<input type='email' name='createEmail' id='createEmail'> 

<label for='password'>Mot de passe</label>
<input type='password' name='createPassword' id='createPassword'> 

<label for='password'>Confirmer le mot de passe</label>
<input type='password' name='confirmCreatePassword' id='confirmCreatePassword'> 

<input type='button' name='submitInscription' id='submitInscription' value="S'inscrire"> 

</form>

<script src='inscription.js' type='text/javascript'></script>

{% endblock %}