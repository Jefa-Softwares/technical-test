# Technical test
### Introduction
The scope of the test is to show the details of a movie from an API, modify it and save it. You can use the tools/langages that you want. However, it must be a web application.

### Details
1. Fork from this project and push your commits in your repository. When you are ready, create a pull request from your forked project to this project.
1. Use this API for the test: https://developers.themoviedb.org/3/movies/get-movie-details
2. You can use this API Key: f5b806e9199988b1afdd3e50fa43597d. The endpoint should look like this: https://api.themoviedb.org/3/movie/640?api_key=f5b806e9199988b1afdd3e50fa43597d&language=es-ES
4. You must fetch the details of a movie and show it like so: 
    ![image](https://user-images.githubusercontent.com/26880871/116641627-1bd46100-a93b-11eb-8eb0-897230049299.png)
5. You must also create a form page. This form page will have those fields:
  - Title (must be required)
  - Description (must be required)
  - Cover url (optional)
  - Vote average
6. When you save the form page, it should save the data into a json file with the same object as you used for the API:
```json
{
   "adult":false,
   "backdrop_path":"/rwcEaZghpbt6mV0lRQ9ymz5oM9B.jpg",
   "belongs_to_collection":null,
   "budget":52000000,
   "genres":[
      {
         "id":18,
         "name":"Drama"
      },
      {
         "id":80,
         "name":"Crimen"
      }
   ],
   "homepage":"",
   "id":640,
   "imdb_id":"tt0264464",
   "original_language":"en",
   "original_title":"Catch Me If You Can",
   "overview":"Frank Abagnale Jr. trabajó como médico, abogado y copiloto de una de las grandes líneas aéreas, todo ello antes de cumplir los dieciocho años. También fue un genial falsificador y sus habilidades le otorgaron una plaza en la historia. A la edad de 17 años, Frank Abagnale Jr. se convirtió en el ladrón de bancos de más éxito en la historia de Estados Unidos. El agente del FBI Carl Hanratty dedicó la mayor parte de su tiempo a perseguir a Frank para llevarle ante la justicia, pero Frank siempre estaba un paso por delante, retándole a continuar la caza.",
   "popularity":31.675,
   "poster_path":"/fxX5KGDO4lf2yyBJn2IxBx3F4cO.jpg",
   "production_companies":[
      {
         "id":11084,
         "logo_path":null,
         "name":"Parkes/MacDonald Productions",
         "origin_country":""
      },
      {
         "id":367,
         "logo_path":null,
         "name":"Kemp Company",
         "origin_country":""
      },
      {
         "id":368,
         "logo_path":null,
         "name":"Splendid Pictures",
         "origin_country":""
      }
   ],
   "production_countries":[
      {
         "iso_3166_1":"US",
         "name":"United States of America"
      }
   ],
   "release_date":"2002-12-25",
   "revenue":352114312,
   "runtime":141,
   "spoken_languages":[
      {
         "english_name":"English",
         "iso_639_1":"en",
         "name":"English"
      },
      {
         "english_name":"French",
         "iso_639_1":"fr",
         "name":"Français"
      }
   ],
   "status":"Released",
   "tagline":"La verdadera historia de un auténtico farsante.",
   "title":"Atrápame si puedes",
   "video":false,
   "vote_average":7.9,
   "vote_count":10948
}
```
