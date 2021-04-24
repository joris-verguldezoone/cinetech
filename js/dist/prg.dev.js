"use strict";

var appPrg = Vue.createApp({
  data: function data() {
    return {
      type: '',
      id: 0,
      credits: {},
      reviews: {},
      info: {}
    };
  },
  watch: {
    id: function id() {
      this.get('credits');
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
}); //const vmPrg = appPrg.mount('#app-show')