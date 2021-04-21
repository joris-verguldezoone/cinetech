<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/vue@next"></script>
    <script src="index.js" type="text/javascript" async></script>
</head>

<body>
    <div id="app">
        <carrousel size="small" request="/discover/movie" filter="&sort_by=popularity.desc"></carrousel>
        <carrousel size="medium" request="/discover/movie" filter="&sort_by=release_date.asc"></carrousel>
        <carrousel size="big" request="/discover/tv" filter="&sort_by=popularity.desc"></carrousel>
    </div>
</body>

</html>