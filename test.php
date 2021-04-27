Rate a movie
Add/remove a movie to your favourites
Add/remove a movie to your watch list


--> Request a token
https://api.themoviedb.org/3/authentication/token/new?api_key=8f560fa0d81bece7dce9718dd0d51a08

result :

success true
expires_at "2021-04-26 13:20:59 UTC"
request_token "c36c67f411e4b4cbf877d5c81c25c5e7ae0e2781"

https://www.themoviedb.org/authenticate/c36c67f411e4b4cbf877d5c81c25c5e7ae0e2781?redirect_to=http://127.0.0.1:8888/Projectpool3/cinetech/
->login or sign up on the api

https://api.themoviedb.org/3/authentication/session/new?api_key=8f560fa0d81bece7dce9718dd0d51a08&request_token=25d3b07dabc486efb3b66142ded89591541153b3

{"success":true,"session_id":"561efdca96727515fe9548ccc542e211693826a4"}

// rate
https://api.themoviedb.org/3/movie/460465/rating?api_key=8f560fa0d81bece7dce9718dd0d51a08&session_id=561efdca96727515fe9548ccc542e211693826a4
{
"value": 8.5
}

//mark as favorite
https://api.themoviedb.org/3/account/561efdca96727515fe9548ccc542e211693826a4/favorite?api_key=8f560fa0d81bece7dce9718dd0d51a08&session_id=561efdca96727515fe9548ccc542e211693826a4
https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=8f560fa0d81bece7dce9718dd0d51a08&session_id=561efdca96727515fe9548ccc542e211693826a4
{
"media_type": "movie",
"media_id": 550,
"favorite": true
}