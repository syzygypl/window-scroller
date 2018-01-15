"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
var logic_component_resolver_function_1 = require("../../../abstract/logic-component-resolver-function");
var util_1 = require("util");
/* tslint:enable:max-line-length */

var CustomElementScrollPositionResolver = function (_logic_component_reso) {
    _inherits(CustomElementScrollPositionResolver, _logic_component_reso);

    function CustomElementScrollPositionResolver() {
        _classCallCheck(this, CustomElementScrollPositionResolver);

        return _possibleConstructorReturn(this, (CustomElementScrollPositionResolver.__proto__ || Object.getPrototypeOf(CustomElementScrollPositionResolver)).apply(this, arguments));
    }

    _createClass(CustomElementScrollPositionResolver, [{
        key: "resolve",
        value: function resolve(element, windowScrollingElement, offsetResolver) {
            return this.callResolverFunction(element, windowScrollingElement, offsetResolver);
        }
    }, {
        key: "checkReturnedValue",
        value: function checkReturnedValue(result) {
            if (!util_1.isNumber(result)) {
                throw new Error("Resolving element position: function return type is not number");
            } else if (result < 0) {
                throw new Error("Resolving element position: function return value mus be higher that 0");
            }
        }
    }]);

    return CustomElementScrollPositionResolver;
}(logic_component_resolver_function_1.default);

exports.default = CustomElementScrollPositionResolver;