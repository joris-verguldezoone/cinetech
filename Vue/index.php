<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

</head>

<body>
    <div id="app">
        <p>Indique un id pour avoir des détails sur un film:</p>
        <input v-model="movieId">
        <movie-item v-for="movie in results" v-bind:data="movie"></movie-item>
    </div>
    <script src="index.js" type="text/javascript"></script>
</body>

</html>