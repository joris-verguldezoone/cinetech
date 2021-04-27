{% extends "template.twig.php" %}

{% block content %}
<form method='POST' action="{{ BASE_PATH }}/connexion">

<label for='logLogin'>Login</label>
<input type='text' name='logLogin' id='logLogin'> 

<label for='logPassword'>Mot de passe</label>
<input type='password' name='logPassword' id='logPassword'> 

<input type='submit' name='submitConnection' id='submitConnection' value="S'inscrire"> 

</form>
{% endblock %}