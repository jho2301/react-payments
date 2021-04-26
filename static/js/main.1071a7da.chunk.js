(this.webpackJsonptemp = this.webpackJsonptemp || []).push([
  [0],
  {
    25: function (e, n, t) {
      'use strict';
      t.r(n);
      var r,
        c,
        a,
        o,
        i,
        s,
        l,
        u,
        d,
        b,
        j,
        m,
        h,
        f,
        p,
        g,
        x,
        O,
        v,
        w = t(1),
        y = t(14),
        C = t.n(y),
        N = t(2),
        k = t(3),
        B = Object(k.a)(
          r ||
            (r = Object(N.a)([
              "\n  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;900&display=swap');\n\n  * {\n    user-select: none;\n    font-family: 'Noto Sans KR', sans-serif;\n    color: #333333;\n    padding: 0;\n    margin: 0;\n  }\n",
            ]))
        ),
        z = t(8),
        E = t(5),
        S = t(10),
        D = t(4),
        R = k.c.div(
          c ||
            (c = Object(N.a)([
              '\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  width: ',
              ';\n  ',
              '\n  ',
              '\n  ',
              ';\n  ',
              ';\n',
            ])),
          function (e) {
            return e.width || '100%';
          },
          function (e) {
            return e.flex && 'display: flex;';
          },
          function (e) {
            var n = e.justifyContent;
            return n && 'justify-content: '.concat(n, ';');
          },
          function (e) {
            var n = e.alignItems;
            return n && 'align-items: '.concat(n, ';');
          },
          function (e) {
            var n = e.backgroundColor;
            return n && 'background-color: '.concat(n, ';');
          }
        ),
        A = k.c.label(
          a ||
            (a = Object(N.a)([
              '\n  display: block;\n  margin-bottom: 1.5rem;\n  ',
              '\n\n  .label-text {\n    font-size: 0.875rem;\n    display: block;\n    margin-bottom: 0.5rem;\n  }\n',
            ])),
          function (e) {
            var n = e.width;
            return n && 'width: '.concat(n, ';');
          }
        ),
        L = t(0),
        M = function (e) {
          var n = e.label,
            t = e.width,
            r = e.children;
          return Object(L.jsxs)(A, {
            width: t,
            children: [
              Array.isArray(n)
                ? Object(L.jsx)(R, {
                    flex: !0,
                    justifyContent: 'space-between',
                    children: n.map(function (e, n) {
                      return Object(L.jsx)('span', { className: 'label-text', children: e }, n);
                    }),
                  })
                : Object(L.jsx)('span', { className: 'label-text', children: n }),
              Object(L.jsx)(R, { flex: !0, children: r }),
            ],
          });
        },
        I = 'ko-KR',
        V = function (e) {
          return e.toLocaleString(I, { minimumIntegerDigits: 2 });
        },
        F = '#ECEBF1',
        P = '#04C09E',
        Y = Object(k.b)(
          o ||
            (o = Object(N.a)([
              '\n  width: 16rem;\n  height: calc(16rem * 0.63);\n  font-size: 0.8rem;\n  border-radius: 6px;\n',
            ]))
        ),
        q = Object(k.b)(
          i ||
            (i = Object(N.a)([
              '\n  width: 20rem;\n  height: calc(20rem * 0.63);\n  font-size: 1rem;\n  border-radius: 7px;\n',
            ]))
        ),
        K = k.c.div(
          s ||
            (s = Object(N.a)([
              '\n  background: ',
              ';\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);\n  padding: 1em;\n  box-sizing: border-box;\n  font-weight: 500;\n  ',
              '\n\n  .card-name {\n    margin-bottom: 2em;\n    height: 1.25em;\n  }\n\n  .ic-chip {\n    background-color: #cbba64;\n    width: 4em;\n    height: calc(4em * 0.63);\n    border-radius: 6px;\n    margin-bottom: 0.725em;\n  }\n\n  .card-number {\n    display: flex;\n    height: 2em;\n    justify-content: space-between;\n    font-size: 1.25em;\n    letter-spacing: 0.05em;\n    padding: 0 0.5em;\n    margin-bottom: 0.125em;\n\n    span {\n      width: 100%;\n      text-align: center;\n    }\n  }\n\n  .info-wrapper {\n    font-size: 1.125em;\n    padding: 0 0.725em;\n\n    .owner-name {\n      overflow-x: hidden;\n      max-width: 10em;\n    }\n  }\n',
            ])),
          function (e) {
            return e.cardColor || F;
          },
          function (e) {
            return 'lg' === e.size ? q : Y;
          }
        ),
        J = '-',
        T = 'MM',
        U = 'YY',
        Z = 'NAME',
        G = function (e) {
          var n = e.className,
            t = e.size,
            r = e.cardBrand,
            c = e.ownerName,
            a = e.cardNumber,
            o = e.expDate,
            i = a.split(J),
            s = r.name,
            l = r.color;
          return Object(L.jsxs)(K, {
            className: n,
            size: t,
            cardColor: l,
            children: [
              Object(L.jsx)('p', { className: 'card-name', children: s }),
              Object(L.jsx)('div', { className: 'ic-chip' }),
              Object(L.jsxs)('p', {
                className: 'card-number',
                children: [
                  Object(L.jsx)('span', { children: i[0] }),
                  Object(L.jsx)('span', { children: i[1] }),
                  Object(L.jsx)('span', { children: '\xb7'.repeat(i[2].length) }),
                  Object(L.jsx)('span', { children: '\xb7'.repeat(i[3].length) }),
                ],
              }),
              Object(L.jsxs)(R, {
                flex: !0,
                justifyContent: 'space-between',
                className: 'info-wrapper',
                children: [
                  Object(L.jsx)('p', { className: 'owner-name', children: c || Z }),
                  Object(L.jsxs)('p', {
                    children: [o.month ? V(Number(o.month)) : T, ' /', ' ', o.year ? V(Number(o.year)) : U],
                  }),
                ],
              }),
            ],
          });
        },
        H = k.c.div(
          l ||
            (l = Object(N.a)([
              '\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.6);\n',
            ]))
        ),
        Q = Object(k.b)(
          u || (u = Object(N.a)(['\n  margin-top: auto;\n  height: 16rem;\n  border-radius: 1rem 1rem 0 0;\n']))
        ),
        W = Object(k.b)(d || (d = Object(N.a)(['\n  height: 100vh;\n']))),
        X = k.c.div(
          b || (b = Object(N.a)(['\n  position: relative;\n  width: 100%;\n  background: #fff;\n  ', '\n'])),
          function (e) {
            return 'full' === e.type ? W : Q;
          }
        ),
        $ = function (e) {
          var n = e.children,
            t = e.modalClose,
            r = e.type;
          return Object(L.jsx)(H, {
            onClick: function (e) {
              var n = e.target,
                r = e.currentTarget;
              t && n === r && t();
            },
            children: Object(L.jsx)(X, { type: r, children: n }),
          });
        },
        _ = Object(k.b)(j || (j = Object(N.a)(['\n  position: fixed;\n  right: 4%;\n  bottom: 4%;\n']))),
        ee = k.c.button(
          m ||
            (m = Object(N.a)([
              '\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  font-size: 1rem;\n  font-weight: 500;\n  color: ',
              ';\n  ',
              '\n',
            ])),
          function (e) {
            e.color;
            return P;
          },
          function (e) {
            return 'bottom-right' === e.position && _;
          }
        ),
        ne = k.c.div(
          h ||
            (h = Object(N.a)([
              '\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  cursor: pointer;\n  width: fit-content;\n  font-weight: 400;\n  font-size: 0.9em;\n\n  button {\n    cursor: pointer;\n    border: 0;\n    outline: none;\n    width: 3.5em;\n    height: 3.5em;\n    border-radius: 50%;\n    background-color: ',
              ';\n    margin-bottom: 0.625rem;\n  }\n',
            ])),
          function (e) {
            return e.backgroundColor || F;
          }
        ),
        te = function (e) {
          var n = e.children,
            t = e.backgroundColor,
            r = e.onClick;
          return Object(L.jsxs)(ne, {
            onClick: r,
            backgroundColor: t,
            children: [Object(L.jsx)('button', { type: 'button' }), Object(L.jsx)('span', { children: n })],
          });
        },
        re = ee,
        ce = k.c.div(
          f ||
            (f = Object(N.a)([
              '\n  height: 100%;\n  display: grid;\n  padding: 0 3rem;\n  grid-template-columns: repeat(4, 25%);\n  justify-content: center;\n  align-content: space-evenly;\n  justify-items: center;\n  outline: none;\n',
            ]))
        ),
        ae = function (e) {
          var n = e.cardBrands,
            t = e.onClickCardBrandButton,
            r = e.modalClose,
            c = Object(w.useRef)(null);
          return (
            Object(w.useEffect)(function () {
              var e;
              null === (e = c.current) || void 0 === e || e.focus();
            }, []),
            Object(L.jsx)($, {
              modalClose: r,
              type: 'bottom',
              children: Object(L.jsx)(ce, {
                ref: c,
                tabIndex: 0,
                children: n.map(function (e, n) {
                  return Object(L.jsx)(
                    te,
                    {
                      backgroundColor: e.color,
                      onClick: function () {
                        return t(e);
                      },
                      children: e.name,
                    },
                    n
                  );
                }),
              }),
            })
          );
        },
        oe = k.c.input(
          p ||
            (p = Object(N.a)([
              '\n  height: ',
              ';\n  border: none;\n  outline: none;\n  font-size: 1.125rem;\n  color: ',
              ';\n  background-color: transparent;\n  width: ',
              ';\n  ',
              '\n  ',
              "\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  &[type='number'] {\n    -moz-appearance: textfield;\n  }\n",
            ])),
          function (e) {
            return e.height || '3.375rem';
          },
          function (e) {
            return e.color || P;
          },
          function (e) {
            return e.width || '100%';
          },
          function (e) {
            return e.textCenter && 'text-align: center;';
          },
          function (e) {
            return e.underline && 'border-bottom: 1px solid #737373;';
          }
        ),
        ie = k.c.div(
          g ||
            (g = Object(N.a)([
              '\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  header {\n    font-size: 1.25rem;\n    margin-bottom: 5rem;\n  }\n\n  .result-card {\n    margin-bottom: 2.5rem;\n  }\n',
            ]))
        ),
        se = function (e) {
          var n = e.cardBrand,
            t = e.cardNumber,
            r = e.expDate,
            c = e.ownerName,
            a = e.nickname,
            o = e.setNickname;
          return (
            Object(w.useEffect)(function () {
              o(n.name);
            }, []),
            Object(L.jsx)($, {
              type: 'full',
              children: Object(L.jsxs)(ie, {
                children: [
                  Object(L.jsx)('header', {
                    children: '\uce74\ub4dc\ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
                  }),
                  Object(L.jsx)(G, {
                    className: 'result-card',
                    cardBrand: n,
                    cardNumber: t,
                    expDate: r,
                    ownerName: c,
                    size: 'lg',
                  }),
                  Object(L.jsx)(oe, {
                    color: 'black',
                    value: a,
                    onChange: function (e) {
                      var t = e.target.value;
                      t || o(n.name), o(t);
                    },
                    underline: !0,
                    textCenter: !0,
                    width: '60%',
                    height: '2rem',
                  }),
                  Object(L.jsx)(re, { type: 'submit', position: 'bottom-right', children: '\ud655\uc778' }),
                ],
              }),
            })
          );
        },
        le = [
          { name: '\ud3ec\ucf54\uce74\ub4dc', color: '#E24141' },
          { name: '\uc900\uce74\ub4dc', color: '#547CE4' },
          { name: '\uacf5\uc6d0\uce74\ub4dc', color: '#73BC6D' },
          { name: '\ube0c\ub79c\uce74\ub4dc', color: '#DE59B9' },
          { name: '\ub85c\uc774\ub4dc\uce74\ub4dc', color: '#04C09E' },
          { name: '\ud30c\ub178\uce74\ub4dc', color: '#E76E9A' },
          { name: '\ucf5c\ub9b0\uce74\ub4dc', color: '#F37D3B' },
          { name: '\uc36c\uce74\ub4dc', color: '#FBCD58' },
        ],
        ue = '\uce74\ub4dc\ubc88\ud638',
        de = '\ub9cc\ub8cc\uc77c',
        be = '\uce74\ub4dc \uc18c\uc720\uc790 \uc774\ub984',
        je = '\ubcf4\uc548 \ucf54\ub4dc(CVC/CVV)',
        me = '\uce74\ub4dc \ube44\ubc00\ubc88\ud638',
        he = 'MM',
        fe = 'YY',
        pe =
          '\uce74\ub4dc\uc5d0 \ud45c\uc2dc\ub41c \uc774\ub984\uacfc \ub3d9\uc77c\ud558\uac8c \uc785\ub825\ud558\uc138\uc694.',
        ge = '\uc785\ub825\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.',
        xe = '\uce74\ub4dc\uac00 \ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
        Oe = k.c.div(
          x ||
            (x = Object(N.a)([
              "\n  .credit-card {\n    margin: 3rem auto 2rem;\n  }\n\n  .password-dot::after {\n    content: '';\n    width: 0.375em;\n    height: 0.375em;\n    display: block;\n    border-radius: 50%;\n    background-color: ",
              ";\n  }\n\n  .question-mark {\n    width: fit-content;\n    height: fit-content;\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin: auto 0 auto 1rem;\n    cursor: pointer;\n\n    &:hover::after {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 10rem;\n      height: 10rem;\n      left: 2.5rem;\n      top: -2.5rem;\n      background: url('images/example.png') no-repeat;\n    }\n  }\n",
            ])),
          P
        ),
        ve = function (e) {
          var n = e.children,
            t = e.width;
          return Object(L.jsx)(R, {
            flex: !0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: F,
            width: t,
            children: n,
          });
        },
        we = function (e) {
          return !isNaN(Number(e));
        },
        ye = function () {
          var e = Object(w.useState)({ name: '', color: '' }),
            n = Object(D.a)(e, 2),
            t = n[0],
            r = n[1],
            c = Object(w.useState)(''),
            a = Object(D.a)(c, 2),
            o = a[0],
            i = a[1],
            s = Object(w.useState)(['', '', '', '']),
            l = Object(D.a)(s, 2),
            u = l[0],
            d = l[1],
            b = Object(w.useState)({ year: '', month: '' }),
            j = Object(D.a)(b, 2),
            m = j[0],
            h = j[1],
            f = Object(w.useState)(''),
            p = Object(D.a)(f, 2),
            g = p[0],
            x = p[1],
            O = Object(w.useState)(['', '']),
            v = Object(D.a)(O, 2),
            y = v[0],
            C = v[1],
            N = Object(w.useState)(!1),
            k = Object(D.a)(N, 2),
            B = k[0],
            A = k[1],
            I = Object(w.useState)(!1),
            V = Object(D.a)(I, 2),
            F = V[0],
            P = V[1],
            Y = Object(w.useState)(''),
            q = Object(D.a)(Y, 2),
            K = q[0],
            T = q[1],
            U = Object(w.useRef)(null),
            Z = Object(w.useRef)(null),
            H = Object(w.useRef)(null),
            Q = Object(w.useRef)(null),
            W = Object(w.useRef)(null),
            X = function (e, n) {
              var t = e.target.value;
              if (
                (function (e) {
                  return we(e) && e.length <= 4;
                })(t)
              ) {
                var r = Object(S.a)(u);
                (r[n] = t),
                  d(r),
                  4 === r[n].length &&
                    n < 3 &&
                    (function (e) {
                      var n;
                      null === (n = [U, Z, H][e].current) || void 0 === n || n.focus();
                    })(n);
              }
            },
            $ = function (e, n) {
              var t = e.target.value;
              1 === t.length && h(Object(E.a)(Object(E.a)({}, m), {}, Object(z.a)({}, n, '0' + t)));
            },
            _ = function (e, n) {
              var t = e.target.value;
              if (
                (function (e) {
                  return we(e) && e.length <= 1;
                })(t)
              ) {
                var r,
                  c = Object(S.a)(y);
                if (((c[n] = t), C(c), 0 === n && 1 === t.length))
                  null === (r = W.current) || void 0 === r || r.focus();
              }
            },
            ee = function () {
              if (4 === u[0].length && 4 === u[1].length) {
                var e = le[Number(u[1][3])];
                e ? r(e) : A(!0);
              } else r({ name: '', color: '' });
            };
          Object(w.useEffect)(
            function () {
              ee();
            },
            [u[0], u[1]]
          );
          return Object(L.jsxs)(Oe, {
            children: [
              Object(L.jsx)(G, {
                className: 'credit-card',
                cardBrand: t,
                expDate: m,
                ownerName: o,
                cardNumber: u.join(J),
              }),
              Object(L.jsxs)('form', {
                onSubmit: function (e) {
                  e.preventDefault(), alert(xe);
                },
                children: [
                  Object(L.jsx)(M, {
                    label: ue,
                    children: Object(L.jsx)(ve, {
                      children: [
                        { type: 'text', ref: null },
                        { type: 'text', ref: U },
                        { type: 'password', ref: Z },
                        { type: 'password', ref: H },
                      ]
                        .map(function (e, n) {
                          var t = e.type,
                            r = e.ref;
                          return Object(L.jsx)(
                            oe,
                            {
                              type: t,
                              ref: r,
                              textCenter: !0,
                              maxLength: 4,
                              width: '16%',
                              value: u[n],
                              onChange: function (e) {
                                return X(e, n);
                              },
                            },
                            n
                          );
                        })
                        .reduce(function (e, n, t, r) {
                          return [].concat(Object(S.a)(e), [Object(L.jsx)('span', { children: J }, t + r.length), n]);
                        }, [])
                        .slice(1),
                    }),
                  }),
                  Object(L.jsx)(M, {
                    label: de,
                    width: '40%',
                    children: Object(L.jsxs)(ve, {
                      children: [
                        Object(L.jsx)(oe, {
                          type: 'text',
                          placeholder: he,
                          textCenter: !0,
                          maxLength: 2,
                          width: '40%',
                          value: m.month,
                          onChange: function (e) {
                            var n,
                              t = e.target.value;
                            (function (e) {
                              return we(e) && e.length <= 2 && Number(e) <= 12;
                            })(t) &&
                              (h(Object(E.a)(Object(E.a)({}, m), {}, { month: t })),
                              2 === t.length && (null === (n = Q.current) || void 0 === n || n.focus()));
                          },
                          onBlur: function (e) {
                            return $(e, 'month');
                          },
                        }),
                        '/',
                        Object(L.jsx)(oe, {
                          type: 'text',
                          ref: Q,
                          placeholder: fe,
                          textCenter: !0,
                          maxLength: 2,
                          width: '40%',
                          value: m.year,
                          onChange: function (e) {
                            var n = e.target.value;
                            (function (e) {
                              return we(e) && e.length <= 2;
                            })(n) && h(Object(E.a)(Object(E.a)({}, m), {}, { year: n }));
                          },
                          onBlur: function (e) {
                            return $(e, 'year');
                          },
                        }),
                      ],
                    }),
                  }),
                  Object(L.jsx)(M, {
                    label: [be, ''.concat(o.length, ' / ').concat(30)],
                    children: Object(L.jsx)(ve, {
                      children: Object(L.jsx)(oe, {
                        placeholder: pe,
                        type: 'text',
                        width: '90%',
                        maxLength: 30,
                        value: o,
                        onChange: function (e) {
                          var n = e.target.value;
                          (function (e) {
                            return e.length <= 30 && !/[^a-zA-Z\s]/g.test(e);
                          })(n) && i(n.toUpperCase());
                        },
                      }),
                    }),
                  }),
                  Object(L.jsxs)(M, {
                    label: je,
                    children: [
                      Object(L.jsx)(ve, {
                        width: '25%',
                        children: Object(L.jsx)(oe, {
                          type: 'password',
                          maxLength: 3,
                          textCenter: !0,
                          value: g,
                          onChange: function (e) {
                            var n = e.target.value;
                            (function (e) {
                              return we(e) && e.length <= 3;
                            })(n) && x(n);
                          },
                        }),
                      }),
                      Object(L.jsx)(R, {
                        className: 'question-mark',
                        children: Object(L.jsx)('img', {
                          src: 'buttons/question-mark-btn.svg',
                          alt: 'cvc/cvv \ub3c4\uc6c0\ub9d0',
                        }),
                      }),
                    ],
                  }),
                  Object(L.jsx)(M, {
                    label: me,
                    children: Object(L.jsxs)(R, {
                      flex: !0,
                      justifyContent: 'space-between',
                      width: '60%',
                      children: [
                        Object(L.jsx)(ve, {
                          width: '23%',
                          children: Object(L.jsx)(oe, {
                            type: 'password',
                            textCenter: !0,
                            value: y[0],
                            onChange: function (e) {
                              return _(e, 0);
                            },
                          }),
                        }),
                        Object(L.jsx)(ve, {
                          width: '23%',
                          children: Object(L.jsx)(oe, {
                            type: 'password',
                            ref: W,
                            textCenter: !0,
                            value: y[1],
                            onChange: function (e) {
                              return _(e, 1);
                            },
                          }),
                        }),
                        Object(L.jsx)(ve, {
                          width: '23%',
                          children: Object(L.jsx)('span', { className: 'password-dot' }),
                        }),
                        Object(L.jsx)(ve, {
                          width: '23%',
                          children: Object(L.jsx)('span', { className: 'password-dot' }),
                        }),
                      ],
                    }),
                  }),
                  Object(L.jsx)(re, {
                    type: 'button',
                    position: 'bottom-right',
                    onClick: function () {
                      4 !== u[0].length || 4 !== u[1].length || '' !== t.name
                        ? !(function (e) {
                            var n = e.cardNumber,
                              t = e.cardBrand,
                              r = e.CVC,
                              c = e.expDate,
                              a = e.ownerName,
                              o = e.password;
                            return (
                              n.every(function (e) {
                                return 4 === e.length;
                              }) &&
                              t.name &&
                              t.color &&
                              2 === c.month.length &&
                              2 === c.year.length &&
                              3 === r.length &&
                              1 === o[0].length &&
                              1 === o[1].length &&
                              a.length > 0
                            );
                          })({ cardNumber: u, cardBrand: t, CVC: g, expDate: m, ownerName: o, password: y })
                          ? alert(ge)
                          : P(!0)
                        : ee();
                    },
                    children: '\ub2e4\uc74c',
                  }),
                  B &&
                    Object(L.jsx)(ae, {
                      cardBrands: le,
                      onClickCardBrandButton: function (e) {
                        r(e), A(!1);
                      },
                      modalClose: function () {
                        return A(!1);
                      },
                    }),
                  F &&
                    Object(L.jsx)(se, {
                      nickname: K,
                      setNickname: T,
                      ownerName: o,
                      cardNumber: u.join(J),
                      expDate: m,
                      cardBrand: t,
                    }),
                ],
              }),
            ],
          });
        },
        Ce = k.c.header(
          O ||
            (O = Object(N.a)([
              '\n  display: flex;\n  align-items: center;\n\n  a {\n    display: flex;\n    align-items: center;\n    margin-right: 0.25rem;\n  }\n',
            ]))
        ),
        Ne = function (e) {
          var n = e.className,
            t = e.children,
            r = e.title,
            c = e.hasPreviousPage;
          return Object(L.jsxs)('div', {
            className: n,
            children: [
              Object(L.jsxs)(Ce, {
                children: [
                  c &&
                    Object(L.jsx)('a', {
                      children: Object(L.jsx)('img', { src: 'buttons/back-btn.svg', alt: '\ub4a4\ub85c\uac00\uae30' }),
                    }),
                  Object(L.jsx)('span', { className: 'title', children: r }),
                ],
              }),
              t,
            ],
          });
        },
        ke = Object(k.c)(Ne)(v || (v = Object(N.a)(['\n  padding: 1rem 1.125rem;\n']))),
        Be = function () {
          return Object(L.jsx)(ke, {
            title: '\uce74\ub4dc\ucd94\uac00',
            hasPreviousPage: !0,
            children: Object(L.jsx)(ye, {}),
          });
        };
      var ze = function () {
        return Object(L.jsxs)(L.Fragment, {
          children: [Object(L.jsx)(B, {}), Object(L.jsx)('div', { className: 'App', children: Object(L.jsx)(Be, {}) })],
        });
      };
      C.a.render(Object(L.jsx)(w.StrictMode, { children: Object(L.jsx)(ze, {}) }), document.getElementById('root'));
    },
  },
  [[25, 1, 2]],
]);
//# sourceMappingURL=main.1071a7da.chunk.js.map
