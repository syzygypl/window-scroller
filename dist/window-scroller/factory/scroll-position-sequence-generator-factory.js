"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var scroll_position_sequence_generator_1 = require("../generator/scroll-position-sequence-generator");

var ScrollPositionSequenceGeneratorFactory = function () {
    function ScrollPositionSequenceGeneratorFactory() {
        _classCallCheck(this, ScrollPositionSequenceGeneratorFactory);
    }

    _createClass(ScrollPositionSequenceGeneratorFactory, [{
        key: "create",
        value: function create(startPoint, endPoint, period, duration, scrollPositionCalculatorFunction) {
            return new scroll_position_sequence_generator_1.default(startPoint, endPoint, period, duration, scrollPositionCalculatorFunction);
        }
    }]);

    return ScrollPositionSequenceGeneratorFactory;
}();

exports.default = ScrollPositionSequenceGeneratorFactory;