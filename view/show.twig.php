{% extends "template.twig.php" %}

{% block style %}
{{ parent() }}
{% endblock %}

{% block content %}
{{ parent() }}

<form id="prg-info">
    <input type="hidden" name="type" value={{type}}>
    <input type="hidden" name="id" value={{id}}>
</form>
<prg-overview :info="overview"></prg-overview>
<details>
    <summary>Reviews</summary>
    <div class="prg-reviews">
        <prg-review v-for="(review, index) in reviews.results" :review="review" :key="index"></prg-review>
    </div>
</details>
<details>
    <summary>Casting</summary>
    <div class="prg-casting">
        <prg-casting v-for="(actor, index) in credits.cast" v-bind:actor="actor" :key="index"></prg-casting>
    </div>
</details>

<br />
<h2>You're gonna love that</h2>
<carrousel-custom @change-page="changePage($event)" size="small" request="/{{type}}/{{id}}/similar" filter="&sort_by=popularity.desc"></carrousel-custom>
{% endblock %}

{% block script %}
{{ parent() }}
{% endblock %}