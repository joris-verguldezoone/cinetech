"use strict";

var urlApiBase = 'https://api.themoviedb.org/3';
var urlMovPop = '/discover/movie';
var apiKey = '?api_key=8f560fa0d81bece7dce9718dd0d51a08';
var filter = '&sort_by=popularity.desc';
var vm = new Vue({
  el: '#app',
  data: {
    results: '',
    movieId: ''
  },
  methods: {
    getMovies: function getMovies() {
      var _this = this;

      fetch(urlApiBase + urlMovPop + apiKey + filter).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this.results = json.results;
      });
    }
  },
  mounted: function mounted() {
    this.getMovies();
  }
});
Vue.component('carrousel', {
  props: ['data']
});
Vue.component('movie-item', {
  props: ['data'],
  template: "\n        <div >\n            <img v-bind:src=\"'https://image.tmdb.org/t/p/w500//'+ data.poster_path\" >\n            <article>\n                <h3>{{data.original_title}}</h3>\n                <p>{{data.overview}}</p>\n            </article>\n        </div>"
});