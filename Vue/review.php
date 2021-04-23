<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>review</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <!-- <script src="https://unpkg.com/vue@next"></script> -->
</head>

<body>
<!-- view app2 
acces global aux valeur du content dans la div
-->
    <div id="app2"> 
        <!-- <h1> {{ content.title }} </h1>
        <p>Indique un id pour avoir des détails sur un film:</p> -->

        <input v-model="movieId">

    <!-- <ul id="array-with-index">
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    </ul> -->
        <!-- <p v-for="(results, index) in content.json.results" :key="results">{{ content.results.author}}</p> -->
        <movie-item v-for="(result, index) in content" v-bind:result="result" :key="index"></movie-item> 
        <!-- v-bind acces template -->

<!--  : = v bind -->
    </div>
</body>

</html>
    <script src="review.js" type="text/javascript"></script>