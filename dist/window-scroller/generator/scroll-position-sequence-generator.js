"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ScrollPositionSequenceGenerator = function () {
    function ScrollPositionSequenceGenerator(startPoint, endPoint, period, duration, scrollPositionCalculatorFunction) {
        _classCallCheck(this, ScrollPositionSequenceGenerator);

        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.period = period;
        this.duration = duration;
        this.scrollPositionCalculatorFunction = scrollPositionCalculatorFunction;
        this.diff = endPoint - startPoint;
        this.spentTime = 0;
    }

    _createClass(ScrollPositionSequenceGenerator, [{
        key: "next",
        value: function next() {
            this.spentTime += this.period;
            return this.scrollPositionCalculatorFunction.calculate(this.spentTime, this.startPoint, this.diff, this.duration);
        }
    }, {
        key: "isFinished",
        value: function isFinished() {
            return this.duration < this.spentTime;
        }
    }]);

    return ScrollPositionSequenceGenerator;
}();

exports.default = ScrollPositionSequenceGenerator;