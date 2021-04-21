<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" async></script>
    <script src="https://unpkg.com/vue@next"></script>
</head>

<body>
    <div id="app">
        <p v-if="isOdd(counter)">{{counter}}</p>
        <input type="button" v-on:click="toggle()">
    </div>
</body>

</html>