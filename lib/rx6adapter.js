"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rxjs = require("rxjs");

var _operators = require("rxjs/operators");

var handler = {
  get: function get(obj, key) {
    return obj.hasOwnProperty(key) ? obj[key] : _rxjs.Observable;
  }
};

var ObservableProxy = new Proxy({
  merge: _rxjs.merge,
  scan: _operators.scan,
  interval: _rxjs.interval,
  map: _operators.map,
  debounce: _operators.debounce,
  pluck: _operators.pluck,
  take: _operators.take,
  of: _rxjs.of
}, handler);

exports.default = {

  Rx: {
    Observable: ObservableProxy,
    Subject: _rxjs.Subject,
    ReplaySubject: _rxjs.ReplaySubject,
    BehaviorSubject: _rxjs.BehaviorSubject
  },

  next: function next(o, value) {
    o.next(value);
  },
  isObservable: function isObservable(obj) {
    return obj && (0, _rxjs.isObservable)(obj);
  },
  unsubscribe: function unsubscribe(subscription) {
    subscription.unsubscribe();
  }
};
module.exports = exports["default"];