<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="index.js" type="text/javascript" async></script>
</head>

<body>
    <div id="app" class="carrousel">
        <movie-item class="carrousel__item" v-for="movie in results" v-bind:data="movie" :key="movie.id"></movie-item>
    </div>
</body>

</html>