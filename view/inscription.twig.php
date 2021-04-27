{% extends "template.twig.php" %}

{% block content %}
<form method='POST' action="{{ BASE_PATH }}/inscription">

<label for='createLogin'>Login</label>
<input type='text' name='createLogin' id='createLogin'> 
{{ method }}

<label for='createEmail'>Email</label>
<input type='email' name='createEmail' id='createEmail'> 
{{ password }}

<label for='createPassword'>Mot de passe</label>
<input type='password' name='createPassword' id='createPassword'> 
{{ confirm_password }}

<label for='confirmCreatePassword'>Confirmer le mot de passe</label>
<input type='password' name='confirmCreatePassword' id='confirmCreatePassword'> 

<input type='submit' name='submitInscription' id='submitInscription' value="S'inscrire"> 

</form>
{% endblock %}
