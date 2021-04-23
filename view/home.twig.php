{% extends "template.twig.php" %}

{% block style %}
{{ parent() }}
<link rel="stylesheet" href="style/home.css">
{% endblock %}

{% block content %}
<h1>Hello {{ name }} ! </h1>
<div id="app">
    <carrousel-custom @change-page="changePage($event)" size="small" request="/discover/movie" filter="&sort_by=popularity.desc"></carrousel-custom>
    <carrousel-custom @change-page="changePage($event)" size="medium" request="/discover/movie" filter="&sort_by=release_date.asc"></carrousel-custom>
    <carrousel-custom @change-page="changePage($event)" size="big" request="/discover/tv" filter="&sort_by=popularity.desc"></carrousel-custom>
</div>
{% endblock %}

{% block script %}
<script src="js/home.js" type="text/javascript" async></script>
{% endblock %}