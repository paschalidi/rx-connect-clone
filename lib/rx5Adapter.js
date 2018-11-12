"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rxjsV = require("rxjs-v5");

require("rxjs-v5/add/observable/of");

require("rxjs-v5/add/observable/interval");

require("rxjs-v5/add/observable/merge");

var _operators = require("rxjs-v5/operators");

var _symbolObservable = require("symbol-observable");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handler = {
  get: function get(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : _rxjsV.Observable;
  }
};

var ObservableProxy = new Proxy({
  scan: _operators.scan,
  debounce: _operators.debounce,
  map: _operators.map,
  pluck: _operators.pluck,
  take: _operators.take,
  interval: _rxjsV.Observable.interval,
  merge: _rxjsV.Observable.merge,
  of: _rxjsV.Observable.of
}, handler);

exports.default = {

  Rx: {
    Observable: ObservableProxy,
    Subject: _rxjsV.Subject,
    ReplaySubject: _rxjsV.ReplaySubject,
    BehaviorSubject: _rxjsV.BehaviorSubject
  },

  next: function next(o, value) {
    o.next(value);
  },
  isObservable: function isObservable(obj) {
    return obj && typeof obj[_symbolObservable2.default] === 'function';
  },
  unsubscribe: function unsubscribe(subscription) {
    subscription.unsubscribe();
  }
};
module.exports = exports["default"];