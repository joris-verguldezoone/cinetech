{% extends "template.twig.php" %}

{% block style %}
{{ parent() }}
{% endblock %}

{% block content %}
{{ parent() }}
<h1>Favorite </h1>
<h2>Your favorite movies:</h2>
<favorite-list @change-page="changePage($event)" :fav-list="favMovies"></favorite-list>
<h2>Your favorite tv show</h2>
<favorite-list @change-page="changePage($event)" :fav-list="favTv"></favorite-list>


{% endblock %}

{% block script %}
{{ parent() }}
{% endblock %}