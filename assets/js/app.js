"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// ===== Extra Pages (Auth, Legal) ==================================
// Extra Pages added to the KGS Home Decor React App

function AccountLoginPage(_ref) {
  var onRegister = _ref.onRegister,
    onLogin = _ref.onLogin;
  return /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '48px',
      borderRadius: '24px',
      width: '100%',
      maxWidth: '440px',
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '32px',
      marginBottom: '8px',
      color: '#1A1A1A'
    }
  }, "Welcome Back"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#5E5B59',
      fontSize: '14px',
      marginBottom: '32px'
    }
  }, "Sign in to access your orders, saved items, and personalized recommendations."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 600,
      color: '#5E5B59',
      marginBottom: '8px'
    }
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Enter your email",
    style: {
      width: '100%',
      padding: '14px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Jost", sans-serif'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '12px',
      fontWeight: 600,
      color: '#5E5B59'
    }
  }, "Password"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: '12px',
      color: '#B89657',
      fontWeight: 500
    }
  }, "Forgot?")), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Enter your password",
    style: {
      width: '100%',
      padding: '14px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Jost", sans-serif'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    className: "btn btn-dark",
    style: {
      width: '100%',
      padding: '16px',
      fontSize: '14px',
      marginBottom: '24px'
    }
  }, "Sign In"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#5E5B59'
    }
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      onRegister();
    },
    style: {
      color: '#1A1A1A',
      fontWeight: 600
    }
  }, "Create one"))));
}
function AccountRegisterPage(_ref2) {
  var onLogin = _ref2.onLogin,
    onRegister = _ref2.onRegister;
  return /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '48px',
      borderRadius: '24px',
      width: '100%',
      maxWidth: '440px',
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '32px',
      marginBottom: '8px',
      color: '#1A1A1A'
    }
  }, "Create Account"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#5E5B59',
      fontSize: '14px',
      marginBottom: '32px'
    }
  }, "Join us for exclusive access to new collections and priority support."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 600,
      color: '#5E5B59',
      marginBottom: '8px'
    }
  }, "Full Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter your full name",
    style: {
      width: '100%',
      padding: '14px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Jost", sans-serif'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 600,
      color: '#5E5B59',
      marginBottom: '8px'
    }
  }, "Email Address"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Enter your email",
    style: {
      width: '100%',
      padding: '14px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Jost", sans-serif'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 600,
      color: '#5E5B59',
      marginBottom: '8px'
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Create a password",
    style: {
      width: '100%',
      padding: '14px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Jost", sans-serif'
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onRegister,
    className: "btn btn-dark",
    style: {
      width: '100%',
      padding: '16px',
      fontSize: '14px',
      marginBottom: '24px'
    }
  }, "Create Account"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: '13px',
      color: '#5E5B59'
    }
  }, "Already have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      onLogin();
    },
    style: {
      color: '#1A1A1A',
      fontWeight: 600
    }
  }, "Sign in"))));
}
function AccountDashboardPage(_ref3) {
  var onLogout = _ref3.onLogout,
    onShop = _ref3.onShop;
  return /*#__PURE__*/React.createElement("div", {
    className: "section container",
    style: {
      minHeight: '60vh',
      padding: '64px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '40px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '40px',
      color: '#1A1A1A',
      marginBottom: '8px'
    }
  }, "My Account"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#5E5B59',
      fontSize: '15px'
    }
  }, "Welcome back, Meena.")), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    className: "btn btn-ghost",
    style: {
      padding: '10px 20px'
    }
  }, "Log Out")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: '48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      background: '#fff',
      borderRadius: '12px',
      fontWeight: 500,
      color: '#B89657',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
    }
  }, "Order History"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderRadius: '12px',
      color: '#5E5B59',
      cursor: 'pointer'
    }
  }, "Saved Addresses"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderRadius: '12px',
      color: '#5E5B59',
      cursor: 'pointer'
    }
  }, "Account Settings")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      marginBottom: '24px'
    }
  }, "Recent Orders"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '16px',
      padding: '40px',
      textAlign: 'center',
      border: '1px dashed rgba(26,26,26,0.15)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: '48px',
      color: '#C5A880',
      marginBottom: '16px'
    }
  }, "inventory_2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '18px',
      fontWeight: 500,
      marginBottom: '8px'
    }
  }, "No orders yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#5E5B59',
      fontSize: '14px',
      marginBottom: '24px'
    }
  }, "When you place an order, it will appear here."), /*#__PURE__*/React.createElement("button", {
    onClick: onShop,
    className: "btn btn-dark"
  }, "Start Shopping")))));
}
function LegalPage(_ref4) {
  var title = _ref4.title,
    children = _ref4.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "section container",
    style: {
      maxWidth: '800px',
      padding: '64px 20px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '40px',
      color: '#1A1A1A',
      marginBottom: '40px',
      textAlign: 'center'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#5E5B59',
      fontSize: '16px',
      lineHeight: '1.8'
    }
  }, children));
}
function PrivacyPolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Privacy Policy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "At KGS Home D\xE9cor, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Information We Collect"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you make a purchase or create an account."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "How We Use Your Information"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: '24px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, "To process and fulfill your orders."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, "To communicate with you about your order status."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, "To send you promotional offers and updates (only if you opt-in).")));
}
function TermsPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Terms & Conditions"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "Welcome to KGS Home D\xE9cor. By accessing our website, you agree to be bound by these Terms and Conditions."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Product Accuracy"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We strive to ensure that all details, descriptions, and prices of products appearing on the website are accurate. However, errors may occur. We reserve the right to correct any errors and to change or update information at any time without prior notice."));
}
function ReturnPolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Return & Refund Policy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We want you to be completely satisfied with your purchase. If you are not, you may return it within 7 days of delivery."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Conditions for Return"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "Items must be unused and in the same condition that you received them. They must also be in the original packaging."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "To initiate a return, please contact our support team via WhatsApp."));
}
function ShippingPolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Shipping Policy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We offer reliable and secure shipping for all our products."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Delivery Times"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: '24px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Virudhachalam:"), " Same day or next day delivery."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Tamil Nadu:"), " 2-4 business days."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Rest of India:"), " 5-7 business days.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "Shipping is free for all orders within Virudhachalam."));
}

// Attach to window so Babel standalone finds it
window.AccountLoginPage = AccountLoginPage;
window.AccountRegisterPage = AccountRegisterPage;
window.AccountDashboardPage = AccountDashboardPage;
window.PrivacyPolicyPage = PrivacyPolicyPage;
window.TermsPage = TermsPage;
window.ReturnPolicyPage = ReturnPolicyPage;
window.ShippingPolicyPage = ShippingPolicyPage;

// ===== NEXT SCRIPT BLOCK =====

var PRODUCTS = [{
  id: 'plant-banana',
  name: 'Large Artificial Banana Plant',
  category: 'Artificial Plants',
  price: 3200,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 84,
  sold: 31,
  stock: 9,
  image: 'assets/products/plant.png',
  badge: 'Popular',
  badgeKind: 'gold'
}, {
  id: 'flower-rose',
  name: 'Premium Rose Bouquet',
  category: 'Artificial Flowers',
  price: 1500,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 34,
  sold: 12,
  stock: 20,
  image: 'assets/products-real/flower-01.png',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'bag-tote',
  name: 'Handcrafted Leather Tote',
  category: 'Bags & Accessories',
  price: 4500,
  was: 5000,
  off: '10% OFF',
  rating: 4.8,
  reviews: 56,
  sold: 28,
  stock: 5,
  image: 'assets/products-real/bag-01.png',
  badge: null
}, {
  id: 'bottle-vintage',
  name: 'Vintage Glass Bottle',
  category: 'Bottles',
  price: 1200,
  was: null,
  off: null,
  rating: 4.6,
  reviews: 21,
  sold: 9,
  stock: 15,
  image: 'assets/products-real/bottle-01.png',
  badge: 'Staff Pick',
  badgeKind: 'gold'
}, {
  id: 'vase-ceramic',
  name: 'Designer Ceramic Vase',
  category: 'Vases & Décor',
  price: 1950,
  was: null,
  off: null,
  rating: 5.0,
  reviews: 42,
  sold: 18,
  stock: 14,
  image: 'assets/products/ceramic_vase.webp',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'fountain-tabletop',
  name: 'Indoor Tabletop Fountain',
  category: 'Fountains & Pooja',
  price: 2850,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 56,
  sold: 22,
  stock: 6,
  image: 'assets/products/fountain.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'gift-hamper',
  name: 'Luxury Festive Gift Hamper',
  category: 'Gifts & Hampers',
  price: 5500,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 88,
  sold: 45,
  stock: 8,
  image: 'assets/products-real/gift-01.png',
  badge: null
}, {
  id: 'sofa-3seater',
  name: '3-Seater Sofa - Fabric & Wood',
  category: 'Chairs & Sofas',
  price: 18500,
  was: 22000,
  off: '16% OFF',
  rating: 4.8,
  reviews: 124,
  sold: 38,
  stock: 4,
  image: 'assets/products/sofa.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'clock-brass',
  name: 'Antique Brass Wall Clock',
  category: 'Clocks',
  price: 1299,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 98,
  sold: 64,
  stock: 12,
  image: 'assets/products/clock.webp',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'lamp-table',
  name: 'Artisan Table Lamp',
  category: 'Lighting',
  price: 3400,
  was: null,
  off: null,
  rating: 4.6,
  reviews: 72,
  sold: 27,
  stock: 11,
  image: 'assets/products/table_lamp.webp',
  badge: null
}, {
  id: 'fan-vintage',
  name: 'Vintage Blower Fan',
  category: 'Blower Fans',
  price: 4200,
  was: null,
  off: null,
  rating: 4.8,
  reviews: 33,
  sold: 14,
  stock: 7,
  image: 'assets/products-real/fan-01.png',
  badge: null
}, {
  id: 'horse-statue',
  name: 'Decorative Horse Statue',
  category: 'Statues & Idols',
  price: 4250,
  was: 5500,
  off: '23% OFF',
  rating: 4.9,
  reviews: 168,
  sold: 52,
  stock: 3,
  image: 'assets/products/horse.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'wall-art-botanical',
  name: 'Botanical Wall Art Panel',
  category: 'Wall Frames',
  price: 1850,
  was: null,
  off: null,
  rating: 4.8,
  reviews: 113,
  sold: 41,
  stock: 18,
  image: 'assets/products/wall_decor.webp',
  badge: null
}, {
  id: 'wall-statue',
  name: 'Brass Wall Mount Statue',
  category: 'Wall Statues',
  price: 3800,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 45,
  sold: 19,
  stock: 6,
  image: 'assets/products-real/wall-statue-01.png',
  badge: null
}, {
  id: 'cushion-velvet',
  name: 'Velvet Throw Cushion Set',
  category: 'Vases & Décor',
  price: 1800,
  was: 2200,
  off: '18% OFF',
  rating: 4.8,
  reviews: 67,
  sold: 43,
  stock: 15,
  image: 'assets/products/ceramic_vase.webp',
  badge: 'Hot Deal',
  badgeKind: 'warm'
}, {
  id: 'lamp-floor',
  name: 'Rattan Floor Lamp',
  category: 'Lighting',
  price: 5200,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 38,
  sold: 21,
  stock: 5,
  image: 'assets/products/table_lamp.webp',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'mirror-arched',
  name: 'Arched Gold Wall Mirror',
  category: 'Wall Frames',
  price: 7500,
  was: 9000,
  off: '17% OFF',
  rating: 4.9,
  reviews: 92,
  sold: 34,
  stock: 3,
  image: 'assets/products/wall_decor.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'pooja-thali',
  name: 'Handcrafted Brass Pooja Thali',
  category: 'Fountains & Pooja',
  price: 2200,
  was: null,
  off: null,
  rating: 5.0,
  reviews: 114,
  sold: 76,
  stock: 10,
  image: 'assets/products/fountain.webp',
  badge: 'Popular',
  badgeKind: 'gold'
}, {
  id: 'plant-monstera',
  name: 'Artificial Monstera Plant',
  category: 'Artificial Plants',
  price: 2800,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 52,
  sold: 29,
  stock: 12,
  image: 'assets/products/plant.png',
  badge: 'Trending',
  badgeKind: 'ink'
}, {
  id: 'clock-wooden',
  name: 'Rustic Wooden Wall Clock',
  category: 'Clocks',
  price: 1850,
  was: 2100,
  off: '12% OFF',
  rating: 4.6,
  reviews: 44,
  sold: 31,
  stock: 8,
  image: 'assets/products/clock.webp',
  badge: null
}, {
  id: 'statue-ganesha',
  name: 'Brass Ganesha Idol',
  category: 'Statues & Idols',
  price: 3600,
  was: null,
  off: null,
  rating: 5.0,
  reviews: 201,
  sold: 88,
  stock: 7,
  image: 'assets/products/horse.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'hamper-diwali',
  name: 'Premium Diwali Gift Set',
  category: 'Gifts & Hampers',
  price: 4200,
  was: null,
  off: null,
  rating: 4.8,
  reviews: 73,
  sold: 55,
  stock: 4,
  image: 'assets/products-real/gift-01.png',
  badge: 'Trending',
  badgeKind: 'ink'
}, {
  id: 'sofa-accent',
  name: 'Accent Armchair — Teal',
  category: 'Chairs & Sofas',
  price: 12500,
  was: 15000,
  off: '17% OFF',
  rating: 4.7,
  reviews: 58,
  sold: 22,
  stock: 2,
  image: 'assets/products/sofa.webp',
  badge: 'Hot Deal',
  badgeKind: 'warm'
}];
var CATEGORIES = [{
  id: 'wall-decor',
  label: 'Wall Décor',
  img: 'assets/categories/cat_wall_decor.webp'
}, {
  id: 'decor',
  label: 'Décor',
  img: 'assets/categories/cat_decor.webp'
}, {
  id: 'vases-plants',
  label: 'Vases & Plants',
  img: 'assets/categories/cat_vases_decor_new.webp'
}, {
  id: 'lifestyle-accessories',
  label: 'Lifestyle',
  img: 'assets/categories/cat_lifestyle.webp'
}, {
  id: 'furniture',
  label: 'Furniture',
  img: 'assets/categories/cat_sofas.webp'
}, {
  id: 'gifts',
  label: 'Gifts',
  img: 'assets/categories/cat_gifts_new.webp'
}, {
  id: 'lighting',
  label: 'Lighting',
  img: 'assets/categories/cat_lighting_only.webp'
}];
var TESTIMONIALS = [{
  name: 'Priya Sharma',
  initial: 'P',
  stars: 5,
  quote: 'Ordered the tall marble vase and it arrived the next day, packed properly. Looks exactly like the photos. Will order again.',
  thumb: 'assets/lifestyle/room_bedroom.webp'
}, {
  name: 'Rohit Verma',
  initial: 'R',
  stars: 5,
  quote: 'WhatsApped them about a sofa and got a reply in five minutes. Good people. The piece itself is solid — no wobble, good finish.',
  thumb: 'assets/lifestyle/room_living.webp'
}, {
  name: 'Ananya Iyer',
  initial: 'A',
  stars: 5,
  quote: 'An incredibly premium selection right here in Virudhachalam. Went to the showroom on Junction Road and ended up buying three things I hadn\'t planned to.',
  thumb: 'assets/lifestyle/room_hallway.webp'
}];
var IG_TILES = ['assets/lifestyle/room_living.webp', 'assets/lifestyle/room_bedroom.webp', 'assets/lifestyle/room_hallway.webp', 'assets/lifestyle/room_zen.webp', 'assets/lifestyle/showroom.webp', 'assets/lifestyle/showroom_interior.webp', 'assets/categories/cat_decor.webp', 'assets/categories/cat_lighting.webp', 'assets/categories/cat_plants.webp', 'assets/categories/cat_lifestyle.webp'];
var fmtPrice = function fmtPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
};

// ─── Supabase Integration ────────────────────────────────────────────
var SB_URL = 'https://rgpkomngygapwjhnbgaf.supabase.co';
var SB_ANON = 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';
var _TAG_BADGE = {
  'bestseller': {
    badge: 'Best Seller',
    badgeKind: 'gold'
  },
  'new-arrival': {
    badge: 'New',
    badgeKind: 'ink'
  },
  'featured': {
    badge: 'Featured',
    badgeKind: 'gold'
  },
  'trending': {
    badge: 'Trending',
    badgeKind: 'ink'
  },
  'hot-deal': {
    badge: 'Hot Deal',
    badgeKind: 'warm'
  },
  'popular': {
    badge: 'Popular',
    badgeKind: 'gold'
  }
};
var _CAT_LABEL = {
  'wall-decor': 'Wall Décor',
  'decor': 'Décor',
  'vases-plants': 'Vases & Plants',
  'lifestyle-accessories': 'Lifestyle',
  'furniture': 'Furniture',
  'gifts': 'Gifts',
  'lighting': 'Lighting'
};
function normalizeProduct(p) {
  // Discount badge from compare_at_price
  var off = p.compare_at_price && parseFloat(p.compare_at_price) > parseFloat(p.price) ? Math.round((1 - parseFloat(p.price) / parseFloat(p.compare_at_price)) * 100) + '% OFF' : null;
  // Badge from tags
  var badge = null,
    badgeKind = null;
  if (off) {
    badge = off;
    badgeKind = 'warm';
  }
  if (Array.isArray(p.tags)) {
    var _iterator = _createForOfIteratorHelper(p.tags),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tag = _step.value;
        if (_TAG_BADGE[tag]) {
          badge = _TAG_BADGE[tag].badge;
          badgeKind = _TAG_BADGE[tag].badgeKind;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  // Deterministic rating/reviews from UUID hash (consistent across renders)
  var h = parseInt((p.id || '').replace(/-/g, '').slice(0, 8), 16) || 0;
  var rating = +(4.4 + h % 6 / 10).toFixed(1); // 4.4–4.9
  var reviews = 18 + h % 200; // 18–217
  var sold = 8 + h % 95; // 8–102
  return {
    id: p.id,
    name: p.name,
    category: _CAT_LABEL[p.category] || p.category,
    categorySlug: p.category,
    // original DB slug — used for filtering
    price: parseFloat(p.price),
    was: p.compare_at_price ? parseFloat(p.compare_at_price) : null,
    off: off,
    rating: rating,
    reviews: reviews,
    sold: sold,
    stock: typeof p.stock_quantity === 'number' ? p.stock_quantity : p.in_stock ? 10 : 0,
    image: p.image_url,
    badge: badge,
    badgeKind: badgeKind
  };
}
function fetchAllProductsFromSupabase() {
  return _fetchAllProductsFromSupabase.apply(this, arguments);
} // ===== Announcement bar =====================================================
function _fetchAllProductsFromSupabase() {
  _fetchAllProductsFromSupabase = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var sb, all, offset, batchSize, _yield$sb$from$select, data, error;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          sb = window.supabase.createClient(SB_URL, SB_ANON);
          all = [], offset = 0, batchSize = 500;
        case 1:
          if (!true) {
            _context.n = 5;
            break;
          }
          _context.n = 2;
          return sb.from('products').select('id,name,category,price,compare_at_price,image_url,in_stock,stock_quantity,tags').eq('is_active', true).order('sort_order', {
            ascending: true
          }).order('created_at', {
            ascending: false
          }).range(offset, offset + batchSize - 1);
        case 2:
          _yield$sb$from$select = _context.v;
          data = _yield$sb$from$select.data;
          error = _yield$sb$from$select.error;
          if (!error) {
            _context.n = 3;
            break;
          }
          throw error;
        case 3:
          all = all.concat(data || []);
          if (!(!data || data.length < batchSize)) {
            _context.n = 4;
            break;
          }
          return _context.a(3, 5);
        case 4:
          offset += batchSize;
          _context.n = 1;
          break;
        case 5:
          return _context.a(2, all.map(normalizeProduct));
      }
    }, _callee);
  }));
  return _fetchAllProductsFromSupabase.apply(this, arguments);
}
function Announcement() {
  var MSGS = [{
    icon: 'local_shipping',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Free delivery'), ' in Virudhachalam — every order, no minimum.')
  }, {
    icon: 'star',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, "\u2605 5.0 on Google."), ' 240 families trust us. Come see why.')
  }, {
    icon: 'storefront',
    text: React.createElement(React.Fragment, null, 'Showroom on ', React.createElement('b', null, 'Junction Road'), " open daily \xB7 10\xA0AM\u2013\u200910\xA0PM")
  }, {
    icon: 'verified',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Every piece hand-checked'), ' at our showroom before it ships.')
  }, {
    icon: 'replay',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, '7-day returns.'), " Don\u2019t love it? Full refund, no questions.")
  }, {
    icon: 'chat',
    text: React.createElement(React.Fragment, null, "WhatsApp us \u2014 a real person replies within ", React.createElement('b', null, "10\xA0minutes."))
  }];
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idx = _React$useState2[0],
    setIdx = _React$useState2[1];
  var _React$useState3 = React.useState('in'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    cls = _React$useState4[0],
    setCls = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    paused = _React$useState6[0],
    setPaused = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    time = _React$useState8[0],
    setTime = _React$useState8[1];

  // Live IST clock
  React.useEffect(function () {
    var tick = function tick() {
      var ist = new Date(new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
      }));
      var h = ist.getHours(),
        m = ist.getMinutes();
      var hh = h % 12 || 12;
      var mm = String(m).padStart(2, '0');
      var ampm = h >= 12 ? 'PM' : 'AM';
      var open = h >= 10 && h < 22;
      setTime((open ? 'Open now' : "Opens 10\xA0AM") + " \xB7 " + hh + ':' + mm + "\xA0" + ampm);
    };
    tick();
    var t = setInterval(tick, 30000);
    return function () {
      return clearInterval(t);
    };
  }, []);

  // Auto-rotate with directional slide
  React.useEffect(function () {
    if (paused) return;
    var t = setInterval(function () {
      setCls('out-up');
      setTimeout(function () {
        setIdx(function (x) {
          return (x + 1) % MSGS.length;
        });
        setCls('out-down');
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return setCls('in');
          });
        });
      }, 460);
    }, 4500);
    return function () {
      return clearInterval(t);
    };
  }, [paused, idx]);
  var goTo = function goTo(n) {
    if (n === idx) return;
    setCls('out-up');
    setTimeout(function () {
      setIdx(n);
      setCls('out-down');
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return setCls('in');
        });
      });
    }, 400);
  };
  return React.createElement('div', {
    className: 'announce',
    onMouseEnter: function onMouseEnter() {
      return setPaused(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setPaused(false);
    }
  }, React.createElement('div', {
    className: 'container announce-bar'
  },
  // Left — live store status
  React.createElement('span', {
    className: 'announce-side'
  }, React.createElement('span', {
    className: 'material-symbols-outlined'
  }, 'storefront'), time || "Junction Road \xB7 Virudhachalam"),
  // Centre — rotating messages
  React.createElement('span', {
    className: 'announce-center'
  }, MSGS.map(function (m, n) {
    return React.createElement('span', {
      key: n,
      className: 'announce-msg ' + (n === idx ? cls : 'out-down')
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, m.icon), m.text);
  })),
  // Right — progress dots + links
  React.createElement('span', {
    className: 'announce-side announce-side--right'
  }, React.createElement('span', {
    className: 'announce-dots'
  }, MSGS.map(function (_, n) {
    return React.createElement('span', {
      key: n,
      className: 'announce-dot' + (n === idx ? ' active' : ''),
      onClick: function onClick() {
        return goTo(n);
      },
      style: {
        cursor: 'pointer'
      }
    });
  })), React.createElement('span', {
    className: 'announce-divider'
  }), React.createElement('a', {
    href: '#',
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, 'Track Order'), React.createElement('span', {
    className: 'announce-divider'
  }), React.createElement('a', {
    href: 'https://wa.me/919789182921',
    target: '_blank',
    rel: 'noreferrer'
  }, 'WhatsApp'))));
}

// ===== Nav ==================================================================
function Nav(_ref5) {
  var route = _ref5.route,
    setRoute = _ref5.setRoute,
    cart = _ref5.cart,
    wishlist = _ref5.wishlist,
    onSearch = _ref5.onSearch;
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    menuOpen = _React$useState0[0],
    setMenuOpen = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    scrolled = _React$useState10[0],
    setScrolled = _React$useState10[1];
  var _React$useState11 = React.useState(0),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    progress = _React$useState12[0],
    setProgress = _React$useState12[1];
  var lastY = React.useRef(0);
  React.useEffect(function () {
    var ticking = false;
    var onScroll = function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;
          var docH = document.documentElement.scrollHeight - window.innerHeight;

          // Scrolled pill state (tighten after 80px)
          setScrolled(y > 80);

          // Progress bar 0–100%
          setProgress(docH > 0 ? Math.min(100, y / docH * 100) : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  var link = function link(id, label) {
    return /*#__PURE__*/React.createElement("a", {
      className: 'nav-link' + (route === id ? ' active' : ''),
      onClick: function onClick(e) {
        e.preventDefault();
        setRoute(id);
      },
      href: "#"
    }, label);
  };
  var mobileLink = function mobileLink(id, label) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'mobile-nav-link' + (route === id ? ' active' : ''),
      onClick: function onClick() {
        setRoute(id);
        setMenuOpen(false);
      }
    }, label);
  };
  var wrapCls = 'nav-wrap' + (scrolled ? ' nav--scrolled' : '');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-progress",
    style: {
      width: progress + '%'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setRoute('home');
    },
    className: "logo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "KGS"), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Home D\xE9cors")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, link('home', 'Home'), link('shop', 'Shop'), link('about', 'Our Story'), link('contact', 'Contact')), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "search")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: function onClick() {
      return setRoute('account');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "person")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: function onClick() {
      return setRoute('wishlist');
    },
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "favorite"), wishlist > 0 && /*#__PURE__*/React.createElement("span", {
    className: "pip"
  }, wishlist)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    onClick: function onClick() {
      return setRoute('cart');
    },
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "shopping_bag"), cart > 0 && /*#__PURE__*/React.createElement("span", {
    className: "pip"
  }, cart)), /*#__PURE__*/React.createElement("button", {
    className: "hamburger-btn",
    onClick: function onClick() {
      return setMenuOpen(true);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "menu"))))), /*#__PURE__*/React.createElement("div", {
    className: 'mobile-nav' + (menuOpen ? ' open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mobile-nav-overlay",
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mobile-nav-panel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-nav-close",
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "close")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: '#1A1A1A',
      marginBottom: 8
    }
  }, "KGS Home D\xE9cors"), mobileLink('home', 'Home'), mobileLink('shop', 'Shop'), mobileLink('wishlist', 'Wishlist'), mobileLink('cart', 'Cart'), mobileLink('about', 'Our Story'), mobileLink('contact', 'Contact'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919789182921",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 0',
      color: '#25D366',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "WhatsApp Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      marginTop: 12,
      lineHeight: 1.6
    }
  }, "185/G Junction Rd", /*#__PURE__*/React.createElement("br", null), "Virudhachalam 606001", /*#__PURE__*/React.createElement("br", null), "10 AM \u2013 10 PM, every day")))));
}

// ===== Trust Strip ==========================================================
function TrustStrip() {
  var item = function item(icon, title, sub) {
    return /*#__PURE__*/React.createElement("div", {
      className: "trust-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "trust-icon"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined"
    }, icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "trust-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "trust-sub"
    }, sub)));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "trust-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-row"
  }, item('local_shipping', 'Free Delivery', 'In Virudhachalam only.'), item('verified', 'Hand-Checked', 'We look at every piece before it ships.'), item('payments', 'Pay How You Like', 'UPI, card, net banking, or COD.'), item('chat', 'Text Us Anytime', 'WhatsApp — we reply fast.'))));
}

// ===== Newsletter ============================================================
function Newsletter() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("section", {
    className: "newsletter"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "New pieces land every month. Be the first to know."), /*#__PURE__*/React.createElement("p", null, "Drop your email. We send one newsletter a month \u2014 new arrivals, sale pieces, and whatever just came in from the showroom.")), /*#__PURE__*/React.createElement("div", {
    className: "newsletter-form"
  }, /*#__PURE__*/React.createElement("input", {
    className: "newsletter-input",
    placeholder: "your@email.com",
    type: "email"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark"
  }, "Subscribe"))));
}

// ===== Footer ================================================================
function Footer(_ref6) {
  var setRoute = _ref6.setRoute;
  var col = function col(title, items) {
    return /*#__PURE__*/React.createElement("div", {
      className: "footer-col"
    }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("ul", null, items.map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        label = _ref8[0],
        route = _ref8[1];
      return /*#__PURE__*/React.createElement("li", {
        key: label
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: function onClick(e) {
          e.preventDefault();
          if (route && setRoute) setRoute(route);
        }
      }, label));
    })));
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      if (setRoute) setRoute('home');
    },
    className: "logo",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark",
    style: {
      color: '#fff'
    }
  }, "KGS"), /*#__PURE__*/React.createElement("span", {
    className: "sub",
    style: {
      color: '#C5A880'
    }
  }, "Home D\xE9cors")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.55)',
      maxWidth: 260,
      lineHeight: 1.75
    }
  }, "Bringing premium, hand-curated home d\xE9cor directly to your doorstep."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.45)',
      marginTop: 10,
      lineHeight: 1.7
    }
  }, "185/G Junction Road", /*#__PURE__*/React.createElement("br", null), "Virudhachalam 606001", /*#__PURE__*/React.createElement("br", null), "Tamil Nadu"), /*#__PURE__*/React.createElement("div", {
    className: "footer-socials"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    title: "Instagram"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 17
    }
  }, "photo_camera")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    title: "Facebook"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 17
    }
  }, "thumb_up")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    title: "YouTube"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 17
    }
  }, "play_circle"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      marginBottom: 12,
      color: '#fff',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontWeight: 600
    }
  }, "Stay in the loop"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.2)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email address...",
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      padding: '10px 14px',
      color: '#fff',
      fontSize: 13,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#C5A880',
      color: '#1A1614',
      border: 'none',
      padding: '0 16px',
      fontWeight: 600,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      cursor: 'pointer'
    }
  }, "Join")))), col('Shop', [['Vases & Décor', 'shop'], ['Fountains & Pooja', 'shop'], ['Chairs & Sofas', 'shop'], ['Lighting', 'shop'], ['Gifts & Hampers', 'shop'], ['Statues & Idols', 'shop']]), col('Help', [['Shipping & Delivery', 'shipping'], ['Returns & Refunds', 'returns'], ['FAQ', null], ['Track Order', null], ['Payment Options', null]]), col('Company & Legal', [['Our Story', 'about'], ['Contact', 'contact'], ['Terms', 'terms'], ['Privacy', 'privacy']]), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Talk to Us"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "mail"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@kgshomedecors.in"
  }, "hello@kgshomedecors.in")), /*#__PURE__*/React.createElement("li", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "call"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+919789182921"
  }, "+91 97891 82921")), /*#__PURE__*/React.createElement("li", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "schedule"), "Every day \xB7 10 AM \u2013 10 PM")), /*#__PURE__*/React.createElement("div", {
    className: "footer-pay",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "VISA"), /*#__PURE__*/React.createElement("span", null, "MC"), /*#__PURE__*/React.createElement("span", null, "UPI"), /*#__PURE__*/React.createElement("span", null, "AMEX"), /*#__PURE__*/React.createElement("span", null, "COD")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KGS Home D\xE9cors, Virudhachalam. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, "Shipping Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    }
  }, "Return Policy")))));
}

// ===== WhatsApp Float ========================================================
function WAFloat() {
  return /*#__PURE__*/React.createElement("a", {
    className: "wa-float",
    href: "https://wa.me/919789182921"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      width: 22,
      height: 22,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
  })), "Chat With Us");
}
Object.assign(window, {
  PRODUCTS: PRODUCTS,
  CATEGORIES: CATEGORIES,
  TESTIMONIALS: TESTIMONIALS,
  IG_TILES: IG_TILES,
  fmtPrice: fmtPrice,
  Announcement: Announcement,
  Nav: Nav,
  TrustStrip: TrustStrip,
  Newsletter: Newsletter,
  Footer: Footer,
  WAFloat: WAFloat
});

// ===== NEXT SCRIPT BLOCK =====

/* KGS Home Décors — Home page sections */

// ====== HERO ================================================================
function Hero(_ref9) {
  var onShop = _ref9.onShop,
    onSellers = _ref9.onSellers;
  var SLIDES = [{
    img: 'assets/lifestyle/showroom_interior.png',
    eyebrow: 'Curated Spaces',
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Elevate your home.", /*#__PURE__*/React.createElement("br", null), "Discover our ", /*#__PURE__*/React.createElement("em", null, "exclusive"), /*#__PURE__*/React.createElement("br", null), "collections."),
    sub: 'Premium interior designs. Free delivery in Virudhachalam only.'
  }, {
    img: 'assets/lifestyle/premium_decor_bright.png',
    eyebrow: 'Modern Elegance',
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Statement pieces", /*#__PURE__*/React.createElement("br", null), "that transform ", /*#__PURE__*/React.createElement("em", null, "ordinary"), /*#__PURE__*/React.createElement("br", null), "into extraordinary."),
    sub: 'Handpicked artifacts, luxury lighting, and elegant decor.'
  }, {
    img: 'assets/lifestyle/room_zen.png',
    eyebrow: 'Heritage Pieces',
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Made the way", /*#__PURE__*/React.createElement("br", null), "things were ", /*#__PURE__*/React.createElement("em", null, "made"), /*#__PURE__*/React.createElement("br", null), "to last."),
    sub: 'Brass. Stone. Slow craft. Every piece hand-checked before it ships.'
  }];
  var _React$useState13 = React.useState(0),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    i = _React$useState14[0],
    setI = _React$useState14[1];
  var s = SLIDES[i];
  var set = function set(n) {
    return setI((n + SLIDES.length) % SLIDES.length);
  };
  React.useEffect(function () {
    var t = setInterval(function () {
      return setI(function (x) {
        return (x + 1) % SLIDES.length;
      });
    }, 6500);
    return function () {
      return clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-slides-indicator"
  }, SLIDES.map(function (_, idx) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: idx
    }, /*#__PURE__*/React.createElement("span", {
      className: idx === i ? 'active' : '',
      onClick: function onClick() {
        return set(idx);
      }
    }, String(idx + 1).padStart(2, '0')), idx < SLIDES.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "rule"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-eyebrow__dot"
  }), s.eyebrow), /*#__PURE__*/React.createElement("h1", null, s.headline), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, s.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onShop
  }, "Browse the Collection", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onSellers
  }, "See Best Sellers")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "500+"), /*#__PURE__*/React.createElement("span", null, "Pieces in stock now")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats__divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "5.0", /*#__PURE__*/React.createElement("span", {
    className: "hero-stats__star"
  }, "\u2605")), /*#__PURE__*/React.createElement("span", null, "240+ on Google")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats__divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Free"), /*#__PURE__*/React.createElement("span", null, "Delivery in Virudhachalam"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-arrows",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow",
    style: {
      position: 'static',
      transform: 'none',
      boxShadow: '0 8px 18px -8px rgba(0,0,0,0.18)'
    },
    onClick: function onClick() {
      return set(i - 1);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_back")), /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow",
    style: {
      position: 'static',
      transform: 'none',
      boxShadow: '0 8px 18px -8px rgba(0,0,0,0.18)'
    },
    onClick: function onClick() {
      return set(i + 1);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    key: s.img,
    src: s.img,
    alt: "",
    style: {
      animation: 'heroFade 700ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-floating-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("b", null, "5.0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5E5B59'
    }
  }, "240+ on Google")), /*#__PURE__*/React.createElement("div", {
    className: "hero-delivery-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_shipping"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Free in Virudhachalam"), /*#__PURE__*/React.createElement("span", null, "Same-day local delivery")))));
}

// ====== CATEGORY GRID =======================================================
function CategoryGrid(_ref0) {
  var _onClick = _ref0.onClick;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Browse"), /*#__PURE__*/React.createElement("h2", null, "What are you looking for?")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick();
    },
    className: "view-all"
  }, "View All ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward"))), /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "cat-card",
      onClick: function onClick() {
        return _onClick(c.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cat-frame"
    }, /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: c.label,
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("div", {
      className: "cat-name"
    }, c.label));
  }))));
}

// ====== PRODUCT CARD ========================================================
function ProductCard(_ref1) {
  var p = _ref1.p,
    onAdd = _ref1.onAdd,
    onView = _ref1.onView,
    wishlisted = _ref1.wishlisted,
    onWishToggle = _ref1.onWishToggle;
  var proof = function () {
    if (p.stock && p.stock <= 4) return {
      tone: 'warm',
      icon: 'local_fire_department',
      text: "Only ".concat(p.stock, " left")
    };
    if (p.sold && p.sold >= 40) return {
      tone: 'ink',
      icon: 'trending_up',
      text: "".concat(p.sold, " sold this week")
    };
    if (p.sold && p.sold >= 20) return {
      tone: 'gold',
      icon: 'visibility',
      text: "".concat(p.sold, " people viewing")
    };
    return null;
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "prod-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-img",
    onClick: function onClick() {
      return onView(p);
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      zIndex: 3,
      alignItems: 'flex-start'
    }
  }, p.badge && /*#__PURE__*/React.createElement("span", {
    className: 'prod-badge' + (p.badgeKind === 'gold' ? ' prod-badge--gold' : p.badgeKind === 'ink' ? ' prod-badge--ink' : p.badgeKind === 'warm' ? ' prod-badge--warm' : '')
  }, p.badge), p.off && /*#__PURE__*/React.createElement("span", {
    className: "prod-off"
  }, p.off)), /*#__PURE__*/React.createElement("button", {
    className: 'heart-btn' + (wishlisted ? ' active' : ''),
    onClick: function onClick(e) {
      e.stopPropagation();
      onWishToggle(p.id);
    },
    "aria-label": "Save to wishlist"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "favorite")), /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "prod-quick",
    onClick: function onClick(e) {
      e.stopPropagation();
      onView(p);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "visibility"), " Quick View")), /*#__PURE__*/React.createElement("div", {
    className: "prod-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-cat"
  }, p.category), /*#__PURE__*/React.createElement("div", {
    className: "prod-name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "prod-rating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1A1A1A'
    }
  }, p.rating.toFixed(1)), " \xB7 ", p.reviews, " reviews"))), /*#__PURE__*/React.createElement("div", {
    className: "prod-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "now"
  }, fmtPrice(p.price)), p.was && /*#__PURE__*/React.createElement("span", {
    className: "was"
  }, fmtPrice(p.was))), proof && /*#__PURE__*/React.createElement("div", {
    className: 'prod-proof prod-proof--' + proof.tone
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, proof.icon), proof.text), /*#__PURE__*/React.createElement("button", {
    className: "prod-cta",
    onClick: function onClick() {
      return onAdd(p);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "shopping_bag"), "Add to Cart"));
}

// ====== BEST SELLERS ========================================================
function BestSellers(_ref10) {
  var onAdd = _ref10.onAdd,
    onView = _ref10.onView,
    wishlist = _ref10.wishlist,
    onWishToggle = _ref10.onWishToggle,
    onShop = _ref10.onShop;
  var _React$useState15 = React.useState(0),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    start = _React$useState16[0],
    setStart = _React$useState16[1];
  var pool = React.useMemo(function () {
    // Prefer products tagged 'Best Seller'; fall back to all if < 8
    var tagged = PRODUCTS.filter(function (p) {
      return p.badge === 'Best Seller';
    });
    var base = tagged.length >= 8 ? tagged : _toConsumableArray(PRODUCTS);
    // Fisher-Yates proper shuffle
    var arr = _toConsumableArray(base);
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref11 = [arr[j], arr[i]];
      arr[i] = _ref11[0];
      arr[j] = _ref11[1];
    }
    return arr;
  }, [onShop]); // re-run after Supabase loads (onShop ref changes via key remount)
  var total = pool.length;
  var view = Array.from({
    length: 4
  }, function (_, k) {
    return pool[(start + k) % total];
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "This week"), /*#__PURE__*/React.createElement("h2", null, "What's flying off the shelves")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      if (onShop) onShop();
    },
    className: "view-all"
  }, "View All ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward"))), /*#__PURE__*/React.createElement("div", {
    className: "carousel-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow left",
    onClick: function onClick() {
      return setStart(function (s) {
        return (s - 1 + total) % total;
      });
    },
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chevron_left")), /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow right",
    onClick: function onClick() {
      return setStart(function (s) {
        return (s + 1) % total;
      });
    },
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chevron_right")), /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-track"
  }, view.map(function (p, idx) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id + '-' + idx,
      p: p,
      onAdd: onAdd,
      onView: onView,
      wishlisted: wishlist.includes(p.id),
      onWishToggle: onWishToggle
    });
  })))));
}

// ====== SHOWROOM VISIT BANNER ================================================
function PromoBanner(_ref12) {
  var onShop = _ref12.onShop;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg, rgba(26,26,26,0.94) 0%, rgba(42,37,34,0.88) 50%, rgba(61,46,31,0.92) 100%), url("assets/lifestyle/showroom.webp") center/cover no-repeat',
      borderRadius: 24,
      padding: '72px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 60,
      flexWrap: 'wrap',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 32px 64px -16px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-10%',
      top: '-20%',
      width: 500,
      height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(184,150,87,0.18) 0%, transparent 60%)',
      filter: 'blur(40px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5%',
      bottom: '-15%',
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(184,150,87,0.12) 0%, transparent 60%)',
      filter: 'blur(30px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: '1 1 400px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(12px)',
      borderRadius: 9999,
      padding: '8px 20px',
      marginBottom: 28,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: '#E8B58A',
      border: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "storefront"), "Showroom Experience"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Crimson Pro', serif",
      fontSize: 'clamp(2.5rem, 4vw, 3rem)',
      fontWeight: 400,
      lineHeight: 1.1,
      color: '#fff',
      marginBottom: 20,
      letterSpacing: '-0.02em'
    }
  }, "Come experience it ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: '#C5A880',
      fontStyle: 'italic',
      fontWeight: 300
    }
  }, "in person.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Jost', sans-serif",
      fontSize: 17,
      color: 'rgba(255,255,255,0.75)',
      lineHeight: 1.6,
      maxWidth: 460,
      marginBottom: 0,
      fontWeight: 300,
      letterSpacing: '0.01em'
    }
  }, "Open every day, 10 AM \u2013 10 PM on Junction Road, Virudhachalam.", /*#__PURE__*/React.createElement("br", null), "No appointment needed. Complimentary parking available.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: '0 0 auto',
      width: 320,
      background: 'rgba(255,255,255,0.03)',
      padding: '32px',
      borderRadius: 20,
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-gold",
    style: {
      textDecoration: 'none',
      width: '100%',
      justifyContent: 'center',
      padding: '16px 0',
      fontSize: 14,
      letterSpacing: 0.5
    }
  }, "Get Directions", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "directions")), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919789182921?text=Hello%20KGS%20Home%20D%C3%A9cors,%20I%20would%20like%20to%20know%20more%20about%20your%20products.",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn",
    style: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textDecoration: 'none',
      width: '100%',
      justifyContent: 'center',
      padding: '16px 0',
      fontSize: 14,
      letterSpacing: 0.5,
      transition: 'all 0.3s ease'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
      e.currentTarget.style.borderColor = '#25D366';
      e.currentTarget.style.color = '#25D366';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.color = '#fff';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
  })), "Chat on WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.7)',
      fontSize: 13,
      marginTop: 4,
      fontWeight: 400,
      fontFamily: "'Jost', sans-serif",
      letterSpacing: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "call"), "+91 97891 82921")))));
}

// ====== TESTIMONIALS ========================================================
function Testimonials() {
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    showReviewModal = _React$useState18[0],
    setShowReviewModal = _React$useState18[1];
  var handleSubmitReview = function handleSubmitReview(e) {
    e.preventDefault();
    setShowReviewModal(false);
    alert("Thank you! Your review has been successfully submitted to the admin portal for approval.");
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Customer Stories"), /*#__PURE__*/React.createElement("h2", null, "What people say once they've moved in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setShowReviewModal(true);
    },
    className: "btn btn-gold",
    style: {
      padding: '12px 24px',
      fontSize: 13
    }
  }, "Write a Review ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "edit")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    className: "view-all"
  }, "All Reviews ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 20
    }
  }, TESTIMONIALS.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.name,
      className: "testimonial"
    }, /*#__PURE__*/React.createElement("div", {
      className: "head-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "avatar"
    }, t.initial), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, t.name), /*#__PURE__*/React.createElement("div", {
      className: "stars"
    }, '★'.repeat(t.stars)))), /*#__PURE__*/React.createElement("div", {
      className: "quote"
    }, "\"", t.quote, "\""));
  }))), showReviewModal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(26,26,26,0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: 40,
      borderRadius: 24,
      width: '100%',
      maxWidth: 480,
      position: 'relative',
      boxShadow: '0 24px 48px -12px rgba(0,0,0,0.2)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowReviewModal(false);
    },
    style: {
      position: 'absolute',
      right: 20,
      top: 20,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 24,
      color: '#5E5B59'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: 28,
      marginBottom: 8,
      color: '#1A1A1A'
    }
  }, "Write a Review"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#5E5B59',
      marginBottom: 24
    }
  }, "Your feedback helps us improve and guides other customers."), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmitReview,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 8,
      color: '#1A1A1A'
    }
  }, "Your Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    required: true,
    style: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: 8,
      fontFamily: '"Jost", sans-serif',
      fontSize: 14
    },
    placeholder: "John Doe"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 8,
      color: '#1A1A1A'
    }
  }, "Rating"), /*#__PURE__*/React.createElement("select", {
    required: true,
    style: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: 8,
      fontFamily: '"Jost", sans-serif',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "\u2605\u2605\u2605\u2605\u2605 (5 Stars)"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "\u2605\u2605\u2605\u2605\u2606 (4 Stars)"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "\u2605\u2605\u2605\u2606\u2606 (3 Stars)"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "\u2605\u2605\u2606\u2606\u2606 (2 Stars)"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "\u2605\u2606\u2606\u2606\u2606 (1 Star)"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 8,
      color: '#1A1A1A'
    }
  }, "Review"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "4",
    style: {
      width: '100%',
      padding: '12px 16px',
      border: '1px solid rgba(26,26,26,0.15)',
      borderRadius: 8,
      fontFamily: '"Jost", sans-serif',
      fontSize: 14,
      resize: 'vertical'
    },
    placeholder: "Tell us about your experience..."
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-dark",
    style: {
      marginTop: 12,
      width: '100%'
    }
  }, "Submit Review"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      textAlign: 'center',
      marginTop: 12
    }
  }, "Reviews are submitted to the admin portal for approval before appearing publicly.")))));
}

// ====== INSTAGRAM ============================================================
function Instagram() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      padding: '24px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 0,
      borderBottom: 'none',
      paddingBottom: 0,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Follow Along"), /*#__PURE__*/React.createElement("h2", null, "Follow us @kgs_home_decor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#5E5B59',
      marginTop: 6
    }
  }, "Real pieces, real rooms, real showroom.")), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/kgs_home_decor",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-cream",
    style: {
      textDecoration: 'none'
    }
  }, "Open Instagram ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "arrow_forward")))));
}

// ====== SHOWROOM ============================================================
function Showroom() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 8,
      overflow: 'hidden',
      height: 480,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/lifestyle/showroom.webp",
    alt: "KGS Showroom",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(0.65)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      color: '#fff',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      marginBottom: 12,
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Virudhachalam"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      lineHeight: 1.1,
      marginBottom: 16
    }
  }, "Experience it in person."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 400,
      margin: '0 auto',
      lineHeight: 1.6
    }
  }, "Visit our showroom on Junction Road to feel the quality, texture, and scale of our pieces firsthand.")))));
}
Object.assign(window, {
  Hero: Hero,
  CategoryGrid: CategoryGrid,
  BestSellers: BestSellers,
  PromoBanner: PromoBanner,
  Testimonials: Testimonials,
  Instagram: Instagram,
  Showroom: Showroom,
  ProductCard: ProductCard
});

// ===== NEXT SCRIPT BLOCK =====

/* KGS Home Décors — Inner pages: Shop, ProductDetail, Cart, Checkout, OrderConfirmation, Wishlist, About, Contact */

// ===== SHARED SUMLINE =======================================================
function Sumline(_ref13) {
  var label = _ref13.label,
    value = _ref13.value,
    note = _ref13.note,
    bold = _ref13.bold;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: bold ? 14 : 13,
      fontWeight: bold ? 600 : 400,
      color: bold ? '#1A1A1A' : '#5E5B59'
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#5E5B59'
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: bold ? '"Crimson Pro",serif' : 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: bold ? '1.4rem' : 14,
      color: '#1A1A1A'
    }
  }, value));
}

// ===== SHOP PAGE ============================================================
function ShopPage(_ref14) {
  var filter = _ref14.filter,
    setFilter = _ref14.setFilter,
    onAdd = _ref14.onAdd,
    onView = _ref14.onView,
    wishlist = _ref14.wishlist,
    onWishToggle = _ref14.onWishToggle;
  var _React$useState19 = React.useState(1),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    page = _React$useState20[0],
    setPage = _React$useState20[1];
  var _React$useState21 = React.useState('default'),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    sort = _React$useState22[0],
    setSort = _React$useState22[1];
  React.useEffect(function () {
    setPage(1);
  }, [filter, sort]);
  var filtered = React.useMemo(function () {
    var list = filter === 'all' ? _toConsumableArray(PRODUCTS) : PRODUCTS.filter(function (p) {
      return (
        // Match by categorySlug (DB slug) first, then fallback to fuzzy label match
        p.categorySlug && p.categorySlug === filter || p.category.toLowerCase().replace(/[^a-z]/g, '').includes(filter.toLowerCase().replace(/[^a-z]/g, ''))
      );
    });
    if (sort === 'price-asc') list = list.sort(function (a, b) {
      return a.price - b.price;
    });else if (sort === 'price-desc') list = list.sort(function (a, b) {
      return b.price - a.price;
    });else if (sort === 'rating') list = list.sort(function (a, b) {
      return b.rating - a.rating;
    });else if (sort === 'newest') list = list.filter(function (p) {
      return p.badge === 'New';
    }).concat(list.filter(function (p) {
      return p.badge !== 'New';
    }));else if (sort === 'popular') list = list.sort(function (a, b) {
      return (b.sold || 0) - (a.sold || 0);
    });
    return list;
  }, [filter, sort]);

  // Use DB category slugs from CATEGORIES array (ordered + labeled)
  // Only show categories that actually have products
  var activeSlugs = new Set(PRODUCTS.map(function (p) {
    return p.categorySlug || p.category;
  }));
  var cats = ['all'].concat(_toConsumableArray(CATEGORIES.filter(function (cat) {
    return activeSlugs.has(cat.id);
  }).map(function (cat) {
    return cat.id;
  })));
  var ITEMS_PER_PAGE = 12;
  var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  var paginatedProducts = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Shop"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '56px 0 36px',
      paddingTop: 'calc(56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "The Collection"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.05,
      letterSpacing: '-0.018em',
      marginBottom: 10
    }
  }, "Our complete collection.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#B89657',
      fontWeight: 400
    }
  }, "Find the one that's yours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      fontSize: 14,
      color: '#5E5B59',
      lineHeight: 1.8
    }
  }, "Everything you see here is in our showroom on Junction Road. Free delivery in Virudhachalam only."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '18px 0',
      borderBottom: '1px solid rgba(197,168,128,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shop-filters-track"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#B89657',
      marginRight: 8
    }
  }, "Explore"), cats.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return setFilter(c);
      },
      style: {
        flexShrink: 0,
        padding: '10px 22px',
        background: filter === c ? '#1A1A1A' : '#FAF8F4',
        color: filter === c ? '#fff' : '#1A1A1A',
        border: '1px solid ' + (filter === c ? '#1A1A1A' : 'rgba(197,168,128,0.25)'),
        borderRadius: 9999,
        fontFamily: 'Jost,sans-serif',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 300ms ease'
      }
    }, function () {
      if (c === 'all') return 'All (' + PRODUCTS.length + ')';
      var count = PRODUCTS.filter(function (p) {
        return p.categorySlug && p.categorySlug === c || p.category.toLowerCase().replace(/[^a-z]/g, '').includes(c.toLowerCase().replace(/[^a-z]/g, ''));
      }).length;
      var catLabel = CATEGORIES.find(function (cat) {
        return cat.id === c;
      });
      return (catLabel ? catLabel.label : c) + (count ? ' (' + count + ')' : '');
    }());
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '40px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#5E5B59'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1A1A1A'
    }
  }, filtered.length), " products", filter !== 'all' && /*#__PURE__*/React.createElement("span", null, " in ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#B89657'
    }
  }, filter))), /*#__PURE__*/React.createElement("select", {
    className: "sort-select",
    value: sort,
    onChange: function onChange(e) {
      return setSort(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "default"
  }, "Sort: Featured"), /*#__PURE__*/React.createElement("option", {
    value: "popular"
  }, "Most Popular"), /*#__PURE__*/React.createElement("option", {
    value: "rating"
  }, "Top Rated"), /*#__PURE__*/React.createElement("option", {
    value: "newest"
  }, "Newest First"), /*#__PURE__*/React.createElement("option", {
    value: "price-asc"
  }, "Price: Low to High"), /*#__PURE__*/React.createElement("option", {
    value: "price-desc"
  }, "Price: High to Low"))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 44,
      color: '#C5A880'
    }
  }, "search_off"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 12,
      fontSize: '1.3rem'
    }
  }, "Nothing here for that filter."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Try a different category or browse everything."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: function onClick() {
      return setFilter('all');
    }
  }, "Show All")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: 20
    }
  }, paginatedProducts.map(function (p) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      onAdd: onAdd,
      onView: onView,
      wishlisted: wishlist.includes(p.id),
      onWishToggle: onWishToggle
    });
  })), totalPages > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPage(function (p) {
        return Math.max(1, p - 1);
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    disabled: page === 1,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid rgba(197,168,128,0.4)',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: page === 1 ? 'not-allowed' : 'pointer',
      opacity: page === 1 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "chevron_left")), Array.from({
    length: totalPages
  }, function (_, i) {
    return i + 1;
  }).map(function (num) {
    if (num === 1 || num === totalPages || num >= page - 1 && num <= page + 1) {
      return /*#__PURE__*/React.createElement("button", {
        key: num,
        onClick: function onClick() {
          setPage(num);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        },
        style: {
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: 'none',
          background: page === num ? '#1A1A1A' : 'transparent',
          color: page === num ? '#fff' : '#1A1A1A',
          fontFamily: 'Jost,sans-serif',
          fontSize: 14,
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 200ms'
        }
      }, num);
    }
    if (num === page - 2 || num === page + 2) {
      return /*#__PURE__*/React.createElement("span", {
        key: num,
        style: {
          color: '#5E5B59',
          padding: '0 4px'
        }
      }, "...");
    }
    return null;
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPage(function (p) {
        return Math.min(totalPages, p + 1);
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    disabled: page === totalPages,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid rgba(197,168,128,0.4)',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: page === totalPages ? 'not-allowed' : 'pointer',
      opacity: page === totalPages ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "chevron_right")))))));
}

// ===== PRODUCT DETAIL =======================================================
function ProductDetail(_ref15) {
  var p = _ref15.p,
    _onAdd = _ref15.onAdd,
    onBack = _ref15.onBack,
    wishlist = _ref15.wishlist,
    onWishToggle = _ref15.onWishToggle;
  var _React$useState23 = React.useState(1),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    qty = _React$useState24[0],
    setQty = _React$useState24[1];
  var _React$useState25 = React.useState(0),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    activeImg = _React$useState26[0],
    setActiveImg = _React$useState26[1];
  if (!p) return null;
  // Build a gallery: use same image multiple times (real data would have multiple angles)
  var gallery = [p.image, p.image, p.image, p.image];
  var FREE_OVER = 5000;
  var lineTotal = p.price * qty;
  var toFree = Math.max(0, FREE_OVER - lineTotal);
  // Match related by categorySlug (exact) then fallback to display label
  var related = PRODUCTS.filter(function (x) {
    return x.id !== p.id && (x.categorySlug && p.categorySlug && x.categorySlug === p.categorySlug || x.category === p.category);
  }).slice(0, 4);
  var moreFromUs = related.length < 4 ? [].concat(_toConsumableArray(related), _toConsumableArray(PRODUCTS.filter(function (x) {
    return x.id !== p.id && !related.includes(x);
  }))).slice(0, 4) : related;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": 'Product / ' + p.name
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '18px 0',
      borderBottom: '1px solid rgba(197,168,128,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      onBack();
    },
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#5E5B59',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_back"), "Back to Shop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: '#5E5B59',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#B89657',
      fontSize: 14
    }
  }, "local_fire_department"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1A1A1A',
      fontWeight: 600
    }
  }, p.sold || 24), "\xA0people picked this up in the last 7 days"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '56px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container pdp-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F3EBDC',
      border: '1px solid rgba(197,168,128,0.30)',
      borderRadius: 18,
      padding: 48,
      aspectRatio: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, p.off && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      background: '#C97840',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.16em',
      padding: '6px 12px',
      borderRadius: 9999,
      textTransform: 'uppercase'
    }
  }, p.off), /*#__PURE__*/React.createElement("img", {
    src: gallery[activeImg],
    alt: p.name,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      transition: 'opacity 220ms ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginTop: 14
    }
  }, gallery.map(function (src, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      onClick: function onClick() {
        return setActiveImg(idx);
      },
      style: {
        aspectRatio: 1,
        background: '#F3EBDC',
        borderRadius: 10,
        overflow: 'hidden',
        border: idx === activeImg ? '2px solid #1A1A1A' : '1px solid rgba(197,168,128,0.30)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        transition: 'border-color 160ms ease'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      loading: "lazy",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#B89657',
      marginBottom: 12
    }
  }, p.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.4rem',
      lineHeight: 1.05,
      letterSpacing: '-0.018em',
      marginBottom: 16
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      background: 'rgba(184,150,87,0.10)',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#B89657',
      letterSpacing: '.14em',
      fontSize: 13
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: '#1A1A1A'
    }
  }, p.rating.toFixed(1)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#5E5B59'
    }
  }, "(", p.reviews, " reviews)")), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#1A1A1A',
      padding: '6px 14px',
      border: '1px solid rgba(26,26,26,0.16)',
      borderRadius: 9999
    }
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.6rem',
      letterSpacing: '-0.01em'
    }
  }, fmtPrice(p.price)), p.was && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: '#5E5B59',
      textDecoration: 'line-through'
    }
  }, fmtPrice(p.was)), p.was && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: '#C97840',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Save ", fmtPrice(p.was - p.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#5E5B59',
      marginBottom: 22
    }
  }, "All taxes included \xB7 Free delivery in Virudhachalam only"), p.stock && p.stock <= 6 && /*#__PURE__*/React.createElement("div", {
    className: "pdp-stock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-stock__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: Math.max(8, p.stock / 20 * 100) + '%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "pdp-stock__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_fire_department"), /*#__PURE__*/React.createElement("b", null, "Only ", p.stock, " left"), " \xB7 restocking takes around 3 weeks")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 28,
      fontSize: 14.5,
      lineHeight: 1.8,
      color: '#5E5B59'
    }
  }, "Made to last \u2014 not just to look good in photos. We checked this one ourselves before listing it. If there's a defect when it arrives, we'll replace it, no argument."), /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_shipping"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Free delivery"), /*#__PURE__*/React.createElement("span", null, "In Virudhachalam only"))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "verified_user"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Hand-checked"), /*#__PURE__*/React.createElement("span", null, "Inspected at our showroom"))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Secure checkout"), /*#__PURE__*/React.createElement("span", null, "UPI \xB7 Cards \xB7 COD")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 14,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid rgba(26,26,26,0.16)',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(Math.max(1, qty - 1));
    },
    style: {
      width: 44,
      height: 50,
      background: 'none',
      border: 'none',
      fontSize: 17,
      cursor: 'pointer'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      textAlign: 'center',
      fontWeight: 500
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(qty + 1);
    },
    style: {
      width: 44,
      height: 50,
      background: 'none',
      border: 'none',
      fontSize: 17,
      cursor: 'pointer'
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    style: {
      flex: 1
    },
    onClick: function onClick() {
      return _onAdd(p, qty);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "shopping_bag"), "Add to Cart \xB7 ", fmtPrice(lineTotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-gold",
    style: {
      width: '100%',
      background: '#25D366',
      borderColor: '#25D366'
    },
    onClick: function onClick() {
      return window.open('https://wa.me/919789182921?text=Hi, I want to ask about: ' + p.name, '_blank');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "Ask on WhatsApp \xB7 We reply fast")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '64px 0 80px',
      borderTop: '1px solid rgba(197,168,128,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Goes Well With"), /*#__PURE__*/React.createElement("h2", null, "You might also like"))), /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-track"
  }, moreFromUs.map(function (rp) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: rp.id,
      p: rp,
      onAdd: function onAdd(prod) {
        return _onAdd(prod, 1);
      },
      onView: function onView() {},
      wishlisted: wishlist && wishlist.includes(rp.id),
      onWishToggle: onWishToggle
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container pdp-sticky-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      objectFit: 'cover',
      background: '#F3EBDC'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 15,
      color: '#1A1A1A',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: '#5E5B59',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#B89657'
    }
  }, "\u2605"), p.rating.toFixed(1), " \xB7 ", p.reviews, " reviews"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 22,
      color: '#1A1A1A',
      lineHeight: 1
    }
  }, fmtPrice(lineTotal)), p.was && qty === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      textDecoration: 'line-through'
    }
  }, fmtPrice(p.was))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid rgba(26,26,26,0.16)',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(Math.max(1, qty - 1));
    },
    style: {
      width: 34,
      height: 40,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 500
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(qty + 1);
    },
    style: {
      width: 34,
      height: 40,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: function onClick() {
      return _onAdd(p, qty);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "shopping_bag"), "Add to Cart")))));
}

// ===== CART PAGE ============================================================
function CartPage(_ref16) {
  var cart = _ref16.cart,
    onChangeQty = _ref16.onChangeQty,
    onRemove = _ref16.onRemove,
    onCheckout = _ref16.onCheckout,
    onBack = _ref16.onBack;
  var items = cart.map(function (ci) {
    return _objectSpread(_objectSpread({}, ci), {}, {
      product: PRODUCTS.find(function (p) {
        return p.id === ci.id;
      })
    });
  }).filter(function (ci) {
    return ci.product;
  });
  var subtotal = items.reduce(function (s, ci) {
    return s + ci.product.price * ci.qty;
  }, 0);
  var FREE_OVER = 5000;
  var delivery = subtotal >= FREE_OVER ? 0 : 250;
  var toFree = Math.max(0, FREE_OVER - subtotal);
  var progress = Math.min(100, Math.round(subtotal / FREE_OVER * 100));
  var total = subtotal + delivery;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Cart"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.6rem',
      letterSpacing: '-0.015em'
    }
  }, "Your Cart"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, items.length === 0 ? 'Nothing in here yet.' : items.length + ' item' + (items.length > 1 ? 's' : '') + ' · ' + fmtPrice(subtotal) + ' subtotal'))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '48px 0 96px'
    },
    className: items.length > 0 ? 'cart-section-bottom' : ''
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 48,
      color: '#C5A880'
    }
  }, "shopping_bag"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 12,
      fontSize: '1.4rem'
    }
  }, "Your cart is empty."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 24
    }
  }, "Browse the collection and pick a few things you like."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onBack
  }, "Go to Shop")) : /*#__PURE__*/React.createElement("div", {
    className: "cart-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cart-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-progress__head"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#B89657'
    }
  }, "local_shipping"), /*#__PURE__*/React.createElement("b", null, "Free delivery"), " \xB7 in Virudhachalam only"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 14,
      overflow: 'hidden'
    }
  }, items.map(function (ci, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: ci.id,
      className: "cart-item-row",
      style: {
        borderBottom: idx < items.length - 1 ? '1px solid rgba(197,168,128,0.20)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 104,
        height: 104,
        background: '#F3EBDC',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ci.product.image,
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        fontWeight: 600,
        color: '#B89657',
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        marginBottom: 4
      }
    }, ci.product.category), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 17,
        color: '#1A1A1A',
        marginBottom: 8
      }
    }, ci.product.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: '#5E5B59',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 14,
        color: '#25D366'
      }
    }, "check_circle"), "In stock \xB7 ships within 24 hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(26,26,26,0.16)',
        borderRadius: 9999
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onChangeQty(ci.id, Math.max(1, ci.qty - 1));
      },
      style: {
        width: 32,
        height: 34,
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        textAlign: 'center',
        fontSize: 12.5,
        fontWeight: 500
      }
    }, ci.qty), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onChangeQty(ci.id, ci.qty + 1);
      },
      style: {
        width: 32,
        height: 34,
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }, "+")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onRemove(ci.id);
      },
      style: {
        background: 'none',
        border: 'none',
        color: '#5E5B59',
        fontSize: 10,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, "Remove"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 20
      }
    }, fmtPrice(ci.product.price * ci.qty)), ci.product.was && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#5E5B59',
        textDecoration: 'line-through'
      }
    }, fmtPrice(ci.product.was * ci.qty))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "cart-badges"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Secure checkout"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "replay"), "7-day returns"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "verified_user"), "Hand-checked"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "payments"), "UPI \xB7 Cards \xB7 COD"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 14,
      padding: 26,
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 18
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement(Sumline, {
    label: "Subtotal",
    value: fmtPrice(subtotal)
  }), /*#__PURE__*/React.createElement(Sumline, {
    label: "Delivery",
    value: delivery === 0 ? 'FREE' : fmtPrice(delivery),
    note: delivery === 0 ? 'Ships complimentary' : 'Free over ₹5,000'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F3EBDC',
      borderRadius: 10,
      padding: 12,
      marginTop: 12,
      fontSize: 12,
      color: '#5E5B59',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#B89657',
      fontSize: 18
    }
  }, "schedule"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1A1A1A'
    }
  }, "3\u20137 days"), " across India. Same-day or next-day in Virudhachalam.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(197,168,128,0.30)',
      marginTop: 14,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement(Sumline, {
    label: "Total",
    value: fmtPrice(total),
    bold: true
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    style: {
      width: '100%',
      marginTop: 20
    },
    onClick: onCheckout
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Proceed to Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      textAlign: 'center',
      marginTop: 12
    }
  }, "By placing the order you agree to our", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#1A1A1A',
      textDecoration: 'underline'
    }
  }, "Terms"), ' ', "and", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#1A1A1A',
      textDecoration: 'underline'
    }
  }, "Return Policy"), "."))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta__label"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta__total"
  }, fmtPrice(total))), /*#__PURE__*/React.createElement("button", {
    className: "cart-mobile-cta__btn",
    onClick: onCheckout
  }, "Checkout", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_forward"))));
}

// ===== CHECKOUT PAGE ========================================================
function CheckoutPage(_ref17) {
  var cart = _ref17.cart,
    onPlaceOrder = _ref17.onPlaceOrder,
    onBack = _ref17.onBack;
  var items = cart.map(function (ci) {
    return _objectSpread(_objectSpread({}, ci), {}, {
      product: PRODUCTS.find(function (p) {
        return p.id === ci.id;
      })
    });
  }).filter(function (ci) {
    return ci.product;
  });
  var subtotal = items.reduce(function (s, ci) {
    return s + ci.product.price * ci.qty;
  }, 0);
  var FREE_OVER = 5000;
  var delivery = subtotal >= FREE_OVER ? 0 : 250;
  var total = subtotal + delivery;
  var _React$useState27 = React.useState({
      name: '',
      phone: '',
      address: '',
      city: '',
      state: 'Tamil Nadu',
      pincode: ''
    }),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    form = _React$useState28[0],
    setForm = _React$useState28[1];
  var _React$useState29 = React.useState('upi'),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    payment = _React$useState30[0],
    setPayment = _React$useState30[1];
  var _React$useState31 = React.useState({}),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    errors = _React$useState32[0],
    setErrors = _React$useState32[1];
  var update = function update(k, v) {
    return setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, v));
    });
  };
  var validate = function validate() {
    var e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim()) {
      e.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!form.address.trim()) e.address = 'Delivery address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.pincode.trim()) {
      e.pincode = 'PIN code is required';
    } else if (!/^\d{6}$/.test(form.pincode.trim())) {
      e.pincode = 'Enter a valid 6-digit PIN code';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    if (validate()) onPlaceOrder(form, payment);
  };
  var inputStyle = function inputStyle(k) {
    return {
      padding: '12px 18px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 14,
      color: '#1A1A1A',
      background: errors[k] ? 'rgba(192,57,43,0.04)' : '#FAFAF8',
      border: '1px solid ' + (errors[k] ? '#C0392B' : 'rgba(197,168,128,0.35)'),
      borderRadius: 10,
      outline: 'none',
      width: '100%',
      transition: 'border-color 200ms'
    };
  };
  var errMsg = function errMsg(k) {
    return errors[k] ? React.createElement('span', {
      style: {
        fontSize: 11,
        color: '#C0392B',
        marginTop: 4,
        display: 'block',
        letterSpacing: '.02em'
      }
    }, errors[k]) : null;
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Checkout"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '36px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#5E5B59',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_back"), "Back to Cart"), /*#__PURE__*/React.createElement("div", {
    className: "checkout-steps",
    style: {
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__dot done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 15
    }
  }, "check")), /*#__PURE__*/React.createElement("span", {
    className: "checkout-step__label"
  }, "Cart")), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__line done"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__dot active"
  }, "2"), /*#__PURE__*/React.createElement("span", {
    className: "checkout-step__label active"
  }, "Delivery")), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__dot pending"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "checkout-step__label"
  }, "Payment"))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 'clamp(1.8rem,4vw,2.6rem)',
      letterSpacing: '-0.015em',
      marginTop: 16
    }
  }, "Almost there."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 14
    }
  }, "Fill in your address and pick how you'd like to pay."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '48px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "checkout-form-section",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Delivery details"), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    "aria-invalid": !!errors.name,
    style: inputStyle('name'),
    placeholder: "Meena Krishnamurthy",
    value: form.name,
    onChange: function onChange(e) {
      return update('name', e.target.value);
    }
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone (WhatsApp)"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('phone'),
    placeholder: "+91 98765 43210",
    type: "tel",
    value: form.phone,
    onChange: function onChange(e) {
      return update('phone', e.target.value);
    }
  }), errors.phone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "Address line 1"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('address'),
    placeholder: "25, Gandhi Street, Virudhachalam",
    value: form.address,
    onChange: function onChange(e) {
      return update('address', e.target.value);
    }
  }), errors.address && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.address)), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "City"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('city'),
    placeholder: "Virudhachalam",
    value: form.city,
    onChange: function onChange(e) {
      return update('city', e.target.value);
    }
  }), errors.city && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.city)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "State"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('state'),
    placeholder: "Tamil Nadu",
    value: form.state,
    onChange: function onChange(e) {
      return update('state', e.target.value);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-field",
    style: {
      maxWidth: 200
    }
  }, /*#__PURE__*/React.createElement("label", null, "Pincode"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('pincode'),
    placeholder: "606001",
    maxLength: 6,
    value: form.pincode,
    onChange: function onChange(e) {
      return update('pincode', e.target.value);
    }
  }), errors.pincode && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.pincode))), /*#__PURE__*/React.createElement("div", {
    className: "checkout-form-section"
  }, /*#__PURE__*/React.createElement("h3", null, "How do you want to pay?"), [{
    id: 'upi',
    icon: 'payment',
    label: 'UPI',
    sub: 'Google Pay, PhonePe, Paytm, or any UPI app'
  }, {
    id: 'card',
    icon: 'credit_card',
    label: 'Card',
    sub: 'Debit or credit card — Visa, Mastercard, Amex'
  }, {
    id: 'cod',
    icon: 'local_shipping',
    label: 'Cash on Delivery',
    sub: 'Pay when it arrives at your door'
  }].map(function (opt) {
    return /*#__PURE__*/React.createElement("div", {
      key: opt.id,
      className: 'payment-option' + (payment === opt.id ? ' selected' : ''),
      onClick: function onClick() {
        return setPayment(opt.id);
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "payment",
      value: opt.id,
      checked: payment === opt.id,
      onChange: function onChange() {
        return setPayment(opt.id);
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: payment === opt.id ? '#1A1A1A' : '#C5A880',
        fontSize: 22
      }
    }, opt.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "payment-option-label"
    }, opt.label), /*#__PURE__*/React.createElement("div", {
      className: "payment-option-sub"
    }, opt.sub)));
  }), payment === 'upi' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '20px',
      background: '#FAF8F4',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 12,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 140,
      background: '#E4DDD4',
      borderRadius: 8,
      margin: '0 auto 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 56,
      color: '#C5A880'
    }
  }, "qr_code_2")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: '#5E5B59'
    }
  }, "Scan with any UPI app"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#8E7449',
      marginTop: 4,
      fontWeight: 600
    }
  }, "kgs@upi")))), /*#__PURE__*/React.createElement("div", {
    className: "checkout-summary"
  }, /*#__PURE__*/React.createElement("h3", null, "Your order"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 18
    }
  }, items.map(function (ci) {
    return /*#__PURE__*/React.createElement("div", {
      key: ci.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        background: '#F3EBDC',
        borderRadius: 8,
        overflow: 'hidden',
        flexShrink: 0,
        padding: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ci.product.image,
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#1A1A1A',
        lineHeight: 1.25,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, ci.product.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: '#5E5B59',
        marginTop: 2
      }
    }, "Qty: ", ci.qty)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 15,
        color: '#1A1A1A',
        flexShrink: 0
      }
    }, fmtPrice(ci.product.price * ci.qty)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(197,168,128,0.25)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement(Sumline, {
    label: "Subtotal",
    value: fmtPrice(subtotal)
  }), /*#__PURE__*/React.createElement(Sumline, {
    label: "Delivery",
    value: delivery === 0 ? 'FREE' : fmtPrice(delivery),
    note: delivery === 0 ? 'Ships free' : 'Free over ₹5,000'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(197,168,128,0.25)',
      marginTop: 10,
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(Sumline, {
    label: "Total",
    value: fmtPrice(total),
    bold: true
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-dark",
    style: {
      width: '100%',
      marginTop: 20,
      padding: '16px 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Place Order"), /*#__PURE__*/React.createElement("div", {
    className: "checkout-trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Secure payment", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(26,26,26,0.20)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_shipping"), "Free delivery", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(26,26,26,0.20)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "verified"), "Hand-checked")))))));
}

// ===== ORDER CONFIRMATION ===================================================
function OrderConfirmationPage(_ref18) {
  var cart = _ref18.cart,
    onKeepShopping = _ref18.onKeepShopping;
  var orderNum = React.useMemo(function () {
    return 'KGS-' + Math.floor(10000 + Math.random() * 90000);
  }, []);
  var items = cart.map(function (ci) {
    return _objectSpread(_objectSpread({}, ci), {}, {
      product: PRODUCTS.find(function (p) {
        return p.id === ci.id;
      })
    });
  }).filter(function (ci) {
    return ci.product;
  });
  var total = items.reduce(function (s, ci) {
    return s + ci.product.price * ci.qty;
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Order Confirmation"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '64px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-confirm-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined order-confirm-icon",
    style: {
      fontVariationSettings: '"FILL" 1, "wght" 300'
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("h1", null, "Your order is placed."), /*#__PURE__*/React.createElement("div", {
    className: "order-num"
  }, "Order #", orderNum), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#5E5B59',
      lineHeight: 1.85,
      maxWidth: 500,
      margin: '0 auto 28px'
    }
  }, "We'll WhatsApp you the tracking link. It usually ships within 24 hours \u2014 if there's any delay, we'll let you know first."), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 16,
      padding: 24,
      maxWidth: 500,
      margin: '0 auto 32px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#8E7449',
      marginBottom: 16
    }
  }, "What you ordered"), items.map(function (ci) {
    return /*#__PURE__*/React.createElement("div", {
      key: ci.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        paddingBottom: 12,
        borderBottom: '1px solid rgba(197,168,128,0.15)',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        background: '#F3EBDC',
        borderRadius: 8,
        overflow: 'hidden',
        flexShrink: 0,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ci.product.image,
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#1A1A1A'
      }
    }, ci.product.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: '#5E5B59'
      }
    }, "Qty: ", ci.qty)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#1A1A1A'
      }
    }, fmtPrice(ci.product.price * ci.qty)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, "Total paid"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '1.2rem'
    }
  }, fmtPrice(total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onKeepShopping
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "storefront"), "Keep Shopping"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    style: {
      background: '#25D366',
      borderColor: '#25D366',
      color: '#fff',
      textDecoration: 'none'
    },
    href: 'https://wa.me/919789182921?text=Hi, my order number is ' + orderNum + '. Can I get a tracking update?'
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "WhatsApp to Track"))))));
}

// ===== WISHLIST PAGE ========================================================
function WishlistPage(_ref19) {
  var wishlist = _ref19.wishlist,
    onAdd = _ref19.onAdd,
    onView = _ref19.onView,
    onWishToggle = _ref19.onWishToggle,
    onShop = _ref19.onShop;
  var items = PRODUCTS.filter(function (p) {
    return wishlist.includes(p.id);
  });
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Wishlist"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '56px 0 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "Saved Items"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.8rem',
      lineHeight: 1.05,
      letterSpacing: '-0.018em'
    }
  }, "Things you saved."), items.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, items.length, " item", items.length !== 1 ? 's' : '', " saved"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '48px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "wishlist-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "favorite"), /*#__PURE__*/React.createElement("h3", null, "Nothing saved yet."), /*#__PURE__*/React.createElement("p", null, "Browse the collection and tap the heart on anything you like. It'll show up here."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onShop
  }, "Browse the Collection")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 20
    }
  }, items.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      p: p,
      onAdd: onAdd,
      onView: onView,
      wishlisted: true,
      onWishToggle: onWishToggle
    }));
  }))))));
}

// ===== ABOUT PAGE ===========================================================
function AboutPage(_ref20) {
  var onShop = _ref20.onShop;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '80px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 16
    }
  }, "Virudhachalam \xB7 Junction Road"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.08,
      letterSpacing: '-0.018em',
      marginBottom: 20
    }
  }, "Curating the finest pieces,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#B89657',
      fontWeight: 400
    }
  }, "right here at home.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "KGS Home D\xE9cors started on Junction Road, Virudhachalam. We had a simple vision: to bring premium, high-end furniture and d\xE9cor directly to our community, offering uncompromising quality and timeless design."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/lifestyle/showroom_interior.webp",
    alt: "KGS showroom interior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "Our Story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.3rem',
      lineHeight: 1.1,
      marginBottom: 22
    }
  }, "Built on Junction Road.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#B89657',
      fontWeight: 400
    }
  }, "Here every day.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 16,
      fontSize: 14.5,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "When we started, we had a small space and a few hundred pieces. We'd travel to pick things ourselves \u2014 Rajasthan for brass, Pune for ceramics, local artisans for handmade pieces. If we wouldn't put it in our own home, we didn't stock it."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 16,
      fontSize: 14.5,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "We have 500+ pieces on the floor at any time, a team that genuinely loves what we sell, and customers who keep coming back. We ship pan-India now, but we still answer the WhatsApp ourselves."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 28,
      fontSize: 14.5,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "If you're ever in Virudhachalam, come in. We're open every day from 10 to 10. No appointment needed."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onShop
  }, "Browse the Collection", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 28
    }
  }, [{
    num: '500+',
    label: 'Pieces in stock',
    sub: 'Every single one checked before it goes on the floor.'
  }, {
    num: '5.0★',
    label: 'On Google',
    sub: '240 families have left a review. We reply to every one.'
  }, {
    num: '100%',
    label: 'Hand-Checked Quality',
    sub: 'Every piece inspected at our showroom before it reaches you.'
  }, {
    num: 'Free',
    label: 'Delivery in Virudhachalam',
    sub: 'Every order, no minimum.'
  }].map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.num,
      style: {
        background: 'rgba(255,255,255,0.75)',
        borderRadius: 18,
        padding: '32px 28px',
        border: '1px solid rgba(197,168,128,0.30)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: '2.4rem',
        color: '#1A1A1A',
        marginBottom: 6
      }
    }, card.num), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: '#1A1A1A',
        marginBottom: 6
      }
    }, card.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: '#5E5B59',
        lineHeight: 1.65
      }
    }, card.sub));
  })))));
}

// ===== CONTACT PAGE =========================================================
function ContactPage() {
  var _React$useState33 = React.useState(false),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    sent = _React$useState34[0],
    setSent = _React$useState34[1];
  var _React$useState35 = React.useState({
      name: '',
      phone: '',
      message: ''
    }),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    form = _React$useState36[0],
    setForm = _React$useState36[1];
  var update = function update(k, v) {
    return setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, v));
    });
  };
  var handleSend = function handleSend(e) {
    e.preventDefault();
    if (form.name && form.phone && form.message) setSent(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '72px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 680,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "Say Hello"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.8rem',
      letterSpacing: '-0.015em',
      marginBottom: 16
    }
  }, "Talk to us like a neighbour."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#5E5B59',
      lineHeight: 1.8
    }
  }, "No bots. No ticket numbers. We're in the shop every day \u2014 WhatsApp us, call us, or drop in."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '56px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontSize: 24,
      marginBottom: 20
    }
  }, "Send us a message"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 24px',
      background: 'rgba(37,211,102,0.08)',
      border: '1px solid rgba(37,211,102,0.25)',
      borderRadius: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 44,
      color: '#25D366',
      fontVariationSettings: '"FILL" 1',
      display: 'block',
      marginBottom: 10
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontSize: 20,
      marginBottom: 8
    }
  }, "Got it. We'll reply shortly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: '#5E5B59'
    }
  }, "Usually within the hour during shop hours (10 AM \u2013 10 PM).")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSend,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#5E5B59'
    }
  }, "Your name"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Meena R.",
    value: form.name,
    onChange: function onChange(e) {
      return update('name', e.target.value);
    },
    required: true,
    style: {
      padding: '12px 18px',
      border: '1px solid rgba(197,168,128,0.35)',
      borderRadius: 10,
      fontFamily: 'Jost,sans-serif',
      fontSize: 14,
      background: '#fff',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#5E5B59'
    }
  }, "Phone or WhatsApp"), /*#__PURE__*/React.createElement("input", {
    placeholder: "+91 98765 43210",
    type: "tel",
    value: form.phone,
    onChange: function onChange(e) {
      return update('phone', e.target.value);
    },
    required: true,
    style: {
      padding: '12px 18px',
      border: '1px solid rgba(197,168,128,0.35)',
      borderRadius: 10,
      fontFamily: 'Jost,sans-serif',
      fontSize: 14,
      background: '#fff',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#5E5B59'
    }
  }, "What do you need?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    placeholder: "I'm looking for a 3-seater sofa that fits a 10-foot wall...",
    value: form.message,
    onChange: function onChange(e) {
      return update('message', e.target.value);
    },
    required: true,
    style: {
      padding: '12px 18px',
      border: '1px solid rgba(197,168,128,0.35)',
      borderRadius: 10,
      fontFamily: 'Jost,sans-serif',
      fontSize: 14,
      background: '#fff',
      outline: 'none',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-dark"
  }, "Send Message"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    style: {
      background: '#25D366',
      borderColor: '#25D366',
      color: '#fff',
      textDecoration: 'none'
    },
    href: "https://wa.me/919789182921"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "WhatsApp Instead")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    icon: 'location_on',
    title: 'Find Us',
    body: '185/G Junction Road, Virudhachalam, Tamil Nadu 606001'
  }, {
    icon: 'schedule',
    title: 'Hours',
    body: 'Every day · 10:00 AM – 10:00 PM. Free parking out front.'
  }, {
    icon: 'call',
    title: 'Call',
    body: '+91 97891 82921'
  }, {
    icon: 'chat',
    title: 'WhatsApp',
    body: 'Send a message and we\'ll reply — usually within the hour.'
  }].map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.title,
      style: {
        display: 'flex',
        gap: 16,
        padding: '18px 20px',
        background: '#fff',
        border: '1px solid rgba(197,168,128,0.25)',
        borderRadius: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: '#C5A880',
        fontSize: 22,
        flexShrink: 0,
        marginTop: 2
      }
    }, card.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: '#1A1A1A',
        marginBottom: 5
      }
    }, card.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: '#5E5B59',
        lineHeight: 1.65
      }
    }, card.body)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: 'url(assets/lifestyle/showroom_interior.webp) center/cover',
      borderRadius: 14
    }
  })))));
}
Object.assign(window, {
  ShopPage: ShopPage,
  ProductDetail: ProductDetail,
  CartPage: CartPage,
  CheckoutPage: CheckoutPage,
  OrderConfirmationPage: OrderConfirmationPage,
  WishlistPage: WishlistPage,
  AboutPage: AboutPage,
  ContactPage: ContactPage,
  Sumline: Sumline
});

// ===== SEARCH DRAWER ========================================================
function SearchDrawer(_ref21) {
  var open = _ref21.open,
    onClose = _ref21.onClose,
    onView = _ref21.onView;
  var _React$useState37 = React.useState(''),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    query = _React$useState38[0],
    setQuery = _React$useState38[1];
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    if (open) {
      setQuery('');
      setTimeout(function () {
        return inputRef.current && inputRef.current.focus();
      }, 360);
    }
  }, [open]);
  var results = React.useMemo(function () {
    if (!query.trim()) return [];
    var q = query.toLowerCase();
    return PRODUCTS.filter(function (p) {
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.categorySlug && p.categorySlug.includes(q);
    }).slice(0, 12);
  }, [query]);

  // Popular tags = actual category labels from DB
  var popular = CATEGORIES.length > 0 ? CATEGORIES.map(function (cat) {
    return cat.label;
  }) : ['Wall Décor', 'Décor', 'Vases', 'Furniture', 'Gifts', 'Lighting'];
  return /*#__PURE__*/React.createElement("div", {
    className: 'search-overlay' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-overlay__bg",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "search-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "search-input",
    placeholder: "Search products, categories\u2026",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Escape' && onClose();
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    className: "search-clear",
    onClick: function onClick() {
      return setQuery('');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "close")), /*#__PURE__*/React.createElement("button", {
    className: "search-clear",
    onClick: onClose,
    style: {
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#5E5B59'
    }
  }, "Cancel"))), query.trim() === '' ? /*#__PURE__*/React.createElement("div", {
    className: "search-popular"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-popular__label"
  }, "Popular Searches"), /*#__PURE__*/React.createElement("div", {
    className: "search-popular__tags"
  }, popular.map(function (tag) {
    return /*#__PURE__*/React.createElement("button", {
      key: tag,
      className: "search-tag",
      onClick: function onClick() {
        return setQuery(tag);
      }
    }, tag);
  }))) : results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "search-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 36,
      color: '#C5A880',
      display: 'block',
      marginBottom: 10
    }
  }, "search_off"), "No results for \"", /*#__PURE__*/React.createElement("b", null, query), "\"", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12.5,
      color: '#8E7449'
    }
  }, "Try a different keyword or browse categories")) : /*#__PURE__*/React.createElement("div", {
    className: "search-results"
  }, results.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "search-result-item",
      onClick: function onClick() {
        onView(p);
        onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "search-result-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: p.name,
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "search-result-cat"
    }, p.category), /*#__PURE__*/React.createElement("div", {
      className: "search-result-name"
    }, p.name)), /*#__PURE__*/React.createElement("div", {
      className: "search-result-price"
    }, fmtPrice(p.price)));
  })))));
}

// ===== MOBILE BOTTOM NAVIGATION =============================================
function MobileBottomNav(_ref22) {
  var route = _ref22.route,
    setRoute = _ref22.setRoute,
    cartCount = _ref22.cartCount,
    onSearch = _ref22.onSearch;
  var items = [{
    id: 'home',
    icon: 'home',
    label: 'Home'
  }, {
    id: 'search',
    icon: 'search',
    label: 'Search'
  }, {
    id: 'wishlist',
    icon: 'favorite',
    label: 'Saved'
  }, {
    id: 'cart',
    icon: 'shopping_bag',
    label: 'Cart'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "mobile-bottom-nav",
    "aria-label": "Main navigation"
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: 'mobile-bottom-nav__item' + (route === it.id ? ' active' : ''),
      onClick: function onClick() {
        return it.id === 'search' ? onSearch() : setRoute(it.id);
      },
      "aria-label": it.label
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined"
    }, it.icon), it.id === 'cart' && cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      className: "mobile-bottom-nav__pip"
    }, cartCount > 9 ? '9+' : cartCount), /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(window, {
  SearchDrawer: SearchDrawer,
  MobileBottomNav: MobileBottomNav
});

// ===== NEXT SCRIPT BLOCK =====

/* KGS Home Décors — App root: routing + global state */

function Toast(_ref23) {
  var msg = _ref23.msg,
    show = _ref23.show;
  return /*#__PURE__*/React.createElement("div", {
    className: 'toast ' + (show ? 'toast--in' : 'toast--out')
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#25D366',
      fontVariationSettings: '"FILL" 1'
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("span", null, msg));
}
function App() {
  var _React$useState39 = React.useState('home'),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    route = _React$useState40[0],
    setRoute = _React$useState40[1];
  var _React$useState41 = React.useState('all'),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    filter = _React$useState42[0],
    setFilter = _React$useState42[1];
  var _React$useState43 = React.useState(function () {
      try {
        return JSON.parse(localStorage.getItem('kgs_cart') || '[]');
      } catch (_unused) {
        return [];
      }
    }),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    cart = _React$useState44[0],
    setCart = _React$useState44[1];
  var _React$useState45 = React.useState(function () {
      try {
        return JSON.parse(localStorage.getItem('kgs_wish') || '[]');
      } catch (_unused2) {
        return [];
      }
    }),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    wishlist = _React$useState46[0],
    setWish = _React$useState46[1];
  var _React$useState47 = React.useState(null),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    viewing = _React$useState48[0],
    setView = _React$useState48[1];
  var _React$useState49 = React.useState({
      msg: '',
      show: false
    }),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    toast = _React$useState50[0],
    setToast = _React$useState50[1];
  // Preserve cart through checkout so confirmation can show it
  var _React$useState51 = React.useState([]),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    lastCart = _React$useState52[0],
    setLastCart = _React$useState52[1];
  // Search state
  var _React$useState53 = React.useState(false),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    searchOpen = _React$useState54[0],
    setSearchOpen = _React$useState54[1];
  // Supabase live products (replaces hardcoded PRODUCTS after fetch)
  var _React$useState55 = React.useState(false),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    productsReady = _React$useState56[0],
    setProductsReady = _React$useState56[1];
  var _React$useState57 = React.useState(false),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    productsError = _React$useState58[0],
    setProductsError = _React$useState58[1];
  var _React$useReducer = React.useReducer(function (x) {
      return x + 1;
    }, 0),
    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
    _forceUpdate = _React$useReducer2[1];
  React.useEffect(function () {
    if (typeof window.supabase === 'undefined') {
      setProductsReady(true); // use fallback silently
      return;
    }
    fetchAllProductsFromSupabase().then(function (live) {
      if (live && live.length > 0) {
        PRODUCTS = live;
        // Update CATEGORIES to only include cats with actual products
        // Keep categories that have live products (match on slug)
        var liveSlugs = new Set(live.map(function (p) {
          return p.categorySlug;
        }));
        CATEGORIES = CATEGORIES.filter(function (cat) {
          return liveSlugs.has(cat.id);
        });
      }
      // Clean up cart items whose IDs no longer exist
      setCart(function (prev) {
        return prev.filter(function (ci) {
          return PRODUCTS.some(function (p) {
            return p.id === ci.id;
          });
        });
      });
      setProductsReady(true);
      _forceUpdate();
    })["catch"](function (err) {
      console.warn('[KGS] Supabase fetch failed, using local data:', err.message);
      setProductsReady(true);
      setProductsError(true);
    });
  }, []);

  // ─── GSAP Animation System ──────────────────────────────────────────
  // Skills: gsap-core · gsap-timeline · gsap-scrolltrigger · gsap-react
  //         gsap-performance · gsap-plugins · gsap-utils · gsap-frameworks
  React.useEffect(function () {
    if (typeof gsap === 'undefined') return;

    // Kill all existing ScrollTriggers when route changes (gsap-react cleanup)
    ScrollTrigger.getAll().forEach(function (t) {
      return t.kill();
    });
    setTimeout(function () {
      return ScrollTrigger.refresh();
    }, 500);
    setTimeout(function () {
      return ScrollTrigger.refresh();
    }, 2000);
    if (route !== 'home') return;
    var ctx;
    var timer = setTimeout(function () {
      ctx = gsap.context(function () {
        // ── 1. Hero Entrance Timeline (gsap-core + gsap-timeline) ──────
        // Performance: only transform + opacity (gsap-performance rule)
        var heroEl = document.querySelector('.hero');
        if (heroEl) {
          var tl = gsap.timeline({
            defaults: {
              ease: 'power3.out',
              duration: 0.7
            }
          });
          tl.fromTo('.hero-eyebrow', {
            y: 22
          }, {
            y: 0,
            opacity: 1,
            duration: 0.55
          }).fromTo('.hero h1', {
            y: 38
          }, {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power4.out'
          }, '-=0.25').fromTo('.hero-sub', {
            y: 22
          }, {
            y: 0,
            opacity: 1,
            duration: 0.6
          }, '-=0.5').fromTo('.hero-ctas .btn', {
            y: 20
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.13,
            duration: 0.5
          }, '-=0.4').fromTo('.hero-stats', {
            y: 16
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5
          }, '-=0.3').fromTo('.hero-slides-indicator', {
            x: -12
          }, {
            x: 0,
            opacity: 1,
            duration: 0.5
          }, '-=0.6')
          // Hero photo scales in — gsap-timeline position param
          .fromTo('.hero-photo', {
            scale: 1.06
          }, {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out'
          }, 0.1)
          // Floating chip pops in last
          .fromTo('.hero-floating-chip, .hero-delivery-chip', {
            scale: 0.88,
            opacity: 1,
            y: 10
          }, {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.55,
            ease: 'back.out(1.6)'
          }, '-=0.5');
        }

        // ── 2. Trust Strip (gsap-scrolltrigger stagger) ───────────────
        var trustStrip = document.querySelector('.trust-strip');
        if (trustStrip) {
          gsap.fromTo('.trust-item', {
            y: 28
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: trustStrip,
              start: 'top 88%',
              once: true
            }
          });
        }

        // ── 3. Section headings — staggered reveal (gsap-scrolltrigger) ─
        document.querySelectorAll('.section-head').forEach(function (el) {
          gsap.fromTo(el, {
            y: 32
          }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true
            }
          });
        });

        // ── 4. Best Sellers cards — stagger (gsap-scrolltrigger) ──────
        var bsTrack = document.querySelector('.best-sellers-track');
        if (bsTrack) {
          gsap.fromTo('.best-sellers-track .prod-card', {
            y: 44
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.09,
            duration: 0.65,
            scrollTrigger: {
              trigger: bsTrack,
              start: 'top 82%',
              once: true
            }
          });
        }

        // ── 5. Category grid — scale+fade stagger (gsap-utils.toArray) ─
        var catGrid = document.querySelector('.cat-grid');
        if (catGrid) {
          // gsap-utils: toArray for safe NodeList handling
          var cats = gsap.utils.toArray('.cat-card');
          gsap.fromTo(cats, {
            y: 30,
            opacity: 1,
            scale: 0.94
          }, {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.055,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: catGrid,
              start: 'top 83%',
              once: true
            }
          });
        }

        // ── 6. Why-KGS cards — cascade (gsap-timeline + scrolltrigger) ─
        var whyGrid = document.querySelector('.why-grid');
        if (whyGrid) {
          gsap.fromTo('.why-card', {
            y: 40
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.11,
            duration: 0.65,
            scrollTrigger: {
              trigger: whyGrid,
              start: 'top 82%',
              once: true
            }
          });
        }

        // ── 7. Promo/offer banner parallax scrub (gsap-scrolltrigger) ──
        var promoPhoto = document.querySelector('.promo-photo img');
        if (promoPhoto) {
          gsap.to(promoPhoto, {
            yPercent: -14,
            ease: 'none',
            scrollTrigger: {
              trigger: '.promo',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8 // gsap-scrolltrigger: scrub for buttery parallax
            }
          });
        }

        // ── 8. Promo copy entrance (gsap-timeline) ────────────────────
        var promoSection = document.querySelector('.promo-copy');
        if (promoSection) {
          var promoTl = gsap.timeline({
            scrollTrigger: {
              trigger: '.promo',
              start: 'top 78%',
              once: true
            }
          });
          promoTl.fromTo('.promo-eyebrow', {
            x: -20
          }, {
            x: 0,
            opacity: 1,
            duration: 0.5
          }).fromTo('.promo-headline', {
            y: 30
          }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power4.out'
          }, '-=0.2').fromTo('.promo-cta-row .btn, .promo-cta-row a', {
            y: 18
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5
          }, '-=0.3');
        }

        // ── 9. Testimonials stagger (gsap-scrolltrigger) ──────────────
        var testimonialSection = document.querySelector('.testimonials-wrap, [class*="testimonial"]');
        if (testimonialSection) {
          gsap.fromTo('.testimonial', {
            y: 36
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.65,
            scrollTrigger: {
              trigger: testimonialSection,
              start: 'top 82%',
              once: true
            }
          });
        }

        // ── 10. Instagram grid — fast stagger (gsap-utils) ────────────
        var igGrid = document.querySelector('.ig-grid');
        if (igGrid) {
          var tiles = gsap.utils.toArray('.ig-tile');
          gsap.fromTo(tiles, {
            opacity: 1,
            scale: 0.92
          }, {
            opacity: 1,
            scale: 1,
            stagger: 0.04,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: igGrid,
              start: 'top 85%',
              once: true
            }
          });
        }

        // ── 11. Newsletter section (gsap-scrolltrigger) ───────────────
        var newsletter = document.querySelector('.newsletter');
        if (newsletter) {
          gsap.fromTo(newsletter, {
            y: 30,
            opacity: 1,
            scale: 0.98
          }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            scrollTrigger: {
              trigger: newsletter,
              start: 'top 85%',
              once: true
            }
          });
        }

        // ── 12. Footer entrance (gsap-scrolltrigger) ──────────────────
        var footer = document.querySelector('.footer');
        if (footer) {
          gsap.fromTo(footer, {
            y: 24
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: footer,
              start: 'top 92%',
              once: true
            }
          });
        }

        // ── 13. Scroll-progress bar in nav (gsap-scrolltrigger scrub) ──
        var progressBar = document.querySelector('.nav-progress');
        if (progressBar) {
          gsap.to(progressBar, {
            width: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0 // instant sync (gsap-performance: no scrub lag on simple progress)
            }
          });
        }
      }); // end gsap.context
    }, 250); // wait for React render

    return function () {
      clearTimeout(timer);
      if (ctx) ctx.revert(); // gsap-react: full cleanup including ScrollTriggers
    };
  }, [route]);
  var cartCount = cart.reduce(function (s, c) {
    return s + c.qty;
  }, 0);
  React.useEffect(function () {
    try {
      localStorage.setItem('kgs_cart', JSON.stringify(cart));
    } catch (_unused3) {}
  }, [cart]);
  React.useEffect(function () {
    try {
      localStorage.setItem('kgs_wish', JSON.stringify(wishlist));
    } catch (_unused4) {}
  }, [wishlist]);
  var showToast = function showToast(msg) {
    setToast({
      msg: msg,
      show: true
    });
    setTimeout(function () {
      return setToast(function (t) {
        return _objectSpread(_objectSpread({}, t), {}, {
          show: false
        });
      });
    }, 2200);
  };
  var handleAdd = function handleAdd(p) {
    var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    setCart(function (prev) {
      var ex = prev.find(function (c) {
        return c.id === p.id;
      });
      if (ex) return prev.map(function (c) {
        return c.id === p.id ? _objectSpread(_objectSpread({}, c), {}, {
          qty: c.qty + qty
        }) : c;
      });
      return [].concat(_toConsumableArray(prev), [{
        id: p.id,
        qty: qty
      }]);
    });
    showToast('Added to cart');
  };
  var handleView = function handleView(p) {
    setView(p);
    setRoute('product');
    window.scrollTo(0, 0);
  };
  var handleWishToggle = function handleWishToggle(id) {
    setWish(function (prev) {
      return prev.includes(id) ? prev.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(prev), [id]);
    });
  };
  var handleCheckout = function handleCheckout() {
    setRoute('checkout');
  };
  var handlePlaceOrder = function handlePlaceOrder(formData, paymentMethod) {
    setLastCart(_toConsumableArray(cart));
    setCart([]);
    setRoute('order-confirmation');
    window.scrollTo(0, 0);
  };
  React.useEffect(function () {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [route]);

  // Render current page body
  var body = null;
  if (route === 'home') {
    body = /*#__PURE__*/React.createElement("div", {
      "data-screen-label": "Home"
    }, /*#__PURE__*/React.createElement(Hero, {
      onShop: function onShop() {
        return setRoute('shop');
      },
      onSellers: function onSellers() {
        setFilter('all');
        setRoute('shop');
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(TrustStrip, null)), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(CategoryGrid, {
      onClick: function onClick(slug) {
        if (slug) setFilter(slug);
        setRoute('shop');
        window.scrollTo(0, 0);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(BestSellers, {
      key: 'bs-' + productsReady,
      onAdd: handleAdd,
      onView: handleView,
      wishlist: wishlist,
      onWishToggle: handleWishToggle,
      onShop: function onShop() {
        return setRoute('shop');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(PromoBanner, {
      onShop: function onShop() {
        return setRoute('shop');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(Testimonials, null)), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(Instagram, null)), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(Showroom, null)));
  } else if (route === 'shop') {
    body = /*#__PURE__*/React.createElement(ShopPage, {
      key: 'shop-' + productsReady,
      filter: filter,
      setFilter: setFilter,
      onAdd: handleAdd,
      onView: handleView,
      wishlist: wishlist,
      onWishToggle: handleWishToggle
    });
  } else if (route === 'product') {
    body = /*#__PURE__*/React.createElement(ProductDetail, {
      p: viewing,
      onAdd: handleAdd,
      onBack: function onBack() {
        return setRoute('shop');
      },
      wishlist: wishlist,
      onWishToggle: handleWishToggle
    });
  } else if (route === 'cart') {
    body = /*#__PURE__*/React.createElement(CartPage, {
      cart: cart,
      onChangeQty: function onChangeQty(id, qty) {
        return setCart(function (prev) {
          return prev.map(function (c) {
            return c.id === id ? _objectSpread(_objectSpread({}, c), {}, {
              qty: qty
            }) : c;
          });
        });
      },
      onRemove: function onRemove(id) {
        return setCart(function (prev) {
          return prev.filter(function (c) {
            return c.id !== id;
          });
        });
      },
      onCheckout: handleCheckout,
      onBack: function onBack() {
        return setRoute('shop');
      }
    });
  } else if (route === 'checkout') {
    body = /*#__PURE__*/React.createElement(CheckoutPage, {
      cart: cart,
      onPlaceOrder: handlePlaceOrder,
      onBack: function onBack() {
        return setRoute('cart');
      }
    });
  } else if (route === 'order-confirmation') {
    body = /*#__PURE__*/React.createElement(OrderConfirmationPage, {
      cart: lastCart,
      onKeepShopping: function onKeepShopping() {
        return setRoute('shop');
      }
    });
  } else if (route === 'wishlist') {
    body = /*#__PURE__*/React.createElement(WishlistPage, {
      wishlist: wishlist,
      onAdd: handleAdd,
      onView: handleView,
      onWishToggle: handleWishToggle,
      onShop: function onShop() {
        return setRoute('shop');
      }
    });
  } else if (route === 'about') {
    body = /*#__PURE__*/React.createElement(AboutPage, {
      onShop: function onShop() {
        return setRoute('shop');
      }
    });
  } else if (route === 'contact') {
    body = /*#__PURE__*/React.createElement(ContactPage, null);
  } else if (route === 'account') {
    // If we had a real auth state, we'd check it here. For the prototype, we just go to login or dashboard.
    body = /*#__PURE__*/React.createElement(AccountDashboardPage, {
      onLogout: function onLogout() {
        return setRoute('home');
      },
      onShop: function onShop() {
        return setRoute('shop');
      }
    });
  } else if (route === 'login') {
    body = /*#__PURE__*/React.createElement(AccountLoginPage, {
      onRegister: function onRegister() {
        return setRoute('register');
      },
      onLogin: function onLogin() {
        return setRoute('account');
      }
    });
  } else if (route === 'register') {
    body = /*#__PURE__*/React.createElement(AccountRegisterPage, {
      onLogin: function onLogin() {
        return setRoute('login');
      },
      onRegister: function onRegister() {
        return setRoute('account');
      }
    });
  } else if (route === 'privacy') {
    body = /*#__PURE__*/React.createElement(PrivacyPolicyPage, null);
  } else if (route === 'terms') {
    body = /*#__PURE__*/React.createElement(TermsPage, null);
  } else if (route === 'returns') {
    body = /*#__PURE__*/React.createElement(ReturnPolicyPage, null);
  } else if (route === 'shipping') {
    body = /*#__PURE__*/React.createElement(ShippingPolicyPage, null);
  } else {
    body = /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '60vh'
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Announcement, null), /*#__PURE__*/React.createElement(Nav, {
    route: route,
    setRoute: setRoute,
    cart: cartCount,
    wishlist: wishlist.length,
    onSearch: function onSearch() {
      return setSearchOpen(true);
    }
  }), /*#__PURE__*/React.createElement("main", {
    className: "page-body"
  }, body), /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(WAFloat, null), /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    show: toast.show
  }), /*#__PURE__*/React.createElement(SearchDrawer, {
    open: searchOpen,
    onClose: function onClose() {
      return setSearchOpen(false);
    },
    onView: function onView(p) {
      handleView(p);
    }
  }), /*#__PURE__*/React.createElement(MobileBottomNav, {
    route: route,
    setRoute: setRoute,
    cartCount: cartCount,
    onSearch: function onSearch() {
      return setSearchOpen(true);
    }
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
