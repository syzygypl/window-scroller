"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var DefaultScrollPositionCalculatorFunctionResolver = function () {
    function DefaultScrollPositionCalculatorFunctionResolver(calculatorFunction) {
        _classCallCheck(this, DefaultScrollPositionCalculatorFunctionResolver);

        this.calculatorFunction = calculatorFunction;
    }

    _createClass(DefaultScrollPositionCalculatorFunctionResolver, [{
        key: "resolve",
        value: function resolve() {
            return this.calculatorFunction;
        }
    }]);

    return DefaultScrollPositionCalculatorFunctionResolver;
}();

exports.default = DefaultScrollPositionCalculatorFunctionResolver;