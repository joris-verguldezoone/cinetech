"use strict";

var app = Vue.createApp({
  data: function data() {
    return {
      type: '',
      id: 0,
      credits: {},
      reviews: {},
      overview: {}
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
      this.get('overview');
    },
    overview: function overview() {
      this.overview.title = typeof this.overview.title !== 'undefined' ? this.overview.title : this.overview.name;
    }
  },
  methods: {
    changePage: function changePage(obj) {
      var param = typeof obj.id === 'undefined' ? obj.keyword : obj.id;
      var url = this.basePath + '/' + obj.page + '/' + param;
      window.location.assign(encodeURI(url));
    },
    getPrgInfo: function getPrgInfo() {
      if (document.querySelector('#prg-info > input[name=type]') !== null) {
        this.type = document.querySelector('#prg-info > input[name=type]').getAttribute('value');
        this.id = document.querySelector('#prg-info > input[name=id]').getAttribute('value');
      }
    },
    get: function get(info) {
      var urlRequest = api.base + '/' + this.type + '/' + this.id + '/' + info + api.key;
      urlRequest = info == 'overview' ? api.base + '/' + this.type + '/' + this.id + api.key : urlRequest;
      this.getRequestApi(urlRequest, info);
    },
    getRequestApi: function getRequestApi(urlRequest, store) {
      var _this = this;

      fetch(urlRequest).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this[store] = json;
      });
    },
    apiConnect: function apiConnect() {
      var urlRequest, token, form, response;
      return regeneratorRuntime.async(function apiConnect$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              urlRequest = api.base + '/authentication/token/new' + api.key;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch(urlRequest).then(function (response) {
                return response.json();
              }));

            case 3:
              token = _context.sent;

              if (token.success) {
                _context.next = 9;
                break;
              }

              console.log('Token request failed', token);
              return _context.abrupt("return");

            case 9:
              urlRequest = 'http://127.0.0.1:8888' + this.basePath + '/token/set';
              form = new FormData();
              form.append('token', token.request_token);
              _context.next = 14;
              return regeneratorRuntime.awrap(fetch(urlRequest, {
                method: 'POST',
                body: form
              }).then(function (response) {
                return response.json();
              }));

            case 14:
              response = _context.sent;
              console.log(response);

            case 16:
              urlRequest = 'https://www.themoviedb.org/authenticate/' + token.request_token + '?redirect_to=http://127.0.0.1:8888' + this.basePath;
              window.location.assign(urlRequest);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    apiSession: function apiSession() {
      var urlRequest, token, session, form, response;
      return regeneratorRuntime.async(function apiSession$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              urlRequest = 'http://127.0.0.1:8888' + this.basePath + '/token/get';
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch(urlRequest).then(function (reponse) {
                return reponse.json();
              }));

            case 3:
              token = _context2.sent;

              if (!(!token.success || token.token === "")) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", console.log('No token available', token));

            case 6:
              console.log(token);
              urlRequest = 'https://api.themoviedb.org/3/authentication/session/new' + api.key + '&request_token=' + token.token;
              _context2.next = 10;
              return regeneratorRuntime.awrap(fetch(urlRequest).then(function (reponse) {
                return reponse.json();
              }));

            case 10:
              session = _context2.sent;

              if (session.success) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("return", console.log('No session return by api', session));

            case 13:
              urlRequest = 'http://127.0.0.1:8888' + this.basePath + '/session/set';
              form = new FormData();
              form.append('session', session.session_id);
              _context2.next = 18;
              return regeneratorRuntime.awrap(fetch(urlRequest, {
                method: 'POST',
                body: form
              }).then(function (response) {
                return response.json();
              }));

            case 18:
              response = _context2.sent;
              urlRequest = 'http://127.0.0.1:8888' + this.basePath + '/token/set';
              form = new FormData();
              form.append('token', "");
              _context2.next = 24;
              return regeneratorRuntime.awrap(fetch(urlRequest, {
                method: 'POST',
                body: form
              }).then(function (response) {
                return response.json();
              }));

            case 24:
              response = _context2.sent;

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  },
  mounted: function mounted() {
    this.getPrgInfo();
    this.apiSession();
  }
});
app.component('api-connect', {
  template: "<button class='btn btn-primary' @click=\"$emit('apiConnect')\">Connect</button>"
});
app.component('search-modul', {
  data: function data() {
    return {
      query: '',
      dataList: {},
      results: {},
      picLowQual: api.picLowQual
    };
  },
  props: ['keywords'],
  computed: {
    showResults: function showResults() {
      return this.keywords.length > 0 ? true : false;
    }
  },
  watch: {
    query: function query() {
      this.getDataList();
    }
  },
  methods: {
    getDataList: function getDataList() {
      var urlRequest = api.base + '/' + 'search/multi' + api.key + '&query=' + this.query;
      this.getRequestApi(urlRequest, 'dataList');
    },
    getResults: function getResults() {
      var urlRequest = api.base + '/' + 'search/multi' + api.key + '&query=' + this.keywords;
      this.getRequestApi(urlRequest, 'results');
    },
    getRequestApi: function getRequestApi(urlRequest, store) {
      var _this2 = this;

      fetch(urlRequest).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this2[store] = json;
      });
    },
    title: function title(data) {
      switch (data.media_type) {
        case 'movie':
          return data.title;
          break;

        case 'tv':
          return data.name;
          break;

        default:
          break;
      }
    },
    showResult: function showResult(result) {
      return (result.media_type === 'tv' || result.media_type === 'movie') && result.poster_path !== null ? true : false;
    }
  },
  mounted: function mounted() {
    if (this.showResults) {
      this.getResults();
    }
  },
  template: "<div>\n        <teleport to=\"#searchBarPlaceHolder\">\n            <form @submit.prevent=\"$emit('changePage',{ page :'search', keyword:query})\" class=\"d-flex\">   \n                <input class=\"form-control me-2\"  placeholder=\"Search\" type=\"search\" list=\"keywords\" v-model=\"query\" />\n                <datalist id=\"keywords\">\n                    <option v-for=\"result in dataList.results\" :value=\"title(result)\" />\n                </datalist>\n                <button class=\"btn btn-outline-danger\" type=\"submit\">Search</button>\n            </form>\n        </teleport>\n        <div v-if=\"showResults\" >\n            <h2>Results for : {{keywords}}</h2>\n            <div class=\"result\" @click=\"$emit('changePage',{page:result.media_type , id:result.id})\" v-for=\"result in results.results\">\n                    <div v-if=\"showResult(result)\">\n                    <img class=\"result__img\" v-bind:src=\"picLowQual + result.poster_path\">\n                    <div class=\"result__content\">\n                        <h3>{{title(result)}} <span class=\"result__type\">type: {{result.media_type }}</span></h3> \n                        <p>{{result.overview}}</p>\n                    </div>\n                    <div class=\"result__clear\"></div>\n                    </div>\n            </div>\n        </div>\n    </div>\n    "
});
app.component('prg-overview', {
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
  template: "<div class=\"prg_info\">\n                <img class=\"prg_info__img\" v-bind:src=\"picHighQual + img_path\" >\n                <div class=\"prg_info__content\">\n                    <h3 class=\"prg_info__title\">{{ info.title }}</h3>  \n                    <p class=\"prg_info__overview\">{{ info.overview }}</p>\n                </div>\n                <p class=\"prg_info__note\"> {{ info.vote_average }} / 10</p>\n        </div>"
});
app.component('prg-review', {
  props: ['review'],
  computed: {
    imgAvatar: function imgAvatar() {
      var nonePicPath = 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp';
      var picPath = this.review.author_details.avatar_path === null ? nonePicPath : this.review.author_details.avatar_path.substring(1);
      return picPath.match(/^http/gmi) ? picPath : api.picLowQual + picPath;
    }
  },
  template: "<details class=\"prg-review\">\n        <summary class=\"prg-review__summary\">{{review.author}} <span class=\"prg-review__note\">({{review.author_details.rating}}/10)</span></summary>\n        <img class=\"prg-review__avatar\" v-bind:src=\"imgAvatar\">\n        <p class=\"prg-review__content\"> {{review.content}}</p>\n        <div class=\"prg-review__clear\"></div>\n    </details>"
});
app.component('prg-casting', {
  props: ['actor'],
  template: "<div class=\"prg-actor\">\n        <img v-if=\"actor.profile_path\" class=\"prg-actor__img\" v-bind:src=\"'https://image.tmdb.org/t/p/w500//'+ actor.profile_path\">\n        <img v-else class=\"prg-actor__img\" height=\"400\" width=\"200\" src=\"https://pukt.pl/wp-content/uploads/2019/12/YPS__human_avatar_portrait_photography_picture_photo-512-300x300.png\">\n        <p class=\"prg-actor__name\">{{actor.name}} as {{actor.character}}</p>\n    </div>"
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
      var _this3 = this;

      var url = api.base + this.request + api.key + this.filter;
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        return _this3.results = json.results;
      });
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  template: "<div class=\"carrousel\" >\n            <carrousel-item @change-page=\"$emit('changePage',$event)\" class=\"carrousel__item\" v-for=\"result in results\"  :result=\"result\" :size=\"size\" :key=\"result.id\"></carrousel-item>\n        </div>"
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
  template: "<div v-if=\"result.poster_path !== null\" >\n            <img @click=\"toggleVisibility\" class=\"car_item__img\" :class=\"classSizeModifObj\" v-bind:src=\"picLowQual + result.poster_path\" >\n            <modal-custom @closeModal=\"toggleVisibility\" @change-page=\"$emit('changePage',$event)\" v-if=\"show\" :result=\"result\"></modal-custom>\n        </div>"
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
app.component('favorite-button', {
  template: "<div>\n        <button>{{ is-favorite }}</button>\n    </div>"
});
var vm = app.mount('#app');