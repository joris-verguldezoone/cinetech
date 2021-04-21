<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mabite</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

</head>

<body>
<!-- view app2 
acces global aux valeur du content dans la div
-->
    <div id="app2"> 
        <!-- <h1> {{ content.title }} </h1>
        <p>Indique un id pour avoir des détails sur un film:</p> -->

        <input v-model="movieId">
        <p v-for="(results, index) in content.json.results" :key="results">{{ content.results.author}}</p>
        <!-- <movie-item v-for="(results, index) in content.json.results" :key="results">{{ results.author}}</movie-item> -->

    </div>
</body>

</html>
    <script src="script2.js" type="text/javascript"></script>