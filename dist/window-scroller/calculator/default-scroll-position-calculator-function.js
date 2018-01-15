"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var DefaultScrollPositionCalculatorFunction = function () {
    function DefaultScrollPositionCalculatorFunction() {
        _classCallCheck(this, DefaultScrollPositionCalculatorFunction);
    }

    _createClass(DefaultScrollPositionCalculatorFunction, [{
        key: "calculate",
        value: function calculate(spentTime, startPoint, difference, duration) {
            spentTime /= duration / 2;
            if (spentTime < 1) {
                return difference / 2 * spentTime * spentTime + startPoint;
            }
            spentTime--;
            return -difference / 2 * (spentTime * (spentTime - 2) - 1) + startPoint;
        }
    }]);

    return DefaultScrollPositionCalculatorFunction;
}();

exports.default = DefaultScrollPositionCalculatorFunction;