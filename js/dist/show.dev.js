"use strict";

var api = {
  base: 'https://api.themoviedb.org/3',
  picLowQual: 'https://image.tmdb.org/t/p/w500//',
  picHighQual: 'https://image.tmdb.org/t/p/original/',
  key: '?api_key=8f560fa0d81bece7dce9718dd0d51a08'
};
var appPrg = Vue.createApp({
  data: function data() {
    return {
      type: '',
      id: 0,
      credits: {},
      similar: {},
      reviews: {},
      info: {}
    };
  },
  watch: {
    id: function id() {
      this.get('credits');
      this.get('similar');
      this.get('reviews');
      this.get('info');
    }
  },
  methods: {
    getPrgInfo: function getPrgInfo() {
      this.type = document.querySelector('#prg-info > input[name=type]').getAttribute('value');
      this.id = document.querySelector('#prg-info > input[name=id]').getAttribute('value');
    },
    get: function get(info) {
      var urlRequest = api.base + '/' + this.type + '/' + this.id + '/' + info + api.key;
      urlRequest = info == 'info' ? api.base + '/' + this.type + '/' + this.id + api.key : urlRequest;
      this.getRequestApi(urlRequest, info);
    },
    getRequestApi: function getRequestApi(urlRequest, store) {
      var _this = this;

      fetch(urlRequest).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this[store] = json;
      });
    }
  },
  mounted: function mounted() {
    this.getPrgInfo();
  }
});
var vmPrg = appPrg.mount('#app-show');