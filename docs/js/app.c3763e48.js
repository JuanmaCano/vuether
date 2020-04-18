(function(e) {
  function t(t) {
    for (
      var a, i, u = t[0], c = t[1], s = t[2], p = 0, d = [];
      p < u.length;
      p++
    )
      (i = u[p]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && d.push(n[i][0]),
        (n[i] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
    l && l(t);
    while (d.length) d.shift()();
    return o.push.apply(o, s || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], a = !0, u = 1; u < r.length; u++) {
        var c = r[u];
        0 !== n[c] && (a = !1);
      }
      a && (o.splice(t--, 1), (e = i((i.s = r[0]))));
    }
    return e;
  }
  var a = {},
    n = { app: 0 },
    o = [];
  function i(t) {
    if (a[t]) return a[t].exports;
    var r = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function(e, t, r) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (i.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          i.d(
            r,
            a,
            function(t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/");
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var s = 0; s < u.length; s++) t(u[s]);
  var l = c;
  o.push([0, "chunk-vendors"]), r();
})({
  0: function(e, t, r) {
    e.exports = r("56d7");
  },
  "034f": function(e, t, r) {
    "use strict";
    var a = r("85ec"),
      n = r.n(a);
    n.a;
  },
  "56d7": function(e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var a = r("2b0e"),
      n = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          {
            class:
              "undefined" != typeof e.weather.main && e.weather.main.temp > 16
                ? "warm"
                : "",
            attrs: { id: "app" },
          },
          [
            r("main", [
              r("div", { staticClass: "search-box" }, [
                r("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: e.query,
                      expression: "query",
                    },
                  ],
                  staticClass: "search-bar",
                  attrs: { type: "text", placeholder: "Search..." },
                  domProps: { value: e.query },
                  on: {
                    keypress: e.fetchWeather,
                    input: function(t) {
                      t.target.composing || (e.query = t.target.value);
                    },
                  },
                }),
              ]),
              "undefined" != typeof e.weather.main
                ? r("div", { staticClass: "weather-wrap" }, [
                    r("div", { staticClass: "location-box" }, [
                      r("div", { staticClass: "location" }, [
                        e._v(
                          e._s(e.weather.name) +
                            ", " +
                            e._s(e.weather.sys.country)
                        ),
                      ]),
                      r("div", { staticClass: "date" }, [
                        e._v(e._s(e.dateBuilder())),
                      ]),
                    ]),
                    r("div", { staticClass: "weather-box" }, [
                      r("div", { staticClass: "temp" }, [
                        e._v(e._s(Math.round(e.weather.main.temp)) + "°c"),
                      ]),
                      r("div", { staticClass: "weather" }, [
                        e._v(e._s(e.weather.weather[0].main)),
                      ]),
                    ]),
                  ])
                : e._e(),
            ]),
          ]
        );
      },
      o = [],
      i =
        (r("99af"),
        r("d3b7"),
        {
          name: "app",
          data: function() {
            return {
              api_key: "333e4a1fd7a439687c2190bd97298fed",
              url_base: "https://api.openweathermap.org/data/2.5/",
              query: "Huelva, Spain",
              weather: {},
            };
          },
          created: function() {
            this.fetchWeather();
          },
          methods: {
            fetchWeather: function(e) {
              (void 0 != e && "Enter" != e.key) ||
                fetch(
                  ""
                    .concat(this.url_base, "weather?q=")
                    .concat(this.query, "&units=metric&APPID=")
                    .concat(this.api_key)
                )
                  .then(function(e) {
                    return e.json();
                  })
                  .then(this.setResults);
            },
            setResults: function(e) {
              this.weather = e;
            },
            dateBuilder: function() {
              var e = new Date(),
                t = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                r = [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                a = r[e.getDay()],
                n = e.getDate(),
                o = t[e.getMonth()],
                i = e.getFullYear();
              return ""
                .concat(a, " ")
                .concat(n, " ")
                .concat(o, " ")
                .concat(i);
            },
          },
        }),
      u = i,
      c = (r("034f"), r("2877")),
      s = Object(c["a"])(u, n, o, !1, null, null, null),
      l = s.exports;
    (a["a"].config.productionTip = !1),
      new a["a"]({
        render: function(e) {
          return e(l);
        },
      }).$mount("#app");
  },
  "85ec": function(e, t, r) {},
});
//# sourceMappingURL=app.c3763e48.js.map
