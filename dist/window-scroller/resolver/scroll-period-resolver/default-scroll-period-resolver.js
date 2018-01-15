"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var DefaultScrollPeriodResolver = function () {
    function DefaultScrollPeriodResolver(period) {
        _classCallCheck(this, DefaultScrollPeriodResolver);

        this.period = period;
    }

    _createClass(DefaultScrollPeriodResolver, [{
        key: "resolve",
        value: function resolve() {
            return this.period;
        }
    }]);

    return DefaultScrollPeriodResolver;
}();

exports.default = DefaultScrollPeriodResolver;