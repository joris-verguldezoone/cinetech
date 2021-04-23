<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>actorMovie</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

</head>
<body>
<div id="actorResume"> 
        <!-- <h1> {{ content.title }} </h1>
        <p>Indique un id pour avoir des détails sur un film:</p> -->
        <input v-model="movieId">

        <movie-actor v-for="(result, index) in content" v-bind:result="result" :key="index"></movie-actor> 
        <!-- v-bind acces template -->

<!--  : = v bind -->
    </div>
</body>
<script src="actorMovie.js" type="text/javascript"></script>

</html>