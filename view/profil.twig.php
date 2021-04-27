
{% extends "template.twig.php" %}

{% block content %}
<form method='POST' action="{{ BASE_PATH }}/profil">

    <img src="{{ session.user.image }}" class="" alt="photo de profil utilisateur">
    <input type='text' name='profilImage' id='profilImage' value='{{ session.user.image }}'> 

    <label for='profilLogin'>Login</label>
    <input type='text' name='profilLogin' id='profilLogin' value='{{ session.user.login }}'> 

    <label for='profilEmail'>Email</label>
    <input type='text' name='profilEmail' id='profilEmail' value='{{ session.user.email }}'> 

    <label for='profilPassword'>Mot de passe</label>
    <input type='password' name='profilPassword' id='profilPassword'> 

    <label for='confirmProfilPassword'>Confirmer le mot de passe</label>
    <input type='password' name='confirmProfilPassword' id='profilPassword'> 

    <input type='submit' name='submitProfil' id='submitProfil' value="Modifier"> 

</form>
{% endblock %}
