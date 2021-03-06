"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var logic_component_resolver_function_1 = require("../../../abstract/logic-component-resolver-function");
var util_1 = require("util");

var CustomScrollPeriodResolver = function (_logic_component_reso) {
    _inherits(CustomScrollPeriodResolver, _logic_component_reso);

    function CustomScrollPeriodResolver() {
        _classCallCheck(this, CustomScrollPeriodResolver);

        return _possibleConstructorReturn(this, (CustomScrollPeriodResolver.__proto__ || Object.getPrototypeOf(CustomScrollPeriodResolver)).apply(this, arguments));
    }

    _createClass(CustomScrollPeriodResolver, [{
        key: "resolve",
        value: function resolve() {
            return this.callResolverFunction();
        }
    }, {
        key: "checkReturnedValue",
        value: function checkReturnedValue(result) {
            if (!util_1.isNumber(result)) {
                throw new Error("Resolving scroll period: function return type must be number");
            } else if (result < 20) {
                throw new Error("Resolving scroll period: function return value must be higher that 20");
            }
        }
    }]);

    return CustomScrollPeriodResolver;
}(logic_component_resolver_function_1.default);

exports.default = CustomScrollPeriodResolver;