{% extends "template.twig.php" %}

{% block content %}
<form method='POST' action="inscription">

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

{% endblock %}