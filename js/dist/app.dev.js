"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      type: '',
      id: 0,
      credits: {},
      reviews: {},
      info: {}
    };
  },
  computed: {
    basePath: function basePath() {
      return document.querySelector('#conf>input[name=base_path]').getAttribute('value');
    }
  },
  watch: {
    id: function id() {
      this.get('credits');
      this.get('reviews');
      this.get('info');
    }
  },
  methods: {
    changePage: function changePage(obj) {
      var url = this.basePath + '/' + obj.page + '/' + obj.id;
      window.location.assign(url);
    },
    getPrgInfo: function getPrgInfo() {
      if (document.querySelector('#prg-info > input[name=type]') !== null) {
        this.type = document.querySelector('#prg-info > input[name=type]').getAttribute('value');
        this.id = document.querySelector('#prg-info > input[name=id]').getAttribute('value');
      }
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
app.component('prg-info', {
  data: function data() {
    return {
      picHighQual: api.picHighQual
    };
  },
  computed: {
    img_path: function img_path() {
      return this.info.backdrop_path != null ? this.info.backdrop_path : this.info.poster_path;
    }
  },
  props: ["info"],
  template: "<div class=\"prg_info\">\n                <img class=\"prg_info__img\" v-bind:src=\"picHighQual + img_path\" >\n                <h3 class=\"prg_info__title\">{{ info.title }}</h3>\n                <p class=\"prg_info__overview\">Overview : {{ info.overview }}</p>\n                <p class=\"prg_info__note\">Vote : {{ info.vote_average }}</p>\n        </div>"
});
app.component('carrousel-custom', {
  data: function data() {
    return {
      results: {}
    };
  },
  props: ['size', 'request', 'filter'],
  methods: {
    getData: function getData() {
      var _this2 = this;

      var url = api.base + this.request + api.key + this.filter;
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this2.results = json.results;
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  template: "<div class=\"carrousel\" >\n            <carrousel-item @change-page=\"$emit('changePage',$event)\" class=\"carrousel__item\" v-for=\"result in results\" :result=\"result\" :size=\"size\" :key=\"result.id\"></carrousel-item>\n        </div>"
});
app.component('carrousel-item', {
  data: function data() {
    return {
      show: false,
      picLowQual: api.picLowQual
    };
  },
  props: ['result', 'size'],
  computed: {
    classSizeModifObj: function classSizeModifObj() {
      return {
        'car_item__img--big': this.size === 'big' ? true : false,
        'car_item__img--medium': this.size === 'medium' ? true : false,
        'car_item__img--small': this.size === 'small' ? true : false
      };
    }
  },
  methods: {
    toggleVisibility: function toggleVisibility() {
      this.show = this.show === true ? false : true;
    }
  },
  template: "<div >\n            <img @click=\"toggleVisibility\" class=\"car_item__img\" :class=\"classSizeModifObj\" v-bind:src=\"picLowQual + result.poster_path\" >\n            <modal-custom @closeModal=\"toggleVisibility\" @change-page=\"$emit('changePage',$event)\" v-if=\"show\" :result=\"result\"></modal-custom>\n        </div>"
});
app.component('modal-custom', {
  data: function data() {
    return {
      picHighQual: api.picHighQual,
      type: '',
      id: this.result.id
    };
  },
  props: ['result'],
  computed: {
    img_path: function img_path() {
      return this.result.backdrop_path != null ? this.result.backdrop_path : this.result.poster_path;
    }
  },
  methods: {
    titleHandeling: function titleHandeling() {
      this.type = typeof this.result.title !== 'undefined' ? 'movie' : 'tv';
      this.result.title = typeof this.result.title !== 'undefined' ? this.result.title : this.result.name;
    }
  },
  mounted: function mounted() {
    this.titleHandeling();
  },
  template: "<div class=\"modal\">\n            <button @click=\"$emit('closeModal')\" class=\"modal__close_btn\">X</button>\n            <img class=\"modal__photo\" v-bind:src=\"picHighQual + img_path\" >\n            <div class=\"modal__content\">\n                <h3>{{ result.title }}</h3>\n                <p>Overview : {{ result.overview }}</p>\n                <p>Vote : {{ result.vote_average }}</p>\n                <button @click=\"$emit('changePage', { page : type, id : id })\">More information</button>\n            </div>\n        </div>"
});
var vm = app.mount('#app');