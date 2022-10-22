"use strict";
this.default_tr = this.default_tr || {};
(function (_) {
  var window = this;
  try {
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    _.zg = function () {
      return _.u("Firefox") || _.u("FxiOS");
    };
    _.Ag = function () {
      return ((_.u("Chrome") || _.u("CriOS")) && !_.u("Edge")) || _.u("Silk");
    };
    _.Bg = function () {
      return (
        _.u("Safari") &&
        !(
          _.Ag() ||
          _.u("Coast") ||
          _.u("Opera") ||
          _.u("Edge") ||
          _.u("Edg/") ||
          _.u("OPR") ||
          _.zg() ||
          _.u("Silk") ||
          _.u("Android")
        )
      );
    };
    _.Cg = function () {
      return (
        _.u("Android") && !(_.Ag() || _.zg() || _.u("Opera") || _.u("Silk"))
      );
    };
    _.Dg = _.zg();
    _.Eg = _.Ea() || _.u("iPod");
    _.Fg = _.u("iPad");
    _.Gg = _.Cg();
    _.Hg = _.Ag();
    _.Ig = _.Bg() && !_.Fa();
  } catch (e) {
    _._DumpException(e);
  }
  try {
    var Og, Rg, Sg, Yg, $g, ah, dh, fh, ch, gh, jh, kh, ph, sh, th;
    _.Kg = function (a, b) {
      Object.isFrozen(a) ||
        (Jg
          ? (a[Jg] |= b)
          : void 0 !== a.Kb
          ? (a.Kb |= b)
          : Object.defineProperties(a, {
              Kb: { value: b, configurable: !0, writable: !0, enumerable: !1 },
            }));
    };
    _.Lg = function (a) {
      var b;
      Jg ? (b = a[Jg]) : (b = a.Kb);
      return null == b ? 0 : b;
    };
    _.Mg = function (a, b) {
      Jg
        ? (a[Jg] = b)
        : void 0 !== a.Kb
        ? (a.Kb = b)
        : Object.defineProperties(a, {
            Kb: { value: b, configurable: !0, writable: !0, enumerable: !1 },
          });
    };
    _.Ng = function (a) {
      _.Kg(a, 1);
      return a;
    };
    Og = function (a) {
      _.Kg(a, 17);
      return a;
    };
    _.Pg = function (a) {
      return a ? !!(_.Lg(a) & 2) : !1;
    };
    _.Qg = function (a) {
      _.Kg(a, 16);
      return a;
    };
    Rg = function (a, b) {
      _.Mg(b, (_.Lg(a) | 18) & -33);
    };
    Sg = function (a) {
      return (
        null !== a &&
        "object" === typeof a &&
        !Array.isArray(a) &&
        a.constructor === Object
      );
    };
    _.Wg = function (a) {
      switch (typeof a) {
        case "number":
          return isFinite(a) ? a : String(a);
        case "object":
          if (a && !Array.isArray(a)) {
            if (_.Tg && null != a && a instanceof Uint8Array) return Ug(a);
            if (a instanceof Vg) {
              var b = a.ab;
              return null == b
                ? ""
                : "string" === typeof b
                ? b
                : (a.ab = Ug(b));
            }
          }
      }
      return a;
    };
    Yg = function (a, b, c, d) {
      if (null != a) {
        if (Array.isArray(a)) a = _.Xg(a, b, c, void 0 !== d);
        else if (Sg(a)) {
          var e = {},
            f;
          for (f in a) e[f] = Yg(a[f], b, c, d);
          a = e;
        } else a = b(a, d);
        return a;
      }
    };
    _.Xg = function (a, b, c, d) {
      d = d ? !!(_.Lg(a) & 16) : void 0;
      var e = Array.prototype.slice.call(a);
      c(a, e);
      for (a = 0; a < e.length; a++) e[a] = Yg(e[a], b, c, d);
      return e;
    };
    $g = function (a) {
      return a.Be === _.Zg ? a.toJSON() : _.Wg(a);
    };
    ah = function () {};
    _.bh = function (a, b) {
      return null == a ? b : a;
    };
    dh = function (a) {
      if (_.Pg(a) && Object.isFrozen(a)) return a;
      var b = _.Ob(a, ch);
      Rg(a, b);
      Object.freeze(b);
      return b;
    };
    fh = function (a, b) {
      if (null != a) {
        if (_.Tg && a instanceof Uint8Array)
          return a.length
            ? new Vg(new Uint8Array(a))
            : eh || (eh = new Vg(null));
        if (Array.isArray(a)) {
          if (_.Pg(a)) return a;
          b && ((b = _.Lg(a)), (b = !(b & 32) && (!!(b & 16) || 0 === b)));
          return b ? (_.Kg(a, 2), a) : _.Xg(a, fh, Rg);
        }
        return a.Be === _.Zg ? ch(a) : a;
      }
    };
    ch = function (a) {
      if (_.Pg(a.da)) return a;
      a = gh(a);
      _.Kg(a.da, 2);
      return a;
    };
    gh = function (a) {
      var b = new a.constructor();
      a.Dd && (b.Dd = a.Dd.slice());
      for (var c = a.da, d = !!(_.Lg(c) & 16), e = 0; e < c.length; e++) {
        var f = c[e];
        if (e === c.length - 1 && Sg(f))
          for (var g in f) {
            var h = +g;
            if (Number.isNaN(h))
              (b.La || (b.La = b.da[b.qc + b.jc] = {}))[h] = f[h];
            else {
              var l = f[g],
                m = a.Wa && a.Wa[h];
              m ? _.hh(b, h, dh(m), !0) : _.H(b, h, fh(l, d), !0);
            }
          }
        else
          (h = e - a.jc),
            (l = a.Wa && a.Wa[h])
              ? _.hh(b, h, dh(l), !1)
              : _.H(b, h, fh(f, d), !1);
      }
      return b;
    };
    _.ih = function (a) {
      if (!_.Pg(a.da)) return a;
      var b = gh(a);
      b.g = a;
      return b;
    };
    jh = {};
    kh = {};
    _.lh = function (a, b) {
      this.g = (a === jh && b) || "";
      this.h = kh;
    };
    _.lh.prototype.Eb = !0;
    _.lh.prototype.cb = function () {
      return this.g;
    };
    _.mh = function (a) {
      return new _.lh(jh, a);
    };
    _.nh = function (a, b) {
      return _.bd(a.T, b);
    };
    _.oh = function (a) {
      return a instanceof _.lh && a.constructor === _.lh && a.h === kh
        ? a.g
        : "type_error:Const";
    };
    ph = /^[\w+/_-]+[=]{0,2}$/;
    _.qh = function (a, b) {
      b = (b || _.r).document;
      return b.querySelector
        ? (a = b.querySelector(a)) &&
          (a = a.nonce || a.getAttribute("nonce")) &&
          ph.test(a)
          ? a
          : ""
        : "";
    };
    _.rh = function (a) {
      return _.qh("script[nonce]", a);
    };
    sh = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    };
    th = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    };
    _.uh = function (a) {
      if (a instanceof _.be) return a;
      var b = new _.be(_.ub);
      _.ae(b, 2, a);
      return b;
    };
    _.vh = function (a, b, c, d, e, f, g) {
      var h = new _.Yf();
      _.ag.push(h);
      b && h.I("complete", b);
      h.pc("ready", h.ma);
      f && (h.l = Math.max(0, f));
      g && (h.N = g);
      h.send(a, c, d, e);
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var wh, Ug;
    wh = {};
    _.xh = null;
    _.yh = _.bc || _.cc || (!_.Ig && !_.C && "function" == typeof _.r.atob);
    Ug = function (a) {
      var b;
      void 0 === b && (b = 0);
      _.zh();
      b = wh[b];
      for (
        var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0;
        e < a.length - 2;
        e += 3
      ) {
        var g = a[e],
          h = a[e + 1],
          l = a[e + 2],
          m = b[g >> 2];
        g = b[((g & 3) << 4) | (h >> 4)];
        h = b[((h & 15) << 2) | (l >> 6)];
        l = b[l & 63];
        c[f++] = m + g + h + l;
      }
      m = 0;
      l = d;
      switch (a.length - e) {
        case 2:
          (m = a[e + 1]), (l = b[(m & 15) << 2] || d);
        case 1:
          (a = a[e]), (c[f] = b[a >> 2] + b[((a & 3) << 4) | (m >> 4)] + l + d);
      }
      return c.join("");
    };
    _.zh = function () {
      if (!_.xh) {
        _.xh = {};
        for (
          var a =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            b = ["+/=", "+/", "-_=", "-_.", "-_"],
            c = 0;
          5 > c;
          c++
        ) {
          var d = a.concat(b[c].split(""));
          wh[c] = d;
          for (var e = 0; e < d.length; e++) {
            var f = d[e];
            void 0 === _.xh[f] && (_.xh[f] = e);
          }
        }
      }
    };
    var Ah;
    _.Tg = "undefined" !== typeof Uint8Array;
    Ah = {};
    var eh,
      Vg = function (a) {
        if (Ah !== Ah) throw Error("ea");
        this.ab = a;
        if (null != a && 0 === a.length) throw Error("fa");
      };
    Vg.prototype.bc = function () {
      return null == this.ab;
    };
    var Jg =
      "function" === typeof Symbol && "symbol" === typeof Symbol()
        ? Symbol(void 0)
        : void 0;
    var Ch, Dh, Eh;
    _.Zg = {};
    Ch = Object;
    Dh = Ch.freeze;
    Eh = [];
    _.Kg(Eh, 3);
    _.Fh = Dh.call(Ch, Eh);
    _.Gh = function (a) {
      if (_.Pg(a.da)) throw Error("ia");
    };
    _.Hh = function (a, b, c) {
      return -1 === b
        ? null
        : b >= a.qc
        ? a.La
          ? a.La[b]
          : void 0
        : (void 0 === c ? 0 : c) && a.La && ((c = a.La[b]), null != c)
        ? c
        : a.da[b + a.jc];
    };
    _.H = function (a, b, c, d, e) {
      d = void 0 === d ? !1 : d;
      (void 0 === e ? 0 : e) || _.Gh(a);
      a.g && (a.g = void 0);
      if (b >= a.qc || d)
        return ((a.La || (a.La = a.da[a.qc + a.jc] = {}))[b] = c), a;
      void 0 !== a.La && a.qc >= a.da.length
        ? ((d = a.da.length - 1),
          (e = b + a.jc),
          e >= d
            ? ((a.da[d] = void 0), (a.da[e] = c), a.da.push(a.La))
            : (a.da[e] = c))
        : (a.da[b + a.jc] = c);
      void 0 !== a.La && b in a.La && delete a.La[b];
      return a;
    };
    _.Ih = function (a, b, c, d) {
      var e = (d = void 0 === d ? !1 : d),
        f = _.Hh(a, c, e);
      var g = !1;
      var h =
        null == f ||
        "object" !== typeof f ||
        (g = Array.isArray(f)) ||
        f.Be !== _.Zg
          ? g
            ? new b(f)
            : void 0
          : f;
      h !== f &&
        null != h &&
        (_.H(a, c, h, e, !0), _.Kg(h.da, _.Lg(a.da) & -33));
      b = h;
      if (null == b) return b;
      _.Pg(b.da) && !_.Pg(a.da) && ((b = _.ih(b)), _.H(a, c, b, d));
      return b;
    };
    _.Jh = function (a, b, c) {
      _.Gh(a);
      null == c && (c = void 0);
      return _.H(a, b, c);
    };
    _.hh = function (a, b, c, d) {
      _.Gh(a);
      if (null != c) {
        var e = _.Ng([]);
        for (var f = !1, g = 0; g < c.length; g++)
          (e[g] = c[g].da), (f = f || _.Pg(e[g]));
        a.Wa || (a.Wa = {});
        a.Wa[b] = c;
        c = e;
        f
          ? Object.isExtensible(c) &&
            (Jg ? c[Jg] && (c[Jg] &= -9) : void 0 !== c.Kb && (c.Kb &= -9))
          : _.Kg(c, 8);
      } else a.Wa && (a.Wa[b] = void 0), (e = _.Fh);
      return _.H(a, b, e, d);
    };
    _.I = function (a, b, c) {
      null == a && (a = _.Kh);
      _.Kh = null;
      var d = this.constructor.g || 0,
        e = 0 < d,
        f = this.constructor.h,
        g = !1;
      if (null == a) {
        var h = f ? [f] : [];
        _.Kg(h, 48);
        a = h;
        h = !0;
      } else {
        if (!Array.isArray(a)) throw Error();
        if ((h = !!(_.Lg(a) & 16)))
          (g = _.Lg(a)), _.Mg(a, g | 32), (g = !!(g & 32));
      }
      e &&
        0 < a.length &&
        Sg(a[a.length - 1]) &&
        "g" in a[a.length - 1] &&
        (d = 0);
      this.jc = (f ? 0 : -1) - d;
      this.Wa = void 0;
      this.da = a;
      a: {
        f = this.da.length;
        d = f - 1;
        if (f && ((f = this.da[d]), Sg(f))) {
          this.La = f;
          b = Object.keys(f);
          0 < b.length && _.Rb(b, isNaN)
            ? (this.qc = Number.MAX_VALUE)
            : (this.qc = d - this.jc);
          break a;
        }
        void 0 !== b && -1 < b
          ? ((this.qc = Math.max(b, d + 1 - this.jc)), (this.La = void 0))
          : (this.qc = Number.MAX_VALUE);
      }
      if (!e && this.La && "g" in this.La) throw Error("ka");
      if (c)
        for (e = h && !g ? Og : _.Ng, b = 0; b < c.length; b++)
          (h = c[b]),
            (g = _.Hh(this, h))
              ? Array.isArray(g) && e(g)
              : _.H(this, h, _.Fh, !1, !0);
    };
    _.I.prototype.toJSON = function () {
      var a = this.da;
      return _.Bh ? a : _.Xg(a, $g, ah);
    };
    _.Lh = function (a, b) {
      if (null == b || "" == b) return new a();
      b = JSON.parse(b);
      if (!Array.isArray(b)) throw Error(void 0);
      _.Kh = b = _.Qg(b);
      a = new a(b);
      _.Kh = null;
      return a;
    };
    _.I.prototype.Be = _.Zg;
    _.I.prototype.toString = function () {
      return this.da.toString();
    };
    var Nh, Mh;
    _.J = function (a, b, c) {
      if ("string" === typeof b) (b = Mh(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = Mh(c, d);
          f && (c.style[f] = e);
        }
    };
    Nh = {};
    Mh = function (a, b) {
      var c = Nh[b];
      if (!c) {
        var d = sh(b);
        c = d;
        void 0 === a.style[d] &&
          ((d = (_.cc ? "Webkit" : _.bc ? "Moz" : _.C ? "ms" : null) + th(d)),
          void 0 !== a.style[d] && (c = d));
        Nh[b] = c;
      }
      return c;
    };
    _.Oh = _.bc ? "MozUserSelect" : _.cc || _.$b ? "WebkitUserSelect" : null;
  } catch (e) {
    _._DumpException(e);
  }
  try {
    var Th;
    _.Ph = {};
    _.Qh = function (a) {
      return a instanceof _.yc && a.constructor === _.yc
        ? a.g
        : "type_error:SafeUrl";
    };
    _.Rh = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.Sh = function (a) {
      if (a instanceof _.yc) return a;
      a = "object" == typeof a && a.Eb ? a.cb() : String(a);
      _.Rh.test(a) || (a = "about:invalid#zClosurez");
      return _.zc(a);
    };
    Th = {};
    _.Uh = function (a, b) {
      this.g = b === Th ? a : "";
      this.Eb = !0;
    };
    _.Uh.prototype.toString = function () {
      return this.g.toString();
    };
    _.Uh.prototype.cb = function () {
      return this.g;
    };
    _.Vh = {};
    _.yf = function () {
      throw Error("P");
    };
    _.yf.prototype.hf = null;
    _.yf.prototype.Aa = function () {
      return this.g;
    };
    _.yf.prototype.toString = function () {
      return this.g;
    };
    var Wh = function () {
      _.yf.call(this);
    };
    _.z(Wh, _.yf);
    Wh.prototype.Vb = _.Vh;
    var Xh = function () {
      _.yf.call(this);
    };
    _.z(Xh, _.yf);
    Xh.prototype.Vb = _.Ph;
    Xh.prototype.hf = 1;
    Xh.prototype.h = function () {
      return new _.Uh(this.toString(), Th);
    };
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    _.M = (function (a) {
      function b(c) {
        this.g = c;
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.hf = d);
        return c;
      };
    })(Wh);
    _.Yh = (function (a) {
      function b(c) {
        this.g = c;
      }
      b.prototype = a.prototype;
      return function (c) {
        return new b(String(c));
      };
    })(Xh);
  } catch (e) {
    _._DumpException(e);
  }
  try {
    var Zh,
      $h,
      bi,
      di,
      fi,
      hi,
      ii,
      ji,
      ti,
      vi,
      xi,
      zi,
      O,
      Fi,
      Hi,
      Ii,
      Ki,
      Li,
      Mi,
      Ni,
      Oi,
      Pi,
      Qi,
      Ri,
      Si,
      Ti,
      Ui,
      Vi,
      Wi,
      ei,
      gi,
      mi,
      Yi,
      Zi,
      aj,
      cj,
      ej,
      fj,
      gj,
      ij,
      kj,
      lj,
      mj,
      nj,
      oj,
      qj,
      rj,
      tj,
      vj,
      wj,
      xj,
      yj,
      zj,
      Aj,
      Bj,
      Cj,
      Dj,
      Ej,
      Fj,
      Gj,
      Hj,
      Wj,
      Xj,
      Yj,
      Zj,
      ak,
      oi,
      dk,
      fk,
      gk,
      hk,
      jk,
      kk,
      lk,
      mk,
      nk,
      qk,
      pk,
      rk,
      tk,
      uk,
      wk,
      xk,
      Ak,
      Ck,
      Dk,
      Fk,
      Gk,
      Hk,
      Ik,
      Jk,
      Kk,
      Mk,
      Nk,
      Ok,
      Qk,
      Sk,
      Uk,
      Wk,
      Yk,
      Zk,
      al,
      bl;
    Zh = function (a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++)
        c += a[e] + (e < b.length ? b[e] : "%s");
      _.aa.call(this, c + a[d]);
    };
    $h = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    };
    bi = function () {
      var a = ai,
        b;
      for (b in a) return !1;
      return !0;
    };
    _.ci = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    };
    di = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
          if (b) return !1;
          b = !0;
        } else if ("[" == e) {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    };
    fi = function (a) {
      return a.replace(_.Fc, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (g, h, l) {
          f = h;
          return l;
        });
        b = (ei(d) || _.Ac).cb();
        return c + f + b + f + e;
      });
    };
    hi = function (a) {
      if (a instanceof _.yc)
        return (
          'url("' +
          _.Qh(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") +
          '")'
        );
      if (a instanceof _.lh) a = _.oh(a);
      else {
        a = String(a);
        var b = a.replace(_.Gc, "$1").replace(_.Gc, "$1").replace(_.Fc, "url");
        if (_.Ec.test(b)) {
          if ((b = !gi.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && di(a);
          }
          a = b ? fi(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a))
        throw new Zh("Value does not allow [{;}], got: %s.", [a]);
      return a;
    };
    ii = function (a) {
      return a
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };
    ji = function (a) {
      var b = { nonce: _.rh() };
      b = void 0 === b ? {} : b;
      a = _.Ab(a).toString();
      var c = "<script";
      b.id && (c += ' id="' + ii(b.id) + '"');
      b.nonce && (c += ' nonce="' + ii(b.nonce) + '"');
      b.type && (c += ' type="' + ii(b.type) + '"');
      return _.Kc(c + (">" + a + "\x3c/script>"));
    };
    _.ki = function (a) {
      if ("script" === a.tagName.toLowerCase()) throw Error("N");
      if ("style" === a.tagName.toLowerCase()) throw Error("O");
    };
    _.ni = function (a) {
      return _.ya(a)
        ? a instanceof _.yf
          ? _.li(a)
          : mi("zSoyz")
        : mi(String(a));
    };
    _.qi = function (a, b) {
      b = a(b || oi, void 0);
      a = _.nh(_.Vc(), "DIV");
      b = _.ni(b);
      _.pi(a, b);
      1 == a.childNodes.length &&
        ((b = a.firstChild), 1 == b.nodeType && (a = b));
      return a;
    };
    ti = function (a, b, c) {
      var d = Array.prototype.slice.call(arguments);
      d.splice(0, 2);
      d =
        "l" +
        a.toString(16) +
        "i" +
        b.toString(16) +
        (d.length ? "-" + d.join("_") : "");
      _.ri ? _.ri.push(d) : _.si(d);
    };
    vi = function () {
      var a = _.Lh(
        ui,
        '[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\n\'use strict\';var e\\u003dthis||self;function f(a){return a};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nvar h;function k(a,c){this.g\\u003dc\\u003d\\u003d\\u003dl?a:\\"\\"}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};if(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]'
      );
      if (!a) return null;
      a = _.Hh(a, 6);
      var b;
      null === a || void 0 === a ? (b = null) : (b = _.Bb(a));
      return b;
    };
    _.wi = function (a) {
      return {
        display_language: a,
        key: "AIzaSyBWDj0QJvVIx8XOhRegXX5_SrRWxhT5Hs4",
      };
    };
    _.yi = function (a) {
      var b = a.targetLanguages || [];
      return { sl: xi(a.sourceLanguages || []), tl: xi(b) };
    };
    xi = function (a) {
      var b = {};
      a = _.v(a);
      for (var c = a.next(); !c.done; c = a.next())
        (c = c.value), (b[c.language] = c.name);
      return b;
    };
    zi = function (a) {
      _.N.call(this);
      a = a || {};
      this.id = a.id || this.Wb();
      this.Kf = a.Kf || "";
      this.ye = a.ye || null;
      this.ze = a.ze || null;
      this.ef = a.ef || !1;
      this.className = a.className || null;
      this.o = null;
    };
    _.Di = function () {
      for (var a in Object.prototype) {
        _.wc = function (d, e, f) {
          for (var g in d)
            d[g] !== Object.prototype[g] && e.call(f, d[g], g, d);
        };
        break;
      }
      var b = _.qb(),
        c = Ai(Bi);
      c &&
        "function" == typeof c &&
        (1 == _.Ci
          ? c()
          : (function e() {
              var f = document.readyState;
              "undefined" == _.kb(f) ||
              "complete" == f ||
              "interactive" == f ||
              2e4 <= _.qb() - b
                ? c()
                : window.setTimeout(e, 500);
            })());
    };
    _.Ei = function (a, b) {
      a.qa ? b() : (a.ca || (a.ca = []), a.ca.push(b));
    };
    O = function (a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0;
    };
    O.prototype.ceil = function () {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      return this;
    };
    O.prototype.floor = function () {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    };
    O.prototype.round = function () {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      return this;
    };
    O.prototype.translate = function (a, b) {
      a instanceof O
        ? ((this.x += a.x), (this.y += a.y))
        : ((this.x += Number(a)), "number" === typeof b && (this.y += b));
      return this;
    };
    Fi = function (a) {
      return new O(a.x, a.y);
    };
    _.Gi = function (a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c))
        return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, g; (g = a[f]); f++)
            b == g.nodeName && (d[e++] = g);
          d.length = e;
          return d;
        }
        return a;
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
        d = {};
        for (f = e = 0; (g = a[f]); f++)
          (b = g.className),
            "function" == typeof b.split &&
              _.ta(b.split(/\s+/), c) &&
              (d[e++] = g);
        d.length = e;
        return d;
      }
      return a;
    };
    Hi = function (a, b) {
      var c = b || document;
      if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        a =
          d.querySelectorAll && d.querySelector && a
            ? d.querySelector(a ? "." + a : "")
            : _.Gi(c, "*", a, b)[0] || null;
      }
      return a || null;
    };
    Ii = function (a) {
      return a.scrollingElement
        ? a.scrollingElement
        : !_.cc && _.Zc(a)
        ? a.documentElement
        : a.body || a.documentElement;
    };
    _.Ji = function (a) {
      var b = Ii(a);
      a = a.parentWindow || a.defaultView;
      return _.C && _.rc("10") && a.pageYOffset != b.scrollTop
        ? new O(b.scrollLeft, b.scrollTop)
        : new O(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    };
    Ki = function (a) {
      if (a.sb && "function" == typeof a.sb) return a.sb();
      if (
        ("undefined" !== typeof Map && a instanceof Map) ||
        ("undefined" !== typeof Set && a instanceof Set)
      )
        return Array.from(a.values());
      if ("string" === typeof a) return a.split("");
      if (_.da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return _.Ha(a);
    };
    Li = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    _.li = function (a) {
      if (a.Vb !== _.Vh) throw Error("Q");
      return _.Kc(a.toString());
    };
    Mi = function (a) {
      a.Jc = void 0;
      a.nc = function () {
        return a.Jc ? a.Jc : (a.Jc = new a());
      };
    };
    Ni = {};
    _.z(Zh, _.aa);
    Zh.prototype.name = "AssertionError";
    Oi = /&/g;
    Pi = /</g;
    Qi = />/g;
    Ri = /"/g;
    Si = /'/g;
    Ti = /\x00/g;
    Ui = /[\x00&<>"']/;
    Vi = function (a) {
      if (!Ui.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Oi, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Pi, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace(Qi, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(Ri, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(Si, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(Ti, "&#0;"));
      return a;
    };
    Wi = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      command: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    };
    ei = function (a) {
      if (a instanceof _.yc) return a;
      a = "object" == typeof a && a.Eb ? a.cb() : String(a);
      _.Rh.test(a)
        ? (a = _.zc(a))
        : ((a = String(a).replace(/(%0A|%0D)/g, "")),
          (a = a.match(Li) ? _.zc(a) : null));
      return a;
    };
    _.Xi = function (a) {
      return a instanceof _.Cc && a.constructor === _.Cc
        ? a.g
        : "type_error:SafeStyle";
    };
    gi = /\/\*/;
    mi = function (a) {
      return a instanceof _.Ic
        ? a
        : _.Kc(Vi("object" == typeof a && a.Eb ? a.cb() : String(a)));
    };
    Yi = /^[a-zA-Z0-9-]+$/;
    Zi = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0,
    };
    _.$i = function (a) {
      if (!Yi.test(a)) throw Error("A");
      if (a.toUpperCase() in Zi) throw Error("A");
    };
    aj = function (a) {
      var b = mi(_.Mc),
        c = [],
        d = function (e) {
          Array.isArray(e)
            ? e.forEach(d)
            : ((e = mi(e)), c.push(_.Jc(e).toString()));
        };
      a.forEach(d);
      return _.Kc(c.join(_.Jc(b).toString()));
    };
    _.bj = function (a) {
      return aj(Array.prototype.slice.call(arguments));
    };
    cj = {
      action: !0,
      cite: !0,
      data: !0,
      formaction: !0,
      href: !0,
      manifest: !0,
      poster: !0,
      src: !0,
    };
    _.dj = function (a) {
      var b = "";
      if (a)
        for (var c in a)
          if (Object.prototype.hasOwnProperty.call(a, c)) {
            if (!Yi.test(c)) throw Error("A");
            var d = a[c];
            if (null != d) {
              var e = c;
              if (d instanceof _.lh) d = _.oh(d);
              else if ("style" == e.toLowerCase()) {
                var f = d;
                if (!_.ya(f)) throw Error("A");
                if (!(f instanceof _.Cc)) {
                  d = void 0;
                  var g = "";
                  for (d in f)
                    if (Object.prototype.hasOwnProperty.call(f, d)) {
                      if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("z`" + d);
                      var h = f[d];
                      null != h &&
                        ((h = Array.isArray(h) ? h.map(hi).join(" ") : hi(h)),
                        (g += d + ":" + h + ";"));
                    }
                  f = g ? new _.Cc(g, _.Bc) : _.Dc;
                }
                d = _.Xi(f);
              } else {
                if (/^on/i.test(e)) throw Error("A");
                if (e.toLowerCase() in cj)
                  if (d instanceof _.Db) d = _.Ma(d).toString();
                  else if (d instanceof _.yc) d = _.Qh(d);
                  else if ("string" === typeof d) d = (ei(d) || _.Ac).cb();
                  else throw Error("A");
              }
              d.Eb && (d = d.cb());
              e = e + '="' + Vi(String(d)) + '"';
              b += " " + e;
            }
          }
      return b;
    };
    ej = function (a) {
      _.$i("body");
      var b = a;
      a = "<body" + _.dj({});
      null == b ? (b = []) : Array.isArray(b) || (b = [b]);
      !0 === Wi.body
        ? (a += ">")
        : ((b = _.bj(b)), (a += ">" + _.Jc(b).toString() + "</body>"));
      return _.Kc(a);
    };
    _.pi = function (a, b) {
      if ((0, _.Nc)()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = _.Jc(b);
    };
    fj = function (a, b) {
      b = b instanceof _.yc ? b : _.Sh(b);
      a.action = _.Qh(b);
    };
    gj = function (a, b) {
      return new O(a.x - b.x, a.y - b.y);
    };
    _.hj = function (a) {
      return a.replace(/\xa0|[ \t]+/g, " ");
    };
    ij = function (a) {
      return a.replace(/[\s\xa0]+$/, "");
    };
    _.jj = function (a) {
      return (a = Vi(a));
    };
    kj = function (a) {
      return a.replace(/&([^;]+);/g, function (b, c) {
        switch (c) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return "#" != c.charAt(0) ||
              ((c = Number("0" + c.slice(1))), isNaN(c))
              ? b
              : String.fromCharCode(c);
        }
      });
    };
    lj = /&([^;\s<&]+);?/g;
    mj = function (a) {
      var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
      var c = _.r.document.createElement("div");
      return a.replace(lj, function (d, e) {
        var f = b[d];
        if (f) return f;
        "#" == e.charAt(0) &&
          ((e = Number("0" + e.slice(1))),
          isNaN(e) || (f = String.fromCharCode(e)));
        f ||
          ((f = _.Kc(d + " ")),
          _.pi(c, f),
          (f = c.firstChild.nodeValue.slice(0, -1)));
        return (b[d] = f);
      });
    };
    nj = function (a) {
      return -1 != a.indexOf("&") ? ("document" in _.r ? mj(a) : kj(a)) : a;
    };
    _.P = function (a) {
      return _.Wc(document, a);
    };
    oj = function (a, b) {
      return (b || document).getElementsByTagName(String(a));
    };
    _.pj = function (a, b, c) {
      return _.dd(document, arguments);
    };
    qj = function (a, b) {
      _.cd(_.Uc(a), a, arguments, 1);
    };
    rj = function (a, b) {
      b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
    };
    _.sj = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    };
    tj = function (a) {
      return _.ya(a) && 1 == a.nodeType;
    };
    _.uj = function (a) {
      return a.contentDocument || a.contentWindow.document;
    };
    vj = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 };
    wj = { IMG: " ", BR: "\n" };
    xj = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a;
    };
    yj = function (a, b) {
      b ? (a.tabIndex = 0) : ((a.tabIndex = -1), a.removeAttribute("tabIndex"));
    };
    zj = function (a, b, c) {
      if (!(a.nodeName in vj))
        if (3 == a.nodeType)
          c
            ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
            : b.push(a.nodeValue);
        else if (a.nodeName in wj) b.push(wj[a.nodeName]);
        else for (a = a.firstChild; a; ) zj(a, b, c), (a = a.nextSibling);
    };
    Aj = function (a) {
      var b = [];
      zj(a, b, !0);
      a = b.join("");
      a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
      a = a.replace(/\u200B/g, "");
      a = a.replace(/ +/g, " ");
      " " != a && (a = a.replace(/^\s*/, ""));
      return a;
    };
    Bj = function (a) {
      var b = [];
      zj(a, b, !1);
      return b.join("");
    };
    Cj = function (a, b, c) {
      this.promise = a;
      this.resolve = b;
      this.reject = c;
    };
    Dj = function () {
      var a,
        b,
        c = new _.be(function (d, e) {
          a = d;
          b = e;
        });
      return new Cj(c, a, b);
    };
    Ej = function (a) {
      if (a.Ec && "function" == typeof a.Ec) return a.Ec();
      if (!a.sb || "function" != typeof a.sb) {
        if ("undefined" !== typeof Map && a instanceof Map)
          return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (_.da(a) || "string" === typeof a) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return $h(a);
        }
      }
    };
    Fj = function (a, b, c) {
      if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
      else if (_.da(a) || "string" === typeof a)
        Array.prototype.forEach.call(a, b, c);
      else
        for (var d = Ej(a), e = Ki(a), f = e.length, g = 0; g < f; g++)
          b.call(c, e[g], d && d[g], a);
    };
    Gj = function (a, b) {
      this.h = this.g = null;
      this.j = a || null;
      this.l = !!b;
    };
    Hj = function (a) {
      a.g ||
        ((a.g = new Map()),
        (a.h = 0),
        a.j &&
          _.tf(a.j, function (b, c) {
            a.add(_.Rc(b), c);
          }));
    };
    Gj.prototype.add = function (a, b) {
      Hj(this);
      this.j = null;
      a = Ij(this, a);
      var c = this.g.get(a);
      c || this.g.set(a, (c = []));
      c.push(b);
      this.h += 1;
      return this;
    };
    Gj.prototype.remove = function (a) {
      Hj(this);
      a = Ij(this, a);
      return this.g.has(a)
        ? ((this.j = null), (this.h -= this.g.get(a).length), this.g.delete(a))
        : !1;
    };
    Gj.prototype.bc = function () {
      Hj(this);
      return 0 == this.h;
    };
    var Jj = function (a, b) {
      Hj(a);
      b = Ij(a, b);
      return a.g.has(b);
    };
    _.k = Gj.prototype;
    _.k.forEach = function (a, b) {
      Hj(this);
      this.g.forEach(function (c, d) {
        c.forEach(function (e) {
          a.call(b, e, d, this);
        }, this);
      }, this);
    };
    _.k.Ec = function () {
      Hj(this);
      for (
        var a = Array.from(this.g.values()),
          b = Array.from(this.g.keys()),
          c = [],
          d = 0;
        d < b.length;
        d++
      )
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
      return c;
    };
    _.k.sb = function (a) {
      Hj(this);
      var b = [];
      if ("string" === typeof a)
        Jj(this, a) && (b = b.concat(this.g.get(Ij(this, a))));
      else {
        a = Array.from(this.g.values());
        for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
      }
      return b;
    };
    _.k.set = function (a, b) {
      Hj(this);
      this.j = null;
      a = Ij(this, a);
      Jj(this, a) && (this.h -= this.g.get(a).length);
      this.g.set(a, [b]);
      this.h += 1;
      return this;
    };
    _.k.get = function (a, b) {
      if (!a) return b;
      a = this.sb(a);
      return 0 < a.length ? String(a[0]) : b;
    };
    var Kj = function (a, b, c) {
      a.remove(b);
      0 < c.length &&
        ((a.j = null), a.g.set(Ij(a, b), _.wa(c)), (a.h += c.length));
    };
    Gj.prototype.toString = function () {
      if (this.j) return this.j;
      if (!this.g) return "";
      for (
        var a = [], b = Array.from(this.g.keys()), c = 0;
        c < b.length;
        c++
      ) {
        var d = b[c],
          e = _.Qc(d);
        d = this.sb(d);
        for (var f = 0; f < d.length; f++) {
          var g = e;
          "" !== d[f] && (g += "=" + _.Qc(d[f]));
          a.push(g);
        }
      }
      return (this.j = a.join("&"));
    };
    var Lj = function (a) {
        var b = new Gj();
        b.j = a.j;
        a.g && ((b.g = new Map(a.g)), (b.h = a.h));
        return b;
      },
      Ij = function (a, b) {
        b = String(b);
        a.l && (b = b.toLowerCase());
        return b;
      },
      Mj = function (a, b) {
        b &&
          !a.l &&
          (Hj(a),
          (a.j = null),
          a.g.forEach(function (c, d) {
            var e = d.toLowerCase();
            d != e && (this.remove(d), Kj(this, e, c));
          }, a));
        a.l = b;
      };
    Gj.prototype.o = function (a) {
      for (var b = 0; b < arguments.length; b++)
        Fj(
          arguments[b],
          function (c, d) {
            this.add(d, c);
          },
          this
        );
    };
    var Nj = /[#\/\?@]/g,
      Oj = /[#\?]/g,
      Pj = /[#\?:]/g,
      Qj = /#/g,
      Rj = function (a, b) {
        return a
          ? b
            ? decodeURI(a.replace(/%25/g, "%2525"))
            : decodeURIComponent(a)
          : "";
      },
      Sj = /[#\?@]/g,
      Tj = function (a) {
        a = a.charCodeAt(0);
        return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
      },
      Uj = function (a, b, c) {
        return "string" === typeof a
          ? ((a = encodeURI(a).replace(b, Tj)),
            c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            a)
          : null;
      },
      Vj = function (a) {
        this.j = this.B = this.l = "";
        this.D = null;
        this.s = this.h = "";
        this.o = !1;
        var b;
        a instanceof Vj
          ? ((this.o = a.o),
            Wj(this, a.l),
            (this.B = a.B),
            (this.j = a.j),
            Xj(this, a.D),
            (this.h = a.h),
            Yj(this, Lj(a.g)),
            (this.s = a.s))
          : a && (b = String(a).match(_.rf))
          ? ((this.o = !1),
            Wj(this, b[1] || "", !0),
            (this.B = Rj(b[2] || "")),
            (this.j = Rj(b[3] || "", !0)),
            Xj(this, b[4]),
            (this.h = Rj(b[5] || "", !0)),
            Yj(this, b[6] || "", !0),
            (this.s = Rj(b[7] || "")))
          : ((this.o = !1), (this.g = new Gj(null, this.o)));
      };
    Vj.prototype.toString = function () {
      var a = [],
        b = this.l;
      b && a.push(Uj(b, Nj, !0), ":");
      var c = this.j;
      if (c || "file" == b)
        a.push("//"),
          (b = this.B) && a.push(Uj(b, Nj, !0), "@"),
          a.push(_.Qc(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
          (c = this.D),
          null != c && a.push(":", String(c));
      if ((c = this.h))
        this.j && "/" != c.charAt(0) && a.push("/"),
          a.push(Uj(c, "/" == c.charAt(0) ? Oj : Pj, !0));
      (c = this.g.toString()) && a.push("?", c);
      (c = this.s) && a.push("#", Uj(c, Qj));
      return a.join("");
    };
    Vj.prototype.resolve = function (a) {
      var b = new Vj(this),
        c = !!a.l;
      c ? Wj(b, a.l) : (c = !!a.B);
      c ? (b.B = a.B) : (c = !!a.j);
      c ? (b.j = a.j) : (c = null != a.D);
      var d = a.h;
      if (c) Xj(b, a.D);
      else if ((c = !!a.h)) {
        if ("/" != d.charAt(0))
          if (this.j && !this.h) d = "/" + d;
          else {
            var e = b.h.lastIndexOf("/");
            -1 != e && (d = b.h.slice(0, e + 1) + d);
          }
        e = d;
        if (".." == e || "." == e) d = "";
        else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
          d = 0 == e.lastIndexOf("/", 0);
          e = e.split("/");
          for (var f = [], g = 0; g < e.length; ) {
            var h = e[g++];
            "." == h
              ? d && g == e.length && f.push("")
              : ".." == h
              ? ((1 < f.length || (1 == f.length && "" != f[0])) && f.pop(),
                d && g == e.length && f.push(""))
              : (f.push(h), (d = !0));
          }
          d = f.join("/");
        } else d = e;
      }
      c ? (b.h = d) : (c = "" !== a.g.toString());
      c ? Yj(b, Lj(a.g)) : (c = !!a.s);
      c && (b.s = a.s);
      return b;
    };
    Wj = function (a, b, c) {
      a.l = c ? Rj(b, !0) : b;
      a.l && (a.l = a.l.replace(/:$/, ""));
    };
    Xj = function (a, b) {
      if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("K`" + b);
        a.D = b;
      } else a.D = null;
    };
    Yj = function (a, b, c) {
      b instanceof Gj
        ? ((a.g = b), Mj(a.g, a.o))
        : (c || (b = Uj(b, Sj)), (a.g = new Gj(b, a.o)));
    };
    Zj = function (a) {
      var b = Ej(a);
      if ("undefined" == typeof b) throw Error("M");
      var c = new Gj(null);
      a = Ki(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        Array.isArray(f) ? Kj(c, e, f) : c.add(e, f);
      }
      return c;
    };
    ak = {};
    _.bk = {};
    oi = {};
    _.ck = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        128 > e
          ? (b[c++] = e)
          : (2048 > e
              ? (b[c++] = (e >> 6) | 192)
              : (55296 == (e & 64512) &&
                d + 1 < a.length &&
                56320 == (a.charCodeAt(d + 1) & 64512)
                  ? ((e =
                      65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                    (b[c++] = (e >> 18) | 240),
                    (b[c++] = ((e >> 12) & 63) | 128))
                  : (b[c++] = (e >> 12) | 224),
                (b[c++] = ((e >> 6) & 63) | 128)),
            (b[c++] = (e & 63) | 128));
      }
      return b;
    };
    dk = function (a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    };
    dk.prototype.ceil = function () {
      this.top = Math.ceil(this.top);
      this.right = Math.ceil(this.right);
      this.bottom = Math.ceil(this.bottom);
      this.left = Math.ceil(this.left);
      return this;
    };
    dk.prototype.floor = function () {
      this.top = Math.floor(this.top);
      this.right = Math.floor(this.right);
      this.bottom = Math.floor(this.bottom);
      this.left = Math.floor(this.left);
      return this;
    };
    dk.prototype.round = function () {
      this.top = Math.round(this.top);
      this.right = Math.round(this.right);
      this.bottom = Math.round(this.bottom);
      this.left = Math.round(this.left);
      return this;
    };
    dk.prototype.translate = function (a, b) {
      a instanceof O
        ? ((this.left += a.x),
          (this.right += a.x),
          (this.top += a.y),
          (this.bottom += a.y))
        : ((this.left += a),
          (this.right += a),
          "number" === typeof b && ((this.top += b), (this.bottom += b)));
      return this;
    };
    var ek = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    };
    ek.prototype.ceil = function () {
      this.left = Math.ceil(this.left);
      this.top = Math.ceil(this.top);
      this.width = Math.ceil(this.width);
      this.height = Math.ceil(this.height);
      return this;
    };
    ek.prototype.floor = function () {
      this.left = Math.floor(this.left);
      this.top = Math.floor(this.top);
      this.width = Math.floor(this.width);
      this.height = Math.floor(this.height);
      return this;
    };
    ek.prototype.round = function () {
      this.left = Math.round(this.left);
      this.top = Math.round(this.top);
      this.width = Math.round(this.width);
      this.height = Math.round(this.height);
      return this;
    };
    ek.prototype.translate = function (a, b) {
      a instanceof O
        ? ((this.left += a.x), (this.top += a.y))
        : ((this.left += a), "number" === typeof b && (this.top += b));
      return this;
    };
    fk = function (a, b) {
      var c = _.Uc(a);
      return c.defaultView &&
        c.defaultView.getComputedStyle &&
        (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    };
    gk = function (a, b) {
      return (
        fk(a, b) ||
        (a.currentStyle ? a.currentStyle[b] : null) ||
        (a.style && a.style[b])
      );
    };
    hk = function (a) {
      "number" == typeof a && (a += "px");
      return a;
    };
    _.ik = function (a, b) {
      if (b instanceof O) {
        var c = b.x;
        b = b.y;
      } else (c = b), (b = void 0);
      a.style.left = hk(c);
      a.style.top = hk(b);
    };
    jk = function (a) {
      a = a ? _.Uc(a) : document;
      return !_.C || 9 <= Number(_.uc) || _.Zc(_.Vc(a).T)
        ? a.documentElement
        : a.body;
    };
    kk = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    };
    lk = function (a) {
      if (_.C && !(8 <= Number(_.uc))) return a.offsetParent;
      var b = _.Uc(a),
        c = gk(a, "position"),
        d = "fixed" == c || "absolute" == c;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = gk(a, "position")),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d &&
            (a.scrollWidth > a.clientWidth ||
              a.scrollHeight > a.clientHeight ||
              "fixed" == c ||
              "absolute" == c ||
              "relative" == c))
        )
          return a;
      return null;
    };
    mk = function (a) {
      var b = _.Uc(a),
        c = new O(0, 0),
        d = jk(b);
      if (a == d) return c;
      a = kk(a);
      b = _.Ji(_.Vc(b).T);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    };
    nk = function (a) {
      for (
        var b = new dk(0, Infinity, Infinity, 0),
          c = _.Vc(a),
          d = c.T.body,
          e = c.T.documentElement,
          f = Ii(c.T);
        (a = lk(a));

      )
        if (
          !(
            (_.C && 0 == a.clientWidth) ||
            (_.cc && 0 == a.clientHeight && a == d)
          ) &&
          a != d &&
          a != e &&
          "visible" != gk(a, "overflow")
        ) {
          var g = mk(a),
            h = new O(a.clientLeft, a.clientTop);
          g.x += h.x;
          g.y += h.y;
          b.top = Math.max(b.top, g.y);
          b.right = Math.min(b.right, g.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
          b.left = Math.max(b.left, g.x);
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = _.$c(_.hd(c) || window);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left
        ? b
        : null;
    };
    _.ok = function (a, b) {
      var c = new O(0, 0),
        d = _.ad(_.Uc(a));
      if (!_.Wb(d, "parent")) return c;
      do {
        if (d == b) var e = mk(a);
        else (e = kk(a)), (e = new O(e.left, e.top));
        c.x += e.x;
        c.y += e.y;
      } while (
        d &&
        d != b &&
        d != d.parent &&
        (a = d.frameElement) &&
        (d = d.parent)
      );
      return c;
    };
    qk = function (a) {
      var b = pk;
      if ("none" != gk(a, "display")) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    };
    pk = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = _.cc && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect
        ? ((a = kk(a)), new _.Oc(a.right - a.left, a.bottom - a.top))
        : new _.Oc(b, c);
    };
    _.Q = function (a, b) {
      a.style.display = b ? "" : "none";
    };
    rk = function (a) {
      return "rtl" == gk(a, "direction");
    };
    _.sk = function (a, b, c) {
      a = a.style;
      _.bc
        ? (a.MozBoxSizing = c)
        : _.cc
        ? (a.WebkitBoxSizing = c)
        : (a.boxSizing = c);
      a.width = Math.max(b.width, 0) + "px";
      a.height = Math.max(b.height, 0) + "px";
    };
    tk = function (a, b) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var c = a.style.left,
        d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      b = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +b;
    };
    uk = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? tk(a, b) : 0;
    };
    _.vk = function (a) {
      if (_.C) {
        var b = uk(a, "paddingLeft"),
          c = uk(a, "paddingRight"),
          d = uk(a, "paddingTop");
        a = uk(a, "paddingBottom");
        return new dk(d, c, a, b);
      }
      b = fk(a, "paddingLeft");
      c = fk(a, "paddingRight");
      d = fk(a, "paddingTop");
      a = fk(a, "paddingBottom");
      return new dk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    wk = { thin: 2, medium: 4, thick: 6 };
    xk = function (a, b) {
      if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in wk ? wk[b] : tk(a, b);
    };
    _.yk = function (a) {
      if (_.C && !(9 <= Number(_.uc))) {
        var b = xk(a, "borderLeft"),
          c = xk(a, "borderRight"),
          d = xk(a, "borderTop");
        a = xk(a, "borderBottom");
        return new dk(d, c, a, b);
      }
      b = fk(a, "borderLeftWidth");
      c = fk(a, "borderRightWidth");
      d = fk(a, "borderTopWidth");
      a = fk(a, "borderBottomWidth");
      return new dk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b));
    };
    _.zk = function (a, b) {
      return null != a && a.Vb === b;
    };
    Ak = function (a) {
      if (null != a)
        switch (a.hf) {
          case 1:
            return 1;
          case -1:
            return -1;
          case 0:
            return 0;
        }
      return null;
    };
    _.Bk = function (a, b) {
      return a && b && a.Nj && b.Nj
        ? a.Vb !== b.Vb
          ? !1
          : a.toString() === b.toString()
        : a instanceof _.yf && b instanceof _.yf
        ? a.Vb != b.Vb
          ? !1
          : a.toString() == b.toString()
        : a == b;
    };
    Ck = {};
    Dk = {};
    _.Ek = function (a, b) {
      var c = Ck["key_a:"];
      if (void 0 === c || a > c) (Ck["key_a:"] = a), (Dk["key_a:"] = b);
      else if (a == c) throw Error("ma`a`");
    };
    Fk = function () {
      return "";
    };
    Gk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
    Hk = /</g;
    Ik = {
      "\x00": "&#0;",
      "\t": "&#9;",
      "\n": "&#10;",
      "\v": "&#11;",
      "\f": "&#12;",
      "\r": "&#13;",
      " ": "&#32;",
      '"': "&quot;",
      "&": "&amp;",
      "'": "&#39;",
      "-": "&#45;",
      "/": "&#47;",
      "<": "&lt;",
      "=": "&#61;",
      ">": "&gt;",
      "`": "&#96;",
      "\u0085": "&#133;",
      "\u00a0": "&#160;",
      "\u2028": "&#8232;",
      "\u2029": "&#8233;",
    };
    Jk = function (a) {
      return Ik[a];
    };
    Kk = {
      "\x00": "\\0 ",
      "\b": "\\8 ",
      "\t": "\\9 ",
      "\n": "\\a ",
      "\v": "\\b ",
      "\f": "\\c ",
      "\r": "\\d ",
      '"': "\\22 ",
      "&": "\\26 ",
      "'": "\\27 ",
      "(": "\\28 ",
      ")": "\\29 ",
      "*": "\\2a ",
      "/": "\\2f ",
      ":": "\\3a ",
      ";": "\\3b ",
      "<": "\\3c ",
      "=": "\\3d ",
      ">": "\\3e ",
      "@": "\\40 ",
      "\\": "\\5c ",
      "{": "\\7b ",
      "}": "\\7d ",
      "\u0085": "\\85 ",
      "\u00a0": "\\a0 ",
      "\u2028": "\\2028 ",
      "\u2029": "\\2029 ",
    };
    _.Lk = function (a) {
      return Kk[a];
    };
    Mk = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD",
    };
    Nk = function (a) {
      return Mk[a];
    };
    Ok = /[\x00\x22\x26\x27\x3c\x3e]/g;
    _.Pk = function (a) {
      return _.zk(a, _.Vh)
        ? a
        : a instanceof _.Ic
        ? (0, _.M)(_.Jc(a).toString())
        : a instanceof _.Ic
        ? (0, _.M)(_.Jc(a).toString())
        : (0, _.M)(String(String(a)).replace(Ok, Jk), Ak(a));
    };
    Qk = /[\x00\x22\x27\x3c\x3e]/g;
    _.R = function (a) {
      if (_.zk(a, _.Vh)) {
        var b = String;
        a = String(a.Aa()).replace(Gk, "").replace(Hk, "&lt;");
        b = b(a).replace(Qk, Jk);
      } else b = String(a).replace(Ok, Jk);
      return b;
    };
    _.Rk =
      /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
    Sk =
      /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
    _.Tk = function (a) {
      return String(a).replace(Sk, Nk);
    };
    Uk = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i;
    _.Vk = function (a) {
      _.zk(a, ak) || _.zk(a, _.bk)
        ? (a = _.Tk(a))
        : a instanceof _.yc
        ? (a = _.Tk(_.Qh(a)))
        : a instanceof _.yc
        ? (a = _.Tk(_.Qh(a)))
        : a instanceof _.Db
        ? (a = _.Tk(_.Ma(a).toString()))
        : a instanceof _.Db
        ? (a = _.Tk(_.Ma(a).toString()))
        : ((a = String(a)),
          (a = Uk.test(a) ? a.replace(Sk, Nk) : "about:invalid#zSoyz"));
      return a;
    };
    Wk =
      /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    _.Xk = function (a) {
      _.zk(a, ak) || _.zk(a, _.bk)
        ? (a = _.Tk(a))
        : a instanceof _.yc
        ? (a = _.Tk(_.Qh(a)))
        : a instanceof _.yc
        ? (a = _.Tk(_.Qh(a)))
        : a instanceof _.Db
        ? (a = _.Tk(_.Ma(a).toString()))
        : a instanceof _.Db
        ? (a = _.Tk(_.Ma(a).toString()))
        : ((a = String(a)),
          (a = Wk.test(a) ? a.replace(Sk, Nk) : "about:invalid#zSoyz"));
      return a;
    };
    Yk = function (a) {
      return function () {
        return a;
      };
    };
    Zk = function (a, b) {
      for (var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? (a + d) & 4294967295 : a ^ d;
      }
      return a;
    };
    al = function (a) {
      var b = $k.split("."),
        c = Number(b[0]) || 0;
      a = _.ck(a);
      for (var d = c, e = 0; e < a.length; e++)
        (d += a[e]), (d = Zk(d, "+-a^+6"));
      d = Zk(d, "+-3^+b+-f");
      d ^= Number(b[1]) || 0;
      0 > d && (d = (d & 2147483647) + 2147483648);
      b = d % 1e6;
      return b.toString() + "." + (b ^ c);
    };
    bl = function () {
      var a = Yk(String.fromCharCode(116)),
        b = Yk(String.fromCharCode(107));
      a = [a(), a()];
      a[1] = b();
      return a.join("");
    };
    var cl = window.google && google.translate && google.translate._const,
      Bi,
      $k,
      il,
      ml,
      ql,
      sl;
    cl ||
      (cl = {
        _cac: "",
        _cam: "",
        _cest: new Date(),
        _cjlc: "",
        _cl: "",
        _cuc: "",
        _cnad: !1,
        _cnal: {},
        Xl: "",
        _pah: "",
        _pas: "",
        _pbi: "",
        _pci: "",
        _phf: "",
        _pli: "",
        _plla: "",
        _pmi: "",
        _ps: "",
        _pta: "",
        _puh: "",
      });
    _.dl =
      (window.google && window.google.translate && window.google.translate.v) ||
      "";
    _.S = cl._cl || "en";
    Bi = cl._cuc;
    _.el = cl._cnad;
    _.fl = cl._cest;
    _.gl = cl._cnal || {};
    _.Ci = "lib" == cl._cam ? 1 : 0;
    _.hl = (cl._cac || "te") + (1 == _.Ci ? "_lib" : "");
    $k = (function () {
      function a(d) {
        return function () {
          return d;
        };
      }
      var b = String.fromCharCode(107),
        c = a(String.fromCharCode(116));
      b = a(b);
      c = [c(), c()];
      c[1] = b();
      return cl["_c" + c.join(b())] || "";
    })();
    il = cl._pah || "";
    _.jl = cl._pas || "https://";
    _.kl = cl._pbi || "";
    _.ll = cl._pci || "";
    ml = cl._plla || "";
    _.nl = cl._pli || "";
    _.ol = cl._pmi || "";
    _.pl = cl._ps || "";
    ql = cl._puh || "";
    _.rl = "//" + ql + "/translate_suggestion?client=" + _.hl;
    sl = "//" + il + "/translate_voting?client=" + _.hl;
    _.tl =
      "https://www.google.com/support/translate" +
      ("en" == _.S ? "" : "#googtrans/en/" + _.S);
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    _.ul = function (a) {
      var b = "Jc";
      if (a.Jc && a.hasOwnProperty(b)) return a.Jc;
      b = new a();
      return (a.Jc = b);
    };
    /*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
    _.vl =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      );
    var yl, Fl, Gl, Hl, Il;
    _.wl = function (a) {
      for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
      return b;
    };
    _.xl = function (a) {
      this.h = a ? [a] : [];
      this.g = [0];
      this.j = !1;
    };
    _.xl.prototype.register = function (a) {
      if (this.j) return a || function () {};
      this.g.push(0);
      var b = this.g.length - 1;
      return (0, _.y)(function () {
        this.g[b]++;
        a && a.apply(null, arguments);
        yl(this);
      }, this);
    };
    _.xl.prototype.delay = function (a) {
      return this.j
        ? a
        : (0, _.y)(function () {
            if (this.j) a.apply(null, arguments);
            else {
              var b = arguments;
              this.h.push(function () {
                a.apply(null, b);
              });
            }
          }, this);
    };
    _.xl.prototype.finish = function () {
      this.g[0] = 1;
      yl(this);
    };
    yl = function (a) {
      for (var b = 0; b < a.g.length; ++b) if (0 == a.g[b]) return;
      a.j = !0;
      for (b = 0; b < a.h.length; ++b) {
        var c = a.h[b];
        a.h[b] = null;
        c.call();
      }
      a.h = [];
      a.g = [];
    };
    _.zl = function (a) {
      this.j = a;
      this.h = this.g = !1;
    };
    _.Al = function (a, b) {
      return (0, _.y)(function () {
        b && b.apply(null, arguments);
        this.h ? this.g || (this.j.call(), (this.g = !0)) : (this.g = !0);
      }, a);
    };
    _.zl.prototype.finish = function () {
      this.h || ((this.h = !0), this.g && this.j.call());
    };
    var Bl = function (a, b, c) {
        this.g = b;
        this.B = a;
        this.s = c || 0;
        this.j = this.h = !1;
      },
      Cl = function (a) {
        a.h || a.o();
      };
    Bl.prototype.o = function () {
      (this.h = (this.j = !!this.B.call()) || 0 >= --this.s)
        ? (this.g.call(null, this.j), (this.l = 0))
        : (this.l = window.setTimeout((0, _.y)(this.o, this), 30));
    };
    Bl.prototype.cancel = function () {
      this.l && window.clearTimeout(this.l);
      this.h = !0;
      this.g.call(null, this.j);
    };
    _.Dl = function (a, b) {
      return function () {
        a.dispatchEvent(b);
      };
    };
    _.El = function (a) {
      a = (0, _.Sb)(a).toLowerCase().replace("_", "-");
      if ("zh-cn" == a) return "zh-CN";
      if ("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a;
    };
    Fl = function (a) {
      var b = [],
        c;
      for (c in a)
        if (a[c] !== Object.prototype[c]) {
          var d = _.Qc(c);
          if ("array" == _.kb(a[c]))
            for (var e = 0; e < a[c].length; ++e)
              b.push(d + "=" + _.Qc(a[c][e]));
          else b.push(d + "=" + _.Qc(a[c]));
        }
      return b.join("&");
    };
    _.si = function (a, b) {
      b = b || {};
      b.nca = a;
      b.client = _.hl;
      _.dl && (b.logld = "v" + _.dl);
      var c = new Image();
      c.src = "//" + ql + "/gen204?" + Fl(b);
      c.onload = function () {
        c.onload = null;
      };
    };
    Gl = function () {
      var a = {};
      try {
        for (var b in Object.prototype) {
          var c = Object.prototype[b];
          delete Object.prototype[b];
          a[b] = c;
        }
      } catch (d) {
        return {};
      }
      return a;
    };
    Hl = function (a) {
      for (var b in a) Object.prototype[b] = a[b];
    };
    Il = function (a) {
      for (var b in a) if (a[b] !== Object.prototype[b]) return !1;
      return !0;
    };
    var Jl;
    _.ri = null;
    Jl = function () {};
    Jl.prototype.attach = function (a, b, c) {
      for (var d in c)
        c[d] !== Object.prototype[d] &&
          (b[d] =
            "function" === typeof c[d] ? c[d] : _.pb(ti, a, Number(c[d])));
    };
    _.Kl = new Jl();
    var ui = function (a) {
      _.I.call(this, a);
    };
    _.x(ui, _.I);
    /*

 SPDX-License-Identifier: Apache-2.0
*/
    var Ll = function (a) {
        this.url = a;
        this.timeout = -1;
        this.j = this.h = "callback";
        this.g = this.Fc = null;
      },
      Pl = function (a, b) {
        b = void 0 === b ? {} : b;
        a.g = Dj();
        var c = new Vj(a.url),
          d = new Map();
        a.j && d.set(a.j, a.h);
        c.g.o(Zj(b), d);
        Ml(a)
          .then(function () {
            Nl(a, c.toString());
          })
          .then(function () {
            return a.g.promise;
          })
          .then(
            function () {
              Ol(a);
            },
            function () {
              Ol(a);
            }
          );
        0 < a.timeout &&
          (a.l = setTimeout(function () {
            a.g.reject("Timeout!");
          }, a.timeout));
        return a.g.promise;
      },
      Nl = function (a, b) {
        var c = new MessageChannel();
        a.Fc.contentWindow.postMessage({ url: b, callbackName: a.h }, "*", [
          c.port2,
        ]);
        c.port1.onmessage = function (d) {
          var e = {};
          void 0 !== a.l && (clearTimeout(a.l), (a.l = void 0));
          void 0 === d.data &&
            a.g.reject("Callback called, but no data received");
          "string" !== typeof d.data &&
            a.g.reject("Exploitation attempt! Data is not a string!");
          try {
            e = JSON.parse(d.data);
          } catch (f) {
            a.g.reject("Invalid Data received: " + f.message);
          }
          a.g.resolve(e);
        };
      },
      Ml = function (a) {
        var b = Dj(),
          c = _.bd(document, "IFRAME");
        if (!c.sandbox) throw Error("na");
        c.sandbox.value = "allow-scripts";
        c.style.display = "none";
        a.Fc = c;
        a = vi();
        a = _.bj(_.Lc, ej(_.Kc(_.Jc(ji(a)).toString())));
        c.srcdoc = _.Jc(a);
        a = _.Fb(
          "data:text/html;charset=UTF-8;base64," + btoa(_.Jc(a).toString())
        );
        c.src = _.Ma(a).toString();
        c.addEventListener(
          "load",
          function () {
            return b.resolve(c);
          },
          !1
        );
        c.addEventListener(
          "error",
          function (d) {
            b.reject(d);
          },
          !1
        );
        document.documentElement.appendChild(c);
        return b.promise;
      },
      Ol = function (a) {
        null !== a.Fc &&
          (document.documentElement.removeChild(a.Fc), (a.Fc = null));
      };
    var Ql = function (a, b) {
      _.A.call(this);
      this.g = new Vj(a);
      if (b)
        for (var c in b) b[c] !== Object.prototype[c] && this.g.g.set(c, b[c]);
    };
    _.x(Ql, _.A);
    Ql.prototype.ub = function () {
      return !0;
    };
    Ql.prototype.Xa = function () {
      return this.ub();
    };
    Ql.prototype.send = function () {
      return null;
    };
    Ql.prototype.cancel = function () {};
    var Rl = function (a, b, c, d) {
      Ql.call(this, a, b);
      this.j = null == d || !!d;
      a = this.h = new Ll(this.g);
      a.h = "callback";
      a.j = void 0 === c ? "callback" : c;
    };
    _.x(Rl, Ql);
    Rl.prototype.ub = function () {
      return this.j;
    };
    Rl.prototype.send = function (a, b) {
      a = Pl(this.h, a);
      a.then(b);
      return a;
    };
    Rl.prototype.cancel = function (a) {
      a.cancel();
    };
    var Sl = function (a, b) {
      Ql.call(this, a, b);
      this.j = {};
      this.h = this.l = 0;
      window.XMLHttpRequest &&
        "withCredentials" in new XMLHttpRequest() &&
        (this.h = 1);
      !this.h &&
        window.XDomainRequest &&
        "file:" != window.location.protocol &&
        ((this.h = 2), this.g.g.set("u", window.location.href));
    };
    _.x(Sl, Ql);
    Sl.prototype.ub = function () {
      return !!this.h;
    };
    Sl.prototype.send = function (a, b) {
      var c = Gl(),
        d = ++this.l,
        e = {},
        f = {};
      "q" in a && ((f.q = a.q), delete a.q);
      a.mode = this.h;
      1 == this.h
        ? ((e.hc = new _.Yf()),
          _.D(
            e.hc,
            "complete",
            (0, _.y)(function () {
              e.td ||
                (e.hc.ue()
                  ? b(e.hc.Cd())
                  : (this.Dh(), b(null, e.hc.Cd() || null)),
                Tl(this, d));
            }, this)
          ),
          _.D(
            e.hc,
            "timeout",
            (0, _.y)(function () {
              e.td || (this.Eh(), Tl(this, d));
            }, this)
          ),
          e.hc.send(this.g.toString() + "&" + Fl(a), "POST", Fl(f), {
            "Content-Type": "application/x-www-form-urlencoded",
          }))
        : ((e.Ib = new XDomainRequest()),
          (e.Ib.timeout = 2e4),
          (e.Ib.onload = (0, _.y)(function () {
            e.td || (b(e.Ib.responseText), Tl(this, d));
          }, this)),
          (e.Ib.onerror = (0, _.y)(function () {
            e.td || (this.Dh(), b(null), Tl(this, d));
          }, this)),
          (e.Ib.ontimeout = (0, _.y)(function () {
            e.td || (this.Eh(), b(null), Tl(this, d));
          }, this)),
          e.Ib.open("POST", this.g.toString() + "&" + Fl(a)),
          e.Ib.send(Fl(f)));
      this.j[d] = e;
      Hl(c);
      return d;
    };
    Sl.prototype.cancel = function (a) {
      var b = this.j[a];
      b && ((b.td = !0), b.Ib && b.Ib.abort(), Tl(this, a));
    };
    var Tl = function (a, b) {
      var c = a.j[b];
      c &&
        (c.hc ? (c.hc.O(), (c.hc = null)) : c.Ib && (c.Ib = null),
        delete a.j[b]);
    };
    Sl.prototype.K = function () {
      Ql.prototype.K.call(this);
      for (var a in this.j) this.cancel(a);
    };
    _.Kl.attach(17170, Sl.prototype, { Eh: 1, Dh: 2 });
    var Ul = function (a, b, c) {
      Ql.call(this, a, c);
      this.j = b.proxyIsSupported;
      this.l = b.proxySend;
      this.h = b.proxyCancel;
    };
    _.x(Ul, Ql);
    Ul.prototype.ub = function () {
      return this.j();
    };
    Ul.prototype.send = function (a, b) {
      return this.l(this.g.toString(), a, b);
    };
    Ul.prototype.cancel = function (a) {
      this.h(a);
    };
    var Vl = function (a, b) {
      _.A.call(this);
      this.h = a;
      this.g = b ? b : null;
    };
    _.x(Vl, _.A);
    var Wl = function (a) {
      if ("array" != _.kb(a)) var b = [[a, 200]];
      else if (2 == a.length && "array" != _.kb(a[0]) && "array" != _.kb(a[1]))
        b = [
          [a[0], 200, a[1]],
          [a[1], 200, a[1]],
        ];
      else {
        b = [];
        for (var c = 0; c < a.length; ++c)
          b[c] = "array" != _.kb(a[c]) ? [a[c], 200] : [a[c][0], 200, a[c][1]];
      }
      return b;
    };
    Vl.prototype.l = function (a) {
      var b = this;
      return function (c) {
        if (c)
          try {
            var d = c.indexOf("\x00");
            0 <= d && (c = c.substr(0, d));
            var e = JSON.parse(c);
          } catch (f) {
            (e = null), b.Sj();
          }
        e ? a(Wl(e), 200) : a([], 500);
      };
    };
    Vl.prototype.j = function (a) {
      return function (b) {
        b ? a(Wl(b), 200) : a([], 500);
      };
    };
    Vl.prototype.K = function () {
      _.A.prototype.K.call(this);
    };
    _.Kl.attach(47504, Vl.prototype, {
      Sj: function () {
        _.si("te_afbr");
      },
    });
    _.Xl = function (a) {
      return a;
    };
    _.Yl = {
      0: "NO_ERROR",
      1: "UNKNOWN_ERROR",
      2: "JWT_TOKEN_CANNOT_PARSE",
      3: "JWT_TOKEN_MISS_PARAM",
      4: "JWT_TOKEN_INVALID_ISS",
      5: "JWT_TOKEN_INVALID",
      6: "INTERNAL_SERVER_ERROR",
      7: "OUT_OF_QUOTA",
      8: "INTERNAL_SERVER_ERROR",
    };
    _.$l = function (a, b, c, d, e, f) {
      _.A.call(this);
      var g;
      b
        ? (g = { client: b })
        : (g = { anno: 3, client: _.hl, format: "html", v: "1.0" });
      c && (g.sp = c);
      g.key = a;
      _.dl && (g.logld = "v" + _.dl);
      this.s = d || null;
      this.Oc = e || null;
      this.g = null;
      this.h = { ud: (0, _.y)(this.H, this), Nf: 300 };
      a = this.o = new Vl(g, f);
      b = _.jl + ml;
      this.l = a.g
        ? new Ul(b, a.g, { client: _.hl })
        : new Rl(b, { client: _.hl });
      a = this.o;
      if (a.g) {
        if (!a.g) throw Error("oa");
        a = [
          {
            Ea: new Ul(_.jl + il + "/translate_a/t", a.g, a.h),
            ud: (0, _.y)(a.j, a),
            Ae: 1900,
            Of: 4294967295,
            Mf: -1,
            gg: 0,
            ie: !1,
          },
        ];
      } else
        (b = _.jl + il),
          (a = [
            {
              Ea: new Sl(b + "/translate_a/t", a.h),
              ud: (0, _.y)(a.l, a),
              Ae: 30720,
              Of: 4294967295,
              Mf: -1,
              gg: 0,
              ie: !1,
            },
            {
              Ea: new Rl(b + "/translate_a/t", a.h, "cb", _.C && 7 >= _.qc),
              ud: (0, _.y)(a.j, a),
              Ae: 1900,
              Of: 4294967295,
              Mf: -1,
              gg: 3,
              ie: !0,
            },
          ]);
      this.B = new Zl(a);
      this.j = !1;
      for (b = 0; b < a.length; ++b) this.j = this.j || a[b].Ea.ub();
      this.j || this.Tj();
    };
    _.x(_.$l, _.A);
    _.$l.prototype.H = function (a) {
      return function (b) {
        if (b)
          try {
            var c = JSON.parse(b);
          } catch (d) {
            c = null;
          }
        a((c && c[1]) || void 0);
      };
    };
    _.$l.prototype.initialize = function (a) {
      this.D ||
        ((this.D = !0),
        this.B.start(
          (0, _.y)(function (b) {
            b && ((this.g = b), (this.h.Ea = b.Ea));
            a();
          }, this)
        ));
    };
    _.$l.prototype.ub = function () {
      return this.j;
    };
    _.$l.prototype.Xa = function () {
      return null !== this.g && null !== this.g.Ea && this.g.Ea.Xa();
    };
    _.am = function (a, b, c) {
      b = a.h.ud(b);
      a.h.Ea.send({ q: c.substring(0, a.h.Nf), sl: "auto", tl: "en" }, b);
    };
    _.$l.prototype.translate = function (a, b, c, d, e, f, g, h) {
      var l = this,
        m = this.g.ud(a),
        n = { q: b, sl: c, tl: d };
      n = _.Xl(n);
      n.tc = e;
      f && (n.ctt = 1);
      g && (n.dom = 1);
      h && (n.sr = 1);
      n[bl()] = al(b.join(""));
      return this.s
        ? this.s.h().then(
            function (p) {
              null != p && ((n.jwtt = p), (n.rurl = location.hostname));
              return l.g.Ea.send(n, (0, _.y)(bm(m), l));
            },
            function (p) {
              p && l.Oc && l.Oc(p);
            }
          )
        : this.g.Ea.send(n, m);
    };
    var bm = function (a) {
        return function (b, c) {
          if (c && this.Oc) {
            try {
              var d = JSON.parse(c).error_code;
            } catch (e) {
              d = null;
            }
            c = _.Yl[1];
            this.Oc(null == d ? c : _.Yl[d] || c);
          }
          a(b);
        };
      },
      cm = function (a, b) {
        b instanceof _.be
          ? b.then(function (c) {
              a.g.Ea.cancel(c);
            })
          : a.g.Ea.cancel(b);
      },
      dm = function (a) {
        return a.g.ie ? a.g.Ae - new Vj(a.g.Ea.g).toString().length : a.g.Ae;
      };
    _.$l.prototype.K = function () {
      _.A.prototype.K.call(this);
      this.g && (this.g.Ea.O(), (this.g.Ea = null));
      this.h.Ea = null;
      this.l.O();
      this.l = null;
    };
    _.Kl.attach(7361, _.$l.prototype, {
      Tj: function () {
        _.si("te_au");
      },
    });
    var Zl = function (a) {
      this.h = a;
    };
    Zl.prototype.start = function (a) {
      this.g = a;
      this.j = 0;
      em(this);
    };
    var em = function (a) {
      if (a.j >= a.h.length) a.g(null);
      else {
        var b = a.h[a.j++];
        b.sk
          ? Cl(
              new Bl(
                (0, _.y)(b.Ea.Xa, b.Ea),
                (0, _.y)(function (c) {
                  c ? this.g(b) : em(this);
                }, a),
                b.sk
              )
            )
          : b.Ea.Xa()
          ? a.g(b)
          : em(a);
      }
    };
    var fm = function () {
      this.g = [];
    };
    fm.prototype.add = function (a) {
      this.g.push(a);
    };
    var gm = function () {
      this.g = [];
    };
    _.x(gm, fm);
    gm.prototype.add = function (a) {
      if (a) for (; a(); );
    };
    gm.nc = function () {
      return _.ul(gm);
    };
    _.im = function (a) {
      this.g = [];
      this.h = 0.5;
      hm(this, a);
      this.l = 0;
      this.j = !0;
      this.o = (0, _.y)(this.s, this);
    };
    _.x(_.im, fm);
    var hm = function (a, b) {
      1 < b ? (a.h = 1) : 0.001 > b ? (a.h = 0.001) : b && (a.h = b);
    };
    _.im.prototype.add = function (a) {
      fm.prototype.add.call(this, a);
      this.j && jm(this);
    };
    var jm = function (a) {
      a.j = !1;
      window.setTimeout(a.o, Math.min(a.l, 5e3));
    };
    _.im.prototype.s = function () {
      var a = new Date().getTime();
      do {
        this.g.length && ((this.g[0] && this.g[0]()) || this.g.shift());
        var b = !!this.g.length;
        var c = 95 * this.h + 5;
        var d = new Date().getTime() - a;
      } while (b && d < c);
      this.l = Math.ceil(d * (1 / this.h - 1)) + 1;
      b ? jm(this) : (this.j = !0);
    };
    var km = _.wl(
        "A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(
          " "
        )
      ),
      lm = _.wl(
        "APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(
          " "
        )
      ),
      mm = _.wl(
        "BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")
      ),
      nm = _.wl(["submit", "button"]);
    var om;
    _.pm = function (a, b, c, d, e) {
      this.h = !!b;
      this.node = null;
      this.g = 0;
      this.pg = !1;
      this.j = !c;
      a && om(this, a, d);
      this.depth = void 0 != e ? e : this.g || 0;
      this.h && (this.depth *= -1);
    };
    _.z(_.pm, _.Xe);
    om = function (a, b, c, d) {
      if ((a.node = b))
        a.g =
          "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.h ? -1 : 1;
      "number" === typeof d && (a.depth = d);
    };
    _.qm = function (a) {
      var b = a.h ? -1 : 1;
      a.g == b && ((a.g = -1 * b), (a.depth += a.g * (a.h ? -1 : 1)));
    };
    _.pm.prototype.next = function () {
      if (this.pg) {
        if (!this.node || (this.j && 0 == this.depth)) return _.Ye;
        var a = this.node;
        var b = this.h ? -1 : 1;
        if (this.g == b) {
          var c = this.h ? a.lastChild : a.firstChild;
          c ? om(this, c) : om(this, a, -1 * b);
        } else
          (c = this.h ? a.previousSibling : a.nextSibling)
            ? om(this, c)
            : om(this, a.parentNode, -1 * b);
        this.depth += this.g * (this.h ? -1 : 1);
      } else this.pg = !0;
      return (a = this.node) ? { value: a, done: !1 } : _.Ye;
    };
    _.pm.prototype.splice = function (a) {
      var b = this.node,
        c = this.h ? 1 : -1;
      this.g == c &&
        ((this.g = -1 * c), (this.depth += this.g * (this.h ? -1 : 1)));
      this.h = !this.h;
      _.pm.prototype.next.call(this);
      this.h = !this.h;
      c = _.da(arguments[0]) ? arguments[0] : arguments;
      for (var d = c.length - 1; 0 <= d; d--) rj(c[d], b);
      _.sj(b);
    };
    var sm = function (a, b) {
        this.j = _.C ? [] : null;
        this.h = [];
        this.done = !1;
        for (
          this.g = new _.pm(a, !1, b, 3 === a.nodeType ? 0 : 1, 1);
          (a = a.parentNode);

        )
          rm(this, a, !0);
        this.h.push(!1);
        this.h.reverse();
        for (a = 1; a < this.h.length; ++a)
          null == this.h[a] && (this.h[a] = this.h[a - 1]);
      },
      rm = function (a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = ((b.style && b.style.whiteSpace) || "").substring(0, 3);
        "pre" === d || (!d && "PRE" === b.tagName)
          ? a.h.push(!0)
          : d && "pre" !== d
          ? a.h.push(!1)
          : c
          ? a.h.push(null)
          : a.h.push(a.h[a.h.length - 1]);
      },
      tm = function (a) {
        return !!a.h[a.h.length - 1];
      };
    sm.prototype.node = function () {
      return this.g.node;
    };
    sm.prototype.depth = function () {
      return this.g.depth;
    };
    sm.prototype.next = function () {
      try {
        this.j && 0 < this.j.length && -1 === this.g.g && this.j.length--;
        -1 === this.g.g && this.h.length--;
        if (
          this.j &&
          0 < this.j.length &&
          1 !== this.g.g &&
          !this.g.node.nextSibling
        )
          om(this.g, this.j[this.j.length - 1], -1, this.g.depth - 1);
        else {
          if (this.g.next().done) {
            this.done = !0;
            return;
          }
          this.j && 1 === this.g.g && this.j.push(this.g.node);
        }
        1 === this.g.g && this.g.pg && rm(this, this.g.node);
      } catch (a) {
        this.Zj(a), (this.done = !0);
      }
    };
    _.Kl.attach(52754, sm.prototype, { Zj: 1 });
    var um;
    um = function () {
      return "[msg_undefined]";
    };
    _.T = {};
    (function () {
      var a = function (b) {
        return function () {
          return b;
        };
      };
      _.T = {
        Ze: a(0),
        Ne: a(1),
        wg: a(2),
        Cl: a(3),
        Ji: a(4),
        yg: a(5),
        Ai: a(45),
        Bi: a(6),
        Ig: a(7),
        Qc: a(8),
        Li: a(9),
        Rl: a(10),
        Oi: a(11),
        Jg: a(12),
        Ol: a(13),
        Gi: a(14),
        Nl: a(15),
        Kg: a(16),
        Tl: a(17),
        Mi: a(18),
        Vk: a(19),
        Bl: a(20),
        mi: a(21),
        Hi: a(22),
        Il: a(23),
        Hl: a(24),
        Ei: a(25),
        Sl: a(26),
        Ki: a(27),
        Fi: a(28),
        Ci: a(29),
        Ni: a(30),
        Uk: a(32),
        Sk: a(33),
        Ul: a(34),
        gl: a(35),
        al: a(36),
        fl: a(37),
        Ii: a(38),
        rl: a(39),
        Tk: a(40),
        Hg: a(41),
        Eg: a(46),
        Di: a(47),
        li: a(48),
        ki: a(49),
        ji: a(50),
      };
    })();
    _.vm = function () {
      var a = Ai("google.translate.m");
      if (a)
        for (var b in _.T)
          if (_.T[b] !== Object.prototype[_.T[b]] && _.T[b]) {
            var c = _.T[b]();
            _.T[b] = a[c] ? a[c] : um;
          }
    };
    var xm;
    _.wm = function (a) {
      var b = a.bd,
        c = a.Fh;
      a.yh
        ? (b =
            "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" +
            String(b).replace(_.Rk, _.Lk) +
            "',sizingMethod='scale');\"></span>")
        : ((a = _.T.Qc),
          (b =
            '<img src="' +
            _.R(_.Xk(b)) +
            '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' +
            _.R(a) +
            '">'));
      a = _.T.Qc;
      return (0, _.M)(
        '<span style="white-space:nowrap"><a class="goog-logo-link" href="' +
          _.R(_.Vk(c)) +
          '" target="_blank">' +
          b +
          _.Pk(a) +
          "</a></span>"
      );
    };
    xm = function (a, b) {
      a = { bd: a.bd, dir: a.dir, tg: a.tg };
      var c = Dk["key_a:"];
      c || (c = Dk["key_a:"]);
      b = (c ? c : Fk)(a, b);
      return (0, _.M)(b);
    };
    _.Ek(0, function (a) {
      var b = a.bd,
        c = _.T.Qc,
        d = _.T.Hg;
      return (0,
      _.M)('<div id="goog-gt-tt" class="skiptranslate" dir="' + _.R(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + _.R(_.Xk(b)) + '" width="20" height="20" alt="Google ' + _.R(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + _.Pk(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>');
    });
    var ym = function (a) {
        var b = a.method,
          c = a.ej,
          d = a.dir,
          e = _.T.Hi,
          f = _.T.Ne;
        a =
          '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' +
          _.R(_.Vk(a.Pi)) +
          '" method="' +
          _.R(b) +
          '"><div class="form-buttons" style="text-align:' +
          (_.Bk(d, "rtl") ? "right" : "left") +
          '"><input class="activity-submit" type="button" value="' +
          _.R(e) +
          '"><input class="activity-cancel" type="button" value="' +
          _.R(f) +
          '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
        b = c.length;
        for (d = 0; d < b; d++)
          a += '<input type="hidden" name="' + _.R(c[d]) + '"/>';
        return (0, _.M)(a + "</div></form></div>");
      },
      zm = function () {
        return (0, _.M)(
          '<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>'
        );
      };
    var Am = function () {};
    Mi(Am);
    Am.prototype.g = 0;
    var Hm, Im;
    _.N = function (a) {
      _.E.call(this);
      this.g = a || _.Vc();
      this.ma = Bm;
      this.W = null;
      this.tb = !1;
      this.j = null;
      this.H = void 0;
      this.M = this.D = this.B = null;
      this.Ha = !1;
    };
    _.z(_.N, _.E);
    _.N.prototype.Na = Am.nc();
    var Bm = null,
      Cm = function (a, b) {
        switch (a) {
          case 1:
            return b ? "disable" : "enable";
          case 2:
            return b ? "highlight" : "unhighlight";
          case 4:
            return b ? "activate" : "deactivate";
          case 8:
            return b ? "select" : "unselect";
          case 16:
            return b ? "check" : "uncheck";
          case 32:
            return b ? "focus" : "blur";
          case 64:
            return b ? "open" : "close";
        }
        throw Error("pa");
      };
    _.N.prototype.Wb = function () {
      return this.W || (this.W = ":" + (this.Na.g++).toString(36));
    };
    var Dm = function (a, b) {
      if (a.B && a.B.M) {
        var c = a.B.M,
          d = a.W;
        d in c && delete c[d];
        c = a.B.M;
        if (null !== c && b in c) throw Error("x`" + b);
        c[b] = a;
      }
      a.W = b;
    };
    _.N.prototype.A = function () {
      return this.j;
    };
    var Em = function (a, b) {
        return a.j ? Hi(b, a.j || a.g.T) : null;
      },
      Fm = function (a) {
        a.H || (a.H = new _.F(a));
        return a.H;
      };
    _.N.prototype.Ge = function (a) {
      if (this.B && this.B != a) throw Error("ra");
      _.N.P.Ge.call(this, a);
    };
    _.N.prototype.S = function () {
      this.j = _.nh(this.g, "DIV");
    };
    _.N.prototype.Ba = function (a) {
      _.Gm(this, a);
    };
    _.Gm = function (a, b, c) {
      if (a.tb) throw Error("sa");
      a.j || a.S();
      b ? b.insertBefore(a.j, c || null) : a.g.T.body.appendChild(a.j);
      (a.B && !a.B.tb) || a.ka();
    };
    Hm = function (a, b) {
      if (a.tb) throw Error("sa");
      if (b && a.Ag(b)) {
        a.Ha = !0;
        var c = _.Uc(b);
        (a.g && a.g.T == c) || (a.g = _.Vc(b));
        a.za(b);
        a.ka();
      } else throw Error("ta");
    };
    _.k = _.N.prototype;
    _.k.Ag = function () {
      return !0;
    };
    _.k.za = function (a) {
      this.j = a;
    };
    _.k.ka = function () {
      this.tb = !0;
      Im(this, function (a) {
        !a.tb && a.A() && a.ka();
      });
    };
    _.k.ia = function () {
      Im(this, function (a) {
        a.tb && a.ia();
      });
      this.H && _.Of(this.H);
      this.tb = !1;
    };
    _.k.K = function () {
      this.tb && this.ia();
      this.H && (this.H.O(), delete this.H);
      Im(this, function (a) {
        a.O();
      });
      !this.Ha && this.j && _.sj(this.j);
      this.B = this.j = this.M = this.D = null;
      _.N.P.K.call(this);
    };
    _.U = function (a, b) {
      return a.Wb() + "." + b;
    };
    Im = function (a, b) {
      a.D && a.D.forEach(b, void 0);
    };
    _.N.prototype.Yf = function (a) {
      for (var b = []; this.D && 0 != this.D.length; ) {
        var c = b,
          d = c.push,
          e = this.D ? this.D[0] || null : null,
          f = a;
        if (e) {
          var g = "string" === typeof e ? e : e.Wb();
          this.M && g
            ? ((e = this.M),
              (e = (null !== e && g in e ? e[g] : void 0) || null))
            : (e = null);
          if (g && e) {
            var h = this.M;
            g in h && delete h[g];
            _.va(this.D, e);
            f && (e.ia(), e.j && _.sj(e.j));
            f = e;
            if (null == f) throw Error("qa");
            f.B = null;
            _.N.P.Ge.call(f, null);
          }
        }
        if (!e) throw Error("ua");
        d.call(c, e);
      }
      return b;
    };
    _.z(zi, _.N);
    _.k = zi.prototype;
    _.k.Ee = function (a) {
      this.o = a;
    };
    _.k.Pd = function () {
      if (!this.tb) throw Error("va");
      if (!this.o) throw Error("wa");
    };
    _.k.gd = function () {};
    _.k.O = function () {
      this.qb() || (zi.P.O.call(this), delete this.ze);
    };
    _.k.Pa = function () {
      return this.o;
    };
    var Lm = function () {
        _.E.call(this);
        this.l = "closure_frame" + Jm++;
        this.j = [];
        Km[this.l] = this;
      },
      Mm;
    _.z(Lm, _.E);
    var Km = {},
      Jm = 0,
      Nm = function (a, b) {
        var c = _.Vc(a);
        Fj(b, function (d, e) {
          Array.isArray(d) || (d = [d]);
          _.Nb(d, function (f) {
            f = c.S("INPUT", { type: "hidden", name: e, value: f });
            a.appendChild(f);
          });
        });
      };
    _.k = Lm.prototype;
    _.k.pa = null;
    _.k.Ga = null;
    _.k.Hc = null;
    _.k.hk = 0;
    _.k.Jb = !1;
    _.k.Le = !1;
    _.k.If = null;
    _.k.Gc = null;
    _.k.send = function (a, b, c, d) {
      if (this.Jb) throw Error("xa");
      a = new Vj(a);
      b = b ? b.toUpperCase() : "GET";
      c && ((c = _.Sc()), a.g.set("zx", c));
      Mm ||
        ((Mm = _.pj("FORM")),
        (Mm.acceptCharset = "utf-8"),
        (c = Mm.style),
        (c.position = "absolute"),
        (c.visibility = "hidden"),
        (c.top = c.left = "-10px"),
        (c.width = c.height = "10px"),
        (c.overflow = "hidden"),
        document.body.appendChild(Mm));
      this.pa = Mm;
      "GET" == b && Nm(this.pa, a.g);
      d && Nm(this.pa, d);
      fj(this.pa, _.zc(a.toString()));
      this.pa.method = b;
      Om(this);
      Pm(this);
    };
    var Qm = function (a, b) {
      if (a.Jb) throw Error("xa");
      var c = new Vj(b.action);
      a.pa = b;
      fj(a.pa, c.toString());
      Om(a);
    };
    _.k = Lm.prototype;
    _.k.abort = function () {
      if (this.Jb) {
        var a = Rm(this);
        if (a)
          if (_.od(a)) a.rb && _.vd(a.rb);
          else if ((a = _.Cd(a))) {
            var b = 0,
              c;
            for (c in a.g)
              for (var d = a.g[c].concat(), e = 0; e < d.length; ++e)
                _.Hd(d[e]) && ++b;
          }
        this.Le = this.Jb = !1;
        this.dispatchEvent("abort");
        Sm(this);
      }
    };
    _.k.K = function () {
      this.Jb && this.abort();
      Lm.P.K.call(this);
      this.Ga && Tm(this);
      Pm(this);
      delete this.B;
      this.If = this.pa = null;
      delete Km[this.l];
    };
    _.k.ue = function () {
      return this.Le;
    };
    _.k.isActive = function () {
      return this.Jb;
    };
    _.k.Cd = function () {
      return this.If;
    };
    var Om = function (a) {
      a.Jb = !0;
      a.Hc = a.l + "_" + (a.hk++).toString(36);
      a.Ga = _.Vc(a.pa).S("IFRAME", { name: a.Hc, id: a.Hc });
      _.C && 7 > Number(_.qc) && fj(a.Ga, _.zc(_.oh(_.mh('javascript:""'))));
      var b = a.Ga.style;
      b.visibility = "hidden";
      b.width = b.height = "10px";
      b.display = "none";
      _.cc
        ? (b.marginTop = b.marginLeft = "-10px")
        : ((b.position = "absolute"), (b.top = b.left = "-10px"));
      if (_.C && !_.rc("11")) {
        a.pa.target = a.Hc || "";
        _.Vc(a.pa).T.body.appendChild(a.Ga);
        _.D(a.Ga, "readystatechange", a.o, !1, a);
        try {
          (a.h = !1), a.pa.submit();
        } catch (t) {
          _.Gd(a.Ga, "readystatechange", a.o, !1, a), Um(a);
        }
      } else {
        _.Vc(a.pa).T.body.appendChild(a.Ga);
        b = a.Hc + "_inner";
        var c = _.uj(a.Ga);
        if (document.baseURI) {
          var d = _.jj(b);
          d = _.Kc(
            '<head><base href="' +
              _.jj(document.baseURI) +
              '"></head><body><iframe id="' +
              d +
              '" name="' +
              d +
              '"></iframe>'
          );
        } else
          (d = _.jj(b)),
            (d = _.Kc(
              '<body><iframe id="' + d + '" name="' + d + '"></iframe>'
            ));
        c.write(_.Jc(d));
        _.D(c.getElementById(b), "load", a.g, !1, a);
        d = oj("TEXTAREA", a.pa);
        for (var e = 0, f = d.length; e < f; e++) {
          var g = d[e].value;
          Bj(d[e]) != g && (_.gd(d[e], g), (d[e].value = g));
        }
        d = c.importNode(a.pa, !0);
        d.target = b;
        d.action = a.pa.action;
        c.body.appendChild(d);
        e = oj("SELECT", a.pa);
        f = oj("SELECT", d);
        g = 0;
        for (var h = e.length; g < h; g++)
          for (
            var l = oj("OPTION", e[g]),
              m = oj("OPTION", f[g]),
              n = 0,
              p = l.length;
            n < p;
            n++
          )
            m[n].selected = l[n].selected;
        e = oj("INPUT", a.pa);
        f = oj("INPUT", d);
        g = 0;
        for (h = e.length; g < h; g++)
          if ("file" == e[g].type && e[g].value != f[g].value) {
            a.pa.target = b;
            d = a.pa;
            break;
          }
        try {
          (a.h = !1), d.submit(), c.close(), _.bc && _.Xf(a.D, 250, a);
        } catch (t) {
          _.Gd(c.getElementById(b), "load", a.g, !1, a), c.close(), Um(a);
        }
      }
    };
    Lm.prototype.o = function () {
      if ("complete" == this.Ga.readyState) {
        _.Gd(this.Ga, "readystatechange", this.o, !1, this);
        try {
          var a = _.uj(this.Ga);
          if (_.C && "about:blank" == a.location && !navigator.onLine) {
            Um(this);
            return;
          }
        } catch (b) {
          Um(this);
          return;
        }
        Vm(this, a);
      }
    };
    Lm.prototype.g = function () {
      _.Gd(Rm(this), "load", this.g, !1, this);
      try {
        Vm(this, this.Ga ? _.uj(Rm(this)) : null);
      } catch (a) {
        Um(this);
      }
    };
    var Vm = function (a, b) {
        a.Jb = !1;
        try {
          var c = b.body;
          a.If = c.textContent || c.innerText;
        } catch (e) {
          var d = 1;
        }
        d || "function" != typeof a.B || ((b = a.B(b)) && (d = 4));
        d
          ? Um(a)
          : ((a.Le = !0),
            a.dispatchEvent("complete"),
            a.dispatchEvent("success"),
            Sm(a));
      },
      Um = function (a) {
        a.h ||
          ((a.Le = !1),
          (a.Jb = !1),
          a.dispatchEvent("complete"),
          a.dispatchEvent("error"),
          Sm(a),
          (a.h = !0));
      },
      Sm = function (a) {
        Tm(a);
        Pm(a);
        a.pa = null;
        a.dispatchEvent("ready");
      },
      Tm = function (a) {
        var b = a.Ga;
        b &&
          ((b.onreadystatechange = null),
          (b.onload = null),
          (b.onerror = null),
          a.j.push(b));
        a.Gc && (_.r.clearTimeout(a.Gc), (a.Gc = null));
        _.bc ? (a.Gc = _.Xf(a.s, 2e3, a)) : a.s();
        a.Ga = null;
        a.Hc = null;
      };
    Lm.prototype.s = function () {
      this.Gc && (_.r.clearTimeout(this.Gc), (this.Gc = null));
      for (; 0 != this.j.length; ) {
        var a = this.j.pop();
        _.sj(a);
      }
    };
    var Pm = function (a) {
        a.pa && a.pa == Mm && _.ed(a.pa);
      },
      Rm = function (a) {
        return a.Ga
          ? _.C && !_.rc("11")
            ? a.Ga
            : _.uj(a.Ga).getElementById(a.Hc + "_inner")
          : null;
      };
    Lm.prototype.D = function () {
      if (this.Jb) {
        var a = this.Ga ? _.uj(Rm(this)) : null;
        a && !_.Wb(a, "documentUri")
          ? (_.Gd(Rm(this), "load", this.g, !1, this), Um(this))
          : _.Xf(this.D, 250, this);
      }
    };
    var Ym = function (a, b, c, d, e, f) {
        if (_.ec && e) return Wm(a);
        if (e && !d) return !1;
        if (!_.bc) {
          "number" === typeof b && (b = Xm(b));
          var g = 17 == b || 18 == b || (_.ec && 91 == b);
          if (((!c || _.ec) && g) || (_.ec && 16 == b && (d || f))) return !1;
        }
        if ((_.cc || _.$b) && d && c)
          switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
              return !1;
          }
        if (_.C && d && b == a) return !1;
        switch (a) {
          case 13:
            return _.bc ? (f || e ? !1 : !(c && d)) : !0;
          case 27:
            return !(_.cc || _.$b || _.bc);
        }
        return _.bc && (d || e || f) ? !1 : Wm(a);
      },
      Wm = function (a) {
        if (
          (48 <= a && 57 >= a) ||
          (96 <= a && 106 >= a) ||
          (65 <= a && 90 >= a) ||
          ((_.cc || _.$b) && 0 == a)
        )
          return !0;
        switch (a) {
          case 32:
          case 43:
          case 63:
          case 64:
          case 107:
          case 109:
          case 110:
          case 111:
          case 186:
          case 59:
          case 189:
          case 187:
          case 61:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
          case 219:
          case 220:
          case 221:
          case 163:
          case 58:
            return !0;
          case 173:
            return _.bc;
          default:
            return !1;
        }
      },
      Xm = function (a) {
        if (_.bc) a = Zm(a);
        else if (_.ec && _.cc)
          switch (a) {
            case 93:
              a = 91;
          }
        return a;
      },
      Zm = function (a) {
        switch (a) {
          case 61:
            return 187;
          case 59:
            return 186;
          case 173:
            return 189;
          case 224:
            return 91;
          case 0:
            return 224;
          default:
            return a;
        }
      };
    var $m = function (a, b, c, d) {
      _.md.call(this, d);
      this.type = "key";
      this.keyCode = a;
      this.charCode = b;
      this.repeat = c;
    };
    _.z($m, _.md);
    var an = function (a, b) {
      _.E.call(this);
      a && this.attach(a, b);
    };
    _.z(an, _.E);
    _.k = an.prototype;
    _.k.Pc = null;
    _.k.ve = null;
    _.k.Gf = null;
    _.k.we = null;
    _.k.gb = -1;
    _.k.cc = -1;
    _.k.af = !1;
    var bn = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45,
      },
      cn = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45,
      },
      dn = _.ec && _.bc;
    _.k = an.prototype;
    _.k.tj = function (a) {
      if (_.cc || _.$b)
        if (
          (17 == this.gb && !a.ctrlKey) ||
          (18 == this.gb && !a.altKey) ||
          (_.ec && 91 == this.gb && !a.metaKey)
        )
          this.cc = this.gb = -1;
      -1 == this.gb &&
        (a.ctrlKey && 17 != a.keyCode
          ? (this.gb = 17)
          : a.altKey && 18 != a.keyCode
          ? (this.gb = 18)
          : a.metaKey && 91 != a.keyCode && (this.gb = 91));
      Ym(a.keyCode, this.gb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
        ? ((this.cc = Xm(a.keyCode)), dn && (this.af = a.altKey))
        : this.handleEvent(a);
    };
    _.k.vj = function (a) {
      this.cc = this.gb = -1;
      this.af = a.altKey;
    };
    _.k.handleEvent = function (a) {
      var b = a.g,
        c = b.altKey;
      if (_.C && "keypress" == a.type) {
        var d = this.cc;
        var e = 13 != d && 27 != d ? b.keyCode : 0;
      } else
        (_.cc || _.$b) && "keypress" == a.type
          ? ((d = this.cc),
            (e =
              0 <= b.charCode && 63232 > b.charCode && Wm(d) ? b.charCode : 0))
          : ("keypress" == a.type
              ? (dn && (c = this.af),
                b.keyCode == b.charCode
                  ? 32 > b.keyCode
                    ? ((d = b.keyCode), (e = 0))
                    : ((d = this.cc), (e = b.charCode))
                  : ((d = b.keyCode || this.cc), (e = b.charCode || 0)))
              : ((d = b.keyCode || this.cc), (e = b.charCode || 0)),
            _.ec && 63 == e && 224 == d && (d = 191));
      var f = (d = Xm(d));
      d
        ? 63232 <= d && d in bn
          ? (f = bn[d])
          : 25 == d && a.shiftKey && (f = 9)
        : b.keyIdentifier && b.keyIdentifier in cn && (f = cn[b.keyIdentifier]);
      if (
        !_.bc ||
        "keypress" != a.type ||
        Ym(f, this.gb, a.shiftKey, a.ctrlKey, c, a.metaKey)
      )
        (a = f == this.gb),
          (this.gb = f),
          (b = new $m(f, e, a, b)),
          (b.altKey = c),
          this.dispatchEvent(b);
    };
    _.k.A = function () {
      return this.Pc;
    };
    _.k.attach = function (a, b) {
      this.we && en(this);
      this.Pc = a;
      this.ve = _.D(this.Pc, "keypress", this, b);
      this.Gf = _.D(this.Pc, "keydown", this.tj, b, this);
      this.we = _.D(this.Pc, "keyup", this.vj, b, this);
    };
    var en = function (a) {
      a.ve &&
        (_.Hd(a.ve),
        _.Hd(a.Gf),
        _.Hd(a.we),
        (a.ve = null),
        (a.Gf = null),
        (a.we = null));
      a.Pc = null;
      a.gb = -1;
      a.cc = -1;
    };
    an.prototype.K = function () {
      an.P.K.call(this);
      en(this);
    };
    var fn;
    var gn = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = "aria-" + b;
      "" === c || void 0 == c
        ? (fn ||
            ((c = {}),
            (fn =
              ((c.atomic = !1),
              (c.autocomplete = "none"),
              (c.dropeffect = "none"),
              (c.haspopup = !1),
              (c.live = "off"),
              (c.multiline = !1),
              (c.multiselectable = !1),
              (c.orientation = "vertical"),
              (c.readonly = !1),
              (c.relevant = "additions text"),
              (c.required = !1),
              (c.sort = "none"),
              (c.busy = !1),
              (c.disabled = !1),
              (c.hidden = !1),
              (c.invalid = "false"),
              c))),
          (c = fn),
          b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
        : a.setAttribute(d, c);
    };
    var hn, jn, kn, ln, nn, pn;
    hn = function (a) {
      return "string" == typeof a.className
        ? a.className
        : (a.getAttribute && a.getAttribute("class")) || "";
    };
    jn = function (a) {
      return a.classList ? a.classList : hn(a).match(/\S+/g) || [];
    };
    kn = function (a, b) {
      "string" == typeof a.className
        ? (a.className = b)
        : a.setAttribute && a.setAttribute("class", b);
    };
    ln = function (a, b) {
      return a.classList ? a.classList.contains(b) : _.ta(jn(a), b);
    };
    _.mn = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!ln(a, b)) {
        var c = hn(a);
        kn(a, c + (0 < c.length ? " " + b : b));
      }
    };
    nn = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          _.mn(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(jn(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        kn(a, b);
      }
    };
    _.on = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : ln(a, b) &&
          kn(
            a,
            Array.prototype.filter
              .call(jn(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    };
    pn = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            _.on(a, c);
          })
        : kn(
            a,
            Array.prototype.filter
              .call(jn(a), function (c) {
                return !_.ta(b, c);
              })
              .join(" ")
          );
    };
    var qn = function () {},
      rn;
    Mi(qn);
    var sn = {
      button: "pressed",
      checkbox: "checked",
      menuitem: "selected",
      menuitemcheckbox: "checked",
      menuitemradio: "checked",
      radio: "checked",
      tab: "selected",
      treeitem: "selected",
    };
    _.k = qn.prototype;
    _.k.ke = function () {};
    _.k.S = function (a) {
      return a.g.S("DIV", tn(this, a).join(" "), a.Aa());
    };
    _.k.Pe = function () {
      return !0;
    };
    _.k.zc = function (a, b) {
      b.id && Dm(a, b.id);
      b && b.firstChild
        ? un(a, b.firstChild.nextSibling ? _.wa(b.childNodes) : b.firstChild)
        : (a.Ac = null);
      var c = 0,
        d = this.mc(),
        e = this.mc(),
        f = !1,
        g = !1,
        h = _.wa(jn(b));
      h.forEach(function (l) {
        f || l != d
          ? g || l != e
            ? (c |= vn(this, l))
            : (g = !0)
          : ((f = !0), e == d && (g = !0));
        1 == vn(this, l) && b.hasAttribute("tabindex") && xj(b) && yj(b, !1);
      }, this);
      a.ya = c;
      f || (h.push(d), e == d && (g = !0));
      g || h.push(e);
      (a = a.rf) && h.push.apply(h, a);
      (f && g && !a) || kn(b, h.join(" "));
      return b;
    };
    _.k.Ah = function (a) {
      null == a.ma && (a.ma = rk(a.tb ? a.j : a.g.T.body));
      a.ma && this.Re(a.A(), !0);
      a.isEnabled() && this.kd(a, a.isVisible());
    };
    var wn = function (a, b) {
      if ((a = a.ke())) {
        var c = b.getAttribute("role") || null;
        a != c && (a ? b.setAttribute("role", a) : b.removeAttribute("role"));
      }
    };
    _.k = qn.prototype;
    _.k.Qd = function (a, b) {
      var c = !b;
      b = _.C ? a.getElementsByTagName("*") : null;
      if (_.Oh) {
        if (((c = c ? "none" : ""), a.style && (a.style[_.Oh] = c), b)) {
          a = 0;
          for (var d; (d = b[a]); a++) d.style && (d.style[_.Oh] = c);
        }
      } else if (
        _.C &&
        ((c = c ? "on" : ""), a.setAttribute("unselectable", c), b)
      )
        for (a = 0; (d = b[a]); a++) d.setAttribute("unselectable", c);
    };
    _.k.Re = function (a, b) {
      var c = this.mc() + "-SIsrTd";
      (a = a.A ? a.A() : a) && (b ? nn : pn)(a, [c]);
    };
    _.k.Qe = function (a) {
      var b;
      return a.Za & 32 && (b = a.A())
        ? b.hasAttribute("tabindex") && xj(b)
        : !1;
    };
    _.k.kd = function (a, b) {
      var c;
      if (a.Za & 32 && (c = a.A())) {
        if (!b && a.ya & 32) {
          try {
            c.blur();
          } catch (d) {}
          a.ya & 32 && a.kh(null);
        }
        (c.hasAttribute("tabindex") && xj(c)) != b && yj(c, b);
      }
    };
    _.k.X = function (a, b) {
      _.Q(a, b);
      a && gn(a, "hidden", !b);
    };
    _.k.nd = function (a, b, c) {
      var d = a.A();
      if (d) {
        var e = xn(this, b);
        e && (a = a.A ? a.A() : a) && (c ? nn : pn)(a, [e]);
        this.Gb(d, b, c);
      }
    };
    _.k.Gb = function (a, b, c) {
      rn ||
        (rn = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
      b = rn[b];
      var d = a.getAttribute("role") || null;
      d && ((d = sn[d] || b), (b = "checked" == b || "selected" == b ? d : b));
      b && gn(a, b, c);
    };
    _.k.Bg = function (a, b) {
      if (a && (_.ed(a), b))
        if ("string" === typeof b) _.gd(a, b);
        else {
          var c = function (d) {
            if (d) {
              var e = _.Uc(a);
              a.appendChild("string" === typeof d ? e.createTextNode(d) : d);
            }
          };
          Array.isArray(b)
            ? b.forEach(c)
            : !_.da(b) || "nodeType" in b
            ? c(b)
            : _.wa(b).forEach(c);
        }
    };
    _.k.mc = function () {
      return "VIpgJd-bMcfAe";
    };
    var tn = function (a, b) {
        var c = a.mc(),
          d = [c],
          e = a.mc();
        e != c && d.push(e);
        c = b.ya;
        for (e = []; c; ) {
          var f = c & -c;
          e.push(xn(a, f));
          c &= ~f;
        }
        d.push.apply(d, e);
        (a = b.rf) && d.push.apply(d, a);
        return d;
      },
      xn = function (a, b) {
        a.g || yn(a);
        return a.g[b];
      },
      vn = function (a, b) {
        if (!a.h) {
          a.g || yn(a);
          var c = a.g,
            d = {},
            e;
          for (e in c) d[c[e]] = e;
          a.h = d;
        }
        a = parseInt(a.h[b], 10);
        return isNaN(a) ? 0 : a;
      },
      yn = function (a) {
        var b = a.mc();
        a.g = {
          1: b + "-OWB6Me",
          2: b + "-ZmdkE",
          4: b + "-auswjd",
          8: b + "-gk6SMd",
          16: b + "-barxie",
          32: b + "-XpnDCe",
          64: b + "-FNFY6c",
        };
      };
    var zn = function () {};
    _.z(zn, qn);
    Mi(zn);
    _.k = zn.prototype;
    _.k.ke = function () {
      return "button";
    };
    _.k.Gb = function (a, b, c) {
      switch (b) {
        case 8:
        case 16:
          gn(a, "pressed", c);
          break;
        default:
        case 64:
        case 1:
          zn.P.Gb.call(this, a, b, c);
      }
    };
    _.k.S = function (a) {
      var b = zn.P.S.call(this, a);
      this.lg(b, a.Pa());
      var c = a.Fa();
      c && this.pb(b, c);
      a.Za & 16 && this.Gb(b, 16, !!(a.ya & 16));
      return b;
    };
    _.k.zc = function (a, b) {
      b = zn.P.zc.call(this, a, b);
      var c = this.Fa(b);
      a.ab = c;
      a.U = this.Pa(b);
      a.Za & 16 && this.Gb(b, 16, !!(a.ya & 16));
      return b;
    };
    _.k.Fa = function () {};
    _.k.pb = function () {};
    _.k.Pa = function (a) {
      return a.title;
    };
    _.k.lg = function (a, b) {
      a && (b ? (a.title = b) : a.removeAttribute("title"));
    };
    _.k.mc = function () {
      return "VIpgJd-LgbsSe";
    };
    var An = {
      Xe: "mousedown",
      Ye: "mouseup",
      Fg: "mousecancel",
      yl: "mousemove",
      Al: "mouseover",
      zl: "mouseout",
      wl: "mouseenter",
      xl: "mouseleave",
    };
    var Bn = function (a, b) {
        if (!a) throw Error("ya`" + a);
        if ("function" !== typeof b) throw Error("za`" + b);
      },
      Cn = {};
    var V = function (a, b, c) {
      _.N.call(this, c);
      if (!b) {
        for (b = this.constructor; b; ) {
          var d = _.za(b);
          if ((d = Cn[d])) break;
          b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
        }
        b = d ? ("function" === typeof d.nc ? d.nc() : new d()) : null;
      }
      this.h = b;
      this.Ac = void 0 !== a ? a : null;
    };
    _.z(V, _.N);
    _.k = V.prototype;
    _.k.Ac = null;
    _.k.ya = 0;
    _.k.Za = 39;
    _.k.df = 255;
    _.k.Hb = !0;
    _.k.rf = null;
    _.k.Af = !0;
    _.k.Wd = !1;
    var En = function (a) {
      a.tb && 0 != a.Af && Dn(a, !1);
      a.Af = !1;
    };
    V.prototype.S = function () {
      var a = this.h.S(this);
      this.j = a;
      wn(this.h, a);
      this.Wd || this.h.Qd(a, !1);
      this.isVisible() || this.h.X(a, !1);
    };
    V.prototype.Ag = function (a) {
      return this.h.Pe(a);
    };
    V.prototype.za = function (a) {
      this.j = a = this.h.zc(this, a);
      wn(this.h, a);
      this.Wd || this.h.Qd(a, !1);
      this.Hb = "none" != a.style.display;
    };
    V.prototype.ka = function () {
      V.P.ka.call(this);
      var a = this.h,
        b = this.j;
      this.isVisible() || gn(b, "hidden", !this.isVisible());
      this.isEnabled() || a.Gb(b, 1, !this.isEnabled());
      this.Za & 8 && a.Gb(b, 8, !!(this.ya & 8));
      this.Za & 16 && a.Gb(b, 16, !!(this.ya & 16));
      this.Za & 64 && a.Gb(b, 64, !!(this.ya & 64));
      this.h.Ah(this);
      this.Za & -2 &&
        (this.Af && Dn(this, !0), this.Za & 32 && (a = this.A())) &&
        ((b = this.s || (this.s = new an())),
        b.attach(a),
        Fm(this)
          .I(b, "key", this.uj)
          .I(a, "focus", this.oi)
          .I(a, "blur", this.kh));
    };
    var Dn = function (a, b) {
      var c = Fm(a),
        d = a.A();
      b
        ? (c
            .I(d, An.Xe, a.zf)
            .I(d, [An.Ye, An.Fg], a.Bf)
            .I(d, "mouseover", a.na)
            .I(d, "mouseout", a.ua),
          a.N != _.ub && c.I(d, "contextmenu", a.N),
          _.C &&
            (_.rc(9) || c.I(d, "dblclick", a.mh),
            a.F || ((a.F = new Fn(a)), _.Ei(a, _.pb(_.ca, a.F)))))
        : (c
            .Ab(d, An.Xe, a.zf)
            .Ab(d, [An.Ye, An.Fg], a.Bf)
            .Ab(d, "mouseover", a.na)
            .Ab(d, "mouseout", a.ua),
          a.N != _.ub && c.Ab(d, "contextmenu", a.N),
          _.C &&
            (_.rc(9) || c.Ab(d, "dblclick", a.mh), _.ca(a.F), (a.F = null)));
    };
    V.prototype.ia = function () {
      V.P.ia.call(this);
      this.s && en(this.s);
      this.isVisible() && this.isEnabled() && this.h.kd(this, !1);
    };
    V.prototype.K = function () {
      V.P.K.call(this);
      this.s && (this.s.O(), delete this.s);
      delete this.h;
      this.F = this.rf = this.Ac = null;
    };
    V.prototype.Aa = function () {
      return this.Ac;
    };
    V.prototype.o = function (a) {
      this.h.Bg(this.A(), a);
      this.Ac = a;
    };
    var un = function (a, b) {
      a.Ac = b;
    };
    _.k = V.prototype;
    _.k.Yh = function (a) {
      this.o(a);
    };
    _.k.isVisible = function () {
      return this.Hb;
    };
    _.k.X = function (a, b) {
      if (b || (this.Hb != a && this.dispatchEvent(a ? "show" : "hide")))
        (b = this.A()) && this.h.X(b, a),
          this.isEnabled() && this.h.kd(this, a),
          (this.Hb = a);
    };
    _.k.isEnabled = function () {
      return !(this.ya & 1);
    };
    _.k.nb = function (a) {
      var b = this.B;
      (b && "function" == typeof b.isEnabled && !b.isEnabled()) ||
        !Gn(this, 1, !a) ||
        (a || (Hn(this, !1), In(this, !1)),
        this.isVisible() && this.h.kd(this, a),
        Jn(this, 1, !a, !0));
    };
    var In = function (a, b) {
      Gn(a, 2, b) && Jn(a, 2, b);
    };
    V.prototype.isActive = function () {
      return !!(this.ya & 4);
    };
    var Hn = function (a, b) {
        Gn(a, 4, b) && Jn(a, 4, b);
      },
      Jn = function (a, b, c, d) {
        d || 1 != b
          ? a.Za & b &&
            c != !!(a.ya & b) &&
            (a.h.nd(a, b, c), (a.ya = c ? a.ya | b : a.ya & ~b))
          : a.nb(!c);
      },
      Kn = function (a) {
        if (a.tb && a.ya & 32) throw Error("sa");
        a.ya & 32 && Jn(a, 32, !1);
        a.Za &= -33;
      },
      Ln = function (a, b) {
        return !!(a.df & b) && !!(a.Za & b);
      },
      Mn = function (a) {
        a.df &= -256;
      },
      Gn = function (a, b, c) {
        return (
          !!(a.Za & b) &&
          !!(a.ya & b) != c &&
          (!(0 & b) || a.dispatchEvent(Cm(b, c))) &&
          !a.qb()
        );
      };
    V.prototype.na = function (a) {
      !Nn(a, this.A()) &&
        this.dispatchEvent("enter") &&
        this.isEnabled() &&
        Ln(this, 2) &&
        In(this, !0);
    };
    V.prototype.ua = function (a) {
      !Nn(a, this.A()) &&
        this.dispatchEvent("leave") &&
        (Ln(this, 4) && Hn(this, !1), Ln(this, 2) && In(this, !1));
    };
    V.prototype.N = _.ub;
    var Nn = function (a, b) {
      return !!a.relatedTarget && _.fd(b, a.relatedTarget);
    };
    _.k = V.prototype;
    _.k.zf = function (a) {
      this.isEnabled() &&
        (Ln(this, 2) && In(this, !0),
        0 != a.g.button ||
          (_.ec && a.ctrlKey) ||
          (Ln(this, 4) && Hn(this, !0),
          this.h && this.h.Qe(this) && this.A().focus()));
      this.Wd || 0 != a.g.button || (_.ec && a.ctrlKey) || a.preventDefault();
    };
    _.k.Bf = function (a) {
      this.isEnabled() &&
        (Ln(this, 2) && In(this, !0),
        this.isActive() && this.Hd(a) && Ln(this, 4) && Hn(this, !1));
    };
    _.k.mh = function (a) {
      this.isEnabled() && this.Hd(a);
    };
    _.k.Hd = function (a) {
      if (Ln(this, 16)) {
        var b = !(this.ya & 16);
        Gn(this, 16, b) && Jn(this, 16, b);
      }
      Ln(this, 8) && Gn(this, 8, !0) && Jn(this, 8, !0);
      Ln(this, 64) &&
        ((b = !(this.ya & 64)), Gn(this, 64, b) && Jn(this, 64, b));
      b = new _.jd("action", this);
      a &&
        ((b.altKey = a.altKey),
        (b.ctrlKey = a.ctrlKey),
        (b.metaKey = a.metaKey),
        (b.shiftKey = a.shiftKey),
        (b.j = a.j));
      return this.dispatchEvent(b);
    };
    _.k.oi = function () {
      Ln(this, 32) && Gn(this, 32, !0) && Jn(this, 32, !0);
    };
    _.k.kh = function () {
      Ln(this, 4) && Hn(this, !1);
      Ln(this, 32) && Gn(this, 32, !1) && Jn(this, 32, !1);
    };
    _.k.uj = function (a) {
      return this.isVisible() && this.isEnabled() && this.yf(a)
        ? (a.preventDefault(), a.stopPropagation(), !0)
        : !1;
    };
    _.k.yf = function (a) {
      return 13 == a.keyCode && this.Hd(a);
    };
    if ("function" !== typeof V) throw Error("Aa`" + V);
    if ("function" !== typeof qn) throw Error("Ba`" + qn);
    var On = _.za(V);
    Cn[On] = qn;
    Bn("VIpgJd-bMcfAe", function () {
      return new V(null);
    });
    var Fn = function (a) {
      _.A.call(this);
      this.h = a;
      this.g = !1;
      this.j = new _.F(this);
      _.Ei(this, _.pb(_.ca, this.j));
      a = this.h.j;
      this.j.I(a, An.Xe, this.o).I(a, An.Ye, this.s).I(a, "click", this.l);
    };
    _.z(Fn, _.A);
    var Pn = !_.C || 9 <= Number(_.uc);
    Fn.prototype.o = function () {
      this.g = !1;
    };
    Fn.prototype.s = function () {
      this.g = !0;
    };
    var Qn = function (a, b) {
      if (!Pn) return (a.button = 0), (a.type = b), a;
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(
        b,
        a.bubbles,
        a.cancelable,
        a.view || null,
        a.detail,
        a.screenX,
        a.screenY,
        a.clientX,
        a.clientY,
        a.ctrlKey,
        a.altKey,
        a.shiftKey,
        a.metaKey,
        0,
        a.relatedTarget || null
      );
      return c;
    };
    Fn.prototype.l = function (a) {
      if (this.g) this.g = !1;
      else {
        var b = a.g,
          c = b.button,
          d = b.type,
          e = Qn(b, "mousedown");
        this.h.zf(new _.md(e, a.currentTarget));
        e = Qn(b, "mouseup");
        this.h.Bf(new _.md(e, a.currentTarget));
        Pn || ((b.button = c), (b.type = d));
      }
    };
    Fn.prototype.K = function () {
      this.h = null;
      Fn.P.K.call(this);
    };
    var Rn = function () {};
    _.z(Rn, zn);
    Mi(Rn);
    _.k = Rn.prototype;
    _.k.ke = function () {};
    _.k.S = function (a) {
      En(a);
      Mn(a);
      Kn(a);
      var b = a.g,
        c = b.S,
        d = {
          class: tn(this, a).join(" "),
          disabled: !a.isEnabled(),
          title: a.Pa() || "",
          value: a.Fa() || "",
        };
      a = (a = a.Aa())
        ? ("string" === typeof a
            ? a
            : Array.isArray(a)
            ? a.map(Bj).join("")
            : Aj(a)
          )
            .replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        : "";
      return c.call(b, "BUTTON", d, a || "");
    };
    _.k.Pe = function (a) {
      return (
        "BUTTON" == a.tagName ||
        ("INPUT" == a.tagName &&
          ("button" == a.type || "submit" == a.type || "reset" == a.type))
      );
    };
    _.k.zc = function (a, b) {
      En(a);
      Mn(a);
      Kn(a);
      if (b.disabled) {
        var c = xn(this, 1);
        _.mn(b, c);
      }
      return Rn.P.zc.call(this, a, b);
    };
    _.k.Ah = function (a) {
      Fm(a).I(a.A(), "click", a.Hd);
    };
    _.k.Qd = function () {};
    _.k.Re = function () {};
    _.k.Qe = function (a) {
      return a.isEnabled();
    };
    _.k.kd = function () {};
    _.k.nd = function (a, b, c) {
      Rn.P.nd.call(this, a, b, c);
      (a = a.A()) && 1 == b && (a.disabled = c);
    };
    _.k.Fa = function (a) {
      return a.value;
    };
    _.k.pb = function (a, b) {
      a && (a.value = b);
    };
    _.k.Gb = function () {};
    var Sn = function (a, b, c) {
      V.call(this, a, b || Rn.nc(), c);
    };
    _.z(Sn, V);
    _.k = Sn.prototype;
    _.k.Fa = function () {
      return this.ab;
    };
    _.k.pb = function (a) {
      this.ab = a;
      this.h.pb(this.A(), a);
    };
    _.k.Pa = function () {
      return this.U;
    };
    _.k.lg = function (a) {
      this.U = a;
      this.h.lg(this.A(), a);
    };
    _.k.K = function () {
      Sn.P.K.call(this);
      delete this.ab;
      delete this.U;
    };
    _.k.ka = function () {
      Sn.P.ka.call(this);
      if (this.Za & 32) {
        var a = this.A();
        a && Fm(this).I(a, "keyup", this.yf);
      }
    };
    _.k.yf = function (a) {
      return (13 == a.keyCode && "key" == a.type) ||
        (32 == a.keyCode && "keyup" == a.type)
        ? this.Hd(a)
        : 32 == a.keyCode;
    };
    Bn("VIpgJd-LgbsSe", function () {
      return new Sn(null);
    });
    var Tn = function (a, b) {
      _.N.call(this);
      this.J = a || "";
      this.l = null;
      this.F = [];
      this.h = null;
      this.N = b || "GET";
      this.o = this.s = null;
    };
    _.x(Tn, _.N);
    Tn.prototype.S = function () {
      var a = {
        Pi: this.J,
        method: this.N,
        ej: this.F,
        dir: _.qf.test(_.S) ? "rtl" : "ltr",
      };
      this.za(_.qi(ym, a));
    };
    Tn.prototype.za = function (a) {
      this.j = a;
      this.h = Em(this, "activity-form");
      a = Em(this, "activity-submit");
      this.o = new Sn("");
      Hm(this.o, a);
      a = Em(this, "activity-cancel");
      this.l = new Sn("");
      Hm(this.l, a);
    };
    Tn.prototype.ka = function () {
      var a = Fm(this);
      a.I(this.o, "action", (0, _.y)(this.U, this));
      a.I(this.l, "action", this.dispatchEvent.bind(this, "cancelled"));
    };
    Tn.prototype.U = function () {
      var a = !0;
      this.s && (a = this.s());
      a &&
        ((a = new Lm()),
        _.D(a, "success", function () {
          this.dispatchEvent("successful");
        }),
        _.D(a, "error", function () {
          this.dispatchEvent("failed");
        }),
        Qm(a, this.h));
      this.dispatchEvent("submitted");
    };
    var Un = function (a, b) {
        for (var c in b) a.h[c] && (a.h[c].value = b[c]);
      },
      Vn = function (a, b) {
        return a.h[b] ? a.h[b].value : "";
      };
    Tn.prototype.K = function () {
      this.o = this.h = this.l = null;
      _.N.prototype.K.call(this);
    };
    var Wn = function (a, b) {
      a.s = b;
    };
    var Xn = function () {};
    _.z(Xn, qn);
    Mi(Xn);
    _.k = Xn.prototype;
    _.k.ke = function () {};
    _.k.zc = function (a, b) {
      En(a);
      Mn(a);
      Kn(a);
      Xn.P.zc.call(this, a, b);
      a.o(b.value);
      return b;
    };
    _.k.S = function (a) {
      En(a);
      Mn(a);
      Kn(a);
      return a.g.S(
        "TEXTAREA",
        { class: tn(this, a).join(" "), disabled: !a.isEnabled() },
        a.Aa() || ""
      );
    };
    _.k.Pe = function (a) {
      return "TEXTAREA" == a.tagName;
    };
    _.k.Re = function () {};
    _.k.Qe = function (a) {
      return a.isEnabled();
    };
    _.k.kd = function () {};
    _.k.nd = function (a, b, c) {
      Xn.P.nd.call(this, a, b, c);
      (a = a.A()) && 1 == b && (a.disabled = c);
    };
    _.k.Gb = function () {};
    _.k.Bg = function (a, b) {
      a && (a.value = b);
    };
    _.k.mc = function () {
      return "VIpgJd-B7I4Od";
    };
    var Yn = function (a, b, c) {
      V.call(this, a, b || Xn.nc(), c);
      En(this);
      this.Wd = !0;
      (b = this.A()) && this.h.Qd(b, !0);
      this.Xc = "" != a;
      a || (this.Ac = "");
    };
    _.z(Yn, V);
    var Zn = !(_.C && !(11 <= Number(_.uc)));
    _.k = Yn.prototype;
    _.k.Zc = !1;
    _.k.re = !1;
    _.k.Xc = !1;
    _.k.ac = 0;
    _.k.Hh = 0;
    _.k.Rf = 0;
    _.k.uh = !1;
    _.k.Ce = !1;
    _.k.fg = !1;
    _.k.eg = !1;
    _.k.hd = "";
    var $n = function (a) {
        return a.l.top + a.l.bottom + a.Y.top + a.Y.bottom;
      },
      ao = function (a) {
        var b = a.Rf,
          c = a.A();
        b && c && a.Ce && (b -= $n(a));
        return b;
      },
      co = function (a) {
        a.Rf = 50;
        bo(a);
      },
      eo = function (a) {
        a.Hh = 50;
        bo(a);
      };
    Yn.prototype.pb = function (a) {
      this.o(String(a));
    };
    Yn.prototype.Fa = function () {
      return this.A().value != this.hd || fo(this) || this.Xc
        ? this.A().value
        : "";
    };
    Yn.prototype.o = function (a) {
      Yn.P.o.call(this, a);
      this.Xc = "" != a;
      bo(this);
    };
    Yn.prototype.nb = function (a) {
      Yn.P.nb.call(this, a);
      this.A().disabled = !a;
    };
    var bo = function (a) {
        a.A() && a.J();
      },
      fo = function (a) {
        return "placeholder" in a.A();
      },
      go = function (a) {
        a.hd &&
          (fo(a)
            ? (a.A().placeholder = a.hd)
            : !a.A() ||
              a.Xc ||
              a.re ||
              (_.mn(a.A(), "B7I4Od-LwH6nd-YPqjbf"), (a.A().value = a.hd)));
      };
    Yn.prototype.ka = function () {
      Yn.P.ka.call(this);
      var a = this.A();
      _.J(a, {
        overflowY: "hidden",
        overflowX: "auto",
        boxSizing: "border-box",
        MsBoxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
      });
      this.l = _.vk(a);
      this.Y = _.yk(a);
      Fm(this)
        .I(a, "scroll", this.J)
        .I(a, "focus", this.J)
        .I(a, "keyup", this.J)
        .I(a, "mouseup", this.Bb)
        .I(a, "blur", this.Ma);
      go(this);
      bo(this);
    };
    var ho = function (a) {
        if (!a.uh) {
          var b = a.A().cloneNode(!1);
          _.J(b, {
            position: "absolute",
            height: "auto",
            top: "-9999px",
            margin: "0",
            padding: "1px",
            border: "1px solid #000",
            overflow: "hidden",
          });
          a.g.T.body.appendChild(b);
          var c = b.scrollHeight;
          b.style.padding = "10px";
          var d = b.scrollHeight;
          a.fg = d > c;
          b.style.borderWidth = "10px";
          a.eg = b.scrollHeight > d;
          b.style.height = "100px";
          100 != b.offsetHeight && (a.Ce = !0);
          _.sj(b);
          a.uh = !0;
        }
        b = a.A();
        isNaN(a.l.top) && ((a.l = _.vk(b)), (a.Y = _.yk(b)));
        c = a.A().scrollHeight;
        var e = a.A();
        d = e.offsetHeight - e.clientHeight;
        if (!a.fg) {
          var f = a.l;
          d -= f.top + f.bottom;
        }
        a.eg || ((e = _.yk(e)), (d -= e.top + e.bottom));
        c += 0 < d ? d : 0;
        a.Ce
          ? (c -= $n(a))
          : (a.fg || ((d = a.l), (c += d.top + d.bottom)),
            a.eg || ((a = _.yk(b)), (c += a.top + a.bottom)));
        return c;
      },
      io = function (a, b) {
        a.ac != b && ((a.ac = b), (a.A().style.height = b + "px"));
      },
      jo = function (a) {
        var b = a.A();
        b.style.height = "auto";
        var c = b.value.match(/\n/g) || [];
        b.rows = c.length + 1;
        a.ac = 0;
      };
    Yn.prototype.Ma = function () {
      fo(this) ||
        ((this.re = !1), "" == this.A().value && ((this.Xc = !1), go(this)));
    };
    Yn.prototype.J = function (a) {
      if (!this.Zc) {
        var b = this.A();
        !fo(this) &&
          a &&
          "focus" == a.type &&
          (b.value == this.hd &&
            this.hd &&
            !this.re &&
            (_.on(b, "B7I4Od-LwH6nd-YPqjbf"), (b.value = "")),
          (this.re = !0),
          (this.Xc = "" != b.value));
        var c = !1;
        this.Zc = !0;
        a = this.ac;
        if (b.scrollHeight) {
          var d = !1,
            e = !1,
            f = ho(this),
            g = b.offsetHeight,
            h = ao(this);
          var l = this.Hh;
          var m = this.A();
          l && m && this.Ce && (l -= $n(this));
          h && f < h
            ? (io(this, h), (d = !0))
            : l && f > l
            ? (io(this, l), (b.style.overflowY = ""), (e = !0))
            : g != f
            ? io(this, f)
            : this.ac || (this.ac = f);
          d || e || !Zn || (c = !0);
        } else jo(this);
        this.Zc = !1;
        c &&
          ((b = this.A()),
          this.Zc ||
            ((this.Zc = !0),
            (e = b.scrollHeight)
              ? ((f = ho(this)),
                (c = ao(this)),
                (c && f <= c) ||
                  ((d = this.l),
                  (b.style.paddingTop = d.top + 1 + "px"),
                  ho(this) == f &&
                    ((b.style.paddingTop = d.top + e + "px"),
                    (b.scrollTop = 0),
                    (e = ho(this) - e),
                    e >= c ? io(this, e) : io(this, c)),
                  (b.style.paddingTop = d.top + "px")))
              : jo(this),
            (this.Zc = !1)));
        a != this.ac && this.dispatchEvent("resize");
      }
    };
    Yn.prototype.Bb = function () {
      var a = this.A(),
        b = a.offsetHeight;
      a.filters &&
        a.filters.length &&
        (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) &&
        (b -= a.offX);
      b != this.ac && (this.ac = this.Rf = b);
    };
    var ko = function (a, b) {
      zi.call(this, a);
      this.F = !1;
      this.s = b || {};
      this.l = null;
    };
    _.x(ko, zi);
    _.k = ko.prototype;
    _.k.Ee = function (a) {
      zi.prototype.Ee.call(this, a);
      Fm(this).I(this.l.A(), "keydown", (0, _.y)(this.Pa().Kd, this.Pa(), !1));
      this.F = this.Pa().rd;
      this.Pd();
    };
    _.k.Pd = function () {
      zi.prototype.Pd.call(this);
      this.l.o(this.Pa().Na);
      var a = this.Pa().lb(),
        b = this.Pa().oa();
      a &&
        b &&
        (Un(this.h, {
          gtrans: this.Pa().Na,
          text: this.Pa().Rd(),
          hl: _.S,
          langpair: a + "|" + b,
        }),
        Un(this.h, this.s));
      this.dispatchEvent("ready");
      this.l.A().focus();
    };
    _.k.gd = function () {
      this.Pa().Kd(this.F);
    };
    _.k.S = function () {
      this.za(_.qi(zm));
    };
    _.k.za = function (a) {
      this.j = a;
      a = Em(this, "contribute-original-text");
      this.l = new Yn("");
      Hm(this.l, a);
      eo(this.l);
      co(this.l);
      a = Em(this, "activity-form-container");
      this.h = new Tn(_.rl, "POST");
      this.h.F = $h(this.s);
      Wn(
        this.h,
        (0, _.y)(function () {
          Un(this.h, { utrans: (0, _.Sb)(this.l.Fa()) });
          return Vn(this.h, "utrans") != Vn(this.h, "gtrans");
        }, this)
      );
      this.h.Ba(a);
    };
    _.k.ka = function () {
      zi.prototype.ka.call(this);
      var a = Fm(this);
      a.I(
        this.h,
        "cancelled",
        (0, _.y)(function () {
          this.dispatchEvent("cancelled");
        }, this)
      );
      a.I(
        this.h,
        "submitted",
        (0, _.y)(function () {
          var b = this.l.Fa();
          this.Pa().Na = b && (0, _.Sb)(b);
          this.dispatchEvent("submitted");
          b = _.T.Ii;
          _.gd(this.Pa().Vc().A(), b);
        }, this)
      );
    };
    _.k.K = function () {
      this.l && this.l.O();
      this.l = null;
      this.h && this.h.O();
      this.h = null;
      zi.prototype.K.call(this);
    };
    var lo = function (a) {
      _.E.call(this);
      this.xa = a;
      this.j = {};
      this.G = new _.F(this);
      this.h = null;
    };
    _.x(lo, _.E);
    lo.prototype.attach = function () {};
    lo.prototype.Cg = function () {};
    lo.prototype.K = function () {
      this.G.O();
      this.G = null;
    };
    var mo = function (a, b, c) {
      if ((b = a.xa.h[b])) {
        c = c || "undefined" == typeof c;
        for (var d = 0; d < b.Ya.length; ++d) b.Ya[d] && a.xh(b.Ya[d], c);
      }
    };
    lo.prototype.xh = function (a, b) {
      _.J(a, "backgroundColor", b ? "#E6ECF9" : "");
      _.J(a, "color", b ? "#000" : "");
    };
    var no = function (a, b, c) {
      _.A.call(this);
      this.h = a;
      this.l = b || 0;
      this.j = c;
      this.g = (0, _.y)(this.pi, this);
    };
    _.z(no, _.A);
    _.k = no.prototype;
    _.k.od = 0;
    _.k.K = function () {
      no.P.K.call(this);
      this.stop();
      delete this.h;
      delete this.j;
    };
    _.k.start = function (a) {
      this.stop();
      this.od = _.Xf(this.g, void 0 !== a ? a : this.l);
    };
    _.k.stop = function () {
      this.isActive() && _.r.clearTimeout(this.od);
      this.od = 0;
    };
    _.k.isActive = function () {
      return 0 != this.od;
    };
    _.k.pi = function () {
      this.od = 0;
      this.h && this.h.call(this.j);
    };
    var ai = {},
      oo = null,
      po = function (a) {
        a = _.za(a);
        delete ai[a];
        bi() && oo && oo.stop();
      },
      ro = function () {
        oo ||
          (oo = new no(function () {
            qo();
          }, 20));
        var a = oo;
        a.isActive() || a.start();
      },
      qo = function () {
        var a = _.qb();
        _.wc(ai, function (b) {
          so(b, a);
        });
        bi() || ro();
      };
    var to = function () {
      _.E.call(this);
      this.g = 0;
      this.endTime = this.startTime = null;
    };
    _.z(to, _.E);
    to.prototype.j = function () {
      this.h("begin");
    };
    to.prototype.xb = function () {
      this.h("end");
    };
    to.prototype.gd = function () {
      this.h("stop");
    };
    to.prototype.h = function (a) {
      this.dispatchEvent(a);
    };
    var uo = function (a, b, c, d) {
      to.call(this);
      if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Ca");
      if (a.length != b.length) throw Error("Da");
      this.l = a;
      this.H = b;
      this.duration = c;
      this.D = d;
      this.coords = [];
      this.progress = 0;
    };
    _.z(uo, to);
    uo.prototype.play = function (a) {
      if (a || 0 == this.g) (this.progress = 0), (this.coords = this.l);
      else if (1 == this.g) return !1;
      po(this);
      this.startTime = a = _.qb();
      -1 == this.g && (this.startTime -= this.duration * this.progress);
      this.endTime = this.startTime + this.duration;
      this.progress || this.j();
      this.h("play");
      -1 == this.g && this.h("resume");
      this.g = 1;
      var b = _.za(this);
      b in ai || (ai[b] = this);
      ro();
      so(this, a);
      return !0;
    };
    uo.prototype.stop = function (a) {
      po(this);
      this.g = 0;
      a && (this.progress = 1);
      vo(this, this.progress);
      this.gd();
      this.xb();
    };
    uo.prototype.jg = function (a) {
      this.progress = a;
      1 == this.g &&
        ((this.startTime = _.qb() - this.duration * this.progress),
        (this.endTime = this.startTime + this.duration));
    };
    uo.prototype.K = function () {
      0 == this.g || this.stop(!1);
      this.h("destroy");
      uo.P.K.call(this);
    };
    var so = function (a, b) {
        b < a.startTime &&
          ((a.endTime = b + a.endTime - a.startTime), (a.startTime = b));
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 < a.progress && (a.progress = 1);
        vo(a, a.progress);
        1 == a.progress
          ? ((a.g = 0), po(a), a.h("finish"), a.xb())
          : 1 == a.g && a.B();
      },
      vo = function (a, b) {
        "function" === typeof a.D && (b = a.D(b));
        a.coords = Array(a.l.length);
        for (var c = 0; c < a.l.length; c++)
          a.coords[c] = (a.H[c] - a.l[c]) * b + a.l[c];
      };
    uo.prototype.B = function () {
      this.h("animate");
    };
    uo.prototype.h = function (a) {
      this.dispatchEvent(new wo(a, this));
    };
    var wo = function (a, b) {
      _.jd.call(this, a);
      this.coords = b.coords;
      this.x = b.coords[0];
      this.y = b.coords[1];
      this.z = b.coords[2];
      this.duration = b.duration;
      this.progress = b.progress;
      this.state = b.g;
    };
    _.z(wo, _.jd);
    var xo = (function () {
      if (_.fc) {
        var a = /Windows NT ([0-9.]+)/;
        return (a = a.exec(_.Ba())) ? a[1] : "0";
      }
      return _.ec
        ? ((a = /1[0|1][_.][0-9_.]+/),
          (a = a.exec(_.Ba())) ? a[0].replace(/_/g, ".") : "10")
        : _.gc
        ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(_.Ba())) ? a[1] : "")
        : _.hc || _.ic || _.jc
        ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/),
          (a = a.exec(_.Ba())) ? a[1].replace(/_/g, ".") : "")
        : "";
    })();
    var yo = function (a) {
        return (a = a.exec(_.Ba())) ? a[1] : "";
      },
      zo = (function () {
        if (_.Dg) return yo(/Firefox\/([0-9.]+)/);
        if (_.C || _.$b || _.Zb) return _.qc;
        if (_.Hg) {
          if (_.Fa() || _.u("Macintosh")) {
            var a = yo(/CriOS\/([0-9.]+)/);
            if (a) return a;
          }
          return yo(/Chrome\/([0-9.]+)/);
        }
        if (_.Ig && !_.Fa()) return yo(/Version\/([0-9.]+)/);
        if (_.Eg || _.Fg) {
          if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba())))
            return a[1] + "." + a[2];
        } else if (_.Gg)
          return (a = yo(/Android\s+([0-9.]+)/)) ? a : yo(/Version\/([0-9.]+)/);
        return "";
      })();
    var Ao = function (a, b, c, d, e) {
      uo.call(this, b, c, d, e);
      this.element = a;
    };
    _.z(Ao, uo);
    Ao.prototype.s = function () {};
    Ao.prototype.B = function () {
      this.s();
      Ao.P.B.call(this);
    };
    Ao.prototype.xb = function () {
      this.s();
      Ao.P.xb.call(this);
    };
    Ao.prototype.j = function () {
      this.s();
      Ao.P.j.call(this);
    };
    var Bo = function (a, b, c, d, e) {
      "number" === typeof b && (b = [b]);
      "number" === typeof c && (c = [c]);
      Ao.call(this, a, b, c, d, e);
      if (1 != b.length || 1 != c.length) throw Error("Ea");
      this.o = -1;
    };
    _.z(Bo, Ao);
    var Co = 1 / 1024;
    Bo.prototype.s = function () {
      var a = this.coords[0];
      if (Math.abs(a - this.o) >= Co) {
        var b = this.element.style;
        "opacity" in b
          ? (b.opacity = a)
          : "MozOpacity" in b
          ? (b.MozOpacity = a)
          : "filter" in b &&
            (b.filter =
              "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
        this.o = a;
      }
    };
    Bo.prototype.j = function () {
      this.o = -1;
      Bo.P.j.call(this);
    };
    Bo.prototype.xb = function () {
      this.o = -1;
      Bo.P.xb.call(this);
    };
    var Do = function (a, b, c) {
      Bo.call(this, a, 1, 0, b, c);
    };
    _.z(Do, Bo);
    Do.prototype.j = function () {
      this.element.style.display = "";
      Do.P.j.call(this);
    };
    Do.prototype.xb = function () {
      this.element.style.display = "none";
      Do.P.xb.call(this);
    };
    var Eo = function (a, b, c) {
      Bo.call(this, a, 0, 1, b, c);
    };
    _.z(Eo, Bo);
    Eo.prototype.j = function () {
      this.element.style.display = "";
      Eo.P.j.call(this);
    };
    var Fo = function () {
      _.N.call(this);
      this.h = null;
    };
    _.x(Fo, _.N);
    Fo.prototype.S = function () {
      this.za(this.g.S("DIV", { class: "status-message" }));
    };
    Fo.prototype.za = function (a) {
      this.j = a;
      a.style.display = "none";
    };
    var Ho = function (a) {
        var b = c;
        var c = (0, _.y)(function () {
          _.gd(this.A(), "");
          b && b();
        }, a);
        c = (0, _.y)(a.l, a, 750, c);
        Go(a, c);
      },
      Io = function (a) {
        a.h && (a.h.stop(!0), (a.h = null));
        _.gd(a.A(), "");
        a.X(!1);
      },
      Go = function (a, b) {
        a.h = new Eo(a.A(), 750);
        Fm(a).pc(
          a.h,
          "begin",
          (0, _.y)(function () {
            this.A().style.display = "block";
          }, a)
        );
        Fm(a).pc(
          a.h,
          "finish",
          (0, _.y)(function () {
            this.h = null;
            window.setTimeout(b, 2e3);
          }, a)
        );
        a.h.play();
      };
    Fo.prototype.l = function (a, b) {
      this.isVisible() &&
        ((this.h = new Do(this.A(), a)),
        Fm(this).pc(
          this.h,
          "finish",
          (0, _.y)(function () {
            b && b();
          }, this)
        ),
        this.h.play());
    };
    Fo.prototype.X = function (a) {
      this.A().style.display = a ? "block" : "none";
      this.A().style.opacity = a ? "1" : "0";
    };
    Fo.prototype.isVisible = function () {
      return (
        "none" !== this.A().style.display && "0" !== this.A().style.opacity
      );
    };
    var Jo = function (a, b) {
      _.E.call(this);
      this.o = new _.F(this);
      this.jd(a || null);
      b && (this.md = b);
    };
    _.z(Jo, _.E);
    _.k = Jo.prototype;
    _.k.ib = null;
    _.k.rd = !0;
    _.k.Pg = null;
    _.k.Bc = !1;
    _.k.Jf = -1;
    _.k.md = "toggle_display";
    _.k.A = function () {
      return this.ib;
    };
    _.k.jd = function (a) {
      if (this.Bc) throw Error("Fa");
      this.ib = a;
    };
    _.k.Kd = function (a) {
      if (this.Bc) throw Error("Fa");
      this.rd = a;
    };
    _.k.isVisible = function () {
      return this.Bc;
    };
    _.k.X = function (a) {
      this.Ma && this.Ma.stop();
      this.ua && this.ua.stop();
      if (a) {
        if (!this.Bc && this.Se()) {
          if (!this.ib) throw Error("Ga");
          this.Qb();
          a = _.Uc(this.ib);
          if (this.rd)
            if ((this.o.I(a, "mousedown", this.Sf, !0), _.C)) {
              try {
                var b = a.activeElement;
              } catch (d) {}
              for (; b && "IFRAME" == b.nodeName; ) {
                try {
                  var c = _.uj(b);
                } catch (d) {
                  break;
                }
                a = c;
                b = a.activeElement;
              }
              this.o.I(a, "mousedown", this.Sf, !0);
              this.o.I(a, "deactivate", this.Mh);
            } else this.o.I(a, "blur", this.Mh);
          "toggle_display" == this.md
            ? ((this.ib.style.visibility = "visible"), _.Q(this.ib, !0))
            : "move_offscreen" == this.md && this.Qb();
          this.Bc = !0;
          this.Jf = Date.now();
          this.Ma
            ? (_.zd(this.Ma, "end", this.Nh, !1, this), this.Ma.play())
            : this.Nh();
        }
      } else Ko(this);
    };
    _.k.Qb = function () {};
    var Ko = function (a, b) {
      a.Bc &&
        a.dispatchEvent({ type: "beforehide", target: b }) &&
        (a.o && _.Of(a.o),
        (a.Bc = !1),
        a.ua
          ? (_.zd(a.ua, "end", _.pb(a.Sg, b), !1, a), a.ua.play())
          : a.Sg(b));
    };
    _.k = Jo.prototype;
    _.k.Sg = function (a) {
      "toggle_display" == this.md
        ? this.Jj()
        : "move_offscreen" == this.md && (this.ib.style.top = "-10000px");
      this.Uf(a);
    };
    _.k.Jj = function () {
      this.ib.style.visibility = "hidden";
      _.Q(this.ib, !1);
    };
    _.k.Se = function () {
      return this.dispatchEvent("beforeshow");
    };
    _.k.Nh = function () {
      this.dispatchEvent("show");
    };
    _.k.Uf = function (a) {
      this.dispatchEvent({ type: "hide", target: a });
    };
    _.k.Sf = function (a) {
      a = a.target;
      _.fd(this.ib, a) ||
        Lo(this, a) ||
        150 > Date.now() - this.Jf ||
        Ko(this, a);
    };
    _.k.Mh = function (a) {
      var b = _.Uc(this.ib);
      if ("undefined" != typeof document.activeElement) {
        if (
          ((a = b.activeElement),
          !a || _.fd(this.ib, a) || "BODY" == a.tagName || Lo(this, a))
        )
          return;
      } else if (a.target != b) return;
      150 > Date.now() - this.Jf || Ko(this);
    };
    var Lo = function (a, b) {
      return _.Qb(a.Pg || [], function (c) {
        return b === c || _.fd(c, b);
      });
    };
    Jo.prototype.K = function () {
      Jo.P.K.call(this);
      this.o.O();
      _.ca(this.Ma);
      _.ca(this.ua);
      delete this.ib;
      delete this.o;
      delete this.Pg;
    };
    var Mo = function (a) {
      _.E.call(this);
      this.g = a;
      a = _.C ? "focusout" : "blur";
      this.h = _.D(this.g, _.C ? "focusin" : "focus", this, !_.C);
      this.j = _.D(this.g, a, this, !_.C);
    };
    _.z(Mo, _.E);
    Mo.prototype.handleEvent = function (a) {
      var b = new _.md(a.g);
      b.type =
        "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
      this.dispatchEvent(b);
    };
    Mo.prototype.K = function () {
      Mo.P.K.call(this);
      _.Hd(this.h);
      _.Hd(this.j);
      delete this.g;
    };
    var No = function () {};
    No.prototype.h = function () {};
    var Qo = function (a, b, c, d, e, f, g) {
        var h;
        if ((h = c.offsetParent)) {
          var l = "HTML" == h.tagName || "BODY" == h.tagName;
          if (!l || "static" != gk(h, "position")) {
            var m = mk(h);
            if (!l) {
              l = rk(h);
              var n;
              if ((n = l)) {
                n = _.Ig && 0 <= _.Ub(zo, 10);
                var p;
                if ((p = _.kc)) p = 0 <= _.Ub(xo, 10);
                var t = _.Hg && 0 <= _.Ub(zo, 85);
                n = _.bc || n || p || t;
              }
              l = n
                ? -h.scrollLeft
                : l && !_.ac && "visible" != gk(h, "overflowX")
                ? h.scrollWidth - h.clientWidth - h.scrollLeft
                : h.scrollLeft;
              m = gj(m, new O(l, h.scrollTop));
            }
          }
        }
        h = m || new O();
        m = mk(a);
        l = qk(a);
        m = new ek(m.x, m.y, l.width, l.height);
        if ((l = nk(a)))
          (t = new ek(l.left, l.top, l.right - l.left, l.bottom - l.top)),
            (l = Math.max(m.left, t.left)),
            (n = Math.min(m.left + m.width, t.left + t.width)),
            l <= n &&
              ((p = Math.max(m.top, t.top)),
              (t = Math.min(m.top + m.height, t.top + t.height)),
              p <= t &&
                ((m.left = l),
                (m.top = p),
                (m.width = n - l),
                (m.height = t - p)));
        l = _.Vc(a);
        p = _.Vc(c);
        l.T != p.T &&
          ((n = l.T.body),
          (p = _.ok(n, _.hd(p))),
          (p = gj(p, mk(n))),
          !_.C || 9 <= Number(_.uc) || _.Zc(l.T) || (p = gj(p, _.Ji(l.T))),
          (m.left += p.x),
          (m.top += p.y));
        a = Oo(a, b);
        b = m.left;
        a & 4 ? (b += m.width) : a & 2 && (b += m.width / 2);
        b = new O(b, m.top + (a & 1 ? m.height : 0));
        b = gj(b, h);
        e && ((b.x += (a & 4 ? -1 : 1) * e.x), (b.y += (a & 1 ? -1 : 1) * e.y));
        var q;
        g &&
          (q = nk(c)) &&
          ((q.top -= h.y),
          (q.right -= h.x),
          (q.bottom -= h.y),
          (q.left -= h.x));
        return Po(b, c, d, f, q, g);
      },
      Po = function (a, b, c, d, e, f) {
        a = Fi(a);
        var g = Oo(b, c);
        c = qk(b);
        var h = new _.Oc(c.width, c.height);
        a = Fi(a);
        h = new _.Oc(h.width, h.height);
        var l = 0;
        if (d || 0 != g)
          g & 4
            ? (a.x -= h.width + (d ? d.right : 0))
            : g & 2
            ? (a.x -= h.width / 2)
            : d && (a.x += d.left),
            g & 1
              ? (a.y -= h.height + (d ? d.bottom : 0))
              : d && (a.y += d.top);
        f &&
          (e
            ? ((d = h),
              (g = 0),
              65 == (f & 65) && (a.x < e.left || a.x >= e.right) && (f &= -2),
              132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5),
              a.x < e.left && f & 1 && ((a.x = e.left), (g |= 1)),
              f & 16 &&
                ((l = a.x),
                a.x < e.left && ((a.x = e.left), (g |= 4)),
                a.x + d.width > e.right &&
                  ((d.width = Math.min(e.right - a.x, l + d.width - e.left)),
                  (d.width = Math.max(d.width, 0)),
                  (g |= 4))),
              a.x + d.width > e.right &&
                f & 1 &&
                ((a.x = Math.max(e.right - d.width, e.left)), (g |= 1)),
              f & 2 &&
                (g |=
                  (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)),
              a.y < e.top && f & 4 && ((a.y = e.top), (g |= 2)),
              f & 32 &&
                ((l = a.y),
                a.y < e.top && ((a.y = e.top), (g |= 8)),
                a.y + d.height > e.bottom &&
                  ((d.height = Math.min(e.bottom - a.y, l + d.height - e.top)),
                  (d.height = Math.max(d.height, 0)),
                  (g |= 8))),
              a.y + d.height > e.bottom &&
                f & 4 &&
                ((a.y = Math.max(e.bottom - d.height, e.top)), (g |= 2)),
              f & 8 &&
                (g |=
                  (a.y < e.top ? 64 : 0) |
                  (a.y + d.height > e.bottom ? 128 : 0)),
              (e = g))
            : (e = 256),
          (l = e));
        f = new ek(0, 0, 0, 0);
        f.left = a.x;
        f.top = a.y;
        f.width = h.width;
        f.height = h.height;
        e = l;
        if (e & 496) return e;
        _.ik(b, new O(f.left, f.top));
        h = new _.Oc(f.width, f.height);
        _.Pc(c, h) ||
          ((c = h),
          (a = _.Zc(_.Vc(_.Uc(b)).T)),
          !_.C || _.rc("10") || a
            ? _.sk(b, c, "border-box")
            : ((h = b.style),
              a
                ? ((a = _.vk(b)),
                  (b = _.yk(b)),
                  (h.pixelWidth =
                    c.width - b.left - a.left - a.right - b.right),
                  (h.pixelHeight =
                    c.height - b.top - a.top - a.bottom - b.bottom))
                : ((h.pixelWidth = c.width), (h.pixelHeight = c.height))));
        return e;
      },
      Oo = function (a, b) {
        return (b & 8 && rk(a) ? b ^ 4 : b) & -9;
      };
    var Ro = function (a, b, c) {
      this.element = a;
      this.j = b;
      this.l = c;
    };
    _.z(Ro, No);
    Ro.prototype.h = function (a, b, c) {
      Qo(this.element, this.j, a, b, void 0, c, this.l);
    };
    var So = function (a, b) {
      this.g = a instanceof O ? a : new O(a, b);
    };
    _.z(So, No);
    So.prototype.h = function (a, b, c) {
      Qo(jk(a), 0, a, b, this.g, c, null);
    };
    var To = function (a, b) {
      this.s = b || void 0;
      Jo.call(this, a);
    };
    _.z(To, Jo);
    To.prototype.Qb = function () {
      if (this.s) {
        var a = !this.isVisible() && "move_offscreen" != this.md,
          b = this.A();
        a && ((b.style.visibility = "hidden"), _.Q(b, !0));
        this.s.h(b, 8, this.lj);
        a && _.Q(b, !1);
      }
    };
    var W = function (a, b, c) {
      this.U = c || (a ? _.Vc(_.P(a)) : _.Vc());
      To.call(
        this,
        this.U.S("DIV", { style: "position:absolute;display:none;" })
      );
      this.sd = new O(1, 1);
      this.B = new _.gf();
      this.H = null;
      a && this.attach(a);
      null != b && this.zb(b);
    };
    _.z(W, To);
    var Uo = [];
    _.k = W.prototype;
    _.k.Sa = null;
    _.k.className = "VIpgJd-suEOdc";
    _.k.Zh = 500;
    _.k.wh = 0;
    _.k.attach = function (a) {
      a = _.P(a);
      this.B.add(a);
      _.D(a, "mouseover", this.Te, !1, this);
      _.D(a, "mouseout", this.Wc, !1, this);
      _.D(a, "mousemove", this.Yg, !1, this);
      _.D(a, "focus", this.Zd, !1, this);
      _.D(a, "blur", this.Wc, !1, this);
    };
    var Wo = function (a, b) {
        if (b) (b = _.P(b)), Vo(a, b), a.B.remove(b);
        else {
          for (var c = a.B.sb(), d = 0; (b = c[d]); d++) Vo(a, b);
          a = a.B;
          b = a.g;
          b.h = {};
          b.g.length = 0;
          b.size = 0;
          b.j = 0;
          a.size = 0;
        }
      },
      Vo = function (a, b) {
        _.Gd(b, "mouseover", a.Te, !1, a);
        _.Gd(b, "mouseout", a.Wc, !1, a);
        _.Gd(b, "mousemove", a.Yg, !1, a);
        _.Gd(b, "focus", a.Zd, !1, a);
        _.Gd(b, "blur", a.Wc, !1, a);
      };
    W.prototype.zb = function (a) {
      _.gd(this.A(), a);
    };
    W.prototype.jd = function (a) {
      var b = this.A();
      b && _.sj(b);
      W.P.jd.call(this, a);
      a
        ? ((b = this.U.T.body),
          b.insertBefore(a, b.lastChild),
          _.ca(this.H),
          (this.H = new Mo(this.A())),
          _.Ei(this, _.pb(_.ca, this.H)),
          _.D(this.H, "focusin", this.N, void 0, this),
          _.D(this.H, "focusout", this.Rb, void 0, this))
        : (_.ca(this.H), (this.H = null));
    };
    W.prototype.Rd = function () {
      return Aj(this.A());
    };
    var Xo = function (a) {
      return a.W ? (a.isVisible() ? 4 : 1) : a.na ? 3 : a.isVisible() ? 2 : 0;
    };
    W.prototype.Se = function () {
      if (!Jo.prototype.Se.call(this)) return !1;
      if (this.g)
        for (var a, b = 0; (a = Uo[b]); b++) _.fd(a.A(), this.g) || a.X(!1);
      _.ua(Uo, this);
      a = this.A();
      a.className = this.className;
      this.N();
      _.D(a, "mouseover", this.pe, !1, this);
      _.D(a, "mouseout", this.oe, !1, this);
      Yo(this);
      return !0;
    };
    W.prototype.Uf = function () {
      _.va(Uo, this);
      for (var a = this.A(), b, c = 0; (b = Uo[c]); c++)
        b.g && _.fd(a, b.g) && b.X(!1);
      this.bh && this.bh.Rb();
      _.Gd(a, "mouseover", this.pe, !1, this);
      _.Gd(a, "mouseout", this.oe, !1, this);
      this.g = void 0;
      0 == Xo(this) && (this.Bb = !1);
      Jo.prototype.Uf.call(this);
    };
    W.prototype.Qf = function (a, b) {
      this.g == a &&
        _.ef(this.B.g, _.hf(this.g)) &&
        (this.Bb || !this.em
          ? (this.X(!1),
            this.isVisible() ||
              ((this.g = a),
              (this.s = b || new Zo(Fi(this.sd))),
              this.isVisible() && this.Qb(),
              this.X(!0)))
          : (this.g = void 0));
      this.W = void 0;
    };
    W.prototype.Kj = function (a) {
      this.na = void 0;
      if (a == this.g) {
        a = this.U;
        var b = a.T;
        try {
          var c = b && b.activeElement;
          var d = c && c.nodeName ? c : null;
        } catch (e) {
          d = null;
        }
        d = d && this.A() && a.g(this.A(), d);
        (null != this.Sa &&
          (this.Sa == this.A() || _.ef(this.B.g, _.hf(this.Sa)))) ||
          d ||
          (this.he && this.he.Sa) ||
          this.X(!1);
      }
    };
    var $o = function (a, b) {
      var c = _.Ji(a.U.T);
      a.sd.x = b.clientX + c.x;
      a.sd.y = b.clientY + c.y;
    };
    W.prototype.Te = function (a) {
      var b = ap(this, a.target);
      this.Sa = b;
      this.N();
      b != this.g && ((this.g = b), bp(this, b), cp(this), $o(this, a));
    };
    var ap = function (a, b) {
      try {
        for (; b && !_.ef(a.B.g, _.hf(b)); ) b = b.parentNode;
        return b;
      } catch (c) {
        return null;
      }
    };
    W.prototype.Yg = function (a) {
      $o(this, a);
      this.Bb = !0;
    };
    W.prototype.Zd = function (a) {
      this.Sa = a = ap(this, a.target);
      this.Bb = !0;
      if (this.g != a) {
        this.g = a;
        var b = new dp(this.Sa);
        this.N();
        bp(this, a, b);
        cp(this);
      }
    };
    var cp = function (a) {
      if (a.g)
        for (var b, c = 0; (b = Uo[c]); c++)
          _.fd(b.A(), a.g) && ((b.he = a), (a.bh = b));
    };
    W.prototype.Wc = function (a) {
      var b = ap(this, a.target),
        c = ap(this, a.relatedTarget);
      b != c &&
        (b == this.Sa && (this.Sa = null),
        Yo(this),
        (this.Bb = !1),
        !this.isVisible() ||
        (a.relatedTarget && _.fd(this.A(), a.relatedTarget))
          ? (this.g = void 0)
          : this.Rb());
    };
    W.prototype.pe = function () {
      var a = this.A();
      this.Sa != a && (this.N(), (this.Sa = a));
    };
    W.prototype.oe = function (a) {
      var b = this.A();
      this.Sa != b ||
        (a.relatedTarget && _.fd(b, a.relatedTarget)) ||
        ((this.Sa = null), this.Rb());
    };
    var bp = function (a, b, c) {
        a.W || (a.W = _.Xf((0, _.y)(a.Qf, a, b, c), a.Zh));
      },
      Yo = function (a) {
        a.W && (_.r.clearTimeout(a.W), (a.W = void 0));
      };
    W.prototype.Rb = function () {
      2 == Xo(this) &&
        (this.na = _.Xf((0, _.y)(this.Kj, this, this.g), this.wh));
    };
    W.prototype.N = function () {
      this.na && (_.r.clearTimeout(this.na), (this.na = void 0));
    };
    W.prototype.K = function () {
      this.X(!1);
      Yo(this);
      Wo(this);
      this.A() && _.sj(this.A());
      this.Sa = null;
      delete this.U;
      W.P.K.call(this);
    };
    var Zo = function (a, b) {
      So.call(this, a, b);
    };
    _.z(Zo, So);
    Zo.prototype.h = function (a, b, c) {
      b = jk(a);
      b = nk(b);
      c = c
        ? new dk(c.top + 10, c.right, c.bottom, c.left + 10)
        : new dk(10, 0, 0, 10);
      Po(this.g, a, 8, c, b, 9) & 496 && Po(this.g, a, 8, c, b, 5);
    };
    var dp = function (a) {
      Ro.call(this, a, 5);
    };
    _.z(dp, Ro);
    dp.prototype.h = function (a, b, c) {
      var d = new O(10, 0);
      Qo(this.element, this.j, a, b, d, c, 9) & 496 &&
        Qo(this.element, 4, a, 1, d, c, 5);
    };
    var ep = function () {
      W.call(this);
      this.Y = {};
      this.pd = {};
      this.M = null;
      this.ge = !1;
      this.qd = this.h = this.J = null;
      this.ma = {};
      this.G = new _.F(this);
      this.D = this.V = this.j = this.Sb = this.l = this.Na = this.Ha = null;
      this.F = !0;
      this.Tb = [];
    };
    _.x(ep, W);
    _.k = ep.prototype;
    _.k.Ba = function () {
      this.F = !1;
      var a = _.qf.test(_.S) ? "rtl" : "ltr";
      this.jd(
        _.qi(xm, {
          bd: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
          bm: "https://www.google.com/images/cleardot.gif",
          dm: _.ll,
          dir: a,
          tg: sl,
        })
      );
      this.className += " skiptranslate";
      this.A() &&
        this.M &&
        this.Sb &&
        this.j.A() &&
        this.J &&
        this.D &&
        (this.G.I(window, "resize", (0, _.y)(this.Qb, this)),
        this.G.I(this, "hide", (0, _.y)(this.lk, this)),
        this.Tb.length && (this.Mg.apply(this, this.Tb), (this.Tb = [])));
    };
    _.k.Mg = function (a) {
      for (var b = [], c = 0; c < arguments.length; ++c) {
        var d = arguments[c];
        if (d)
          if (this.M || d.ze) {
            var e = _.pj("SPAN", { class: d.className || "activity-link" });
            _.gd(e, d.Kf || "");
            b.push(e);
            qj(d.ze || this.M, e);
            if (d.Ee && d.gd) {
              var f = (0, _.y)(this.mj, this, d);
              this.G.I(e, "click", f);
              d.ye && this.G.I(this.J, d.ye, f);
            }
            d.id = d.id || d.Wb();
            this.Y[d.id] && this.Uh(d);
            this.Y[d.id] = d;
            this.pd[d.id] = e;
          } else this.Tb.push(d);
      }
      return b;
    };
    _.k.Uh = function (a) {
      for (var b = 0; b < arguments.length; ++b) {
        var c =
            "string" === typeof arguments[b] || arguments[b] instanceof String
              ? arguments[b]
              : arguments[b].id,
          d = this.Y[c],
          e = this.pd[c];
        d &&
          e &&
          (this.h && this.h.id === c && this.ff(),
          this.G.Ab(d, ["submitted", "cancelled"]),
          d.O(),
          this.ma[c] && delete this.ma[c],
          delete this.Y[c],
          delete this.pd[c],
          _.sj(e));
      }
    };
    _.k.mj = function (a) {
      if (this.J) {
        a != this.h &&
          this.h &&
          (Io(this.j),
          this.h.gd.call(this.h),
          this.h.A() && (this.h.A().style.display = "none"),
          fp(this, !1),
          (this.h = null));
        fp(this, !0);
        Io(this.j);
        this.h = a;
        if (this.ma[a.id]) {
          var b = this.ma[a.id];
          var c = a.Pd;
        } else
          a.Ba(),
            (b = a.A()),
            (c = a.Ee),
            this.G.I(a, ["submitted", "cancelled"], (0, _.y)(this.ff, this)),
            a.ef && (this.ma[a.id] = b);
        qj(this.J, b);
        c.call(a, this);
        a = new Eo(b, 100);
        this.G.pc(a, "finish", (0, _.y)(this.Qb, this, !0, !0));
        a.play();
      }
    };
    _.k.ff = function () {
      if (this.h)
        if ((Io(this.j), this.h.gd.call(this.h), this.h.A())) {
          var a = new Do(this.h.A(), 100);
          this.G.pc(
            a,
            "finish",
            (0, _.y)(function () {
              _.sj(this.h.A());
              this.h = null;
              fp(this, !1);
              Aj(this.j.A()) && (Ho(this.j), this.Qb(!0, !0));
            }, this)
          );
          a.play();
        } else fp(this, !1), (this.h = null);
    };
    _.k.Qf = function (a, b) {
      this.qd = a;
      W.prototype.Qf.call(this, a, b);
      this.A().style.display = "block";
    };
    _.k.Te = function (a) {
      if (!this.F) {
        var b = ap(this, a.target);
        this.Sa = b;
        this.N();
        b != this.g
          ? ((this.g = b), bp(this, b), cp(this), $o(this, a))
          : bp(this, b);
      }
    };
    _.k.lk = function () {
      Io(this.j);
      this.ge && this.ff();
    };
    _.k.K = function () {
      for (var a in this.Y) this.Uh(a);
      this.G && this.G.O();
      this.G = null;
      this.j && this.j.O();
      this.D = this.Sb = this.qd = this.J = this.M = this.j = null;
      W.prototype.K.call(this);
    };
    var fp = function (a, b) {
      a.ge = b;
      a.F = b;
      if (a.F) {
        var c = a.A();
        a.Ha = new O(c.offsetLeft, c.offsetTop);
      } else
        a.Ha &&
          (null != (a.s || null) && ((a.s || null).g = a.Ha),
          _.ik(a.A(), a.Ha),
          (a.Ha = null));
      a.M.style.display = b ? "none" : "inline-block";
      a.Sb.style.display = b ? "inline-block" : "none";
    };
    _.k = ep.prototype;
    _.k.Kd = function (a) {
      if (this.isVisible()) {
        a = (this.rd = a) ? this.o.I : this.o.Ab;
        var b = _.Uc(this.A());
        a.call(this.o, b, "mousedown", this.Sf, !0);
      } else W.prototype.Kd.call(this, a);
    };
    _.k.jd = function (a) {
      W.prototype.jd.call(this, a);
      if (a) {
        this.M = Hi("activity-links", a);
        var b = Hi("status-message", a);
        b && ((this.j = new Fo()), Hm(this.j, b));
        this.Sb = Hi("started-activity-container", a);
        this.J = Hi("activity-root", a);
        this.D = Hi("original-text", a);
      }
    };
    _.k.Qb = function (a, b) {
      var c = mk(document.body).y;
      if (this.s) {
        (this.s || null).g.y += c;
        W.prototype.Qb.call(this);
        var d = parseInt(this.A().style.left, 10);
        a = parseInt(this.A().style.top, 10) - (a ? 0 : c);
        b && ((b = this.lj || {}), (a -= b.top || 10), (d -= b.left || 10));
        a -= c;
        (this.s || null).g.y = a;
        (this.s || null).g.x = d;
        c = new O(d, a);
        _.ik(this.A(), c);
      }
    };
    _.k.X = function (a) {
      W.prototype.X.call(this, a);
    };
    _.k.rc = function (a) {
      this.l = a;
    };
    _.k.ta = function (a) {
      this.V = a;
    };
    _.k.zb = function (a) {
      a = a ? (0, _.Sb)(a) : "";
      this.D ? _.gd(this.D, a) : W.prototype.zb.call(this, a);
    };
    _.k.lb = function () {
      return this.l;
    };
    _.k.Vc = function () {
      return this.j;
    };
    _.k.oa = function () {
      return this.V;
    };
    _.k.Rd = function () {
      return this.D ? Aj(this.D) : W.prototype.Rd.call(this);
    };
    _.k.Wc = function (a) {
      this.F || W.prototype.Wc.call(this, a);
    };
    _.k.pe = function (a) {
      this.F || W.prototype.pe.call(this, a);
    };
    _.k.oe = function (a) {
      this.F || W.prototype.oe.call(this, a);
    };
    var gp = {
      set: function (a, b) {
        a.className = b;
      },
      get: function (a) {
        a = a.className;
        return ("string" === typeof a && a.match(/\S+/g)) || [];
      },
      add: function (a, b) {
        var c = gp.get(a),
          d = Array.prototype.slice.call(arguments, 1),
          e = c.length + d.length;
        gp.Ng(c, d);
        gp.set(a, c.join(" "));
        return c.length == e;
      },
      remove: function (a, b) {
        var c = gp.get(a),
          d = Array.prototype.slice.call(arguments, 1),
          e = gp.fh(c, d);
        gp.set(a, e.join(" "));
        return e.length == c.length - d.length;
      },
      Ng: function (a, b) {
        for (var c = 0; c < b.length; c++) _.ta(a, b[c]) || a.push(b[c]);
      },
      fh: function (a, b) {
        return a.filter(function (c) {
          return !_.ta(b, c);
        });
      },
      lm: function (a, b, c) {
        for (var d = gp.get(a), e = !1, f = 0; f < d.length; f++)
          d[f] == b && (d.splice(f--, 1), (e = !0));
        e && (d.push(c), gp.set(a, d.join(" ")));
        return e;
      },
      Zl: function (a, b, c) {
        var d = gp.get(a);
        "string" === typeof b
          ? _.va(d, b)
          : Array.isArray(b) && (d = gp.fh(d, b));
        "string" !== typeof c || _.ta(d, c)
          ? Array.isArray(c) && gp.Ng(d, c)
          : d.push(c);
        gp.set(a, d.join(" "));
      },
      has: function (a, b) {
        return _.ta(gp.get(a), b);
      },
      enable: function (a, b, c) {
        c ? gp.add(a, b) : gp.remove(a, b);
      },
      toggle: function (a, b) {
        var c = !gp.has(a, b);
        gp.enable(a, b, c);
        return c;
      },
    };
    var hp = function (a, b) {
      lo.call(this, a);
      b = b || {};
      this.C = { apiKey: b.apiKey || "", lc: b.lc || 1 };
      this.g = null;
    };
    _.x(hp, lo);
    _.k = hp.prototype;
    _.k.attach = function (a, b) {
      b && ((b.Yd = a), this.g.attach(b));
    };
    _.k.Cg = function (a) {
      a && Wo(this.g, a);
    };
    _.k.si = function () {
      var a = this.g.qd;
      if (a && void 0 !== a.Yd) {
        var b = a.Yd;
        a = this.xa.h[b];
        mo(this, this.h, !1);
        this.h = b;
        mo(this, b);
        this.g.rc(a.Hk);
        this.g.ta(a.Kk);
        var c = a.la;
        this.g.Na = c && (0, _.Sb)(c);
        this.g.zb(a.text);
      }
      b = new CustomEvent("goog-gt-popupShown", {
        detail: { Yd: b, Mk: this.g },
      });
      window.document.body.dispatchEvent(b);
    };
    _.k.ri = function () {
      mo(this, this.h, !1);
    };
    _.k.jk = function () {
      this.xa.h[this.h].bj.dispatchEvent("updating");
    };
    _.k.K = function () {
      this.g.O();
      this.g = null;
      lo.prototype.K.call(this);
    };
    _.k.xh = function (a, b) {
      gp[b ? "add" : "remove"](a, "goog-text-highlight");
    };
    var ip = function (a) {
      this.s = a;
      this.l = this.h = this.o = this.j = -1;
      this.g = !1;
      this.D = 0;
      this.H = "";
      this.F = 0;
    };
    ip.prototype.start = function () {
      if (!this.g) {
        this.g = !0;
        var a = [],
          b;
        for (b = 0; 15 > b; b++) a[b] = _.vl[0 | (62 * Math.random())];
        this.H = a.join("");
        this.D = 0;
        this.l = this.h = this.o = this.j = -1;
        this.F = _.qb();
        _.Xf(this.B, 1e4, this);
      }
    };
    ip.prototype.stop = function () {
      this.g && ((this.g = !1), jp(this));
    };
    ip.prototype.B = function () {
      this.g && (jp(this), _.Xf(this.B, 1e3, this));
    };
    var jp = function (a) {
      var b = a.s.l,
        c = a.s.s,
        d = a.s.j,
        e = a.s.o;
      if (a.j != b || a.o != c || a.h != d || a.l != e) {
        var f = {};
        f.ct = b;
        f.cv = c;
        f.cts = d;
        f.cvs = e;
        f.sid = a.H;
        f.seq = a.D++;
        f.tat = _.qb() - a.F;
        if (0 <= a.j || 0 <= a.o || 0 <= a.h || 0 <= a.l)
          (f.pt = a.j), (f.pv = a.o), (f.pts = a.h), (f.pvs = a.l);
        _.si("te_v", f);
        a.j = b;
        a.o = c;
        a.h = d;
        a.l = e;
      }
    };
    var kp = function () {
      this.o = this.j = this.s = this.l = 0;
      this.g = [];
      this.h =
        null != _.r.IntersectionObserver
          ? new IntersectionObserver((0, _.y)(this.B, this))
          : null;
    };
    kp.prototype.attach = function (a, b) {
      this.j += b;
      var c = this.g.length;
      this.g.push(b);
      for (b = 0; b < a.length; ++b) {
        var d = a[b];
        tj(d)
          ? ((d[lp] = c), (this.l += Aj(d).length), this.h && this.h.observe(d))
          : this.Ch(d.nodeType);
      }
    };
    kp.prototype.reset = function () {
      this.o = this.j = this.s = this.l = 0;
      this.g = [];
    };
    kp.prototype.B = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (0 < c.intersectionRatio && null != c.target[lp]) {
          this.s += Aj(c.target).length;
          var d = c.target[lp];
          this.o += this.g[d];
          this.g[d] = 0;
          c.target[lp] = void 0;
        }
      }
    };
    _.Kl.attach(36546, kp.prototype, { Ch: 1 });
    var lp = "_gt_" + Math.random().toString(36).substr(2);
    _.mp = function (a, b) {
      _.A.call(this);
      a = a || {};
      this.C = _.ci(a);
      this.C.lc = a.lc;
      this.C.Ie = !!a.Ie;
      this.C.Ui = parseInt(a.Ui, 10) || 300;
      this.C.tk = a.tk;
      this.C.trackVisibility = a.trackVisibility || !1;
      this.o = 0;
      this.h = {};
      this.G = new _.F(this);
      this.j = new hp(this, this.C);
      b && (this.j.j = b || {});
      a = this.j;
      a.g = new ep({ Fk: a.C.Fk });
      a.g.wh = 300;
      a.g.Zh = 1e3;
      a.g.Kd(!0);
      a.G.I(a.g, "show", (0, _.y)(a.si, a));
      a.G.I(a.g, "hide", (0, _.y)(a.ri, a));
      a.C.lc &&
        ((b = new ko(
          { id: "contribute", Kf: _.T.mi, ye: "dblclick", ef: !0 },
          a.j
        )),
        a.g.Mg(b),
        a.G.I(b, "submitted", (0, _.y)(a.jk, a)));
      a.g.Ba();
      this.l = this.g = null;
      this.C.trackVisibility &&
        null != _.r.IntersectionObserver &&
        ((this.g = new kp()), (this.l = new ip(this.g)));
    };
    _.x(_.mp, _.A);
    var np = function (a) {
      a.l && a.l.stop();
      for (var b in a.h) {
        var c = a,
          d = b,
          e = c.h[d];
        if (e) {
          if (c.g)
            for (var f = c.g, g = e.Ya, h = 0; h < g.length; ++h) {
              var l = f,
                m = g[h];
              tj(m)
                ? ((m[lp] = void 0), l.h && l.h.unobserve(m))
                : l.Ch(m.nodeType);
            }
          for (f = 0; f < e.Ya.length; ++f) e.Ya[f] && c.j.Cg(e.Ya[f]);
          delete c.h[d];
        }
      }
      a.g && a.g.reset();
    };
    _.mp.prototype.K = function () {
      np(this);
      this.G.O();
      this.G = null;
      this.j.O();
      this.j = null;
    };
    var op = function (a) {
        for (var b = 0; b < a.length; ++b)
          if (a[b] && a[b].node) return a[b].node;
        return null;
      },
      sp = function (a) {
        var b = op(a);
        if (!b) return null;
        var c = [],
          d = [],
          e = [];
        b = new sm(b, !0);
        var f = a[a.length - 1].node,
          g = 0,
          h = !1;
        do {
          b.next();
          var l = b.node();
          if (!l) break;
          var m = b.g.g,
            n = b.depth();
          for (1 == m && --n; g < a.length && !a[g].node; ) ++g;
          l == a[g].node ||
          (!h &&
            1 == m &&
            (null != l && null == l.previousSibling ? 0 : !pp(qp(l))))
            ? ((m = rp(l)),
              d.push({ node: m, zb: function () {} }),
              (e[d.length - 1] = n),
              l.parentNode && l.parentNode.insertBefore(m, l),
              l == a[g].node && ((c[g++] = d.length - 1), (h = !0)))
            : (h = !1);
        } while (l != f);
        return { vg: e, qk: c, Lj: d };
      },
      pp = function (a) {
        return null != a && mm[a.tagName];
      },
      qp = function (a) {
        if (null == a) return null;
        for (
          a = a.previousSibling;
          null != a && null != a && 3 == a.nodeType && "" == (0, _.Sb)(Aj(a));

        )
          a = a.previousSibling;
        return a;
      },
      vp = function (a, b, c, d, e, f, g) {
        _.E.call(this);
        this.g = [];
        for (var h = 0; h < a.length; ++h)
          this.g.push("nodeType" in a[h] ? tp(a[h]) : a[h]), up(a[h].node);
        this.j = b;
        this.F = d || 0;
        this.U = e || 0;
        this.B = c;
        this.xa = f || null;
        this.Sc = g || "transparent";
        this.J = this.H = this.N = !1;
        this.o = [];
        this.s = [];
        this.h = [];
        this.W = [];
        this.G = new _.F(this);
        this.l = this.M = !1;
      },
      tp,
      up,
      Dp,
      Bp,
      rp;
    _.x(vp, _.E);
    var yp = function (a) {
        if (!a) return !1;
        if (3 != a.nodeType || !_.C) return wp in a && !!a[wp];
        if (!a.parentNode) return !0;
        if (!(xp in a.parentNode)) return !1;
        var b = a.parentNode[xp];
        if (!b || !b[a.nodeValue]) return !1;
        b = b[a.nodeValue];
        for (var c = 0; c < b.length; ++c) if (b[c] == a) return !0;
        return !1;
      },
      zp = function (a, b) {
        if (!a) return "";
        if ("TITLE" == a.tagName) return String(document.title);
        3 == a.nodeType ? (b = "nodeValue") : b || (b = "value");
        return a.getAttribute && a.getAttribute(b)
          ? String(a.getAttribute(b))
          : "string" === typeof a[b]
          ? String(a[b])
          : "";
      };
    vp.prototype.Aa = function () {
      return this.j;
    };
    var Ap = function (a, b, c) {
        b = { Oh: b, Vf: c, ra: [] };
        a.h.push(b);
        return b;
      },
      Cp = function (a) {
        if (!a.l && a.N && !a.H && !a.J) {
          a.H = !0;
          var b;
          if ((b = Bp(a.g))) {
            b = a.g;
            var c = a.h;
            if (1 == b.length && b[0] && b[0].sg) {
              for (var d = [], e = 0; e < c.length; ++e)
                for (var f = 0; f < c[e].ra.length; ++f) d.push(c[e].ra[f].la);
              b[0].zb(d.join(" "), b[0].node);
              b = !0;
            } else b = !1;
            b = !b;
          }
          if (b && (b = sp(a.g))) {
            a.s = b.qk;
            a.o = b.Lj;
            d = a.g;
            e = a.s;
            f = a.o;
            var g = b.vg;
            c = [];
            for (var h = 0; h < d.length; ++h)
              if (((c[h] = []), d[h].node && void 0 !== e[h]))
                for (var l = 0; l < f.length; ++l)
                  if (!(g[l] > g[e[h]])) {
                    if (g[l] == g[e[h]]) {
                      if (f[l].node.parentNode != f[e[h]].node.parentNode)
                        continue;
                    } else {
                      for (
                        var m = g[e[h]] - g[l], n = f[e[h]].node.parentNode;
                        m-- && n && n != f[l].node.parentNode;

                      )
                        n = n.parentNode;
                      if (n != f[l].node.parentNode) continue;
                    }
                    c[h].push(l);
                  }
            d = a.g;
            e = a.h;
            f = -1;
            for (g = e.length - 1; 0 <= g; --g)
              for (h = e[g], l = h.ra.length - 1; 0 <= l; --l)
                if (((m = h.ra[l]), !(0 > m.ha) && d[m.ha] && d[m.ha].node))
                  if (0 > f)
                    (m.te = _.wl(c[m.ha])), (f = c[m.ha][c[m.ha].length - 1]);
                  else
                    for (n = c[m.ha].length - 1; 0 <= n; --n)
                      if (c[m.ha][n] <= f) {
                        m.te = _.wl(c[m.ha].slice(0, n + 1));
                        f = c[m.ha][n];
                        break;
                      }
            for (c = e = 0; c < a.h.length; ++c) {
              d = a.h[c];
              f = a.g;
              g = b.vg;
              h = a.s;
              l = "";
              for (m = 0; m < d.ra.length; ++m)
                if (((n = d.ra[m]), (l += n.la), 0 > n.ha)) {
                  var p = -1,
                    t = -1,
                    q = h[d.ra[m - 1].ha];
                  void 0 !== q && (p = g[q]);
                  m < d.ra.length - 1 &&
                    ((q = h[d.ra[m + 1].ha]), void 0 !== q && (t = g[q]));
                  if (0 <= p || 0 <= t)
                    a: if (
                      ((t = (0 > p || t < p) && m < d.ra.length - 1),
                      (p = d.ra[t ? m + 1 : m - 1]),
                      !(p.ha >= f.length || null == f[p.ha].node))
                    ) {
                      q = n.la;
                      n.la = "";
                      if (
                        /^ +$/.test(q) &&
                        ((n = t
                          ? p.la.charCodeAt(0)
                          : p.la.charCodeAt(p.la.length - 1)),
                        (3584 <= n && 3711 >= n) ||
                          (12288 <= n && 12351 >= n) ||
                          (12352 <= n && 12543 >= n) ||
                          (12784 <= n && 12799 >= n) ||
                          (19968 <= n && 40959 >= n) ||
                          (65280 <= n && 65519 >= n))
                      )
                        break a;
                      p.la = t ? q + p.la : p.la + q;
                    }
                }
              f = l;
              g = a.g;
              h = a.o;
              l = b.vg;
              m = a.s;
              n = [];
              for (p = 0; p < d.ra.length && !(e >= h.length); ++p)
                if (
                  ((t = d.ra[p]), t.te && !(0 > t.ha) && g[t.ha].node && t.la)
                )
                  if (
                    e == m[t.ha] ||
                    (e in t.te && (!(e + 1 in t.te) || e + 1 != m[t.ha]))
                  ) {
                    if (h[e] && h[e].node) {
                      q = rp(h[e].node);
                      n.push(q);
                      for (
                        var w = h[e].node,
                          K = l[m[t.ha]] - l[e],
                          L = q,
                          Ca = g[t.ha].node.parentNode,
                          ha = L;
                        Ca && K--;

                      )
                        (ha = Ca.cloneNode(!1)),
                          ha.appendChild(L),
                          (Ca = Ca.parentNode),
                          (L = ha);
                      w.appendChild(ha);
                      w = g[t.ha].node;
                      g[t.ha].Me
                        ? g[t.ha].zh || q.appendChild(w)
                        : ((w = g[t.ha].node.cloneNode(!1)),
                          w.id && (w.id = ""),
                          q.appendChild(w));
                      g[t.ha].zb(t.la, w);
                    }
                  } else ++e, --p;
              g = n;
              n = a.g;
              h = a.B;
              if (d.Oh) h = d.Oh;
              else {
                m = n.length;
                l = -1;
                for (p = 0; p < d.ra.length; ++p)
                  (t = d.ra[p].ha),
                    0 <= t &&
                      n[t] &&
                      n[t].node &&
                      ((l = Math.max(l, t)), (m = Math.min(m, t)));
                for (n = ""; m <= l; ++m) h[m] && (n += h[m]);
                h = n;
              }
              m = g;
              n = h;
              if (a.xa) {
                if (3 != a.xa.C.lc) {
                  g = a.W;
                  h = g.push;
                  l = a.xa;
                  d = d.Vf;
                  p = a;
                  d = l.h[++l.o] = {
                    id: l.o.toString(),
                    bj: p,
                    text: n,
                    km: d || n,
                    la: f,
                    Hk: l.s,
                    Kk: l.B,
                    Ya: m,
                  };
                  for (f = 0; f < m.length; ++f) m[f] && l.j.attach(d.id, m[f]);
                  l.g && l.g.attach(m, n.length);
                  l.l && l.l.start();
                  h.call(g, d.id);
                }
              } else for (d = 0; d < m.length; ++d) m[d].title = n;
            }
            b = a.g;
            for (c = 0; c < b.length; ++c)
              b[c].node && !b[c].Me && _.sj(b[c].node);
            b = a.g;
            c = a.o;
            a = a.s;
            for (e = d = 0; e < c.length; ++e)
              if ((f = c[e].node)) {
                for (; d < b.length && e > a[d]; ) d++;
                (d >= b.length || e != a[d]) &&
                  !f.firstChild &&
                  (_.sj(f), (c[e].node = null));
              }
          }
        }
      };
    vp.prototype.restore = function () {
      if (this.H)
        if (
          ((this.H = !1),
          this.xa && np(this.xa),
          (this.W = []),
          Bp(this.o),
          1 == this.g.length && this.g[0].sg)
        )
          this.g[0].zb(this.B[0], this.g[0].node);
        else {
          for (var a = 0, b = 0; b < this.o.length; ++b) {
            var c = this.o[b].node;
            if (c) {
              for (; a < this.g.length && b > this.s[a]; ) {
                var d = a++;
                this.g[d].node && (Dp(this.g[d].node), (this.g[d].node = null));
              }
              if (a < this.g.length && b == this.s[a] && this.g[a].node) {
                this.g[a].zh || (_.ed(c), c.appendChild(this.g[a].node));
                this.g[a].zb(this.B[a], this.g[a].node);
                a++;
                var e = c.parentNode;
                if (e && 11 != e.nodeType)
                  if (c.removeNode) c.removeNode(!1);
                  else {
                    for (; (d = c.firstChild); ) e.insertBefore(d, c);
                    _.sj(c);
                  }
              } else _.sj(c);
            }
          }
          this.o = [];
        }
    };
    vp.prototype.K = function () {
      _.E.prototype.K.call(this);
      this.restore();
      for (var a = 0; a < this.g.length; ++a)
        this.g[a].node && Dp(this.g[a].node);
      this.g = null;
    };
    up = function (a) {
      if (a)
        if (3 == a.nodeType && _.C) {
          (xp in a.parentNode && a.parentNode[xp]) || (a.parentNode[xp] = {});
          var b = a.parentNode[xp];
          b[a.nodeValue] || (b[a.nodeValue] = []);
          b = b[a.nodeValue];
          for (var c = 0; c < b.length; ++c) if (b[c] == a) return;
          b.push(a);
        } else a[wp] = 1;
    };
    Dp = function (a) {
      if (!a || (3 == a.nodeType && _.C)) {
        var b = a.parentNode;
        if (b && xp in b) {
          var c = b[xp];
          if (c && a && c[a.nodeValue]) {
            var d = c[a.nodeValue];
            if (d)
              for (var e = 0; e < d.length; ++e)
                if (d[e] == a) {
                  d.splice(e, 1);
                  break;
                }
            0 == d.length && delete c[a.nodeValue];
          }
          if (c && Il(c))
            try {
              delete b[xp];
            } catch (f) {
              b[xp] = "";
            }
        }
      } else if (wp in a)
        try {
          delete a[wp];
        } catch (f) {
          a[wp] = "";
        }
    };
    Bp = function (a) {
      for (var b = 0; b < a.length; ++b)
        try {
          a[b].node && !a[b].node.parentNode && (a[b].node = null);
        } catch (c) {
          a[b].node = null;
        }
      for (b = a.length - 1; 0 <= b && !a[b].node; --b);
      a.length = b + 1;
      return a.length;
    };
    rp = function (a) {
      a = a.ownerDocument
        ? a.ownerDocument.createElement("font")
        : _.bd(document, "font");
      up(a);
      a.style.verticalAlign = "inherit";
      return a;
    };
    _.Ep = function () {
      this.h = {};
      this.g = {};
    };
    _.Ep.prototype.has = function (a, b) {
      return (
        null != this.h[a] ||
        null != this.g[a] ||
        (b && (a in this.h || a in this.g))
      );
    };
    _.Ep.prototype.write = function (a, b) {
      this.g[a] = b;
    };
    _.Ep.prototype.remove = function (a) {
      delete this.g[a];
      delete this.h[a];
    };
    _.Ep.prototype.bc = function () {
      return Il(this.h);
    };
    var wp = "_gt_" + Math.random().toString(36).substr(2),
      xp = "_gtn_" + Math.random().toString(36).substr(2);
    (function () {
      function a(c) {
        document.title = c;
      }
      var b = {};
      tp = function (c, d) {
        if ("TITLE" == c.tagName)
          return { node: c, zb: a, Me: !0, zh: !0, sg: !0 };
        if (3 == c.nodeType)
          return {
            node: c,
            zb: function (e, f) {
              _.gd(f, e);
            },
          };
        d || (d = "value");
        b[d] ||
          (b[d] = function (e, f) {
            f.setAttribute && f.setAttribute(d, e);
            "string" === typeof e && (f[d] = e);
          });
        c = { node: c, zb: b[d], Me: !0 };
        "value" != d && (c.sg = !0);
        return c;
      };
    })();
    var Fp = function (a, b, c, d) {
        d =
          d.firstChild && 3 == d.firstChild.nodeType
            ? d.firstChild.nodeValue
            : Aj(d);
        d = { ha: c, la: nj(d) };
        a.push(d);
        b[c] ? (b[c].end = d) : (b[c] = { start: d, end: d });
        return d;
      },
      Gp = function (a) {
        for (var b, c = a.firstChild; c; c = b)
          (b = c.nextSibling),
            3 != c.nodeType &&
              (c == a.firstChild
                ? a.parentNode && a.parentNode.insertBefore(c, a)
                : rj(c, a),
              Gp(c));
      };
    var Hp = function (a, b) {
        this.H = a || null;
        this.ca = b || gm.nc();
        this.B = this.s = this.M = null;
        this.l = this.j = !1;
        this.o = null;
        this.g = [];
        this.h = 0;
      },
      Ip = function (a, b) {
        a.j || (a.M = b);
      },
      Jp = function (a, b, c) {
        a.s = c ? (0, _.y)(b, c) : b;
      },
      Kp = function (a, b, c) {
        a.B = c ? (0, _.y)(b, c) : b;
      },
      Lp = function (a, b) {
        a.j || ((a.j = !0), (a.F = b), a.h++, (a.o = a.M), a.D());
      };
    Hp.prototype.stop = function () {
      this.h++;
      this.j = !1;
      this.g = [];
    };
    var Mp = function (a) {
        if (!a.j) return null;
        for (var b = !1, c = 0; c < a.g.length; ++c)
          if (a.g[c].target === a) {
            a.g[c].ready = !1;
            a.g[c].gi = a.h + 1;
            b = !0;
            break;
          }
        b || a.g.push({ target: a, ready: !1, gi: a.h + 1 });
        return (0, _.y)(a.D, a, a, a.h + 1);
      },
      Np = function (a) {
        if (!a.j) return !0;
        for (var b = 0; b < a.g.length; ++b)
          if (a.g[b].target === a && a.g[b].gi == a.h) return a.g[b].ready;
        return !0;
      };
    Hp.prototype.D = function (a, b) {
      if (this.j) {
        if (a)
          for (var c = 0; c < this.g.length; ++c)
            if (this.g[c].target === a) {
              this.g[c].ready = !0;
              break;
            }
        this.l || this.ca.add((0, _.y)(this.J, this, b || this.h));
      }
    };
    Hp.prototype.J = function (a) {
      if (this.h != a) return !1;
      a = this.o;
      if (a == Op)
        return this.stop(), this.s && this.s.call(this.H, this, this.F), !1;
      this.l = !0;
      try {
        var b = a.call(this.H, this, this.F);
        if (!b) throw Error();
      } catch (c) {
        this.stop();
        a = c;
        if (this.B) this.B.call(this.H, a, this, this.F);
        else throw a;
        return !1;
      } finally {
        this.l = !1;
      }
      b != Pp && ((this.o = b), this.h++, this.D());
      return !1;
    };
    var Pp = function () {},
      Op = function () {};
    var Rp = function (a, b, c, d, e) {
        b = b || {};
        this.J = e || [];
        this.s = [];
        this.F = [];
        Qp(this, a || document.documentElement, void 0 === b.Wh || !!b.Wh);
        this.D = c || vp;
        this.H = b.Rj;
        this.j = this.g = this.o = this.Ad = null;
        this.B = !!b.Pk;
        this.qa = !!b.Ok;
        this.N = this.B ? 27 : 13;
        this.ca = !0;
        this.M = [];
        this.l = new Hp(this, d);
      },
      Sp = function (a, b, c, d) {
        a.l.j ||
          ((b = {
            ei: b,
            ai: c,
            Ya: [],
            Ph: [],
            Cc: [],
            textLength: 0,
            size: 0,
            continuous: !0,
          }),
          (a.Ad = null),
          Ip(a.l, a.h),
          Jp(a.l, d),
          Kp(
            a.l,
            (0, _.y)(function (e) {
              this.Yj(e);
              d();
            }, a)
          ),
          Lp(a.l, b));
      },
      Tp = function (a, b) {
        return 0 < a.Ya.length
          ? new b(a.Ya, a.Cc.join(""), a.Ph, a.textLength, a.size)
          : null;
      },
      Up = function (a, b) {
        if (!a.j) return (a.Ad = Tp(b, a.D)), !0;
        if (!b.continuous && 0 < b.Ya.length) return (a.Ad = Tp(b, a.D)), !0;
        b.continuous = a.j.Kh;
        a: {
          var c = a.j;
          var d = a.N;
          if (b.size > b.ai || b.textLength > b.ei) c = !1;
          else {
            var e = c.size,
              f = c.text.length;
            if (
              0 != b.Ya.length &&
              ((e += 1 == b.Ya.length ? b.size + d + d : b.size + d),
              (f += b.textLength),
              e > b.ai || f > b.ei)
            ) {
              c = !1;
              break a;
            }
            b.size = e;
            b.textLength = f;
            b.Ya.push(c.node);
            b.Ph.push(c.text);
            d = b.Ya.length - 1;
            0 == d
              ? b.Cc.push(c.qf)
              : (1 == d && (b.Cc[0] = "<a i=0>" + b.Cc[0] + "</a>"),
                b.Cc.push("<a i=" + d + ">"),
                b.Cc.push(c.qf),
                b.Cc.push("</a>"));
            c = !0;
          }
        }
        if (c) return (a.j = null), !1;
        a.Ad = Tp(b, a.D);
        return !0;
      },
      Vp = function (a, b, c) {
        var d = zp(b, c);
        d && (0, _.Sb)(_.hj(d)) && a.M.push({ node: b, Ri: c, text: d });
      },
      cq,
      $p,
      Xp,
      Zp,
      Qp,
      aq,
      Yp,
      Wp;
    Rp.prototype.h = function (a, b) {
      var c = this;
      if (this.j && Up(this, b)) return Op;
      if (!this.g) {
        this.ca = !!this.s.length;
        if (!this.s.length && (a = this.M.shift()))
          return (
            (this.j = {
              Kh: !1,
              node: tp(a.node, a.Ri),
              text: a.text,
              qf: _.jj(a.text),
              size: this.B ? _.Qc(a.text).length : a.text.length,
            }),
            (b.continuous = !1),
            Up(this, b),
            Op
          );
        a = this.s.shift() || this.F.shift();
        if (!a) return (this.j = null), Up(this, b), Op;
        this.o = [a.Nk];
        this.g = new sm(a.root);
      }
      this.g.next();
      if (this.g.done) return (this.g = null), (b.continuous = !1), this.h;
      a = this.g.node();
      var d = this.g.g.g;
      if (-1 == d) return Wp(this), Xp(a) || (b.continuous = !1), this.h;
      Yp(this, a);
      d = 1 == d;
      var e = Zp(a);
      if ((e || d) && this.ca && !$p(a))
        return Qp(this, a, aq(this), !0), _.qm(this.g.g), Wp(this), this.h;
      if (
        d &&
        aq(this) &&
        (this.qa && Vp(this, a, "title"),
        Vp(this, a, "alt"),
        Vp(this, a, "placeholder"),
        Vp(this, a, "aria-label"),
        Vp(this, a, "aria-placeholder"),
        Vp(this, a, "aria-roledescription"),
        Vp(this, a, "aria-valuetext"),
        tm(this.g))
      )
        for (var f = a.firstChild; f; ) {
          if (3 == f.nodeType) {
            var g = f.nodeValue.split("\n");
            if (
              2 < g.length ||
              (2 == g.length && "" != (0, _.Sb)(g[0]) && "" != (0, _.Sb)(g[1]))
            ) {
              f.nodeValue = g[0];
              for (var h = 1; h < g.length; ++h) {
                var l = _.Uc(a).createElement("font");
                this.J.push(l);
                rj(l, f);
                f = l;
                rj(_.Uc(a).createTextNode("\n" + g[h]), f);
                f = f.nextSibling;
              }
            }
          }
          f = f.nextSibling;
        }
      a.shadowRoot &&
        Array.from(a.shadowRoot.childNodes).forEach(function (n) {
          Qp(c, n, aq(c));
        });
      if (e) {
        _.qm(this.g.g);
        if (aq(this)) {
          var m = zp(a);
          if (
            (0, _.Sb)(_.hj(m)) &&
            ((this.j = {
              Kh: !0,
              node: tp(a),
              text: m,
              qf: _.jj(m),
              size: this.B ? _.Qc(m).length : m.length,
            }),
            Up(this, b))
          )
            return Wp(this), Op;
        }
        Wp(this);
        return this.h;
      }
      if (d) {
        if (_.bq(a) || (!a.firstChild && "IFRAME" != a.tagName))
          return (
            (b.continuous = b.continuous && !!mm[a.tagName]),
            _.qm(this.g.g),
            Wp(this),
            this.h
          );
        if ("IFRAME" == a.tagName) {
          try {
            (a.src.match(/https?:\/\//) &&
              _.sf(a.src.match(_.rf)[3] || null) != window.location.hostname) ||
              ((m = _.uj(a).documentElement) && Qp(this, m, aq(this)));
          } catch (n) {}
          b.continuous = !1;
          _.qm(this.g.g);
          Wp(this);
          return this.h;
        }
        aq(this) && Xp(a)
          ? this.H && "A" == a.tagName && a.href && this.H(a)
          : (b.continuous = !1);
        return this.h;
      }
      _.qm(this.g.g);
      Wp(this);
      return this.h;
    };
    _.bq = function (a) {
      return (
        yp(a) ||
        (3 != a.nodeType &&
          (!a.tagName ||
            lm[a.tagName] ||
            mm[a.tagName] ||
            ln(a, "skiptranslate")))
      );
    };
    cq = function (a) {
      var b = _.Uc(a);
      return b.defaultView && b.defaultView.getComputedStyle
        ? b.defaultView.getComputedStyle(a, null)
        : a.currentStyle;
    };
    $p = function (a) {
      return 3 == a.nodeType
        ? !0
        : 1 != a.nodeType
        ? !1
        : a.offsetWidth && a.offsetHeight
        ? !0
        : ((a = cq(a)), !!a && "none" != a.display && "hidden" != a.visibility);
    };
    Xp = function (a) {
      if (3 == a.nodeType) return !0;
      if (1 != a.nodeType) return !1;
      var b = cq(a);
      return !!km[a.tagName] && (!b || !b.display || "inline" == b.display);
    };
    Zp = function (a) {
      return (
        !!a &&
        ((3 == a.nodeType && "string" === typeof a.nodeValue) ||
          ("TITLE" == a.tagName && "string" === typeof a.value) ||
          ("TEXTAREA" == a.tagName && ln(a, "translate")) ||
          ("INPUT" == a.tagName && (nm[a.type] || ln(a, "translate"))))
      );
    };
    Qp = function (a, b, c, d) {
      (d ? a.F : a.s).push({ root: b, Nk: void 0 === c || c });
    };
    aq = function (a) {
      return a.o[a.o.length - 1];
    };
    Yp = function (a, b) {
      b =
        !yp(b) &&
        ((b.nodeType == Ni && aq(a)) ||
          (!(
            ln(b, "notranslate") ||
            (b.attributes &&
              b.attributes.translate &&
              "no" == b.attributes.translate.value)
          ) &&
            (ln(b, "translate") ||
              (!!b.attributes &&
                !!b.attributes.translate &&
                "yes" == b.attributes.translate.value) ||
              aq(a))));
      a.o.push(b);
    };
    Wp = function (a) {
      a.o.pop();
    };
    _.Kl.attach(5762, Rp.prototype, { Yj: 1 });
    var dq = function () {
      _.A.call(this);
      this.g = [];
    };
    _.x(dq, _.A);
    dq.prototype.restore = function () {
      _.Xf(this.h, 0, this);
    };
    dq.prototype.h = function () {
      for (var a = 0; a < this.g.length; ++a) _.sj(this.g[a]);
      this.g = [];
    };
    dq.prototype.K = function () {
      _.A.prototype.K.call(this);
      this.restore();
    };
    var eq = function (a) {
      var b = new _.gf();
      Fj(a, function (c) {
        if (tj(c)) b.add(c);
        else {
          a: {
            var d;
            if (
              _.vc &&
              !(
                _.C &&
                _.rc("9") &&
                !_.rc("10") &&
                _.r.SVGElement &&
                c instanceof _.r.SVGElement
              ) &&
              (d = c.parentElement)
            ) {
              c = d;
              break a;
            }
            d = c.parentNode;
            c = tj(d) ? d : null;
          }
          null != c && b.add(c);
        }
      });
      return b;
    };
    var fq = function (a) {
      this.h = !0;
      this.l = a;
      this.j = !1;
      this.g = [];
    };
    fq.prototype.Aa = function () {
      return this.g.join("");
    };
    var gq = function (a, b) {
        this.o = a;
        this.l = !0;
        this.j = b;
        this.g = null;
        this.h = 0;
      },
      hq = function (a, b) {
        return a.l ? (b((0, _.y)(a.s, a), a.o, a.j ? "en" : ""), !0) : !1;
      };
    gq.prototype.s = function (a, b, c) {
      this.g = b;
      this.h = c;
      a();
    };
    var iq = function (a, b) {
        this.l = a;
        this.H = !!b;
        this.g = this.D = 0;
        this.o = this.j = -1;
        this.s = this.B = this.h = 0;
      },
      lq = function (a, b, c) {
        a.H && (b -= 9);
        for (var d = "", e = 0, f = a.D; f < a.l.length; ++f) {
          var g = a.l.charAt(f),
            h = g.charCodeAt(0);
          e++;
          a.h += a.H
            ? 127 >= h
              ? 32 >= h || jq[h]
                ? 3
                : 1
              : 2047 >= h ||
                (55296 <= h && 56319 >= h) ||
                (56320 <= h && 57343 >= h)
              ? 6
              : 9
            : 1;
          h = a.h >= b;
          kq[g]
            ? ((a.o = f), (a.B = a.h), (h = h || e > c))
            : " " == g && ((a.j = f), (a.s = a.h), (h = h || e > c));
          if (h)
            return (
              0 <= a.o
                ? ((d = a.l.substring(a.g, a.o + 1)),
                  (a.h -= a.B),
                  (a.g = a.o + 1),
                  a.o >= a.j ? ((a.j = -1), (a.s = 0)) : (a.s -= a.B),
                  (a.o = -1),
                  (a.B = 0))
                : 0 <= a.j
                ? ((d = a.l.substring(a.g, a.j + 1)),
                  (a.h -= a.s),
                  (a.g = a.j + 1),
                  (a.j = -1),
                  (a.s = 0))
                : ((d = a.l.substring(a.g, f + 1)),
                  (a.h = 0),
                  (a.g = f + 1),
                  (a.o = a.j = -1),
                  (a.s = a.B = 0)),
              (a.D = f + 1),
              d
            );
        }
        a.g < a.l.length && ((d = a.l.substring(a.g)), (a.g = a.l.length));
        return d;
      },
      kq = _.wl(". , ; : \\? !".split(" ")),
      jq = _.wl([
        34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93,
        94, 96, 123, 124, 125, 127,
      ]);
    var mq = function (a, b, c, d, e, f) {
        this.B = d || function () {};
        this.ma = f || function () {};
        this.N = !!e;
        this.j = a.g.Of;
        this.l = 0;
        this.ca = function () {};
        this.H = c;
        this.F = this.h = this.o = 0;
        this.g = null;
        this.J = 0;
        this.ua = !1;
        this.na = a.g.Mf;
        this.qa = [];
        this.U = 0;
        this.qb = a.g.ie;
        this.s = dm(a);
        this.Ma = this.N ? 1 : 6;
        this.Na = a.g.gg;
        this.W = b;
        this.D = [];
        this.Y = a;
      },
      nq = function (a, b) {
        var c = 0;
        a.ca = (0, _.y)(function () {
          ++c == this.D.length && b();
        }, a);
      },
      oq = function (a, b, c) {
        a.B = function () {};
        a.W = b;
        a.g = null;
        a.U = 0;
        a.D = [];
        a.ca = function () {};
        a.H = c;
      },
      pq = function (a, b, c) {
        if (0 == a.h && ((a.h = b ? 860 : a.s), !c || c <= a.s)) {
          a.o = a.h;
          return;
        }
        do (b = a.h), a.h < a.s && ((a.h *= a.Ma), a.h > a.s && (a.h = a.s));
        while (b != a.h && c && a.h < c);
        a.o = a.h;
      },
      qq = function (a, b) {
        var c = null != b,
          d = !c && !a.ua;
        (d || c) && a.B(100, d, b);
      },
      rq = function (a) {
        return a.qb ? a.g.U : a.g.Aa().length;
      },
      sq = function (a, b, c, d, e) {
        return new Rp(
          a.W.shift(),
          { Pk: a.qb, Rj: b, Wh: !0, Ok: !!c },
          function () {
            var f = Array.prototype.slice.call(arguments);
            return new vp(
              f.shift(),
              f.shift(),
              f.shift(),
              f.shift(),
              f.shift(),
              c,
              d
            );
          },
          a.H,
          e
        );
      },
      vq = function (a, b, c) {
        if (0 < a.na && tq(b) >= a.na) return !0;
        if (rq(a) > a.h) {
          if (0 < tq(b)) return !0;
          pq(a, c, rq(a));
          for (
            var d = a.g.Aa(), e = new iq(d, a.qb), f;
            (f = lq(e, a.h, a.j));

          )
            if (
              (b.j.push(new gq([f], !1)),
              (a.l += f.length),
              (a.j -= f.length),
              0 >= a.j)
            ) {
              b.H = d.substring(e.g);
              break;
            } else pq(a, c);
          uq(b, a.g, !0);
          a.g = null;
          return !0;
        }
        if (rq(a) > a.o) return !0;
        uq(b, a.g, !0);
        a.o -= rq(a) + a.Na;
        a.l += a.g.F;
        a.j -= a.g.F;
        a.g = null;
        return !1;
      };
    var wq = function (a, b) {
      _.A.call(this);
      this.l = b;
      this.j = { rootMargin: a };
      this.g = new IntersectionObserver((0, _.y)(this.h, this), this.j);
    };
    _.x(wq, _.A);
    wq.prototype.K = function () {
      _.A.prototype.K.call(this);
      this.g = null;
    };
    wq.prototype.h = function (a) {
      for (var b = 0; b < a.length; b++)
        if (0 < a[b].intersectionRatio) {
          this.l();
          break;
        }
    };
    var xq = function (a, b, c, d, e, f, g, h) {
        this.j = a;
        this.g = b;
        this.B = [];
        this.H = null;
        this.h = c;
        this.l = d;
        this.V = e;
        this.J = f;
        this.N = g;
        this.D = this.o = null;
        this.s = h || null;
        this.ca = this.M = !1;
        this.F = {};
      },
      yq = function (a) {
        for (var b = new _.gf(), c = 0; c < a.length; c++) {
          for (var d = a[c], e = new _.gf(), f = 0; f < d.g.length; f++) {
            var g = d.g[f].node;
            null != g && e.add(g);
          }
          d = Ki(e);
          e = d.length;
          for (f = 0; f < e; f++) b.add(d[f]);
          b.size = b.g.size;
        }
        return b;
      };
    xq.prototype.trackVisibility = function (a) {
      a = this.o = new wq("200px", (0, _.y)(this.qb, this, a));
      var b = eq(yq([].concat(this.g, this.B)));
      Fj(b, (0, _.y)(a.g.observe, a.g));
      a = this.D = new wq("0px", (0, _.y)(this.W, this));
      b = eq(yq([].concat(this.g, this.B)));
      Fj(b, (0, _.y)(a.g.observe, a.g));
    };
    xq.prototype.qb = function (a) {
      this.o && (this.o.g.disconnect(), (this.o = null));
      a();
    };
    xq.prototype.W = function () {
      this.M = !0;
      zq(this);
      !this.ca && this.s && this.s.l();
    };
    var zq = function (a) {
      a.D && (a.D.g.disconnect(), (a.D = null));
    };
    xq.prototype.qa = function () {
      this.M && !this.ca && this.s && this.s.j();
      this.o && (this.o.g.disconnect(), (this.o = null));
      zq(this);
    };
    var uq = function (a, b, c) {
        c ? (a.g.push(b), (a.F[b.Aa()] = !0)) : a.B.push(b);
      },
      tq = function (a) {
        return a.g.length + a.B.length;
      },
      Aq = function (a) {
        if (0 == a.j.length) {
          for (var b = [], c = 0; c < a.g.length; ++c) b.push(a.g[c].Aa());
          a.j.push(new gq(b, !1));
        }
      };
    xq.prototype.translate = function (a) {
      function b() {
        d++;
        d == c && e();
      }
      Aq(this);
      for (
        var c = 0,
          d = 0,
          e = function () {},
          f = this.h,
          g = this.l,
          h = this.V,
          l = this.J,
          m = this.N,
          n = 0;
        n < this.j.length;
        ++n
      )
        hq(this.j[n], function (p, t, q) {
          p = f.Y.translate(_.pb(p, b), t, q || g, h, ++f.U, l, m, f.N);
          f.qa.push(p);
          return p;
        }) && c++;
      0 != c && (e = Mp(a));
      return c;
    };
    var Bq = function (a, b) {
      _.A.call(this);
      this.g = [];
      this.h = [];
      this.l = a;
      this.V = b;
    };
    _.x(Bq, _.A);
    Bq.prototype.j = function (a) {
      var b = (0, _.Sb)(a.href);
      0 == b.indexOf("javascript:") ||
        0 <= b.indexOf("#") ||
        (this.h.push(a.href),
        this.g.push(a),
        (a.href = b + "#googtrans/" + this.l + "/" + this.V));
    };
    Bq.prototype.K = function () {
      _.A.prototype.K.call(this);
      this.restore();
    };
    Bq.prototype.restore = function () {
      if (this.g.length) {
        for (var a = 0; a < this.g.length; ++a) this.g[a].href = this.h[a];
        this.g = [];
        this.h = [];
      }
    };
    var Cq = function (a, b) {
      _.A.call(this);
      this.g = a;
      this.h = _.qf.test(b) ? "translated-rtl" : "translated-ltr";
      a = [].concat(this.g);
      for (b = 0; b < a.length; ++b) tj(a[b]) && _.mn(a[b], this.h);
    };
    _.x(Cq, _.A);
    Cq.prototype.K = function () {
      _.A.prototype.K.call(this);
      this.restore();
    };
    Cq.prototype.restore = function () {
      for (var a = [].concat(this.g), b = 0; b < a.length; ++b)
        tj(a[b]) && _.on(a[b], this.h);
    };
    _.Dq = function (a, b, c, d, e, f, g, h, l, m) {
      _.A.call(this);
      this.B = a;
      this.pd = b;
      this.xa = c || null;
      this.na = m || null;
      this.M = null;
      this.Bb = !!d;
      this.sd = e || "transparent";
      this.qd = !!f;
      this.H = [];
      this.ua = this.F = this.g = !1;
      this.h = h || new _.Ep();
      this.he = !h;
      this.ma = g || gm.nc();
      this.Rb = new dq();
      this.Ma = this.Ha = this.J = !1;
      this.Sb = this.j = 0.5;
      this.Tb = 0.01;
      this.D = new _.im(this.j);
      this.U = (this.s = this.Y = !!l)
        ? new MutationObserver((0, _.y)(this.xj, this))
        : null;
      this.V = this.l = null;
      _.D(window, "blur", this.sh, !0, this);
      _.D(window, "focus", this.th, !0, this);
    };
    _.x(_.Dq, _.A);
    _.k = _.Dq.prototype;
    _.k.lb = function () {
      return this.l ? this.l : "";
    };
    _.k.oa = function () {
      return this.V ? this.V : "";
    };
    _.k.Yi = function (a) {
      this.Uj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.k.Xg = function (a) {
      this.Vj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.k.Zi = function (a) {
      this.Wj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.k.aj = function (a) {
      this.Xj.apply(this, arguments);
      this.o && this.o(0, !1, 1);
    };
    _.k.translate = function (a, b, c, d, e) {
      if (d || a != this.l || b != this.V)
        Eq(this), this.he && (this.h = new _.Ep());
      else if (this.g) return;
      this.o = c;
      this.Zd = e;
      this.s = this.Y;
      this.U &&
        this.U.observe(document.body, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0,
        });
      this.g = !0;
      this.l = a;
      this.V = b;
      this.Bb && (this.M = new Bq(a, b));
      this.Ma = "auto" == this.l;
      this.xa && ((c = this.xa), a && (c.s = a), b && (c.B = b));
      this.Na = new Cq(this.B, this.V);
      this.N = Fq(this);
      (a = this.B instanceof Node ? this.B : null) && Gq(a, this.V);
    };
    var Fq = function (a) {
      var b = new Hp(a, a.ma);
      Ip(b, a.rh);
      Kp(b, (0, _.y)(a.Yi, a));
      Lp(b, new mq(a.pd, [].concat(a.B), a.ma, a.o, a.s, a.Zd));
      return b;
    };
    _.Dq.prototype.restore = function () {
      Eq(this);
      this.Rb.restore();
      var a = this.B instanceof Node ? this.B : null;
      a && Gq(a, this.lb());
    };
    _.Dq.prototype.K = function () {
      _.A.prototype.K.call(this);
      this.restore();
      _.Gd(window, "blur", this.sh, !0, this);
      _.Gd(window, "focus", this.th, !0, this);
    };
    var Hq = function (a, b, c, d) {
      var e = a.h.bc(),
        f = new Hp(a, b.H);
      b.D.push(f);
      Jp(f, b.ca);
      pq(b, e);
      Ip(f, d || a.nh);
      b = c || new xq([], [], b, a.lb(), a.oa(), a.ua, a.F, a.na);
      Kp(f, a.Dj, a);
      a.s && Jp(f, b.qa, b);
      Lp(f, b);
    };
    _.k = _.Dq.prototype;
    _.k.Dj = function (a, b, c) {
      c.qa();
      this.F ? this.aj(a) : this.Zi(a);
      c.h.ca();
    };
    _.k.th = function () {
      this.J = !1;
      this.W = 0;
      hm(this.D, this.j);
    };
    _.k.sh = function (a) {
      a.target == window && ((this.J = !0), (this.W = 0), hm(this.D, 0.01));
    };
    _.k.xj = function (a) {
      if (this.g && this.s) {
        for (var b = 0; b < a.length; b++)
          if (
            a[b].target &&
            a[b].target.className &&
            "string" === typeof a[b].target.className &&
            (0 <= a[b].target.className.indexOf("translate") ||
              0 == a[b].target.className.indexOf("goog-"))
          )
            return;
        this.ma.add((0, _.y)(this.xk, this));
      }
    };
    _.k.xk = function () {
      this.F = !0;
      this.N.stop();
      this.N = Fq(this);
      return !1;
    };
    _.k.rh = function (a, b) {
      nq(b, Mp(a));
      Hq(this, b);
      return this.Gj;
    };
    _.k.Gj = function (a, b) {
      if (!this.g) return Op;
      if (!Np(a)) return Pp;
      if (!this.s)
        for (a = 0; a < this.H.length; ++a) {
          var c = (0, _.y)(this.Og, this, b, this.H[a]);
          b.H.add(c);
        }
      return this.Fj;
    };
    _.k.lh = function (a, b) {
      if (this.W && !this.J) {
        a = new Date().getTime() - this.W;
        var c = this.j;
        900 > a && 0.01 < c
          ? (c = Math.max(0.9 * c, 0.01))
          : 1100 < a && 0.5 > c && (c = Math.min(1.5 * c, 0.5));
        this.j = c;
        this.Ha ? (this.Tb = 0.01) : (this.Sb = this.j);
      }
      this.F = this.g = !0;
      this.W = new Date().getTime();
      this.ge !=
      (a =
        document.body.innerText ||
        document.body.textContent ||
        document.body.innerHTML)
        ? ((this.ge = a), (a = !0))
        : (a = !1);
      a
        ? ((this.Ha = !1),
          (this.j = this.Sb),
          this.J || hm(this.D, this.j),
          oq(b, [].concat(this.B), this.D),
          (a = new Hp(this, this.D)),
          Ip(a, this.rh),
          Kp(a, (0, _.y)(this.Xg, this)),
          Lp(a, b),
          (this.N = a))
        : ((this.Ha = !0),
          (this.j = this.Tb),
          this.J || hm(this.D, this.j),
          (a = new Hp(this, this.D)),
          Ip(a, this.lh),
          Kp(a, (0, _.y)(this.Xg, this)),
          Lp(a, b),
          (this.N = a));
      return Op;
    };
    _.k.Fj = function (a, b) {
      if (!this.g) return Op;
      this.F = this.g = !1;
      this.Ma ? qq(b, !0) : (qq(b), b.ma(b.l));
      if (this.qd) return this.lh;
      for (a = 0; a < b.D.length; ++a) b.D[a].stop();
      for (a = 0; a < b.qa.length; ++a) cm(b.Y, b.qa[a]);
      return Op;
    };
    var Jq = function (a, b, c) {
        a: {
          var d = Iq(a),
            e = a.xa,
            f = a.sd,
            g = a.Rb.g;
          b = Mp(b);
          if (!c.M) {
            if (0 == c.W.length) {
              0 == c.l && 0 == c.U && c.B(0, !0);
              c = !1;
              break a;
            }
            c.M = sq(c, d, e, f, g);
          }
          c.Ha = !0;
          Sp(c.M, c.j, c.h, b);
          c = !0;
        }
        return c ? a.nh : a.ne;
      },
      Iq = function (a) {
        return a.Bb ? (0, _.y)(a.M.j, a.M) : function () {};
      };
    _.k = _.Dq.prototype;
    _.k.nh = function (a, b) {
      if (!this.g) return Op;
      var c = b.h;
      if (null == c.g) {
        if (!c.Ha) return Jq(this, a, b.h);
        if (!Np(a)) return Pp;
        c.Ha = !1;
        c.g = c.M.Ad || null;
        var d = c.g ? c.g : (c.M = null);
        if (!d) return Jq(this, a, b.h);
        this.H.push(d);
        var e = d.Aa();
        if (this.h.has(e, !this.s) || (null != b.F[e] && b.F[e]))
          return (
            (e = c.g.F),
            (c.l += e),
            (c.j -= e),
            (c.g = null),
            this.s && uq(b, d, !1),
            Jq(this, a, b.h)
          );
        this.h.g[d.Aa()] = null;
      }
      0 < tq(b) && hm(this.D, 0.5);
      d = this.h.bc();
      return vq(c, b, d) ? this.ne : Jq(this, a, b.h);
    };
    _.k.ne = function (a, b) {
      if (!this.g || 0 == tq(b)) return Op;
      Hq(this, b.h);
      return this.s
        ? (b.trackVisibility(Mp(a)), this.Hj)
        : 0 == b.translate(a)
        ? Op
        : this.ph;
    };
    _.k.Hj = function (a, b) {
      return this.g ? (Np(a) ? (0 == b.translate(a) ? Op : this.ph) : Pp) : Op;
    };
    _.k.Og = function (a, b) {
      b.l && this.h.remove(b.j);
      if (!this.g) return !1;
      if (this.h.has(b.Aa(), !1)) {
        var c = this.h;
        if (c.has(b.j, !1)) {
          var d = b.j,
            e = c.g[d];
          e || ((e = c.h[d]), (c.g[d] = e));
          b.h = e;
          b.N = !0;
        } else c.remove(b.j), (b.l = !0);
        Cp(b);
      } else if (((c = this.h), b.l)) c.remove(b.j);
      else if (b.D) {
        d = b.D.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
        b.N = !0;
        delete b.D;
        b.D = null;
        b.h = [];
        e = _.bd(document, "div");
        _.Q(e, !1);
        d = _.Kc(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
        void 0 !== e.tagName && _.ki(e);
        e.innerHTML = _.Jc(d);
        document.body.appendChild(e);
        d = [];
        var f;
        for (f = e.firstChild; f; f = f.nextSibling)
          if ("I" == f.tagName) var g = Ap(b, Aj(f), f.innerHTML);
          else if ("B" == f.tagName) {
            g || (g = Ap(b, "", ""));
            if (1 == b.g.length) Fp(g.ra, d, 0, f);
            else {
              var h = f;
              var l = b.g;
              g = g.ra;
              for (var m = [], n = h.firstChild; n; n = p) {
                var p = n.nextSibling;
                Gp(n);
              }
              for (p = h.firstChild; p; p = p.nextSibling)
                p.attributes && p.attributes.i
                  ? ((h = parseInt(p.attributes.i.nodeValue, 10)),
                    !isNaN(h) &&
                      0 <= h &&
                      h < l.length &&
                      (l[h].Me && m[h]
                        ? (m[h].la +=
                            p.firstChild && 3 == p.firstChild.nodeType
                              ? p.firstChild.nodeValue
                              : Aj(p))
                        : (m[h] = Fp(g, d, h, p))))
                  : 3 == p.nodeType && g.push({ ha: -1, la: nj(p.nodeValue) });
              null != g &&
                0 < g.length &&
                -1 == g[0].ha &&
                (1 == g.length
                  ? (g[0].ha = 0)
                  : ((g[1].la = g[0].la + g[1].la), g.shift()));
            }
            g = void 0;
          }
        f = b.h;
        for (l = 0; l < f.length - 1; ++l)
          (g = f[l]),
            (m = ij(g.ra[g.ra.length - 1].la)),
            (m = m.charCodeAt(m.length - 1)),
            (12288 <= m && 12351 >= m) ||
              (65280 <= m && 65519 >= m) ||
              (g.ra[g.ra.length - 1].la += " ");
        _.sj(e);
        for (e = 0; e < b.g.length; ++e)
          e < d.length &&
            e < b.B.length &&
            null != d[e] &&
            ((f = b.B[e]),
            (l = d[e].start),
            null != l &&
              ((g = f.substring(
                0,
                f.length - f.replace(/^[\s\xa0]+/, "").length
              )),
              " " == g && (g = ""),
              g && (l.la = g + l.la.replace(/^[\s\xa0]+/, ""))),
            (l = d[e].end),
            null != l &&
              ((f = f.substring(ij(f).length)),
              " " == f && (f = ""),
              f && (l.la = ij(l.la) + f)));
        1 != b.h.length || b.h[0].Vf || (b.h[0].Vf = b.j);
        c.write(b.j, b.h);
        Cp(b);
      }
      b.M || (this.Ma = !1);
      c = b.l ? !0 : void 0;
      a.J += b.F;
      null != c && (a.ua = !0);
      b = Math.min(Math.floor((100 * a.J) / a.l), 100);
      if (a.F != b || c)
        (a.F = b), a.N ? (a.B(a.F, !0, c), a.ma(a.J)) : a.B(a.F, !1, c);
      return !1;
    };
    _.k.ph = function (a, b) {
      if (!this.g) return Op;
      if (!Np(a)) return Pp;
      if (1 < tq(b)) {
        a = b.j[0];
        var c = b.g;
        if (a.j || 0 == c.length || null == a.g || 0 == a.g.length) a = null;
        else {
          for (var d = [], e = [], f = 0; f < a.g.length && f < c.length; ++f) {
            var g = a.g[f];
            (g && g[0] && 200 == g[1]) || (e.push(c[f]), d.push(a.o[f]));
          }
          a = 0 < e.length ? { yk: new gq(d, !0), zk: e } : null;
        }
        a = a ? new xq([a.yk], a.zk, b.h, b.l, b.V, b.J, b.N, b.s) : null;
        null != a && Hq(this, b.h, a, this.ne);
      } else {
        a = !1;
        for (c = 0; c < b.j.length; ++c)
          (d = b.j[c]),
            d.j || (200 == d.h && d.g && d.g[0])
              ? (d = d.l = !1)
              : ((d.j = !0), (d = d.l = !0)),
            (a = d || a);
        if (a) return this.ne;
      }
      d = this.lb();
      a = this.oa();
      if (1 < b.g.length)
        if (((c = b.j[0]), (e = "auto" == d), (d = b.g), 200 == c.h))
          for (f = 0; f < c.g.length && f < d.length; ++f)
            if ((g = c.g[f]) && 200 == g[1]) {
              var h = g[2],
                l = d[f],
                m = l,
                n = null != h && h == a;
              m.D = g[0];
              void 0 !== n && (m.J = n);
              l.M = e && null == h;
            } else d[f].l = !0;
        else for (a = 0; a < d.length; ++a) d[a].l = !0;
      else {
        c = new fq("auto" == d);
        for (d = 0; d < b.j.length; ++d)
          (f = b.j[d]),
            (e = a),
            200 == f.h && f.g && f.g[0]
              ? ((f = f.g[0]),
                c.g.push(f[0]),
                (f = f[2]),
                (c.h = c.h && null != f && f == e),
                null != f && (c.l = !1))
              : 500 != f.h && (c.j = !0);
        null != b.H && (c.g.push(b.H), (b.H = null));
        if ((a = b.g[0]))
          (d = c.h),
            (a.D = c.Aa()),
            void 0 !== d && (a.J = d),
            (a.M = c.l),
            (a.l = c.j);
      }
      if (this.s) {
        a = (0, _.y)(this.Og, this);
        for (c = 0; c < b.g.length; c++) a(b.h, b.g[c]);
        for (c = 0; c < b.B.length; c++) a(b.h, b.B[c]);
        zq(b);
        b.ca = !0;
        b.M && b.s && b.s.j();
      }
      return Op;
    };
    var Eq = function (a) {
        a.U && a.U.disconnect();
        a.na && a.na.reset();
        a.g && (a.N.stop(), (a.g = !1), (a.F = !1));
        if (a.H.length) {
          for (var b = 0; b < a.H.length; ++b) a.H[b].O();
          a.H = [];
        }
        null != a.M && (a.M.restore(), (a.M = null));
        null != a.Na && (a.Na.restore(), (a.Na = null));
      },
      Gq = function (a, b) {
        a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
        a.getAttribute("lang") && a.setAttribute("lang", b);
      };
    _.Kl.attach(3046, _.Dq.prototype, { Uj: 1, Wj: 2, Vj: 3, Xj: 4 });
    var Ai = function (a) {
      if (a && ((a = String(a)), (a = a.split(".")), a.length)) {
        for (var b = window, c = 0; c < a.length; ++c) {
          var d = a[c];
          if (!(d && d in b)) return;
          b = b[d];
        }
        return b;
      }
    };
  } catch (e) {
    _._DumpException(e);
  }
  try {
    _.na("el_main");

    var Nq = function (a, b) {
        _.Mg(b, (_.Lg(a) | 0) & -51);
      },
      Oq = function (a, b, c) {
        var d = _.Hh(a, b, c);
        Array.isArray(d) || (d = _.Fh);
        var e = _.Lg(d);
        e & 1 || _.Ng(d);
        _.Pg(a.da)
          ? e & 2 || _.Kg(d, 2)
          : d === _.Fh &&
            ((d = _.Ng(Array.prototype.slice.call(d))), _.H(a, b, d, c));
        return d;
      },
      Pq = function (a, b) {
        return _.Wg(b);
      },
      Rq = function (a, b) {
        b.Dd && (a.Dd = b.Dd.slice());
        var c = b.Wa;
        if (c) {
          b = b.La;
          for (var d in c) {
            var e = c[d];
            if (e) {
              var f = !(!b || !b[d]),
                g = +d;
              if (Array.isArray(e)) {
                if (e.length)
                  for (
                    f = Qq(a, e[0].constructor, g, f), g = 0;
                    g < Math.min(f.length, e.length);
                    g++
                  )
                    Rq(f[g], e[g]);
              } else throw Error("la`" + _.kb(e) + "`" + e);
            }
          }
        }
      },
      Tq = function (a) {
        if (!a) return a;
        if ("object" === typeof a) {
          if (_.Tg && null != a && a instanceof Uint8Array)
            return new Uint8Array(a);
          if (a.Be === _.Zg) return Sq(a);
        }
        return a;
      },
      Uq = function (a) {
        var b = {};
        a.forEach(function (c) {
          b[c[0]] = c[1];
        });
        return function (c) {
          return (
            b[
              c.find(function (d) {
                return d in b;
              })
            ] || ""
          );
        };
      },
      Vq = function (a) {
        var b = _.Ba();
        if ("Internet Explorer" === a) {
          if (_.Da())
            if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
            else {
              a = "";
              var c = /MSIE +([\d\.]+)/.exec(b);
              if (c && c[1])
                if (((b = /Trident\/(\d.\d)/.exec(b)), "7.0" == c[1]))
                  if (b && b[1])
                    switch (b[1]) {
                      case "4.0":
                        a = "8.0";
                        break;
                      case "5.0":
                        a = "9.0";
                        break;
                      case "6.0":
                        a = "10.0";
                        break;
                      case "7.0":
                        a = "11.0";
                    }
                  else a = "7.0";
                else a = c[1];
              b = a;
            }
          else b = "";
          return b;
        }
        var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        c = [];
        for (var e; (e = d.exec(b)); ) c.push([e[1], e[2], e[3] || void 0]);
        b = Uq(c);
        switch (a) {
          case "Opera":
            if (_.u("Opera")) return b(["Version", "Opera"]);
            if (_.u("OPR")) return b(["OPR"]);
            break;
          case "Microsoft Edge":
            if (_.u("Edge")) return b(["Edge"]);
            if (_.u("Edg/")) return b(["Edg"]);
            break;
          case "Chromium":
            if (_.Ag()) return b(["Chrome", "CriOS", "HeadlessChrome"]);
        }
        return ("Firefox" === a && _.zg()) ||
          ("Safari" === a && _.Bg()) ||
          ("Android Browser" === a && _.Cg()) ||
          ("Silk" === a && _.u("Silk"))
          ? ((b = c[2]) && b[1]) || ""
          : "";
      },
      Wq = function (a) {
        a = Vq(a);
        if ("" === a) return NaN;
        a = a.split(".");
        return 0 === a.length ? NaN : Number(a[0]);
      },
      Xq = function () {
        var a = _.Ba(),
          b = "";
        _.u("Windows")
          ? ((b = /Windows (?:NT|Phone) ([0-9.]+)/),
            (b = (a = b.exec(a)) ? a[1] : "0.0"))
          : _.Fa()
          ? ((b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
            (b = (a = b.exec(a)) && a[1].replace(/_/g, ".")))
          : _.u("Macintosh")
          ? ((b = /Mac OS X ([0-9_.]+)/),
            (b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10"))
          : -1 != _.Ba().toLowerCase().indexOf("kaios")
          ? ((b = /(?:KaiOS)\/(\S+)/i), (b = (a = b.exec(a)) && a[1]))
          : _.u("Android")
          ? ((b = /Android\s+([^\);]+)(\)|;)/), (b = (a = b.exec(a)) && a[1]))
          : _.u("CrOS") &&
            ((b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
            (b = (a = b.exec(a)) && a[1]));
        return 0 <= _.Ub(b || "", 12);
      },
      Yq = function (a) {
        return _.Ih(a, this.jf, this.g, !0);
      },
      Zq = function () {
        function a() {
          e[0] = 1732584193;
          e[1] = 4023233417;
          e[2] = 2562383102;
          e[3] = 271733878;
          e[4] = 3285377520;
          n = m = 0;
        }
        function b(p) {
          for (var t = g, q = 0; 64 > q; q += 4)
            t[q / 4] =
              (p[q] << 24) | (p[q + 1] << 16) | (p[q + 2] << 8) | p[q + 3];
          for (q = 16; 80 > q; q++)
            (p = t[q - 3] ^ t[q - 8] ^ t[q - 14] ^ t[q - 16]),
              (t[q] = ((p << 1) | (p >>> 31)) & 4294967295);
          p = e[0];
          var w = e[1],
            K = e[2],
            L = e[3],
            Ca = e[4];
          for (q = 0; 80 > q; q++) {
            if (40 > q)
              if (20 > q) {
                var ha = L ^ (w & (K ^ L));
                var ge = 1518500249;
              } else (ha = w ^ K ^ L), (ge = 1859775393);
            else
              60 > q
                ? ((ha = (w & K) | (L & (w | K))), (ge = 2400959708))
                : ((ha = w ^ K ^ L), (ge = 3395469782));
            ha =
              ((((p << 5) | (p >>> 27)) & 4294967295) + ha + Ca + ge + t[q]) &
              4294967295;
            Ca = L;
            L = K;
            K = ((w << 30) | (w >>> 2)) & 4294967295;
            w = p;
            p = ha;
          }
          e[0] = (e[0] + p) & 4294967295;
          e[1] = (e[1] + w) & 4294967295;
          e[2] = (e[2] + K) & 4294967295;
          e[3] = (e[3] + L) & 4294967295;
          e[4] = (e[4] + Ca) & 4294967295;
        }
        function c(p, t) {
          if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var q = [], w = 0, K = p.length; w < K; ++w)
              q.push(p.charCodeAt(w));
            p = q;
          }
          t || (t = p.length);
          q = 0;
          if (0 == m)
            for (; q + 64 < t; ) b(p.slice(q, q + 64)), (q += 64), (n += 64);
          for (; q < t; )
            if (((f[m++] = p[q++]), n++, 64 == m))
              for (m = 0, b(f); q + 64 < t; )
                b(p.slice(q, q + 64)), (q += 64), (n += 64);
        }
        function d() {
          var p = [],
            t = 8 * n;
          56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
          for (var q = 63; 56 <= q; q--) (f[q] = t & 255), (t >>>= 8);
          b(f);
          for (q = t = 0; 5 > q; q++)
            for (var w = 24; 0 <= w; w -= 8) p[t++] = (e[q] >> w) & 255;
          return p;
        }
        for (var e = [], f = [], g = [], h = [128], l = 1; 64 > l; ++l)
          h[l] = 0;
        var m, n;
        a();
        return {
          reset: a,
          update: c,
          digest: d,
          Wi: function () {
            for (var p = d(), t = "", q = 0; q < p.length; q++)
              t +=
                "0123456789ABCDEF".charAt(Math.floor(p[q] / 16)) +
                "0123456789ABCDEF".charAt(p[q] % 16);
            return t;
          },
        };
      },
      $q = function (a, b, c) {
        _.vh(
          a.url,
          function (d) {
            d = d.target;
            d.ue() ? b(d.Cd()) : c(d.Vc());
          },
          a.wk,
          a.body,
          a.cg,
          a.qg,
          a.withCredentials
        );
      },
      ar = function () {
        this.l = "https://play.google.com/log?format=json&hasfast=true";
        this.s = $q;
        this.g = !1;
      },
      br = function (a) {
        for (var b = a.length; 0 <= --b; ) a[b] = 0;
      },
      cr = function (a, b, c, d, e) {
        this.di = a;
        this.gj = b;
        this.fj = c;
        this.Xi = d;
        this.dk = e;
        this.vh = a && a.length;
      },
      dr = function (a, b) {
        this.Vg = a;
        this.dd = 0;
        this.vc = b;
      },
      er = function (a, b) {
        a.sa[a.pending++] = b & 255;
        a.sa[a.pending++] = (b >>> 8) & 255;
      },
      fr = function (a, b, c) {
        a.Ja > 16 - c
          ? ((a.Ua |= (b << a.Ja) & 65535),
            er(a, a.Ua),
            (a.Ua = b >> (16 - a.Ja)),
            (a.Ja += c - 16))
          : ((a.Ua |= (b << a.Ja) & 65535), (a.Ja += c));
      },
      gr = function (a, b, c) {
        fr(a, c[2 * b], c[2 * b + 1]);
      },
      hr = function (a, b) {
        var c = 0;
        do (c |= a & 1), (a >>>= 1), (c <<= 1);
        while (0 < --b);
        return c >>> 1;
      },
      ir = function (a, b, c) {
        var d = Array(16),
          e = 0,
          f;
        for (f = 1; 15 >= f; f++) d[f] = e = (e + c[f - 1]) << 1;
        for (c = 0; c <= b; c++)
          (e = a[2 * c + 1]), 0 !== e && (a[2 * c] = hr(d[e]++, e));
      },
      jr = function (a) {
        var b;
        for (b = 0; 286 > b; b++) a.bb[2 * b] = 0;
        for (b = 0; 30 > b; b++) a.Dc[2 * b] = 0;
        for (b = 0; 19 > b; b++) a.Oa[2 * b] = 0;
        a.bb[512] = 1;
        a.ec = a.ld = 0;
        a.wb = a.matches = 0;
      },
      kr = function (a) {
        8 < a.Ja ? er(a, a.Ua) : 0 < a.Ja && (a.sa[a.pending++] = a.Ua);
        a.Ua = 0;
        a.Ja = 0;
      },
      lr = function (a, b, c) {
        kr(a);
        er(a, c);
        er(a, ~c);
        X.Rc(a.sa, a.window, b, c, a.pending);
        a.pending += c;
      },
      mr = function (a, b, c, d) {
        var e = 2 * b,
          f = 2 * c;
        return a[e] < a[f] || (a[e] === a[f] && d[b] <= d[c]);
      },
      nr = function (a, b, c) {
        for (var d = a.wa[c], e = c << 1; e <= a.Zb; ) {
          e < a.Zb && mr(b, a.wa[e + 1], a.wa[e], a.depth) && e++;
          if (mr(b, d, a.wa[e], a.depth)) break;
          a.wa[c] = a.wa[e];
          c = e;
          e <<= 1;
        }
        a.wa[c] = d;
      },
      ur = function (a, b, c) {
        var d = 0;
        if (0 !== a.wb) {
          do {
            var e = (a.sa[a.yd + 2 * d] << 8) | a.sa[a.yd + 2 * d + 1];
            var f = a.sa[a.Hf + d];
            d++;
            if (0 === e) gr(a, f, b);
            else {
              var g = or[f];
              gr(a, g + 256 + 1, b);
              var h = pr[g];
              0 !== h && ((f -= qr[g]), fr(a, f, h));
              e--;
              g = 256 > e ? rr[e] : rr[256 + (e >>> 7)];
              gr(a, g, c);
              h = sr[g];
              0 !== h && ((e -= tr[g]), fr(a, e, h));
            }
          } while (d < a.wb);
        }
        gr(a, 256, b);
      },
      vr = function (a, b) {
        var c = b.Vg,
          d = b.vc.di,
          e = b.vc.vh,
          f = b.vc.Xi,
          g,
          h = -1;
        a.Zb = 0;
        a.Yc = 573;
        for (g = 0; g < f; g++)
          0 !== c[2 * g]
            ? ((a.wa[++a.Zb] = h = g), (a.depth[g] = 0))
            : (c[2 * g + 1] = 0);
        for (; 2 > a.Zb; ) {
          var l = (a.wa[++a.Zb] = 2 > h ? ++h : 0);
          c[2 * l] = 1;
          a.depth[l] = 0;
          a.ec--;
          e && (a.ld -= d[2 * l + 1]);
        }
        b.dd = h;
        for (g = a.Zb >> 1; 1 <= g; g--) nr(a, c, g);
        l = f;
        do
          (g = a.wa[1]),
            (a.wa[1] = a.wa[a.Zb--]),
            nr(a, c, 1),
            (d = a.wa[1]),
            (a.wa[--a.Yc] = g),
            (a.wa[--a.Yc] = d),
            (c[2 * l] = c[2 * g] + c[2 * d]),
            (a.depth[l] =
              (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1),
            (c[2 * g + 1] = c[2 * d + 1] = l),
            (a.wa[1] = l++),
            nr(a, c, 1);
        while (2 <= a.Zb);
        a.wa[--a.Yc] = a.wa[1];
        g = b.Vg;
        l = b.dd;
        d = b.vc.di;
        e = b.vc.vh;
        f = b.vc.gj;
        var m = b.vc.fj,
          n = b.vc.dk,
          p,
          t = 0;
        for (p = 0; 15 >= p; p++) a.Ub[p] = 0;
        g[2 * a.wa[a.Yc] + 1] = 0;
        for (b = a.Yc + 1; 573 > b; b++) {
          var q = a.wa[b];
          p = g[2 * g[2 * q + 1] + 1] + 1;
          p > n && ((p = n), t++);
          g[2 * q + 1] = p;
          if (!(q > l)) {
            a.Ub[p]++;
            var w = 0;
            q >= m && (w = f[q - m]);
            var K = g[2 * q];
            a.ec += K * (p + w);
            e && (a.ld += K * (d[2 * q + 1] + w));
          }
        }
        if (0 !== t) {
          do {
            for (p = n - 1; 0 === a.Ub[p]; ) p--;
            a.Ub[p]--;
            a.Ub[p + 1] += 2;
            a.Ub[n]--;
            t -= 2;
          } while (0 < t);
          for (p = n; 0 !== p; p--)
            for (q = a.Ub[p]; 0 !== q; )
              (d = a.wa[--b]),
                d > l ||
                  (g[2 * d + 1] !== p &&
                    ((a.ec += (p - g[2 * d + 1]) * g[2 * d]),
                    (g[2 * d + 1] = p)),
                  q--);
        }
        ir(c, h, a.Ub);
      },
      wr = function (a, b, c) {
        var d,
          e = -1,
          f = b[1],
          g = 0,
          h = 7,
          l = 4;
        0 === f && ((h = 138), (l = 3));
        b[2 * (c + 1) + 1] = 65535;
        for (d = 0; d <= c; d++) {
          var m = f;
          f = b[2 * (d + 1) + 1];
          (++g < h && m === f) ||
            (g < l
              ? (a.Oa[2 * m] += g)
              : 0 !== m
              ? (m !== e && a.Oa[2 * m]++, a.Oa[32]++)
              : 10 >= g
              ? a.Oa[34]++
              : a.Oa[36]++,
            (g = 0),
            (e = m),
            0 === f
              ? ((h = 138), (l = 3))
              : m === f
              ? ((h = 6), (l = 3))
              : ((h = 7), (l = 4)));
        }
      },
      xr = function (a, b, c) {
        var d,
          e = -1,
          f = b[1],
          g = 0,
          h = 7,
          l = 4;
        0 === f && ((h = 138), (l = 3));
        for (d = 0; d <= c; d++) {
          var m = f;
          f = b[2 * (d + 1) + 1];
          if (!(++g < h && m === f)) {
            if (g < l) {
              do gr(a, m, a.Oa);
              while (0 !== --g);
            } else
              0 !== m
                ? (m !== e && (gr(a, m, a.Oa), g--),
                  gr(a, 16, a.Oa),
                  fr(a, g - 3, 2))
                : 10 >= g
                ? (gr(a, 17, a.Oa), fr(a, g - 3, 3))
                : (gr(a, 18, a.Oa), fr(a, g - 11, 7));
            g = 0;
            e = m;
            0 === f
              ? ((h = 138), (l = 3))
              : m === f
              ? ((h = 6), (l = 3))
              : ((h = 7), (l = 4));
          }
        }
      },
      yr = function (a) {
        var b = 4093624447,
          c;
        for (c = 0; 31 >= c; c++, b >>>= 1)
          if (b & 1 && 0 !== a.bb[2 * c]) return 0;
        if (0 !== a.bb[18] || 0 !== a.bb[20] || 0 !== a.bb[26]) return 1;
        for (c = 32; 256 > c; c++) if (0 !== a.bb[2 * c]) return 1;
        return 0;
      },
      zr = function (a, b, c) {
        a.sa[a.yd + 2 * a.wb] = (b >>> 8) & 255;
        a.sa[a.yd + 2 * a.wb + 1] = b & 255;
        a.sa[a.Hf + a.wb] = c & 255;
        a.wb++;
        0 === b
          ? a.bb[2 * c]++
          : (a.matches++,
            b--,
            a.bb[2 * (or[c] + 256 + 1)]++,
            a.Dc[2 * (256 > b ? rr[b] : rr[256 + (b >>> 7)])]++);
        return a.wb === a.Ed - 1;
      },
      Br = function (a, b) {
        a.msg = Ar[b];
        return b;
      },
      Cr = function (a) {
        for (var b = a.length; 0 <= --b; ) a[b] = 0;
      },
      Dr = function (a) {
        var b = a.state,
          c = b.pending;
        c > a.ga && (c = a.ga);
        0 !== c &&
          (X.Rc(a.Fd, b.sa, b.Gd, c, a.fd),
          (a.fd += c),
          (b.Gd += c),
          (a.rg += c),
          (a.ga -= c),
          (b.pending -= c),
          0 === b.pending && (b.Gd = 0));
      },
      Hr = function (a, b) {
        var c = 0 <= a.kb ? a.kb : -1,
          d = a.L - a.kb,
          e = 0;
        if (0 < a.level) {
          2 === a.ea.kf && (a.ea.kf = yr(a));
          vr(a, a.xe);
          vr(a, a.fe);
          wr(a, a.bb, a.xe.dd);
          wr(a, a.Dc, a.fe.dd);
          vr(a, a.Qg);
          for (e = 18; 3 <= e && 0 === a.Oa[2 * Er[e] + 1]; e--);
          a.ec += 3 * (e + 1) + 14;
          var f = (a.ec + 3 + 7) >>> 3;
          var g = (a.ld + 3 + 7) >>> 3;
          g <= f && (f = g);
        } else f = g = d + 5;
        if (d + 4 <= f && -1 !== c) fr(a, b ? 1 : 0, 3), lr(a, c, d);
        else if (4 === a.Ob || g === f)
          fr(a, 2 + (b ? 1 : 0), 3), ur(a, Fr, Gr);
        else {
          fr(a, 4 + (b ? 1 : 0), 3);
          c = a.xe.dd + 1;
          d = a.fe.dd + 1;
          e += 1;
          fr(a, c - 257, 5);
          fr(a, d - 1, 5);
          fr(a, e - 4, 4);
          for (f = 0; f < e; f++) fr(a, a.Oa[2 * Er[f] + 1], 3);
          xr(a, a.bb, c - 1);
          xr(a, a.Dc, d - 1);
          ur(a, a.bb, a.Dc);
        }
        jr(a);
        b && kr(a);
        a.kb = a.L;
        Dr(a.ea);
      },
      Y = function (a, b) {
        a.sa[a.pending++] = b;
      },
      Ir = function (a, b) {
        a.sa[a.pending++] = (b >>> 8) & 255;
        a.sa[a.pending++] = b & 255;
      },
      Jr = function (a, b) {
        var c = a.Ih,
          d = a.L,
          e = a.mb,
          f = a.Lh,
          g = a.L > a.Ra - 262 ? a.L - (a.Ra - 262) : 0,
          h = a.window,
          l = a.wc,
          m = a.Mb,
          n = a.L + 258,
          p = h[d + e - 1],
          t = h[d + e];
        a.mb >= a.ih && (c >>= 2);
        f > a.R && (f = a.R);
        do {
          var q = b;
          if (
            h[q + e] === t &&
            h[q + e - 1] === p &&
            h[q] === h[d] &&
            h[++q] === h[d + 1]
          ) {
            d += 2;
            for (
              q++;
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              h[++d] === h[++q] &&
              d < n;

            );
            q = 258 - (n - d);
            d = n - 258;
            if (q > e) {
              a.cd = b;
              e = q;
              if (q >= f) break;
              p = h[d + e - 1];
              t = h[d + e];
            }
          }
        } while ((b = m[b & l]) > g && 0 !== --c);
        return e <= a.R ? e : a.R;
      },
      Mr = function (a) {
        var b = a.Ra,
          c;
        do {
          var d = a.hi - a.R - a.L;
          if (a.L >= b + (b - 262)) {
            X.Rc(a.window, a.window, b, b, 0);
            a.cd -= b;
            a.L -= b;
            a.kb -= b;
            var e = (c = a.se);
            do {
              var f = a.head[--e];
              a.head[e] = f >= b ? f - b : 0;
            } while (--c);
            e = c = b;
            do (f = a.Mb[--e]), (a.Mb[e] = f >= b ? f - b : 0);
            while (--c);
            d += b;
          }
          if (0 === a.ea.Ta) break;
          e = a.ea;
          c = a.window;
          f = a.L + a.R;
          var g = e.Ta;
          g > d && (g = d);
          0 === g
            ? (c = 0)
            : ((e.Ta -= g),
              X.Rc(c, e.input, e.Mc, g, f),
              1 === e.state.Ia
                ? (e.ba = Kr(e.ba, c, g, f))
                : 2 === e.state.Ia && (e.ba = Lr(e.ba, c, g, f)),
              (e.Mc += g),
              (e.Nc += g),
              (c = g));
          a.R += c;
          if (3 <= a.R + a.fb)
            for (
              d = a.L - a.fb,
                a.fa = a.window[d],
                a.fa = ((a.fa << a.Yb) ^ a.window[d + 1]) & a.Xb;
              a.fb &&
              !((a.fa = ((a.fa << a.Yb) ^ a.window[d + 3 - 1]) & a.Xb),
              (a.Mb[d & a.wc] = a.head[a.fa]),
              (a.head[a.fa] = d),
              d++,
              a.fb--,
              3 > a.R + a.fb);

            );
        } while (262 > a.R && 0 !== a.ea.Ta);
      },
      Nr = function (a, b) {
        for (var c; ; ) {
          if (262 > a.R) {
            Mr(a);
            if (262 > a.R && 0 === b) return 1;
            if (0 === a.R) break;
          }
          c = 0;
          3 <= a.R &&
            ((a.fa = ((a.fa << a.Yb) ^ a.window[a.L + 3 - 1]) & a.Xb),
            (c = a.Mb[a.L & a.wc] = a.head[a.fa]),
            (a.head[a.fa] = a.L));
          0 !== c && a.L - c <= a.Ra - 262 && (a.ja = Jr(a, c));
          if (3 <= a.ja)
            if (
              ((c = zr(a, a.L - a.cd, a.ja - 3)),
              (a.R -= a.ja),
              a.ja <= a.Pf && 3 <= a.R)
            ) {
              a.ja--;
              do
                a.L++,
                  (a.fa = ((a.fa << a.Yb) ^ a.window[a.L + 3 - 1]) & a.Xb),
                  (a.Mb[a.L & a.wc] = a.head[a.fa]),
                  (a.head[a.fa] = a.L);
              while (0 !== --a.ja);
              a.L++;
            } else
              (a.L += a.ja),
                (a.ja = 0),
                (a.fa = a.window[a.L]),
                (a.fa = ((a.fa << a.Yb) ^ a.window[a.L + 1]) & a.Xb);
          else (c = zr(a, 0, a.window[a.L])), a.R--, a.L++;
          if (c && (Hr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.fb = 2 > a.L ? a.L : 2;
        return 4 === b
          ? (Hr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.wb && (Hr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Or = function (a, b) {
        for (var c, d; ; ) {
          if (262 > a.R) {
            Mr(a);
            if (262 > a.R && 0 === b) return 1;
            if (0 === a.R) break;
          }
          c = 0;
          3 <= a.R &&
            ((a.fa = ((a.fa << a.Yb) ^ a.window[a.L + 3 - 1]) & a.Xb),
            (c = a.Mb[a.L & a.wc] = a.head[a.fa]),
            (a.head[a.fa] = a.L));
          a.mb = a.ja;
          a.Sh = a.cd;
          a.ja = 2;
          0 !== c &&
            a.mb < a.Pf &&
            a.L - c <= a.Ra - 262 &&
            ((a.ja = Jr(a, c)),
            5 >= a.ja &&
              (1 === a.Ob || (3 === a.ja && 4096 < a.L - a.cd)) &&
              (a.ja = 2));
          if (3 <= a.mb && a.ja <= a.mb) {
            d = a.L + a.R - 3;
            c = zr(a, a.L - 1 - a.Sh, a.mb - 3);
            a.R -= a.mb - 1;
            a.mb -= 2;
            do
              ++a.L <= d &&
                ((a.fa = ((a.fa << a.Yb) ^ a.window[a.L + 3 - 1]) & a.Xb),
                (a.Mb[a.L & a.wc] = a.head[a.fa]),
                (a.head[a.fa] = a.L));
            while (0 !== --a.mb);
            a.Lc = 0;
            a.ja = 2;
            a.L++;
            if (c && (Hr(a, !1), 0 === a.ea.ga)) return 1;
          } else if (a.Lc) {
            if (
              ((c = zr(a, 0, a.window[a.L - 1])) && Hr(a, !1),
              a.L++,
              a.R--,
              0 === a.ea.ga)
            )
              return 1;
          } else (a.Lc = 1), a.L++, a.R--;
        }
        a.Lc && (zr(a, 0, a.window[a.L - 1]), (a.Lc = 0));
        a.fb = 2 > a.L ? a.L : 2;
        return 4 === b
          ? (Hr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.wb && (Hr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Pr = function (a, b) {
        for (var c, d, e, f = a.window; ; ) {
          if (258 >= a.R) {
            Mr(a);
            if (258 >= a.R && 0 === b) return 1;
            if (0 === a.R) break;
          }
          a.ja = 0;
          if (
            3 <= a.R &&
            0 < a.L &&
            ((d = a.L - 1),
            (c = f[d]),
            c === f[++d] && c === f[++d] && c === f[++d])
          ) {
            for (
              e = a.L + 258;
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              c === f[++d] &&
              d < e;

            );
            a.ja = 258 - (e - d);
            a.ja > a.R && (a.ja = a.R);
          }
          3 <= a.ja
            ? ((c = zr(a, 1, a.ja - 3)),
              (a.R -= a.ja),
              (a.L += a.ja),
              (a.ja = 0))
            : ((c = zr(a, 0, a.window[a.L])), a.R--, a.L++);
          if (c && (Hr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.fb = 0;
        return 4 === b
          ? (Hr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.wb && (Hr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Qr = function (a, b) {
        for (var c; ; ) {
          if (0 === a.R && (Mr(a), 0 === a.R)) {
            if (0 === b) return 1;
            break;
          }
          a.ja = 0;
          c = zr(a, 0, a.window[a.L]);
          a.R--;
          a.L++;
          if (c && (Hr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.fb = 0;
        return 4 === b
          ? (Hr(a, !0), 0 === a.ea.ga ? 3 : 4)
          : a.wb && (Hr(a, !1), 0 === a.ea.ga)
          ? 1
          : 2;
      },
      Rr = function (a, b, c, d, e) {
        this.jj = a;
        this.ck = b;
        this.ik = c;
        this.bk = d;
        this.ij = e;
      },
      Sr = function () {
        this.ea = null;
        this.status = 0;
        this.sa = null;
        this.Ia = this.pending = this.Gd = this.yb = 0;
        this.Z = null;
        this.Db = 0;
        this.method = 8;
        this.ad = -1;
        this.wc = this.ug = this.Ra = 0;
        this.window = null;
        this.hi = 0;
        this.head = this.Mb = null;
        this.Lh =
          this.ih =
          this.Ob =
          this.level =
          this.Pf =
          this.Ih =
          this.mb =
          this.R =
          this.cd =
          this.L =
          this.Lc =
          this.Sh =
          this.ja =
          this.kb =
          this.Yb =
          this.Xb =
          this.Cf =
          this.se =
          this.fa =
            0;
        this.bb = new X.Pb(1146);
        this.Dc = new X.Pb(122);
        this.Oa = new X.Pb(78);
        Cr(this.bb);
        Cr(this.Dc);
        Cr(this.Oa);
        this.Qg = this.fe = this.xe = null;
        this.Ub = new X.Pb(16);
        this.wa = new X.Pb(573);
        Cr(this.wa);
        this.Yc = this.Zb = 0;
        this.depth = new X.Pb(573);
        Cr(this.depth);
        this.Ja =
          this.Ua =
          this.fb =
          this.matches =
          this.ld =
          this.ec =
          this.yd =
          this.wb =
          this.Ed =
          this.Hf =
            0;
      },
      Ur = function (a, b) {
        if (!a || !a.state || 5 < b || 0 > b) return a ? Br(a, -2) : -2;
        var c = a.state;
        if (!a.Fd || (!a.input && 0 !== a.Ta) || (666 === c.status && 4 !== b))
          return Br(a, 0 === a.ga ? -5 : -2);
        c.ea = a;
        var d = c.ad;
        c.ad = b;
        if (42 === c.status)
          if (2 === c.Ia)
            (a.ba = 0),
              Y(c, 31),
              Y(c, 139),
              Y(c, 8),
              c.Z
                ? (Y(
                    c,
                    (c.Z.text ? 1 : 0) +
                      (c.Z.oc ? 2 : 0) +
                      (c.Z.kc ? 4 : 0) +
                      (c.Z.name ? 8 : 0) +
                      (c.Z.gf ? 16 : 0)
                  ),
                  Y(c, c.Z.time & 255),
                  Y(c, (c.Z.time >> 8) & 255),
                  Y(c, (c.Z.time >> 16) & 255),
                  Y(c, (c.Z.time >> 24) & 255),
                  Y(c, 9 === c.level ? 2 : 2 <= c.Ob || 2 > c.level ? 4 : 0),
                  Y(c, c.Z.gm & 255),
                  c.Z.kc &&
                    c.Z.kc.length &&
                    (Y(c, c.Z.kc.length & 255),
                    Y(c, (c.Z.kc.length >> 8) & 255)),
                  c.Z.oc && (a.ba = Lr(a.ba, c.sa, c.pending, 0)),
                  (c.Db = 0),
                  (c.status = 69))
                : (Y(c, 0),
                  Y(c, 0),
                  Y(c, 0),
                  Y(c, 0),
                  Y(c, 0),
                  Y(c, 9 === c.level ? 2 : 2 <= c.Ob || 2 > c.level ? 4 : 0),
                  Y(c, 3),
                  (c.status = 113));
          else {
            var e = (8 + ((c.ug - 8) << 4)) << 8;
            e |=
              (2 <= c.Ob || 2 > c.level
                ? 0
                : 6 > c.level
                ? 1
                : 6 === c.level
                ? 2
                : 3) << 6;
            0 !== c.L && (e |= 32);
            c.status = 113;
            Ir(c, e + (31 - (e % 31)));
            0 !== c.L && (Ir(c, a.ba >>> 16), Ir(c, a.ba & 65535));
            a.ba = 1;
          }
        if (69 === c.status)
          if (c.Z.kc) {
            for (
              e = c.pending;
              c.Db < (c.Z.kc.length & 65535) &&
              (c.pending !== c.yb ||
                (c.Z.oc &&
                  c.pending > e &&
                  (a.ba = Lr(a.ba, c.sa, c.pending - e, e)),
                Dr(a),
                (e = c.pending),
                c.pending !== c.yb));

            )
              Y(c, c.Z.kc[c.Db] & 255), c.Db++;
            c.Z.oc &&
              c.pending > e &&
              (a.ba = Lr(a.ba, c.sa, c.pending - e, e));
            c.Db === c.Z.kc.length && ((c.Db = 0), (c.status = 73));
          } else c.status = 73;
        if (73 === c.status)
          if (c.Z.name) {
            e = c.pending;
            do {
              if (
                c.pending === c.yb &&
                (c.Z.oc &&
                  c.pending > e &&
                  (a.ba = Lr(a.ba, c.sa, c.pending - e, e)),
                Dr(a),
                (e = c.pending),
                c.pending === c.yb)
              ) {
                var f = 1;
                break;
              }
              f =
                c.Db < c.Z.name.length ? c.Z.name.charCodeAt(c.Db++) & 255 : 0;
              Y(c, f);
            } while (0 !== f);
            c.Z.oc &&
              c.pending > e &&
              (a.ba = Lr(a.ba, c.sa, c.pending - e, e));
            0 === f && ((c.Db = 0), (c.status = 91));
          } else c.status = 91;
        if (91 === c.status)
          if (c.Z.gf) {
            e = c.pending;
            do {
              if (
                c.pending === c.yb &&
                (c.Z.oc &&
                  c.pending > e &&
                  (a.ba = Lr(a.ba, c.sa, c.pending - e, e)),
                Dr(a),
                (e = c.pending),
                c.pending === c.yb)
              ) {
                f = 1;
                break;
              }
              f = c.Db < c.Z.gf.length ? c.Z.gf.charCodeAt(c.Db++) & 255 : 0;
              Y(c, f);
            } while (0 !== f);
            c.Z.oc &&
              c.pending > e &&
              (a.ba = Lr(a.ba, c.sa, c.pending - e, e));
            0 === f && (c.status = 103);
          } else c.status = 103;
        103 === c.status &&
          (c.Z.oc
            ? (c.pending + 2 > c.yb && Dr(a),
              c.pending + 2 <= c.yb &&
                (Y(c, a.ba & 255),
                Y(c, (a.ba >> 8) & 255),
                (a.ba = 0),
                (c.status = 113)))
            : (c.status = 113));
        if (0 !== c.pending) {
          if ((Dr(a), 0 === a.ga)) return (c.ad = -1), 0;
        } else if (
          0 === a.Ta &&
          (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) &&
          4 !== b
        )
          return Br(a, -5);
        if (666 === c.status && 0 !== a.Ta) return Br(a, -5);
        if (0 !== a.Ta || 0 !== c.R || (0 !== b && 666 !== c.status)) {
          d =
            2 === c.Ob
              ? Qr(c, b)
              : 3 === c.Ob
              ? Pr(c, b)
              : Tr[c.level].ij(c, b);
          if (3 === d || 4 === d) c.status = 666;
          if (1 === d || 3 === d) return 0 === a.ga && (c.ad = -1), 0;
          if (
            2 === d &&
            (1 === b
              ? (fr(c, 2, 3),
                gr(c, 256, Fr),
                16 === c.Ja
                  ? (er(c, c.Ua), (c.Ua = 0), (c.Ja = 0))
                  : 8 <= c.Ja &&
                    ((c.sa[c.pending++] = c.Ua & 255),
                    (c.Ua >>= 8),
                    (c.Ja -= 8)))
              : 5 !== b &&
                (fr(c, 0, 3),
                lr(c, 0, 0),
                3 === b &&
                  (Cr(c.head),
                  0 === c.R && ((c.L = 0), (c.kb = 0), (c.fb = 0)))),
            Dr(a),
            0 === a.ga)
          )
            return (c.ad = -1), 0;
        }
        if (4 !== b) return 0;
        if (0 >= c.Ia) return 1;
        2 === c.Ia
          ? (Y(c, a.ba & 255),
            Y(c, (a.ba >> 8) & 255),
            Y(c, (a.ba >> 16) & 255),
            Y(c, (a.ba >> 24) & 255),
            Y(c, a.Nc & 255),
            Y(c, (a.Nc >> 8) & 255),
            Y(c, (a.Nc >> 16) & 255),
            Y(c, (a.Nc >> 24) & 255))
          : (Ir(c, a.ba >>> 16), Ir(c, a.ba & 65535));
        Dr(a);
        0 < c.Ia && (c.Ia = -c.Ia);
        return 0 !== c.pending ? 0 : 1;
      },
      Vr = function (a) {
        if (!(this instanceof Vr)) return new Vr(a);
        a = this.options = X.assign(
          { level: -1, method: 8, Ti: 16384, xc: 15, ek: 8, Ob: 0, fi: "" },
          a || {}
        );
        a.raw && 0 < a.xc
          ? (a.xc = -a.xc)
          : a.kj && 0 < a.xc && 16 > a.xc && (a.xc += 16);
        this.pf = 0;
        this.msg = "";
        this.ended = !1;
        this.vd = [];
        this.ea = new Wr();
        this.ea.ga = 0;
        var b = this.ea;
        var c = a.level,
          d = a.method,
          e = a.xc,
          f = a.ek,
          g = a.Ob;
        if (b) {
          var h = 1;
          -1 === c && (c = 6);
          0 > e ? ((h = 0), (e = -e)) : 15 < e && ((h = 2), (e -= 16));
          if (
            1 > f ||
            9 < f ||
            8 !== d ||
            8 > e ||
            15 < e ||
            0 > c ||
            9 < c ||
            0 > g ||
            4 < g
          )
            b = Br(b, -2);
          else {
            8 === e && (e = 9);
            var l = new Sr();
            b.state = l;
            l.ea = b;
            l.Ia = h;
            l.Z = null;
            l.ug = e;
            l.Ra = 1 << l.ug;
            l.wc = l.Ra - 1;
            l.Cf = f + 7;
            l.se = 1 << l.Cf;
            l.Xb = l.se - 1;
            l.Yb = ~~((l.Cf + 3 - 1) / 3);
            l.window = new X.yc(2 * l.Ra);
            l.head = new X.Pb(l.se);
            l.Mb = new X.Pb(l.Ra);
            l.Ed = 1 << (f + 6);
            l.yb = 4 * l.Ed;
            l.sa = new X.yc(l.yb);
            l.yd = l.Ed;
            l.Hf = 3 * l.Ed;
            l.level = c;
            l.Ob = g;
            l.method = d;
            if (b && b.state) {
              b.Nc = b.rg = 0;
              b.kf = 2;
              c = b.state;
              c.pending = 0;
              c.Gd = 0;
              0 > c.Ia && (c.Ia = -c.Ia);
              c.status = c.Ia ? 42 : 113;
              b.ba = 2 === c.Ia ? 0 : 1;
              c.ad = 0;
              if (!Xr) {
                d = Array(16);
                for (f = g = 0; 28 > f; f++)
                  for (qr[f] = g, e = 0; e < 1 << pr[f]; e++) or[g++] = f;
                or[g - 1] = f;
                for (f = g = 0; 16 > f; f++)
                  for (tr[f] = g, e = 0; e < 1 << sr[f]; e++) rr[g++] = f;
                for (g >>= 7; 30 > f; f++)
                  for (tr[f] = g << 7, e = 0; e < 1 << (sr[f] - 7); e++)
                    rr[256 + g++] = f;
                for (e = 0; 15 >= e; e++) d[e] = 0;
                for (e = 0; 143 >= e; ) (Fr[2 * e + 1] = 8), e++, d[8]++;
                for (; 255 >= e; ) (Fr[2 * e + 1] = 9), e++, d[9]++;
                for (; 279 >= e; ) (Fr[2 * e + 1] = 7), e++, d[7]++;
                for (; 287 >= e; ) (Fr[2 * e + 1] = 8), e++, d[8]++;
                ir(Fr, 287, d);
                for (e = 0; 30 > e; e++)
                  (Gr[2 * e + 1] = 5), (Gr[2 * e] = hr(e, 5));
                Yr = new cr(Fr, pr, 257, 286, 15);
                Zr = new cr(Gr, sr, 0, 30, 15);
                $r = new cr([], as, 0, 19, 7);
                Xr = !0;
              }
              c.xe = new dr(c.bb, Yr);
              c.fe = new dr(c.Dc, Zr);
              c.Qg = new dr(c.Oa, $r);
              c.Ua = 0;
              c.Ja = 0;
              jr(c);
              c = 0;
            } else c = Br(b, -2);
            0 === c &&
              ((b = b.state),
              (b.hi = 2 * b.Ra),
              Cr(b.head),
              (b.Pf = Tr[b.level].ck),
              (b.ih = Tr[b.level].jj),
              (b.Lh = Tr[b.level].ik),
              (b.Ih = Tr[b.level].bk),
              (b.L = 0),
              (b.kb = 0),
              (b.R = 0),
              (b.fb = 0),
              (b.ja = b.mb = 2),
              (b.Lc = 0),
              (b.fa = 0));
            b = c;
          }
        } else b = -2;
        if (0 !== b) throw Error(Ar[b]);
        a.Ij &&
          (b = this.ea) &&
          b.state &&
          2 === b.state.Ia &&
          (b.state.Z = a.Ij);
        if (a.zd) {
          var m;
          "string" === typeof a.zd
            ? (m = bs(a.zd))
            : "[object ArrayBuffer]" === cs.call(a.zd)
            ? (m = new Uint8Array(a.zd))
            : (m = a.zd);
          a = this.ea;
          f = m;
          g = f.length;
          if (a && a.state)
            if (
              ((m = a.state),
              (b = m.Ia),
              2 === b || (1 === b && 42 !== m.status) || m.R)
            )
              b = -2;
            else {
              1 === b && (a.ba = Kr(a.ba, f, g, 0));
              m.Ia = 0;
              g >= m.Ra &&
                (0 === b && (Cr(m.head), (m.L = 0), (m.kb = 0), (m.fb = 0)),
                (c = new X.yc(m.Ra)),
                X.Rc(c, f, g - m.Ra, m.Ra, 0),
                (f = c),
                (g = m.Ra));
              c = a.Ta;
              d = a.Mc;
              e = a.input;
              a.Ta = g;
              a.Mc = 0;
              a.input = f;
              for (Mr(m); 3 <= m.R; ) {
                f = m.L;
                g = m.R - 2;
                do
                  (m.fa = ((m.fa << m.Yb) ^ m.window[f + 3 - 1]) & m.Xb),
                    (m.Mb[f & m.wc] = m.head[m.fa]),
                    (m.head[m.fa] = f),
                    f++;
                while (--g);
                m.L = f;
                m.R = 2;
                Mr(m);
              }
              m.L += m.R;
              m.kb = m.L;
              m.fb = m.R;
              m.R = 0;
              m.ja = m.mb = 2;
              m.Lc = 0;
              a.Mc = d;
              a.input = e;
              a.Ta = c;
              m.Ia = b;
              b = 0;
            }
          else b = -2;
          if (0 !== b) throw Error(Ar[b]);
          this.Yl = !0;
        }
      },
      ds = function (a) {
        var b = {};
        b = b || {};
        b.kj = !0;
        b = new Vr(b);
        b.push(a, !0);
        if (b.pf) throw b.msg || Ar[b.pf];
        return b.result;
      },
      es = function (a) {
        var b = _.P("goog-gt-thumbUpButton"),
          c = _.P("goog-gt-thumbUpIcon"),
          d = _.P("goog-gt-thumbUpIconFilled"),
          e = _.P("goog-gt-thumbDownButton"),
          f = _.P("goog-gt-thumbDownIcon"),
          g = _.P("goog-gt-thumbDownIconFilled");
        b.setAttribute("aria-pressed", "false");
        c.style.display = "";
        d.style.display = "none";
        e.setAttribute("aria-pressed", "false");
        f.style.display = "";
        g.style.display = "none";
        switch (a) {
          case "up":
            b.setAttribute("aria-pressed", "true");
            c.style.display = "none";
            d.style.display = "";
            break;
          case "down":
            e.setAttribute("aria-pressed", "true"),
              (f.style.display = "none"),
              (g.style.display = "");
        }
        _.P("goog-gt-votingInputVote").value = a;
      },
      fs = function (a) {
        var b = _.P("goog-gt-tt").dataset;
        return a.get(b.id);
      },
      gs = function (a, b) {
        fs(a) === b && (b = "");
        es(b);
        var c = _.P("goog-gt-tt").dataset;
        a.set(c.id, b);
        _.P("goog-gt-votingForm").submit();
      },
      Qq = function (a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = _.Pg(a.da),
          f = d;
        var g = e;
        g = void 0 === g ? !0 : g;
        a.Wa || (a.Wa = {});
        var h = a.Wa[c],
          l = Oq(a, c, f),
          m = _.Pg(a.da);
        if (h)
          m ||
            (Object.isFrozen(h)
              ? g || ((h = Array.prototype.slice.call(h)), (a.Wa[c] = h))
              : g && Object.freeze(h));
        else {
          h = [];
          var n = !!(_.Lg(a.da) & 16),
            p = _.Pg(l);
          !m &&
            p &&
            ((l = _.Ng(Array.prototype.slice.call(l))), _.H(a, c, l, f));
          f = p;
          for (var t = 0; t < l.length; t++) {
            var q = l[t];
            f = f || _.Pg(q);
            var w = b,
              K = n,
              L = !1;
            L = void 0 === L ? !1 : L;
            K = void 0 === K ? !1 : K;
            q = Array.isArray(q)
              ? new w(K ? _.Qg(q) : q)
              : L
              ? new w()
              : void 0;
            void 0 !== q && (h.push(q), p && _.Kg(q.da, 2));
          }
          a.Wa[c] = h;
          Object.isFrozen(l) ||
            ((b = _.Lg(l) | 33), _.Mg(l, f ? b & -9 : b | 8));
          (m || (g && p)) && _.Kg(h, 2);
          (m || g) && Object.freeze(h);
        }
        g = h;
        a = Oq(a, c, d);
        if ((e = !e && a)) {
          if (!a) throw Error("ha");
          e = !(_.Lg(a) & 8);
        }
        if (e) {
          for (e = 0; e < g.length; e++)
            (c = g[e]) &&
              _.Pg(c.da) &&
              ((c = e), (d = _.ih(g[e])), (g[c] = d), (a[e] = g[e].da));
          _.Kg(a, 8);
        }
        return g;
      },
      hs = function (a) {
        _.Bh = !0;
        try {
          return JSON.stringify(a.toJSON(), Pq);
        } finally {
          _.Bh = !1;
        }
      },
      Sq = function (a) {
        var b = _.Xg(a.da, Tq, Nq);
        _.Qg(b);
        _.Kh = b;
        b = new a.constructor(b);
        _.Kh = null;
        Rq(b, a);
        return b;
      },
      is = null,
      js = function () {
        is && (_.Hd(is), (is = null));
        _.ri && _.ri.length && _.si(_.ri.join(""));
        _.ri = null;
      },
      ks = function () {
        _.ri && js();
        _.ri = [];
        is = _.D(window, "pagehide", function () {
          js();
        });
      },
      ms = function (a, b) {
        b = ls(b || {}, a.j ? a.j.g() : {});
        a.h(null, b.Vb);
        return b.h();
      },
      ns = function (a) {
        return a instanceof _.Uh && a.constructor === _.Uh
          ? a.g
          : "type_error:SafeStyleSheet";
      },
      os = function (a, b) {
        return a + Math.random() * (b - a);
      },
      ps = function (a) {
        try {
          return (
            a.contentWindow ||
            (a.contentDocument ? _.ad(a.contentDocument) : null)
          );
        } catch (b) {}
        return null;
      },
      qs = function () {
        var a = _.Yl[5];
        return new _.be(function (b, c) {
          c(a);
        });
      },
      rs = function (a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
          d = c;
          var e = "";
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? (c ? c + "&" + b : b) : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2];
      },
      ss = function (a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) _.uf(a[b], a[b + 1], c);
        return c.join("&");
      },
      ts = function (a, b) {
        var c = 2 == arguments.length ? ss(arguments[1], 0) : ss(arguments, 1);
        return rs(a, c);
      },
      us = function (a, b, c) {
        c = null != c ? "=" + _.Qc(c) : "";
        return rs(a, b + c);
      },
      vs = function (a, b, c) {
        for (; 0 <= (b = a.indexOf("format", b)) && b < c; ) {
          var d = a.charCodeAt(b - 1);
          if (38 == d || 63 == d)
            if (
              ((d = a.charCodeAt(b + 6)), !d || 61 == d || 38 == d || 35 == d)
            )
              return b;
          b += 7;
        }
        return -1;
      },
      ws = /#|$/,
      xs = /[?&]($|#)/,
      ys = function (a, b) {
        _.E.call(this);
        this.l = a || 1;
        this.j = b || _.r;
        this.o = (0, _.y)(this.B, this);
        this.s = _.qb();
      };
    _.z(ys, _.E);
    ys.prototype.h = !1;
    ys.prototype.g = null;
    var zs = function (a, b) {
      a.l = b;
      a.g && a.h ? (a.stop(), a.start()) : a.g && a.stop();
    };
    ys.prototype.B = function () {
      if (this.h) {
        var a = _.qb() - this.s;
        0 < a && a < 0.8 * this.l
          ? (this.g = this.j.setTimeout(this.o, this.l - a))
          : (this.g && (this.j.clearTimeout(this.g), (this.g = null)),
            this.dispatchEvent("tick"),
            this.h && (this.stop(), this.start()));
      }
    };
    ys.prototype.start = function () {
      this.h = !0;
      this.g ||
        ((this.g = this.j.setTimeout(this.o, this.l)), (this.s = _.qb()));
    };
    ys.prototype.stop = function () {
      this.h = !1;
      this.g && (this.j.clearTimeout(this.g), (this.g = null));
    };
    ys.prototype.K = function () {
      ys.P.K.call(this);
      this.stop();
      delete this.j;
    };
    var As = function (a, b) {
        function c(l) {
          for (; d < a.length; ) {
            var m = a.charAt(d++),
              n = _.xh[m];
            if (null != n) return n;
            if (!/^[\s\xa0]*$/.test(m)) throw Error("da`" + m);
          }
          return l;
        }
        _.zh();
        for (var d = 0; ; ) {
          var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
          if (64 === h && -1 === e) break;
          b((e << 2) | (f >> 4));
          64 != g &&
            (b(((f << 4) & 240) | (g >> 2)),
            64 != h && b(((g << 6) & 192) | h));
        }
      },
      Bs = function (a) {
        if (_.yh) return _.r.atob(a);
        var b = "";
        As(a, function (c) {
          b += String.fromCharCode(c);
        });
        return b;
      },
      Cs = function (a, b) {
        b = ns(b);
        _.C && void 0 !== a.cssText
          ? (a.cssText = b)
          : _.r.trustedTypes
          ? _.gd(a, b)
          : (a.innerHTML = b);
      },
      Ds = function (a, b) {
        b = _.Vc(b);
        var c = b.T;
        if (_.C && c.createStyleSheet) (b = c.createStyleSheet()), Cs(b, a);
        else {
          c = _.Gi(b.T, "HEAD")[0];
          if (!c) {
            var d = _.Gi(b.T, "BODY")[0];
            c = b.S("HEAD");
            d.parentNode.insertBefore(c, d);
          }
          d = b.S("STYLE");
          var e;
          (e = _.qh('style[nonce],link[rel="stylesheet"][nonce]')) &&
            d.setAttribute("nonce", e);
          Cs(d, a);
          b.appendChild(c, d);
        }
      },
      Es = function (a) {
        return new _.Oc(a.offsetWidth, a.offsetHeight);
      },
      Fs = function (a, b) {
        var c = _.Zc(_.Vc(_.Uc(a)).T);
        if (!_.C || _.rc("10") || c) _.sk(a, b, "content-box");
        else {
          var d = a.style;
          c
            ? ((d.pixelWidth = b.width), (d.pixelHeight = b.height))
            : ((c = _.vk(a)),
              (a = _.yk(a)),
              (d.pixelWidth = b.width + a.left + c.left + c.right + a.right),
              (d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom));
        }
      },
      Gs = function (a) {
        return a instanceof _.yf ? !!a.Aa() : !!a;
      },
      Hs = function (a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>");
      },
      Is = function (a) {
        return _.zk(a, _.bk)
          ? a.Aa()
          : a instanceof _.Db
          ? _.Ma(a).toString()
          : a instanceof _.Db
          ? _.Tk(_.Ma(a).toString())
          : "about:invalid#zSoyz";
      },
      Js =
        /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
      Ks = function (a) {
        _.zk(a, _.Ph)
          ? (a = Hs(a.Aa()))
          : null == a
          ? (a = "")
          : a instanceof _.Cc
          ? (a = Hs(_.Xi(a)))
          : a instanceof _.Cc
          ? (a = Hs(_.Xi(a)))
          : a instanceof _.Uh
          ? (a = Hs(ns(a)))
          : a instanceof _.Uh
          ? (a = Hs(ns(a)))
          : ((a = String(a)), (a = Js.test(a) ? a : "zSoyz"));
        return a;
      },
      Ls,
      Ms = function (a, b) {
        if ((_.C || _.Zb) && window.location.hostname != document.domain) {
          Ls = Ls ? Ls + 1 : 1;
          var c = "f" + Ls + "_" + _.qb().toString(36);
          window[c] = function () {
            window[c] = void 0;
            a.src = "javascript:void(0)";
            b &&
              window.setTimeout(function () {
                b();
              }, 0);
          };
          a.src =
            "javascript:void(document.write(\"<script>document.domain='" +
            document.domain +
            "';parent['" +
            c +
            "']();\x3c/script>\"))";
        } else b && b();
      },
      Ns = function (a, b) {
        return "auto" != a && "zh-CN" != a && a == b;
      },
      Os = function () {
        var a = window.location.hash.match(
          /google\.translate\.element\.sp=([^&]+)/
        );
        return a && a[1] ? a[1] : null;
      },
      Ps = function () {};
    Ps.prototype.h = function () {};
    var Qs = function (a) {
        a = a.split(".");
        if (3 !== a.length) return !1;
        a = JSON.parse(Bs(a[1]));
        return null == a || !a.exp || 1e3 * a.exp < _.qb() ? !1 : !0;
      },
      Rs = function (a) {
        this.g = a;
      };
    _.x(Rs, Ps);
    Rs.prototype.h = function () {
      return Qs(this.g) ? _.uh(this.g) : qs();
    };
    var Ss = function (a) {
      this.g = null;
      this.j = a;
    };
    _.x(Ss, Ps);
    Ss.prototype.h = function () {
      if (null != this.g && Qs(this.g)) return _.uh(this.g);
      this.g = null;
      return new _.be(function (a, b) {
        var c = this;
        this.j(function (d) {
          c.g = d;
          Qs(c.g) ? a(d) : b(_.Yl[5]);
        }, b);
      }, this);
    };
    var Ts = function (a) {
        return (0, _.M)('<span id="' + _.R(a.id) + '"></span>');
      },
      Us = function (a) {
        var b = a.id,
          c = a.Qh;
        return (0, _.M)(
          _.Pk(a.Rh) + '<div id="' + _.R(b) + '"></div>' + _.Pk(c)
        );
      },
      ls = function (a) {
        var b = a.id,
          c = a.top,
          d = a.left,
          e = a.bottom,
          f = a.right;
        return (0, _.Yh)(
          "." +
            Ks(a.className) +
            " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" +
            (Gs(c) || _.Bk(c, 0)
              ? "top:" +
                Ks(c) +
                "px; _top:expression((" +
                Ks(c) +
                "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
              : "top:auto;") +
            (Gs(d) || _.Bk(d, 0)
              ? "left:" +
                Ks(d) +
                "px; _left:expression((" +
                Ks(d) +
                "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
              : "left:auto;") +
            (Gs(e) || _.Bk(e, 0)
              ? "bottom:" +
                Ks(e) +
                "px; _top:expression((-" +
                Ks(e) +
                "-document.getElementById('" +
                String(b).replace(_.Rk, _.Lk) +
                "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');"
              : "bottom:auto;") +
            (Gs(f) || _.Bk(f, 0)
              ? "right:" +
                Ks(f) +
                "px; _left:expression((-" +
                Ks(f) +
                "-document.getElementById('" +
                String(b).replace(_.Rk, _.Lk) +
                "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');"
              : "right:auto;") +
            "}"
        );
      },
      Vs = function () {
        return (0, _.M)(
          '<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>'
        );
      },
      Ws = function () {
        _.N.call(this);
      };
    _.x(Ws, _.N);
    Ws.prototype.S = function () {
      this.za(_.qi(Vs));
    };
    Ws.prototype.za = function (a) {
      this.j = a;
    };
    var Xs = function (a) {
        _.on(a.A(), "goog-te-spinner-pos-show");
        _.on(a.A().firstChild, "goog-te-spinner-animation-show");
      },
      Ys = function () {
        this.g = new Ws();
        this.g.S();
        this.g.Ba();
        this.h = 0;
      };
    Ys.prototype.reset = function () {
      this.h = 0;
      Xs(this.g);
    };
    Ys.prototype.l = function () {
      if (0 == this.h++) {
        var a = this.g;
        _.mn(a.A(), "goog-te-spinner-pos-show");
        _.mn(a.A().firstChild, "goog-te-spinner-animation-show");
      }
    };
    Ys.prototype.j = function () {
      0 == --this.h && Xs(this.g);
    };
    var $s = function (a) {
      _.I.call(this, a, -1, Zs);
    };
    _.x($s, _.I);
    var Zs = [2];
    var at = function (a) {
      if (!a) return "";
      if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
      a = a.split("#")[0].split("?")[0];
      a = a.toLowerCase();
      0 == a.indexOf("//") && (a = window.location.protocol + a);
      /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
      var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/");
      -1 != c && (b = b.substring(0, c));
      c = a.substring(0, a.indexOf("://"));
      if (!c) throw Error("Ha`" + a);
      if (
        "http" !== c &&
        "https" !== c &&
        "chrome-extension" !== c &&
        "moz-extension" !== c &&
        "file" !== c &&
        "android-app" !== c &&
        "chrome-search" !== c &&
        "chrome-untrusted" !== c &&
        "chrome" !== c &&
        "app" !== c &&
        "devtools" !== c
      )
        throw Error("Ia`" + c);
      a = "";
      var d = b.indexOf(":");
      if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if (("http" === c && "80" !== e) || ("https" === c && "443" !== e))
          a = ":" + e;
      }
      return c + "://" + b + a;
    };
    var ct = function (a, b, c) {
        var d = String(_.r.location.href);
        return d && a && b ? [b, bt(at(d), a, c || null)].join(" ") : null;
      },
      bt = function (a, b, c) {
        var d = [],
          e = [];
        if (1 == (Array.isArray(c) ? 2 : 1))
          return (
            (e = [b, a]),
            _.Nb(d, function (h) {
              e.push(h);
            }),
            dt(e.join(" "))
          );
        var f = [],
          g = [];
        _.Nb(c, function (h) {
          g.push(h.key);
          f.push(h.value);
        });
        c = Math.floor(new Date().getTime() / 1e3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        _.Nb(d, function (h) {
          e.push(h);
        });
        a = dt(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_");
      },
      dt = function (a) {
        var b = Zq();
        b.update(a);
        return b.Wi().toLowerCase();
      };
    var et = {};
    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    var ft = function () {
      this.g = document || { cookie: "" };
    };
    _.k = ft.prototype;
    _.k.isEnabled = function () {
      if (!_.r.navigator.cookieEnabled) return !1;
      if (!this.bc()) return !0;
      this.set("TESTCOOKIESENABLED", "1", { Gh: 60 });
      if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
      this.remove("TESTCOOKIESENABLED");
      return !0;
    };
    _.k.set = function (a, b, c) {
      var d = !1;
      if ("object" === typeof c) {
        var e = c.im;
        d = c.jm || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.Gh;
      }
      if (/[;=\s]/.test(a)) throw Error("Ja`" + a);
      if (/[;\r\n]/.test(b)) throw Error("Ka`" + b);
      void 0 === h && (h = -1);
      this.g.cookie =
        a +
        "=" +
        b +
        (f ? ";domain=" + f : "") +
        (g ? ";path=" + g : "") +
        (0 > h
          ? ""
          : 0 == h
          ? ";expires=" + new Date(1970, 1, 1).toUTCString()
          : ";expires=" + new Date(Date.now() + 1e3 * h).toUTCString()) +
        (d ? ";secure" : "") +
        (null != e ? ";samesite=" + e : "");
    };
    _.k.get = function (a, b) {
      for (
        var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f;
        e < d.length;
        e++
      ) {
        f = (0, _.Sb)(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return "";
      }
      return b;
    };
    _.k.remove = function (a, b, c) {
      var d = void 0 !== this.get(a);
      this.set(a, "", { Gh: 0, path: b, domain: c });
      return d;
    };
    _.k.Ec = function () {
      return gt(this).keys;
    };
    _.k.sb = function () {
      return gt(this).values;
    };
    _.k.bc = function () {
      return !this.g.cookie;
    };
    var gt = function (a) {
      a = (a.g.cookie || "").split(";");
      for (var b = [], c = [], d, e, f = 0; f < a.length; f++)
        (e = (0, _.Sb)(a[f])),
          (d = e.indexOf("=")),
          -1 == d
            ? (b.push(""), c.push(e))
            : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
      return { keys: b, values: c };
    };
    var ht = function (a) {
        return !!et.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a);
      },
      it = function (a, b, c, d) {
        (a = _.r[a]) || (a = new ft().get(b));
        return a ? ct(a, c, d) : null;
      },
      jt = function (a, b) {
        b = void 0 === b ? !1 : b;
        var c = at(String(_.r.location.href)),
          d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f =
          _.r.__SAPISID ||
          _.r.__APISID ||
          _.r.__3PSAPISID ||
          _.r.__OVERRIDE_SID;
        ht(e) && (f = f || _.r.__1PSAPISID);
        if (f) e = !0;
        else {
          var g = new ft();
          f =
            g.get("SAPISID") ||
            g.get("APISID") ||
            g.get("__Secure-3PAPISID") ||
            g.get("SID");
          ht(e) && (f = f || g.get("__Secure-1PAPISID"));
          e = !!f;
        }
        e &&
          ((e = (c =
            0 == c.indexOf("https:") ||
            0 == c.indexOf("chrome-extension:") ||
            0 == c.indexOf("moz-extension:"))
            ? _.r.__SAPISID
            : _.r.__APISID),
          e ||
            ((e = new ft()),
            (e =
              e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID"))),
          (e = e ? ct(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) &&
            d.push(e),
          c &&
            ht(b) &&
            ((b = it("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) &&
              d.push(b),
            (a = it("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) &&
              d.push(a)));
        return 0 == d.length ? null : d.join(" ");
      };
    var kt = function (a) {
      this.g = this.h = this.j = a;
    };
    kt.prototype.reset = function () {
      this.g = this.h = this.j;
    };
    kt.prototype.Fa = function () {
      return this.h;
    };
    var lt = function (a) {
      _.I.call(this, a);
    };
    _.x(lt, _.I);
    var nt = function (a) {
      _.I.call(this, a, -1, mt);
    };
    _.x(nt, _.I);
    var mt = [1];
    var ot = [
      "platform",
      "platformVersion",
      "architecture",
      "model",
      "uaFullVersion",
    ];
    new nt();
    var pt = function (a) {
      _.I.call(this, a);
    };
    _.x(pt, _.I);
    var rt = function (a) {
      _.I.call(this, a, 31, qt);
    };
    _.x(rt, _.I);
    var qt = [3, 20, 27];
    var tt = function (a) {
      _.I.call(this, a, 17, st);
    };
    _.x(tt, _.I);
    var st = [3, 5];
    var vt = function (a) {
      _.I.call(this, a, 6, ut);
    };
    _.x(vt, _.I);
    var ut = [5];
    var wt = function (a) {
      _.I.call(this, a);
    };
    _.x(wt, _.I);
    var xt = new (function (a, b) {
      this.g = a;
      this.jf = b;
      this.h = Yq;
    })(175237375, wt);
    var Bt = function (a, b, c, d, e, f, g, h, l, m, n) {
      _.E.call(this);
      var p = this;
      this.h = [];
      this.Ma = "";
      this.na = !1;
      this.Na = this.U = -1;
      this.ua = !1;
      this.D = this.j = null;
      this.s = 0;
      this.Sb = 1;
      this.qg = 0;
      this.W = !1;
      _.E.call(this);
      this.Ha = b || function () {};
      this.o = new yt(a, f);
      this.Bb = d;
      this.ma = n;
      this.Tb = _.pb(os, 0, 1);
      this.F = e || null;
      this.B = c || null;
      this.M = g || !1;
      this.N = l || null;
      this.withCredentials = !h;
      this.Y = f || !1;
      this.Rb =
        !this.Y &&
        (65 <= Wq("Chromium") ||
          45 <= Wq("Firefox") ||
          12 <= Wq("Safari") ||
          (_.Fa() && Xq())) &&
        !!_.ad() &&
        !!_.ad().navigator &&
        !!_.ad().navigator.sendBeacon;
      a = _.H(new pt(), 1, 1);
      zt(this.o, a);
      this.l = new kt(1e4);
      this.g = new ys(this.l.Fa());
      _.Ei(this, _.pb(_.ca, this.g));
      m = At(this, m);
      _.D(this.g, "tick", m, !1, this);
      this.H = new ys(6e5);
      _.Ei(this, _.pb(_.ca, this.H));
      _.D(this.H, "tick", m, !1, this);
      this.M || this.H.start();
      this.Y ||
        (_.D(document, "visibilitychange", function () {
          "hidden" === document.visibilityState && p.J();
        }),
        _.D(document, "pagehide", this.J, !1, this));
    };
    _.x(Bt, _.E);
    var At = function (a, b) {
      return b
        ? function () {
            b().then(function () {
              a.flush();
            });
          }
        : function () {
            a.flush();
          };
    };
    Bt.prototype.K = function () {
      this.J();
      _.E.prototype.K.call(this);
    };
    var Ct = function (a) {
        a.F ||
          (a.F =
            0.01 > a.Tb()
              ? "https://www.google.com/log?format=json&hasfast=true"
              : "https://play.google.com/log?format=json&hasfast=true");
        return a.F;
      },
      Dt = function (a, b) {
        a.l = new kt(1 > b ? 1 : b);
        zs(a.g, a.l.Fa());
      };
    Bt.prototype.log = function (a) {
      a = Sq(a);
      var b = this.Sb++;
      _.H(a, 21, b);
      _.Hh(a, 1) || _.H(a, 1, Date.now().toString());
      null != _.Hh(a, 15, !1) ||
        _.H(a, 15, 60 * new Date().getTimezoneOffset());
      this.j && ((b = Sq(this.j)), _.Jh(a, 16, b));
      for (; 1e3 <= this.h.length; ) this.h.shift(), ++this.s;
      this.h.push(a);
      this.dispatchEvent(new Et(a));
      this.M || this.g.h || this.g.start();
    };
    Bt.prototype.flush = function (a, b) {
      var c = this;
      if (0 === this.h.length) a && a();
      else if (this.W) Ft(this);
      else {
        var d = Date.now();
        if (this.Na > d && this.U < d) b && b("throttled");
        else {
          var e = Gt(this.o, this.h, this.s);
          d = {};
          var f = this.Ha();
          f && (d.Authorization = f);
          var g = Ct(this);
          this.B &&
            ((d["X-Goog-AuthUser"] = this.B), (g = us(g, "authuser", this.B)));
          this.N &&
            ((d["X-Goog-PageId"] = this.N), (g = us(g, "pageId", this.N)));
          if (f && this.Ma === f) b && b("stale-auth-token");
          else {
            this.h = [];
            this.g.h && this.g.stop();
            this.s = 0;
            var h = hs(e),
              l;
            this.D &&
              this.D.ub() &&
              (l = Promise.resolve(ds(Uint8Array.from(_.ck(h)))));
            var m = {
                url: g,
                body: h,
                Si: 1,
                cg: d,
                wk: "POST",
                withCredentials: this.withCredentials,
                qg: this.qg,
              },
              n = function (q) {
                c.l.reset();
                zs(c.g, c.l.Fa());
                if (q) {
                  var w = null;
                  try {
                    var K = JSON.parse(q.replace(")]}'\n", ""));
                    w = new vt(K);
                  } catch (L) {}
                  w &&
                    ((q = Number(_.bh(_.Hh(w, 1), "-1"))),
                    0 < q && ((c.U = Date.now()), (c.Na = c.U + q)),
                    (w = xt.h(w))) &&
                    ((w = _.bh(_.Hh(w, 1), -1)), -1 != w && (c.ua || Dt(c, w)));
                }
                a && a();
              },
              p = function (q, w) {
                var K = Qq(e, rt, 3),
                  L = c.l;
                L.g = Math.min(3e5, 2 * L.g);
                L.h = Math.min(
                  3e5,
                  L.g + Math.round(0.2 * (Math.random() - 0.5) * L.g)
                );
                zs(c.g, c.l.Fa());
                401 === q && f && (c.Ma = f);
                void 0 === w &&
                  (w = (500 <= q && 600 > q) || 401 === q || 0 === q);
                w && ((c.h = K.concat(c.h)), c.M || c.g.h || c.g.start());
                b && b("net-send-failed", q);
              },
              t = function () {
                c.ma ? c.ma.send(m, n, p) : c.Bb(m, n, p);
              };
            l
              ? l.then(
                  function (q) {
                    m.cg["Content-Encoding"] = "gzip";
                    m.cg["Content-Type"] = "application/binary";
                    m.body = q;
                    m.Si = 2;
                    t();
                  },
                  function () {
                    t();
                  }
                )
              : t();
          }
        }
      }
    };
    Bt.prototype.J = function () {
      this.na && Ft(this);
      this.flush();
    };
    var Ft = function (a) {
        Ht(a, function (b, c) {
          b = us(b, "format", "json");
          b = _.ad().navigator.sendBeacon(b, hs(c));
          a.W && !b && (a.W = !1);
          return b;
        });
      },
      Ht = function (a, b) {
        if (0 !== a.h.length) {
          var c = Ct(a);
          for (var d = c.search(ws), e = 0, f, g = []; 0 <= (f = vs(c, e, d)); )
            g.push(c.substring(e, f)),
              (e = Math.min(c.indexOf("&", f) + 1 || d, d));
          g.push(c.slice(e));
          c = g.join("").replace(xs, "$1");
          c = ts(c, "auth", a.Ha(), "authuser", a.B || "0");
          for (d = 0; 10 > d && a.h.length; ++d) {
            e = a.h.slice(0, 32);
            f = Gt(a.o, e, a.s);
            if (!b(c, f)) break;
            a.s = 0;
            a.h = a.h.slice(e.length);
          }
          a.g.h && a.g.stop();
        }
      },
      Et = function () {
        _.jd.call(this, "event-logged", void 0);
      };
    _.x(Et, _.jd);
    var yt = function (a, b) {
        this.j = b = void 0 === b ? !1 : b;
        this.h = this.locale = null;
        this.g = new tt();
        _.H(this.g, 2, a);
        b || (this.locale = document.documentElement.getAttribute("lang"));
        zt(this, new pt());
      },
      zt = function (a, b) {
        _.Jh(a.g, 1, b);
        _.Hh(b, 1) || _.H(b, 1, 1);
        a.j || ((b = It(a)), _.Hh(b, 5) || _.H(b, 5, a.locale));
        a.h && ((b = It(a)), _.Ih(b, nt, 9) || _.Jh(b, 9, a.h));
      },
      Jt = function (a, b) {
        var c = void 0 === c ? ot : c;
        b(_.ad(), c)
          .then(function (d) {
            a.h = d;
            d = It(a);
            _.Jh(d, 9, a.h);
            return !0;
          })
          .catch(function () {
            return !1;
          });
      },
      It = function (a) {
        a = _.Ih(a.g, pt, 1);
        var b = _.Ih(a, lt, 11);
        b || ((b = new lt()), _.Jh(a, 11, b));
        return b;
      },
      Gt = function (a, b, c) {
        c = void 0 === c ? 0 : c;
        a = Sq(a.g);
        a = _.H(a, 4, Date.now().toString());
        b = _.hh(a, 3, b);
        c && _.H(b, 14, c);
        return b;
      };
    var Kt = function (a) {
        a.j = _.dl;
        return a;
      },
      Mt = function (a) {
        a.h = new Lt();
        return a;
      },
      Nt = function (a) {
        var b = new ar();
        b.l =
          "https://translate.googleapis.com/element/log?format=json&hasfast=true";
        b.o = a;
        return b;
      },
      Ot = function (a) {
        a.g = !0;
        return a;
      },
      Pt = function (a) {
        a.F = !0;
        return a;
      },
      Qt = function (a) {
        var b = new Bt(
          1871,
          a.o ? a.o : jt,
          "0",
          a.s,
          a.l,
          !1,
          !1,
          a.F,
          void 0,
          void 0,
          a.B ? a.B : void 0
        );
        a.H && zt(b.o, a.H);
        if (a.j) {
          var c = a.j,
            d = It(b.o);
          _.H(d, 7, c);
        }
        a.h && (b.D = a.h);
        a.D &&
          ((c = a.D)
            ? (b.j || (b.j = new $s()), (c = hs(c)), _.H(b.j, 4, c))
            : b.j && _.H(b.j, 4, void 0, !1));
        a.ca &&
          ((d = a.ca),
          b.j || (b.j = new $s()),
          (c = b.j),
          null == d ? (d = _.Fh) : _.Ng(d),
          _.H(c, 2, d));
        a.g && (b.na = a.g && b.Rb);
        a.M && ((c = a.M), (b.ua = !0), Dt(b, c));
        a.J && Jt(b.o, a.J);
        return b;
      };
    /*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
    var X = {},
      Rt =
        "undefined" !== typeof Uint8Array &&
        "undefined" !== typeof Uint16Array &&
        "undefined" !== typeof Int32Array;
    X.assign = function (a) {
      for (var b = Array.prototype.slice.call(arguments, 1); b.length; ) {
        var c = b.shift();
        if (c) {
          if ("object" !== typeof c) throw new TypeError("La`" + c);
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
        }
      }
      return a;
    };
    X.ng = function (a, b) {
      if (a.length === b) return a;
      if (a.subarray) return a.subarray(0, b);
      a.length = b;
      return a;
    };
    var St = {
        Rc: function (a, b, c, d, e) {
          if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
          else for (var f = 0; f < d; f++) a[e + f] = b[c + f];
        },
        Zg: function (a) {
          var b, c;
          var d = (c = 0);
          for (b = a.length; d < b; d++) c += a[d].length;
          var e = new Uint8Array(c);
          d = c = 0;
          for (b = a.length; d < b; d++) {
            var f = a[d];
            e.set(f, c);
            c += f.length;
          }
          return e;
        },
      },
      Tt = {
        Rc: function (a, b, c, d, e) {
          for (var f = 0; f < d; f++) a[e + f] = b[c + f];
        },
        Zg: function (a) {
          return [].concat.apply([], a);
        },
      };
    X.Ck = function () {
      Rt
        ? ((X.yc = Uint8Array),
          (X.Pb = Uint16Array),
          (X.ii = Int32Array),
          X.assign(X, St))
        : ((X.yc = Array), (X.Pb = Array), (X.ii = Array), X.assign(X, Tt));
    };
    X.Ck();
    var Ut = !0;
    try {
      new Uint8Array(1);
    } catch (a) {
      Ut = !1;
    }
    for (var Vt = new X.yc(256), Wt = 0; 256 > Wt; Wt++)
      Vt[Wt] =
        252 <= Wt
          ? 6
          : 248 <= Wt
          ? 5
          : 240 <= Wt
          ? 4
          : 224 <= Wt
          ? 3
          : 192 <= Wt
          ? 2
          : 1;
    Vt[254] = Vt[254] = 1;
    var bs = function (a) {
      var b,
        c,
        d = a.length,
        e = 0;
      for (b = 0; b < d; b++) {
        var f = a.charCodeAt(b);
        if (55296 === (f & 64512) && b + 1 < d) {
          var g = a.charCodeAt(b + 1);
          56320 === (g & 64512) &&
            ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++);
        }
        e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4;
      }
      var h = new X.yc(e);
      for (b = c = 0; c < e; b++)
        (f = a.charCodeAt(b)),
          55296 === (f & 64512) &&
            b + 1 < d &&
            ((g = a.charCodeAt(b + 1)),
            56320 === (g & 64512) &&
              ((f = 65536 + ((f - 55296) << 10) + (g - 56320)), b++)),
          128 > f
            ? (h[c++] = f)
            : (2048 > f
                ? (h[c++] = 192 | (f >>> 6))
                : (65536 > f
                    ? (h[c++] = 224 | (f >>> 12))
                    : ((h[c++] = 240 | (f >>> 18)),
                      (h[c++] = 128 | ((f >>> 12) & 63))),
                  (h[c++] = 128 | ((f >>> 6) & 63))),
              (h[c++] = 128 | (f & 63)));
      return h;
    };
    var Kr = {};
    Kr = function (a, b, c, d) {
      var e = (a & 65535) | 0;
      a = ((a >>> 16) & 65535) | 0;
      for (var f; 0 !== c; ) {
        f = 2e3 < c ? 2e3 : c;
        c -= f;
        do (e = (e + b[d++]) | 0), (a = (a + e) | 0);
        while (--f);
        e %= 65521;
        a %= 65521;
      }
      return e | (a << 16) | 0;
    };
    for (var Lr = {}, Xt, Yt = [], Zt = 0; 256 > Zt; Zt++) {
      Xt = Zt;
      for (var $t = 0; 8 > $t; $t++)
        Xt = Xt & 1 ? 3988292384 ^ (Xt >>> 1) : Xt >>> 1;
      Yt[Zt] = Xt;
    }
    Lr = function (a, b, c, d) {
      c = d + c;
      for (a ^= -1; d < c; d++) a = (a >>> 8) ^ Yt[(a ^ b[d]) & 255];
      return a ^ -1;
    };
    var Ar = {};
    Ar = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    };
    var pr = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ],
      sr = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ],
      as = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      Er = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      Fr = Array(576);
    br(Fr);
    var Gr = Array(60);
    br(Gr);
    var rr = Array(512);
    br(rr);
    var or = Array(256);
    br(or);
    var qr = Array(29);
    br(qr);
    var tr = Array(30);
    br(tr);
    var Yr,
      Zr,
      $r,
      Xr = !1;
    var Tr;
    Tr = [
      new Rr(0, 0, 0, 0, function (a, b) {
        var c = 65535;
        for (c > a.yb - 5 && (c = a.yb - 5); ; ) {
          if (1 >= a.R) {
            Mr(a);
            if (0 === a.R && 0 === b) return 1;
            if (0 === a.R) break;
          }
          a.L += a.R;
          a.R = 0;
          var d = a.kb + c;
          if (0 === a.L || a.L >= d)
            if (((a.R = a.L - d), (a.L = d), Hr(a, !1), 0 === a.ea.ga))
              return 1;
          if (a.L - a.kb >= a.Ra - 262 && (Hr(a, !1), 0 === a.ea.ga)) return 1;
        }
        a.fb = 0;
        if (4 === b) return Hr(a, !0), 0 === a.ea.ga ? 3 : 4;
        a.L > a.kb && Hr(a, !1);
        return 1;
      }),
      new Rr(4, 4, 8, 4, Nr),
      new Rr(4, 5, 16, 8, Nr),
      new Rr(4, 6, 32, 32, Nr),
      new Rr(4, 4, 16, 16, Or),
      new Rr(8, 16, 32, 32, Or),
      new Rr(8, 16, 128, 128, Or),
      new Rr(8, 32, 128, 256, Or),
      new Rr(32, 128, 258, 1024, Or),
      new Rr(32, 258, 258, 4096, Or),
    ];
    var Wr = {};
    Wr = function () {
      this.input = null;
      this.Nc = this.Ta = this.Mc = 0;
      this.Fd = null;
      this.rg = this.ga = this.fd = 0;
      this.msg = "";
      this.state = null;
      this.kf = 2;
      this.ba = 0;
    };
    var cs = Object.prototype.toString;
    Vr.prototype.push = function (a, b) {
      var c = this.ea,
        d = this.options.Ti;
      if (this.ended) return !1;
      var e = b === ~~b ? b : !0 === b ? 4 : 0;
      "string" === typeof a
        ? (c.input = bs(a))
        : "[object ArrayBuffer]" === cs.call(a)
        ? (c.input = new Uint8Array(a))
        : (c.input = a);
      c.Mc = 0;
      c.Ta = c.input.length;
      do {
        0 === c.ga && ((c.Fd = new X.yc(d)), (c.fd = 0), (c.ga = d));
        a = Ur(c, e);
        if (1 !== a && 0 !== a) return this.xb(a), (this.ended = !0), !1;
        if (0 === c.ga || (0 === c.Ta && (4 === e || 2 === e)))
          if ("string" === this.options.fi) {
            var f = X.ng(c.Fd, c.fd);
            b = f;
            f = f.length;
            if (65537 > f && ((b.subarray && Ut) || !b.subarray))
              b = String.fromCharCode.apply(null, X.ng(b, f));
            else {
              for (var g = "", h = 0; h < f; h++)
                g += String.fromCharCode(b[h]);
              b = g;
            }
            this.vd.push(b);
          } else (b = X.ng(c.Fd, c.fd)), this.vd.push(b);
      } while ((0 < c.Ta || 0 === c.ga) && 1 !== a);
      if (4 === e)
        return (
          (c = this.ea) && c.state
            ? ((d = c.state.status),
              42 !== d &&
              69 !== d &&
              73 !== d &&
              91 !== d &&
              103 !== d &&
              113 !== d &&
              666 !== d
                ? (a = Br(c, -2))
                : ((c.state = null), (a = 113 === d ? Br(c, -3) : 0)))
            : (a = -2),
          this.xb(a),
          (this.ended = !0),
          0 === a
        );
      2 === e && (this.xb(0), (c.ga = 0));
      return !0;
    };
    Vr.prototype.xb = function (a) {
      0 === a &&
        (this.result =
          "string" === this.options.fi ? this.vd.join("") : X.Zg(this.vd));
      this.vd = [];
      this.pf = a;
      this.msg = this.ea.msg;
    };
    var Lt = function () {};
    Lt.prototype.ub = function () {
      try {
        return !!Uint8Array.from;
      } catch (a) {
        return !1;
      }
    };
    var bu = function () {
        this.g = au();
      },
      au = function () {
        return Qt(
          Kt(
            Mt(
              Ot(
                Pt(
                  Nt(function () {
                    return null;
                  })
                )
              )
            )
          )
        );
      };
    bu.prototype.log = function (a) {
      var b = this.g;
      if (a instanceof rt) b.log(a);
      else {
        var c = new rt();
        a = hs(a);
        c = _.H(c, 8, a);
        b.log(c);
      }
    };
    var cu = new bu();
    var du = function (a) {
      _.I.call(this, a);
    };
    _.x(du, _.I);
    var eu = function (a) {
      _.I.call(this, a);
    };
    _.x(eu, _.I);
    var gu = function (a) {
      _.I.call(this, a, -1, fu);
    };
    _.x(gu, _.I);
    _.k = gu.prototype;
    _.k.lb = function () {
      return _.Hh(this, 16);
    };
    _.k.rc = function (a) {
      _.H(this, 16, a);
    };
    _.k.oa = function () {
      return _.Hh(this, 1);
    };
    _.k.ta = function (a) {
      _.H(this, 1, a);
    };
    _.k.hh = function () {
      return _.Hh(this, 53);
    };
    var fu = [26, 80];
    for (var hu, iu = Array(36), ju = 0, ku, lu = 0; 36 > lu; lu++)
      8 == lu || 13 == lu || 18 == lu || 23 == lu
        ? (iu[lu] = "-")
        : 14 == lu
        ? (iu[lu] = "4")
        : (2 >= ju && (ju = (33554432 + 16777216 * Math.random()) | 0),
          (ku = ju & 15),
          (ju >>= 4),
          (iu[lu] = _.vl[19 == lu ? (ku & 3) | 8 : ku]));
    hu = iu.join("");
    var mu = function (a) {
        a = void 0 === a ? {} : a;
        this.Ff = void 0 === a.Ff ? hu : a.Ff;
        this.Od = this.Nd = null;
      },
      qu = function (a) {
        var b = nu(a, 7);
        ou(a, b);
        pu(b);
      },
      nu = function (a, b) {
        var c = new gu();
        c = _.H(c, 50, _.S);
        var d = new du();
        b = _.H(d, 1, b);
        b = _.H(b, 2, _.hl);
        a = _.H(b, 3, a.Ff);
        return _.Jh(c, 112, a);
      },
      pu = function (a) {
        var b = new rt();
        a = hs(a);
        b = _.H(b, 8, a);
        cu.log(b);
      },
      ou = function (a, b) {
        b.rc(a.Nd);
        b.ta(a.Od);
      };
    var ru = _.ul(mu),
      su = function (a, b, c, d, e, f, g, h, l, m, n) {
        _.A.call(this);
        this.xa = b || null;
        this.J = !!c;
        this.Sc = d || "transparent";
        this.H = f || "";
        b = g || { fetchStart: 0, cm: 0 };
        a = b.fetchStart || 0;
        b = b.fetchEnd || 0;
        this.F = a && b ? b - a : 0;
        this.N = Date.now() - _.fl;
        this.o = !1;
        this.g = new _.$l(e || "", void 0, f, l, m, n);
        this.M = new _.im(1);
        this.s = new _.Ep();
        this.h = null;
        this.B = !0;
        this.j = null != _.r.IntersectionObserver;
        this.D = h || null;
        this.G = new _.F(this);
        e = new _.xl();
        f = new _.zl((0, _.y)(this.g.initialize, this.g, e.register()));
        this.Td = _.Al(f, e.delay((0, _.y)(this.Td, this)));
        this.Sd = _.Al(f, e.delay((0, _.y)(this.Sd, this)));
        this.Ud = _.Al(f, e.delay((0, _.y)(this.Ud, this)));
        this.restore = _.Al(f, e.delay((0, _.y)(this.restore, this)));
        f.finish();
        e.finish();
        e = nu(ru, 1);
        f = new eu();
        f = _.H(f, 1, window.location.origin);
        h = _.Ih(e, du, 112);
        _.Jh(h, 4, f);
        pu(e);
        performance &&
          performance.mark &&
          performance.mark("translate:initialized", void 0);
      };
    _.z(su, _.A);
    _.Kl.attach(14097, su.prototype, {
      Lf: function () {
        _.si(this.g.ub() ? "te_afas" : "te_afau");
      },
    });
    _.k = su.prototype;
    _.k.Bk = function (a) {
      this.j = a;
    };
    _.k.Xa = function () {
      return this.g.ub();
    };
    _.k.Td = function (a, b) {
      this.g.Xa() ? this.g.l.send(_.wi(b), a) : (this.Lf(), a(null));
    };
    _.k.Sd = function (a) {
      var b = document.documentElement.lang;
      if (b) a(b);
      else if (this.g.Xa()) {
        b = new _.pm(document.body, !1, !1, 1, 1);
        for (var c = [], d = 0, e = this.g.h.Nf; c.length + d < e; ) {
          var f = b.next();
          if (f.done) break;
          f = f.value;
          1 == b.g && _.bq(f)
            ? _.qm(b)
            : 3 == f.nodeType &&
              (f = (0, _.Sb)(_.hj(f.nodeValue))) &&
              (c.push(f), (d += f.length));
        }
        _.am(this.g, a, c.join(" "));
      } else this.Lf(), a(null, !0);
    };
    _.k.Ud = function (a, b, c, d, e) {
      ru.Nd = a;
      ru.Od = b;
      var f = nu(ru, 2);
      ou(ru, f);
      pu(f);
      f = { detail: { sourceLanguage: a, targetLanguage: b } };
      performance &&
        performance.mark &&
        performance.mark("translate:initiated", f);
      f = Date.now();
      ks();
      if (!a || Ns(a, b)) a = "auto";
      if (e || a != this.l || b != this.V) this.s = new _.Ep();
      this.l = a;
      this.V = b;
      this.g.Xa()
        ? ((d = d || document.documentElement),
          this.h && this.h.O(),
          this.D.reset(),
          (this.h = new _.Dq(
            d,
            this.g,
            this.xa,
            this.J,
            this.Sc,
            !0,
            this.M,
            this.s,
            this.j,
            this.D
          )),
          (this.h.ua = this.o),
          (this.B = !0),
          this.h.translate(a, b, c, e, (0, _.y)(this.ak, this, f, a, b)))
        : (this.Lf(), c(0, !1, !0));
    };
    _.k.ti = function () {
      return !!this.h && this.h.g;
    };
    _.k.Dg = function (a) {
      this.o = a;
    };
    _.k.restore = function () {
      var a = nu(ru, 3);
      ou(ru, a);
      pu(a);
      performance &&
        performance.mark &&
        performance.mark("translate:restored", void 0);
      ks();
      this.g.Xa() && this.h && this.h.restore();
    };
    _.k.K = function () {
      js();
      su.P.K.call(this);
      this.g.O();
      this.h = this.g = null;
      this.s = new _.Ep();
    };
    _.k.ak = function (a, b, c, d) {
      this.B &&
        ((this.B = !1),
        (b = { sl: b, tl: c, textlen: d }),
        this.o && (b.ctt = "1"),
        "" != this.H && (b.sp = this.H),
        (b.ttt = Date.now() - a),
        (b.ttl = this.N),
        this.F && (b.ttf = this.F),
        this.j && (b.sr = 1),
        _.si("te_time", b));
    };
    var tu = function (a) {
      _.N.call(this, a);
      this.G = new _.F(this);
    };
    _.x(tu, _.N);
    tu.prototype.S = function () {
      var a = _.nh(this.g, "select");
      a.className = "goog-te-combo";
      a.setAttribute("aria-label", _.T.Eg);
      this.za(a);
    };
    tu.prototype.ka = function () {
      _.N.prototype.ka.call(this);
      this.Wg();
    };
    tu.prototype.Wg = function () {
      _.D(this.A(), "change", _.Dl(this, "change"));
      this.dispatchEvent("load");
    };
    tu.prototype.ia = function () {
      _.N.prototype.ia.call(this);
      this.G.O();
      this.G = null;
    };
    var uu = function (a, b) {
      a.A().parentNode != b &&
        (a.A().parentNode.removeChild(a.A()), b.appendChild(a.A()));
    };
    _.k = tu.prototype;
    _.k.Ld = function (a) {
      this.g.Yf(this.A());
      for (var b in a)
        if (a[b] !== Object.prototype[b]) {
          var c = this.g.S("OPTION", { value: b });
          this.g.sc(c, a[b]);
          this.A().appendChild(c);
        }
      this.A().selectedIndex = 0;
    };
    _.k.Fa = function () {
      return this.A().value;
    };
    _.k.pb = function (a) {
      if (this.A().value != a)
        for (var b = 0, c; (c = this.A().options.item(b)); ++b)
          if (c.value == a) {
            this.A().selectedIndex = b;
            break;
          }
    };
    _.k.Vd = function (a) {
      if ("undefined" == _.kb(a))
        return this.A().options.item(this.A().selectedIndex).text;
      for (var b = 0, c; (c = this.A().options.item(b)); ++b)
        if (c.value == a) return c.text;
    };
    _.k.nb = function (a) {
      this.A().disabled = !a;
    };
    var vu = function (a) {
      tu.call(this, a);
    };
    _.x(vu, tu);
    vu.prototype.Md = function (a) {
      this.Ld.call(this, a);
    };
    var wu = function (a, b) {
      tu.call(this, b);
      this.C = (a && _.ci(a)) || {};
      this.C.dg = this.C.dg || 11;
      this.C.Je = 0 != this.C.Je;
      this.C.Fb || (this.C.Fb = _.pl);
    };
    _.x(wu, tu);
    _.k = wu.prototype;
    _.k.ee = function () {
      throw Error("Ma");
    };
    _.k.S = function () {
      this.ee();
      this.s = this.A();
      this.l = _.pj("IFRAME", {
        frameBorder: 0,
        class: "goog-te-menu-frame skiptranslate",
        title: _.T.Eg,
      });
      this.l.style.visibility = "visible";
      _.Q(this.l, !1);
      document.body.appendChild(this.l);
    };
    _.k.Wg = function () {
      var a = _.qf.test(_.S) ? "rtl" : "ltr",
        b = _.Fb(this.C.Fb),
        c = _.U(this, "menuBody");
      this.G.I(this.l, "load", this.ui);
      Ms(
        this.l,
        (0, _.y)(function () {
          var d = _.uj(this.l);
          var e = (0, _.M)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.R(Is(b)) +
              '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' +
              _.R(a) +
              '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' +
              _.R(c) +
              '" class="goog-te-menu"></div></body>'
          );
          e = _.li(e);
          d.write(_.Jc(e));
          d.close();
        }, this)
      );
    };
    _.k.ui = function () {
      this.h = new _.Tc(_.uj(this.l));
      this.N = this.h.A(_.U(this, "menuBody"));
      this.G.I(this.s, "click", this.vf);
      _.C
        ? this.G.I(this.l, "blur", this.me)
        : this.G.I(ps(this.l), "blur", this.me);
      this.dispatchEvent("load");
    };
    _.k.ia = function () {
      tu.prototype.ia.call(this);
      _.sj(this.l);
      this.s = this.Y = this.o = this.N = this.h = this.l = null;
    };
    _.k.oh = function (a) {
      this.ab != a.currentTarget.value &&
        (this.pb(a.currentTarget.value), this.dispatchEvent("change"));
      this.me();
    };
    _.k.vf = function () {
      xu(this);
      ps(this.l).focus();
      this.na = !0;
    };
    _.k.me = function () {
      this.na && ((this.na = !1), xu(this, !1), _.ad(_.Uc(this.s)).focus());
    };
    _.k.Zf = function () {};
    _.k.ag = function () {};
    var xu = function (a, b) {
      if ("undefined" == typeof b || b) {
        a.ag();
        b = _.ok(a.s, window);
        var c = b.y + a.s.offsetHeight,
          d = b.y - a.F.height,
          e = b.x,
          f = b.x + a.s.offsetWidth - a.F.width;
        if (_.C && !_.rc("7.0")) {
          var g = document.body;
          c -= g.offsetTop;
          d -= g.offsetTop;
          e -= g.offsetLeft;
          f -= g.offsetLeft;
        } else
          (g = _.Ji(document)), (c -= g.y), (d -= g.y), (e -= g.x), (f -= g.x);
        g = _.$c(window);
        b.y = b.y <= g.height - a.F.height ? c : d;
        b.y > g.height - a.F.height && (b.y = g.height - a.F.height);
        0 > b.y && (b.y = 0);
        _.qf.test(_.S)
          ? (b.x = 0 <= f ? f : e)
          : (b.x = e <= g.width - a.F.width ? e : f);
        b.x > g.width - a.F.width && (b.x = g.width - a.F.width);
        0 > b.x && (b.x = 0);
        _.ik(a.l, b);
        _.Q(a.l, !0);
        yu(a);
      } else a.Zf(), _.Q(a.l, !1);
    };
    _.k = wu.prototype;
    _.k.Fa = function () {
      return this.ab;
    };
    _.k.Ld = function (a) {
      this.h.Yf(this.N);
      _.Q(this.l, !0);
      this.ua = a;
      this.o = [];
      for (var b in a)
        if (a[b] !== Object.prototype[b])
          if ("---" == a[b]) {
            var c = {
              link: this.h.S("DIV", {
                className: "goog-te-menu2-separator",
                value: b,
              }),
              Oj: !0,
            };
            this.o.push(c);
          } else {
            c = {
              link: this.h.S("A", {
                className: "goog-te-menu2-item-selected",
                href: "javascript:void(0)",
                value: b,
              }),
            };
            this.o.push(c);
            var d = this.h.S("DIV", { style: "white-space:nowrap" });
            this.h.appendChild(c.link, d);
            this.C.Je &&
              this.h.appendChild(
                d,
                this.h.S("SPAN", { className: "indicator" }, "\u203a")
              );
            this.h.appendChild(
              d,
              this.h.S("SPAN", { className: "text" }, a[b])
            );
            this.G.I(c.link, "click", this.oh);
          }
      a = this.o.length - 1;
      a = Math.round((a - (a % this.C.dg)) / this.C.dg) + 1;
      this.Y = this.h.S("TABLE", { cellspacing: 0, cellpadding: 0, border: 0 });
      c = this.h.S("TBODY");
      b = this.h.S("TR", { valign: "top" });
      this.N.className = "goog-te-menu2";
      this.h.appendChild(this.N, this.Y);
      this.h.appendChild(this.Y, c);
      this.h.appendChild(c, b);
      for (d = c = 0; c < a; ++c) {
        var e = this.h.S("TD");
        this.h.appendChild(b, e);
        for (var f = 0; 11 > f && d < this.o.length; ++f, ++d)
          this.h.appendChild(e, this.o[d].link);
        c != a - 1 &&
          ((e = this.h.S("TD", { class: "goog-te-menu2-colpad" }, "\u00a0")),
          this.h.appendChild(b, e));
      }
      this.ab = null;
      this.pb(this.o[0].link.value);
      yu(this);
      _.Q(this.l, !1);
    };
    _.k.Vd = function (a) {
      return this.ua["undefined" == _.kb(a) ? this.ab : a];
    };
    _.k.bg = function () {};
    _.k.pb = function (a) {
      if (this.ab != a) {
        this.Vd(a) && ((this.ab = a), this.bg());
        for (var b = 0; b < this.o.length; ++b) {
          var c = this.o[b];
          c.Oj ||
            (c.link.className =
              c.link.value == a && this.C.Je
                ? "goog-te-menu2-item-selected"
                : "goog-te-menu2-item");
        }
      }
    };
    var yu = function (a) {
        Fs(a.N, Es(a.Y));
        Fs(a.l, Es(a.N));
        a.F = Es(a.l);
      },
      zu = function (a, b) {
        wu.call(this, a, b);
      };
    _.x(zu, wu);
    _.k = zu.prototype;
    _.k.ee = function () {
      var a = this.g.S("a", { "aria-haspopup": "true" });
      a.className = "goog-te-menu-value";
      a.href = "javascript:void(0)";
      this.J = this.g.S("SPAN");
      a.appendChild(this.J);
      this.U = this.g.S("IMG", {
        src: "https://www.google.com/images/cleardot.gif",
        alt: "",
        style:
          "background-image:url(" +
          _.ll +
          ");background-position:-14px 0px;border:none",
        width: 14,
        height: 14,
      });
      a.appendChild(this.U);
      this.za(a);
    };
    _.k.Zf = function () {
      _.J(this.U, "backgroundPosition", "-14px 0px");
    };
    _.k.ag = function () {
      _.J(this.U, "backgroundPosition", "0px 0px");
    };
    _.k.ia = function () {
      wu.prototype.ia.call(this);
      this.U = this.J = null;
    };
    _.k.bg = function () {
      this.g.sc(this.J, this.Vd(this.ab) || "");
    };
    _.k.Md = function (a) {
      this.Ld.call(this, a);
    };
    var Au = function (a, b) {
      wu.call(this, a, b);
    };
    _.x(Au, wu);
    _.k = Au.prototype;
    _.k.ee = function () {
      var a = this.g.S("a", { "aria-haspopup": "true" });
      a.className = "goog-te-menu-value";
      a.href = "javascript:void(0)";
      this.J = this.g.S("SPAN");
      a.appendChild(this.J);
      a.appendChild(
        this.g.S("IMG", {
          src: "https://www.google.com/images/cleardot.gif",
          alt: "",
          width: 1,
          height: 1,
        })
      );
      a.appendChild(
        this.g.S("SPAN", { style: "border-left:1px solid #bbb" }, "\u200b")
      );
      a.appendChild(
        this.g.S("IMG", {
          src: "https://www.google.com/images/cleardot.gif",
          alt: "",
          width: 1,
          height: 1,
        })
      );
      this.U = this.g.S(
        "span",
        { style: "color:#767676", "aria-hidden": "true" },
        "\u25bc"
      );
      a.appendChild(this.U);
      this.za(a);
    };
    _.k.Zf = function () {
      _.J(this.U, "color", "#9b9b9b");
    };
    _.k.ag = function () {
      _.J(this.U, "color", "#d5d5d5");
    };
    _.k.ia = function () {
      wu.prototype.ia.call(this);
      this.U = this.J = null;
    };
    _.k.bg = function () {
      this.g.sc(this.J, this.Vd(this.ab) || "");
    };
    _.k.Md = function (a) {
      this.Ld.call(this, a);
    };
    var Bu = function (a, b) {
      wu.call(this, a, b);
      this.C.Je = !1;
    };
    _.x(Bu, wu);
    Bu.prototype.ee = function () {
      var a = _.nh(this.g, "div");
      a.className = "goog-te-button";
      var b = this.g.S("DIV", {
        style: "background: url(" + _.kl + ") repeat-x 0 -39px",
      });
      a.appendChild(b);
      this.J = _.nh(this.g, "button");
      b.appendChild(this.J);
      this.za(a);
    };
    Bu.prototype.Yh = function (a) {
      _.ed(this.J);
      this.J.appendChild(this.g.T.createTextNode(String(a + "\u00a0\u25bc")));
    };
    Bu.prototype.ia = function () {
      wu.prototype.ia.call(this);
      this.J = null;
    };
    Bu.prototype.oh = function (a) {
      this.pb(a.currentTarget.value);
      this.dispatchEvent("change");
      this.me();
    };
    var Cu = function () {
      this.h = {};
      this.g = 0;
    };
    Cu.prototype.j = function (a, b) {
      a = this.h[b];
      if (!a) return b;
      b = "";
      a.og && (b += "<" + a.og + a.attributes + ">");
      a.Df && (b += a.Df);
      a.nf && (b += "</" + a.nf + ">");
      return b;
    };
    Cu.prototype.og = function (a, b) {
      _.$i(a);
      return Du(this, { og: a, attributes: _.dj(b) });
    };
    Cu.prototype.nf = function (a) {
      _.$i(a);
      return Du(this, { nf: a });
    };
    Cu.prototype.text = function (a) {
      return Du(this, { Df: _.jj(a) });
    };
    var Du = function (a, b) {
      a.g++;
      var c = "{SafeHtmlFormatter:" + a.g + "_" + _.Sc() + "}";
      a.h[_.jj(c)] = b;
      return c;
    };
    var Eu = function (a, b) {
      _.N.call(this, b);
      this.C = (a && _.ci(a)) || {};
      this.G = new _.F(this);
    };
    _.z(Eu, _.N);
    var Fu = { Vl: 0, ol: 1, Kl: 2 };
    _.k = Eu.prototype;
    _.k.S = function () {
      var a = _.nh(this.g, "div");
      _.mn(a, "skiptranslate");
      _.mn(a, "goog-te-gadget");
      a.dir = _.qf.test(_.S) ? "rtl" : "ltr";
      _.Q(a, !1);
      if (2 == this.C.Kc) {
        var b = Us({ id: _.U(this, "targetLanguage"), Rh: "", Qh: "" });
        _.pi(a, _.ni(b));
      } else {
        b = new Cu();
        var c = _.wm({
            yh: _.C && !_.rc("7.0"),
            bd: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
            Fh: "https://translate.google.com",
          }),
          d = _.T,
          e = d.Ig;
        c = _.li(c);
        c = Du(b, { Df: _.Jc(c).toString() });
        d = e.call(d, c);
        e = _.jj("SafeHtmlFormatter:");
        b = _.jj(d).replace(
          new RegExp("\\{" + e + "[\\w&#;]+\\}", "g"),
          (0, _.y)(b.j, b, [])
        );
        b = _.Kc(b);
        b = Us({
          id: _.U(this, "targetLanguage"),
          Rh: "",
          Qh: 1 == this.C.Kc ? _.bj("\u00a0", "\u00a0", b) : b,
        });
        _.pi(a, _.ni(b));
      }
      this.za(a);
    };
    _.k.ka = function () {
      Eu.P.ka.call(this);
      this.l = 2 == this.C.Kc ? new Au(null, this.g) : new vu(this.g);
      this.G.I(this.l, "change", _.Dl(this, "chg_tgt_lang"));
      this.G.I(this.l, "load", this.vi);
      var a = this.g.A(_.U(this, "targetLanguage"));
      if (2 == this.C.Kc) {
        var b = this.g.S("IMG", {
          src: "https://www.google.com/images/cleardot.gif",
          class: "goog-te-gadget-icon",
          alt: "",
        });
        b.style.backgroundImage = "url(" + _.ll + ")";
        b.style.backgroundPosition = "-65px 0px";
        var c = this.g.S("SPAN", { style: "vertical-align: middle" });
        a.appendChild(b);
        a.appendChild(c);
        this.l.Ba(c);
        a.style.whiteSpace = "nowrap";
        a.className = "goog-te-gadget-simple";
      } else this.l.Ba(a), 1 == this.C.Kc && (a.style.display = "inline");
    };
    _.k.vi = function () {
      if (2 == this.C.Kc) {
        var a = this.l,
          b = this.g.A(_.U(this, "targetLanguage"));
        a.G.Ab(a.s, "click", a.vf);
        a.s = b;
        a.G.I(a.s, "click", a.vf);
      }
      this.dispatchEvent("load");
    };
    _.k.ia = function () {
      Eu.P.ia.call(this);
      this.G.O();
      this.G = null;
      this.l.O();
      this.l = null;
    };
    _.k.oa = function () {
      return this.l.Fa();
    };
    _.k.Nb = function (a) {
      this.l.Md(a);
    };
    _.k.ta = function (a) {
      "" == a ? this.N && this.Nb(this.N) : this.J && this.Nb(this.J);
      this.l.pb(a);
    };
    _.k.X = function (a) {
      _.Q(this.A(), a);
    };
    _.k.nb = function (a) {
      this.l.nb(a);
    };
    _.k.kg = function (a, b) {
      this.N = a;
      this.J = b;
    };
    var Gu = function (a, b) {
      _.N.call(this, b);
      this.C = (a && _.ci(a)) || {};
      this.C.Fb || (this.C.Fb = _.pl);
      this.G = new _.F(this);
    };
    _.z(Gu, _.N);
    var Hu = { Pl: 1, Ql: 2, Yk: 3, Xk: 4 };
    _.k = Gu.prototype;
    _.k.S = function () {
      var a = _.nh(this.g, "div");
      this.Hb = !1;
      _.Q(a, !1);
      var b = _.U(this, "container");
      b = (0, _.M)(
        '<iframe id="' +
          _.R(b) +
          '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>'
      );
      _.pi(a, _.ni(b));
      this.za(a);
    };
    _.k.ka = function () {
      Gu.P.ka.call(this);
      var a = _.qf.test(_.S) ? "rtl" : "ltr",
        b = _.Fb(this.C.Fb),
        c = _.U(this, "translate");
      this.A().id = _.U(this, "floatContainer");
      var d = { id: this.A().id, className: "goog-te-ftab-float" };
      this.A().className += " goog-te-ftab-float";
      switch (this.C.je) {
        case 2:
          var e = "goog-float-top";
          d.top = 0;
          d.right = 20;
          break;
        case 3:
          e = "goog-float-bottom";
          d.bottom = 0;
          d.right = 20;
          break;
        case 4:
          e = "goog-float-bottom";
          d.bottom = 0;
          d.left = 20;
          break;
        default:
          (e = "goog-float-top"), (d.top = 0), (d.left = 20);
      }
      Ds(ms(new _.xf(), d), this.A());
      this.s = this.g.A(_.U(this, "container"));
      this.G.I(this.s, "load", this.wi);
      Ms(
        this.s,
        (0, _.y)(function () {
          var f = _.uj(this.s);
          var g = e;
          var h = _.T.Ze;
          g = (0, _.M)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.R(Is(b)) +
              '"></head><body class="goog-te-ftab ' +
              _.R(g) +
              '" scroll="no" style="overflow:hidden" dir="' +
              _.R(a) +
              '"><a id="' +
              _.R(c) +
              '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' +
              _.R(_.Xk("https://www.google.com/images/cleardot.gif")) +
              '" style="background-image:url(' +
              _.R(_.Xk(_.ll)) +
              ');background-position:-65px 0px"><span>' +
              _.Pk(h) +
              "</span></a></body>"
          );
          g = _.li(g);
          f.write(_.Jc(g));
          f.close();
        }, this)
      );
    };
    _.k.wi = function () {
      this.h = new _.Tc(_.uj(this.s)).A(_.U(this, "translate"));
      this.G.I(this.h, "click", _.Dl(this, "clk_trans"));
      _.Q(this.A(), !0);
      var a = Es(this.h);
      _.Q(this.A(), !1);
      Fs(this.s, a);
      Fs(this.A(), a);
      this.dispatchEvent("load");
    };
    _.k.ia = function () {
      Gu.P.ia.call(this);
      this.G.O();
      this.G = null;
      _.sj(this.s);
      this.h = this.s = null;
    };
    _.k.isVisible = function () {
      return this.Hb;
    };
    _.k.X = function (a) {
      this.Hb = a;
      _.Q(this.A(), a);
    };
    var Iu = function (a, b) {
      _.N.call(this, b);
      this.G = new _.F(this);
      this.C = (a && _.ci(a)) || {};
      this.C.Fb || (this.C.Fb = _.pl);
      this.C.mg = !1;
      _.J(this.g.T.body, "position", "relative");
      _.Gg || _.J(this.g.T.body, "minHeight", "100%");
      _.J(this.g.T.documentElement, "height", "100%");
      _.J(this.g.T.body, "top", "0px");
      _.C &&
        ((window._bannerquirkfixleft = -parseInt(
          "0" + this.g.T.body.leftMargin,
          10
        )),
        (window._bannerquirkfixtop =
          -parseInt("0" + this.g.T.body.topMargin, 10) - 40));
    };
    _.z(Iu, _.N);
    _.k = Iu.prototype;
    _.k.Ba = function () {
      var a = this.g.T.body.firstChild;
      _.Gm(this, a.parentNode, a);
    };
    _.k.S = function () {
      var a = _.nh(this.g, "div");
      this.Hb = !1;
      _.Q(a, !1);
      _.mn(a, "skiptranslate");
      var b = _.U(this, "container");
      b = (0, _.M)(
        '<iframe id="' +
          _.R(b) +
          '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>'
      );
      _.pi(a, _.ni(b));
      this.za(a);
    };
    _.k.ka = function () {
      Iu.P.ka.call(this);
      var a = _.qf.test(_.S) ? "rtl" : "ltr",
        b = _.Fb(this.C.Fb),
        c = _.U(this, "promptSection"),
        d = _.U(this, "confirm"),
        e = _.U(this, "progressSection"),
        f = _.U(this, "progressValue"),
        g = _.U(this, "cancel"),
        h = _.U(this, "finishSection"),
        l = _.U(this, "restore"),
        m = _.U(this, "errorSection"),
        n = _.U(this, "errorContent"),
        p = _.U(this, "close"),
        t = _.U(this, "noAutoPopup"),
        q,
        w = [];
      this.C.mg && w.push(Ts({ id: _.U(this, "promptSourceLang") }));
      w.push(Ts({ id: _.U(this, "promptTargetLang") }));
      var K = _.Kc(_.T.Oi.apply(null, w));
      w = [];
      this.C.mg && w.push(Ts({ id: _.U(this, "finishSourceLang") }));
      w.push(Ts({ id: _.U(this, "finishTargetLang") }));
      var L = _.Kc(_.T.Ji.apply(null, w));
      this.C.ci && (q = this.C.ci);
      this.s = this.g.A(_.U(this, "container"));
      this.G.I(this.s, "load", this.xi);
      Ms(
        this.s,
        (0, _.y)(function () {
          var Ca = _.uj(this.s);
          var ha = q;
          var ge = _.T.Qc,
            bw = _.T.Ze,
            cw = _.T.Li,
            dw = _.T.Ne,
            ew = _.T.Jg,
            fw = _.T.wg,
            gw = _.T.wg;
          ha = (0, _.M)(
            '<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
              _.R(Is(b)) +
              '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' +
              _.R(a) +
              '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' +
              _.R(_.Vk("https://translate.google.com")) +
              '" class="goog-logo-link" target="_blank"><img src="' +
              _.R(
                _.Xk(
                  "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png"
                )
              ) +
              '" alt="Google ' +
              _.R(ge) +
              '"></a></td>' +
              (ha
                ? '<td width=1><img src="' +
                  _.R(_.Xk("https://www.google.com/images/cleardot.gif")) +
                  '" width="9" height="15" title="' +
                  _.R(ha) +
                  '" alt="' +
                  _.R(ha) +
                  '" style="background-image:url(' +
                  _.R(_.Xk(_.ll)) +
                  ');background-position:-56px 0px;margin:0 4px"></td>'
                : "") +
              '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' +
              _.R(c) +
              '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' +
              _.Pk(K) +
              '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.R(d) +
              '"><b>' +
              _.Pk(bw) +
              '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.R(t) +
              '"></button></div></div></td></tr><tr id="' +
              _.R(e) +
              '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' +
              _.Pk(cw) +
              '&nbsp;<span dir="ltr">(<b id="' +
              _.R(f) +
              '"></b>%)</span>&nbsp;<img src="' +
              _.R(_.Xk(_.nl)) +
              '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.R(g) +
              '">' +
              _.Pk(dw) +
              '</button></div></div></td></tr><tr id="' +
              _.R(h) +
              '" style="display:none"><td><span class="goog-te-banner-content">' +
              _.Pk(L) +
              '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' +
              _.R(l) +
              '">' +
              _.Pk(ew) +
              '</button></div></div></td></tr><tr id="' +
              _.R(m) +
              '" style="display:none" valign=middle><td><span id="' +
              _.R(n) +
              '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' +
              _.R(p) +
              '" class="goog-close-link" href="javascript:void(0)" title="' +
              _.R(fw) +
              '"><img src="' +
              _.R(_.Xk("https://www.google.com/images/cleardot.gif")) +
              '" width="15" height="15" alt="' +
              _.R(gw) +
              '" style="background-image:url(' +
              _.R(_.Xk(_.ll)) +
              ');background-position:-28px 0px"></a></td></tr></table></body>'
          );
          ha = _.li(ha);
          Ca.write(_.Jc(ha));
          Ca.close();
        }, this)
      );
    };
    _.k.xi = function () {
      this.h = new _.Tc(_.uj(this.s));
      Ju(this, _.T.yg);
      if (this.C.Fb == _.pl) {
        var a = "url(" + _.kl + ")";
        _.J(this.h.T.body, "backgroundImage", a);
        for (
          var b = this.h.T.getElementsByTagName("button"), c = 0;
          c < b.length;
          ++c
        ) {
          var d = b[c].parentNode;
          _.J(d, "backgroundImage", a);
          _.J(d, "backgroundRepeat", "repeat-x");
          _.J(d, "backgroundPosition", "0 -39px");
        }
      }
      this.C.mg && (this.o = new zu(this.C, this.h));
      this.l = new zu(this.C, this.h);
      this.F = new Bu(this.C, this.h);
      this.G.I(
        this.h.A(_.U(this, "confirm")),
        "click",
        _.Dl(this, "clk_confirm")
      );
      this.G.I(
        this.h.A(_.U(this, "cancel")),
        "click",
        _.Dl(this, "clk_cancel")
      );
      this.G.I(
        this.h.A(_.U(this, "restore")),
        "click",
        _.Dl(this, "clk_restore")
      );
      this.G.I(this.h.A(_.U(this, "close")), "click", _.Dl(this, "clk_close"));
      this.U = this.h.A(_.U(this, "noAutoPopup"));
      this.G.I(this.U, "click", _.Dl(this, "clk_no_ap"));
      this.o && this.G.I(this.o, "change", _.Dl(this, "chg_src_lang"));
      this.G.I(this.l, "change", _.Dl(this, "chg_tgt_lang"));
      this.G.I(this.F, "change", this.yj);
      a = new _.xl((0, _.y)(this.yi, this));
      this.o && this.G.I(this.o, "load", a.register());
      this.G.I(this.l, "load", a.register());
      this.G.I(this.F, "load", a.register());
      a.finish();
      this.o && this.o.Ba(this.h.A(_.U(this, "promptSourceLang")));
      this.l.Ba(this.h.A(_.U(this, "promptTargetLang")));
      this.F.Ba(this.h.A("options"));
    };
    _.k.yi = function () {
      this.F.Yh(_.T.Ci);
      this.F.Ld({ turn_off_site: _.T.Ni, s1: "---", learn_more: _.T.Bi });
      this.dispatchEvent("load");
    };
    _.k.yj = function () {
      switch (this.F.Fa()) {
        case "learn_more":
          window.open(_.tl, "_blank");
          break;
        case "turn_off_site":
          this.dispatchEvent("clk_no_ap_site");
      }
    };
    _.k.ia = function () {
      this.X(!1);
      Iu.P.ia.call(this);
      this.G.O();
      this.G = null;
      this.o && (this.o.O(), (this.o = null));
      this.l.O();
      this.l = null;
      this.F.O();
      this.F = null;
      _.sj(this.s);
      this.xd = this.h = null;
    };
    _.k.lb = function () {
      return this.o ? this.o.Fa() : "";
    };
    _.k.oa = function () {
      return this.l.Fa();
    };
    _.k.Nb = function (a) {
      this.l.Md(a);
    };
    _.k.rc = function (a) {
      this.o && this.o.pb(a);
      this.Y && this.Y[a] && this.h.sc(this.U, _.T.Mi(this.Y[a]));
    };
    _.k.ta = function (a) {
      this.l.pb(a);
    };
    var Ku = function (a, b, c, d) {
      if (a.xd != b) {
        a.xd = b;
        if (0 == b) {
          a.o && uu(a.o, a.h.A(_.U(a, "promptSourceLang")));
          if (a.N) {
            var e = a.oa();
            a.Nb(a.N);
            a.ta(e);
          }
          uu(a.l, a.h.A(_.U(a, "promptTargetLang")));
        } else
          2 == b &&
            (a.o && uu(a.o, a.h.A(_.U(a, "finishSourceLang"))),
            a.J && ((e = a.oa()), a.Nb(a.J), a.ta(e)),
            uu(a.l, a.h.A(_.U(a, "finishTargetLang"))));
        e = {};
        e[-1] = a.h.A(_.U(a, "errorSection"));
        e[0] = a.h.A(_.U(a, "promptSection"));
        e[1] = a.h.A(_.U(a, "progressSection"));
        e[2] = a.h.A(_.U(a, "finishSection"));
        for (var f in e) e[f] !== Object.prototype[f] && _.Q(e[f], f == b);
      }
      c && a.X(!0);
      a.U.parentNode.parentNode.style.display = d ? "block" : "none";
    };
    Iu.prototype.isVisible = function () {
      return this.Hb;
    };
    Iu.prototype.X = function (a) {
      if (this.Hb != a) {
        this.Hb = a;
        if (_.C)
          var b = parseInt("0" + this.g.T.body.leftMargin, 10),
            c = parseInt("0" + this.g.T.body.topMargin, 10);
        var d = "BackCompat" == this.g.T.compatMode;
        a
          ? (_.J(this.g.T.body, "top", "40px"),
            _.Q(this.A(), !0),
            _.C &&
              (_.rc("7.0")
                ? ((window._bannerquirkfixleft = window._bannerquirkfixtop = 0),
                  d && (this.g.T.body.topMargin = c + 40))
                : d
                ? ((this.g.T.body.topMargin = c + 40),
                  (window._bannerquirkfixleft = window._bannerquirkfixtop = 0))
                : ((window._bannerquirkfixleft = -b),
                  (window._bannerquirkfixtop = -c - 40))))
          : (_.J(this.g.T.body, "top", "0px"),
            _.Q(this.A(), !1),
            d && 40 <= c && (this.g.T.body.topMargin = c - 40));
      }
    };
    Iu.prototype.jg = function (a) {
      this.h.sc(this.h.A(_.U(this, "progressValue")), a);
    };
    var Ju = function (a, b) {
      a.h.sc(a.h.A(_.U(a, "errorContent")), b);
    };
    Iu.prototype.kg = function (a, b) {
      this.N = a;
      this.J = b;
      this.Nb(a);
    };
    var Lu = function (a, b) {
      _.A.call(this);
      "string" == _.kb(a) && ((b = a), (a = {}));
      "string" == _.kb(b) && (b = _.P(String(b)));
      this.F = b;
      this.G = new _.F(this);
      this.W = this.Oc = this.J = void 0;
      this.N = new Map();
      this.M = _.ul(mu);
      this.Wf(Object(a));
      this.xa = new _.mp(
        { apiKey: this.C.apiKey, lc: 1, Ie: !0, Jk: _.rl },
        { client: _.hl, u: window.location.href }
      );
      this.Da = new su(
        void 0,
        this.xa,
        void 0,
        void 0,
        this.C.apiKey,
        void 0,
        void 0,
        new Ys(),
        this.J,
        this.Oc,
        this.W
      );
      this.o = !1;
      this.G.I(window, "pagehide", this.O);
      this.Ef();
    };
    _.x(Lu, _.A);
    Lu.prototype.Wf = function (a) {
      this.aa = "auto";
      var b;
      !(b = window.parent != window) &&
        (b =
          (!window.external ||
            !window.external.googleToolbarVersion ||
            6.2 > parseFloat(window.external.googleToolbarVersion)) &&
          (!window.gtbExternal ||
            !window.gtbExternal.isTranslateEnabled ||
            !window.gtbExternal.isTranslateEnabled())) &&
        ((b =
          navigator.appVersion &&
          navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/)),
        (b = !(
          b &&
          b[2] &&
          b[3] &&
          4001 <= 1e3 * Number(b[2]) + Number(b[3])
        )));
      this.C = {
        bf: b,
        ah: !1,
        cf: null,
        Xd: null,
        Ic: [],
        Tc: [],
        mf: !1,
        dc: !1,
        apiKey: "",
        dh: !1,
        sf: "",
        Kc: 0,
        Tg: !1,
      };
      this.U = { Fb: _.pl, ci: "https://" == _.jl ? _.T.Gi : null };
      this.H = { Fb: _.pl, je: null };
      a &&
        ("autoDisplay" in a && (this.C.bf = this.C.bf && !!a.autoDisplay),
        "multilanguagePage" in a && (this.C.dc = !!a.multilanguagePage),
        "gaTrack" in a && (this.C.dh = !!a.gaTrack),
        "layout" in a && (this.C.Kc = a.layout),
        a.pageLanguage && (this.C.Lb = _.El(a.pageLanguage)),
        a.includedLanguages && (this.C.Ic = a.includedLanguages.split(",")),
        a.excludedLanguages && (this.C.Tc = a.excludedLanguages.split(",")),
        this.C.Lb && (this.aa = this.C.Lb),
        a.key && (this.C.apiKey = a.key),
        a.gaId && (this.C.sf = a.gaId),
        (this.H.je = Number(a.floatPosition) || this.H.je),
        "disableAutoTranslation" in a &&
          (this.C.Tg = !!a.disableAutoTranslation),
        a.jwtToken && (this.J = new Rs(a.jwtToken)),
        a.jwtTokenProvider && (this.J = new Ss(a.jwtTokenProvider)),
        a.translateErrorHandler && (this.Oc = a.translateErrorHandler),
        a.remoteApiProxyHandlers && (this.W = a.remoteApiProxyHandlers));
      !this.C.Tg && Mu(this) && (this.C.ah = !0);
      this.l = {};
      if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
        for (this.l = {}, a = _.Rc(a[2]).split("|"), b = 0; b < a.length; ++b) {
          var c = a[b].split("=");
          c[0] && (this.l[c[0]] = c[1]);
        }
    };
    var Mu = function (a) {
        function b(f, g) {
          if (
            (f = _.Rc(f).match(
              "^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)"
            ))
          ) {
            if (f[3]) return (g.C.cf = f[2]), (g.C.Xd = f[3]), !0;
            if (f[6]) return (g.C.cf = f[5]), (g.C.Xd = f[6]), !0;
          }
          return !1;
        }
        var c = {
            url: function () {
              var f = window.location.href.match(/#.*googtrans(.*)/);
              return f && f[1];
            },
            cookie: function () {
              var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
              return f && f[2];
            },
          },
          d;
        for (d in c)
          if (c[d] !== Object.prototype[d]) {
            var e = c[d]();
            if (e && b(e, a)) return d;
          }
        return "";
      },
      Nu = function (a, b) {
        for (var c = window.location.hostname.split("."); 2 < c.length; )
          c.shift();
        c = ";domain=" + c.join(".");
        null != b
          ? (a = a + "=" + b)
          : ((b = new Date()),
            b.setTime(b.getTime() - 1),
            (a = a + "=none;expires=" + b.toGMTString()));
        a += ";path=/";
        document.cookie = a;
        try {
          document.cookie = a + c;
        } catch (d) {}
      },
      Ou = function (a, b) {
        var c = null;
        void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
        Nu("googtrans", c);
      };
    Lu.prototype.wf = function (a) {
      this.V = _.El(_.S);
      this.vb = _.yi(a || {});
      this.Ca = {};
      this.D = {};
      a = !this.C.Ic.length;
      var b = _.wl(this.C.Ic),
        c = _.wl(this.C.Tc);
      this.Ca[_.S] = "";
      this.D[_.S] = "";
      for (var d in this.vb.tl)
        this.vb.tl[d] === Object.prototype[d] ||
          !(a || d in b) ||
          d in c ||
          ((this.D[d] = this.vb.tl[d]), d == this.C.Lb && !this.C.dc) ||
          (this.Ca[d] = this.vb.tl[d]);
      this.Ca[_.S] || delete this.Ca[_.S];
      this.D[_.S] || delete this.D[_.S];
      this.Ke = _.ci(this.vb.sl);
    };
    Lu.prototype.uf = function (a) {
      a && (this.aa = _.El(a));
    };
    Lu.prototype.xf = function () {
      delete this.eb;
      if (this.vb) {
        this.aa = this.aa || this.C.cf;
        this.V = this.C.Xd || this.V;
        var a =
          this.C.ah ||
          (this.C.bf &&
            this.aa != this.V &&
            !(this.aa in _.gl) &&
            "1" != this.l.os &&
            "1" != this.l["o" + this.aa]);
        "zh-TW" == this.aa && (this.aa = "zh-CN");
        this.Ke[this.aa] || ((a = !1), (this.aa = "auto"));
        if (!this.Ca[this.V])
          if (((a = !1), this.Ca.en)) this.V = "en";
          else
            for (var b in this.Ca)
              if (this.Ca[b] !== Object.prototype[b]) {
                this.V = b;
                break;
              }
        if (this.h) {
          b = this.Ca;
          var c = { "": _.T.Kg },
            d;
          for (d in b) b[d] !== Object.prototype[d] && (c[d] = b[d]);
          this.h.kg(c, this.D);
          this.h.ta("");
        }
        !_.el && a
          ? this.C.Xd
            ? _.Al(this.B, this.s.delay((0, _.y)(this.He, this, !0, !0))).call()
            : ((this.o = !0),
              _.Al(this.B, this.s.delay((0, _.y)(this.He, this))).call(),
              _.si("te_ap", { sl: this.aa }))
          : (this.j && this.j.X(!0), this.h && this.h.X(!0));
        window.google.translate.TranslateService && this.nb(!1);
        this.B.finish();
      }
    };
    Lu.prototype.Ef = function () {
      this.eb = new _.xl((0, _.y)(this.xf, this));
      this.s = new _.xl((0, _.y)(this.wj, this));
      this.B = new _.zl((0, _.y)(this.Qj, this));
      this.g = new Iu(this.U);
      this.Da.Td(this.eb.register((0, _.y)(this.wf, this)), _.S);
      this.F
        ? ((this.h = new Eu(this.C)),
          this.G.I(this.h, "load", this.eb.register()),
          this.G.I(
            this.h,
            "chg_tgt_lang",
            _.Al(this.B, this.s.delay((0, _.y)(this.sj, this)))
          ),
          this.h.Ba(this.F))
        : this.H.je &&
          ((this.j = new Gu(this.H)),
          this.G.I(this.j, "load", this.eb.register()),
          this.G.I(
            this.j,
            "clk_trans",
            _.Al(this.B, this.s.delay((0, _.y)(this.rj, this)))
          ),
          this.j.Ba());
      !this.C.Lb &&
        this.C.mf &&
        this.Da.Sd(this.eb.register((0, _.y)(this.uf, this)));
      this.eb.finish();
      _.P("goog-gt-thumbUpButton") && (Pu(this), Qu(this), Ru(this));
    };
    var Pu = function (a) {
        var b = _.P("goog-gt-thumbUpButton"),
          c = a.N,
          d = a.M;
        b.addEventListener(
          "click",
          function () {
            if ("up" === fs(c)) qu(d);
            else {
              var e = nu(d, 5);
              ou(d, e);
              pu(e);
            }
            gs(c, "up");
          },
          !1
        );
      },
      Qu = function (a) {
        var b = _.P("goog-gt-thumbDownButton"),
          c = a.N,
          d = a.M;
        b.addEventListener(
          "click",
          function () {
            if ("down" === fs(c)) qu(d);
            else {
              var e = nu(d, 6);
              ou(d, e);
              pu(e);
            }
            gs(c, "down");
          },
          !1
        );
      },
      Ru = function (a) {
        var b = _.P("goog-gt-tt"),
          c = b.dataset,
          d = _.P("goog-gt-votingInputSrcLang"),
          e = _.P("goog-gt-votingInputTrgLang"),
          f = _.P("goog-gt-votingInputSrcText"),
          g = _.P("goog-gt-votingInputTrgText"),
          h = a.N,
          l = a.M;
        window.document.body.addEventListener(
          "goog-gt-popupShown",
          function (m) {
            var n = nu(l, 4);
            ou(l, n);
            pu(n);
            n = m.detail;
            m = String(n.Yd);
            n = n.Mk;
            c.id = m;
            m = h.get(m) || "";
            es(m);
            b.style.width =
              Math.max(Math.min(window.innerWidth - 16, 536), 288) + "px";
            d.value = n.lb();
            e.value = n.oa();
            f.value = n.Rd();
            g.value = n.Na;
          },
          !1
        );
      };
    _.k = Lu.prototype;
    _.k.wj = function () {
      var a = this.g,
        b = this.Ke;
      a.o && a.o.Md(b);
      a.Y = b;
      this.g.kg(this.Ca, this.D);
      this.g.rc(this.aa);
      this.g.ta(this.V);
      this.G.I(this.g, "clk_confirm", this.oj);
      this.G.I(this.g, "clk_cancel", this.nj);
      this.G.I(this.g, "clk_restore", this.tf);
      this.G.I(this.g, "clk_close", this.le);
      this.G.I(this.g, "clk_no_ap", this.pj);
      this.G.I(this.g, "clk_no_ap_site", this.qj);
      this.G.I(this.g, "chg_src_lang", this.jh);
      this.G.I(this.g, "chg_tgt_lang", this.jh);
      this.h && this.h.X(!0);
    };
    _.k.Qj = function () {
      this.G.I(this.g, "load", this.s.register());
      this.g.Ba();
      this.s.finish();
    };
    _.k.K = function () {
      this.Da.restore();
      _.A.prototype.K.call(this);
      this.Da.O();
      this.G.O();
      this.G = null;
      this.g && this.g.O();
      this.g = null;
      this.j && this.j.O();
      this.j = null;
      this.h && this.h.O();
      this.F = this.h = null;
    };
    _.k.oj = function () {
      !this.g.isVisible() ||
        (!this.C.dc && Ns(this.aa, this.g.oa())) ||
        (this.o && _.si("te_apt", { sl: this.aa }),
        Su(this, !1),
        this.h && this.h.ta(this.g.oa()));
    };
    _.k.nj = function () {
      this.g.isVisible() && (Tu(this), Ku(this.g, 0), this.h && this.h.ta(""));
    };
    _.k.tf = function () {
      this.g.isVisible() && (Tu(this), Ku(this.g, 0));
      this.h && this.h.ta("");
    };
    _.k.le = function () {
      this.g.isVisible() &&
        (this.o && ((this.o = !1), _.si("te_apc", { sl: this.aa })),
        Tu(this),
        this.g.X(!1),
        this.h && this.h.ta(""),
        this.j && this.j.X(!0));
    };
    _.k.pj = function () {
      this.g.isVisible() &&
        ((this.l["o" + this.aa] = "1"),
        _.si("te_apr", { sl: this.aa }),
        (this.o = !1),
        this.le());
    };
    _.k.qj = function () {
      if (this.g.isVisible()) {
        this.o = !1;
        this.l.os = "1";
        var a = null;
        if (this.l) {
          a = [];
          for (var b in this.l)
            this.l[b] !== Object.prototype[b] && a.push(b + "=" + this.l[b]);
          a = a.join("|");
        }
        Nu("googtransopt", a);
        this.le();
      }
    };
    _.k.jh = function () {
      this.g.isVisible() &&
        (!this.C.dc && Ns(this.aa, this.g.oa())
          ? this.tf()
          : ((this.aa = this.g.lb() || this.aa),
            (this.V = this.g.oa()),
            2 == this.g.xd && (this.h && this.h.ta(this.g.oa()), Su(this))));
    };
    _.k.He = function (a, b) {
      this.g.isVisible() ||
        (this.j && this.j.X(!1), a ? Su(this, b) : Ku(this.g, 0, !0, this.o));
    };
    _.k.Dk = function (a, b) {
      _.Al(this.B, this.s.delay((0, _.y)(this.He, this, a, b))).call();
    };
    _.k.rj = function () {
      this.He(2 == this.g.xd);
    };
    _.k.sj = function () {
      this.h.oa()
        ? !this.C.dc && Ns(this.aa, this.g.oa())
          ? this.tf()
          : ((this.V = this.h.oa()), this.g.ta(this.V), Su(this))
        : this.h.ta(this.V);
    };
    var Su = function (a, b) {
      if (window.google.translate.TranslateService)
        try {
          window.google.translate.TranslateService.getInstance().restore();
        } catch (c) {}
      Ou(a.aa, a.V);
      a.o = !1;
      !b && a.aa in _.gl && _.si("te_ape", { sl: a.aa });
      a.g.jg(0);
      Ku(a.g, 1, !0);
      a.Da.Dg(!!b);
      window.setTimeout(
        (0, _.y)(
          a.Da.Ud,
          a.Da,
          a.C.dc ? "auto" : a.aa,
          a.V,
          (0, _.y)(a.Y, a),
          void 0,
          void 0
        ),
        0
      );
      if (a.C.dh && window._gaq && window._gat)
        try {
          a.C.sf
            ? window._gat
                ._getTracker(a.C.sf)
                ._trackEvent("Google Website Translator", "Translate", a.V)
            : window._gat
                ._getTrackerByName()
                ._trackEvent("Google Website Translator", "Translate", a.V);
        } catch (c) {}
    };
    Lu.prototype.Y = function (a, b, c) {
      "function" == typeof this.ma && this.ma();
      this.g.isVisible() &&
        1 == this.g.xd &&
        (c
          ? (Tu(this),
            Ku(this.g, -1, !0),
            2 == c ? Ju(this.g, _.T.Ai) : Ju(this.g, _.T.yg))
          : (this.g.jg(a),
            b &&
              (this.h && this.h.ta(this.V),
              this.g.rc(this.aa),
              Ku(this.g, 2))));
    };
    var Tu = function (a) {
      Ou();
      window.setTimeout((0, _.y)(a.Da.restore, a.Da, null), 0);
    };
    Lu.prototype.nb = function (a) {
      a || this.le();
      this.h && this.h.nb(a);
      this.j && this.j.X(a);
    };
    _.vm();
    if (1 == _.Ci) {
      var Z = null,
        Uu = function (a) {
          if (!Z) {
            var b, c, d, e;
            a &&
              ("key" in a && (b = a.key),
              "serverParams" in a && (c = a.serverParams),
              "timeInfo" in a && (d = a.timeInfo),
              "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers),
              (a = Os()) && (c = a));
            a = 0;
            if ("te_lib" == _.hl || _.dc) a = 3;
            Z = new su(
              void 0,
              new _.mp({
                apiKey: b,
                lc: a,
                Ie: !0,
                trackVisibility: "tvis" == c,
              }),
              void 0,
              void 0,
              b,
              c,
              d,
              new Ys(),
              void 0,
              void 0,
              e
            );
            Z.constructor = function () {};
            Z.isAvailable = Z.Xa;
            Z.getSupportedLanguages = Z.Td;
            Z.getPageLanguage = Z.Sd;
            Z.setClickThrough = Z.Dg;
            Z.translatePage = Z.Ud;
            Z.restore = Z.restore;
            Z.isTranslating = Z.ti;
            Z.setCheckVisibility = Z.Bk;
          }
          return Z;
        };
      Uu.getInstance = function () {
        return Z;
      };
      _.rb("google.translate.TranslateService", Uu);
      _.si("te_li");
    } else {
      var Vu = null,
        Wu = function (a, b) {
          Vu || ((Vu = new Lu(a, b)), (Vu.constructor = function () {}));
          return Vu;
        };
      Wu.getInstance = function () {
        return Vu;
      };
      _.rb("google.translate.TranslateElement", Wu);
      Lu.prototype.dispose = Lu.prototype.O;
      Lu.prototype.showBanner = Lu.prototype.Dk;
      Lu.prototype.setEnabled = Lu.prototype.nb;
      _.rb("google.translate.TranslateElement.FloatPosition", Hu);
      Hu.TOP_LEFT = 1;
      Hu.TOP_RIGHT = 2;
      Hu.BOTTOM_RIGHT = 3;
      Hu.BOTTOM_LEFT = 4;
      _.rb("google.translate.TranslateElement.InlineLayout", Fu);
      Fu.VERTICAL = 0;
      Fu.HORIZONTAL = 1;
      Fu.SIMPLE = 2;
    }
    _.Di();

    _.pa();
  } catch (e) {
    _._DumpException(e);
  }
}.call(this, this.default_tr));
// Google Inc.
