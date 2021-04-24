{% extends "template.twig.php" %}

{% block style %}
{{ parent() }}
{% endblock %}

{% block content %}

<form id="prg-info">
    <input type="hidden" name="type" value={{type}}>
    <input type="hidden" name="id" value={{id}}>
</form>
<div id="app">
    <h1>Hello {{ name }} ! </h1>
    <h2>Type : {{type}} | id: {{id}}</h2>
    <prg-info :info="info"></prg-info>
    <h2>You're gonna love that</h2>
    <carrousel-custom @change-page="changePage($event)" size="small" request="/{{type}}/{{id}}/similar" filter="&sort_by=popularity.desc"></carrousel-custom>
</div>
{% endblock %}

{% block script %}
{{ parent() }}
{% endblock %}