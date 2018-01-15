"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var LogicComponentResolverFunction = function () {
    function LogicComponentResolverFunction(resolverFunction) {
        _classCallCheck(this, LogicComponentResolverFunction);

        this.resolverFunction = resolverFunction;
    }

    _createClass(LogicComponentResolverFunction, [{
        key: "callResolverFunction",
        value: function callResolverFunction() {
            var result = this.resolverFunction.apply(this, arguments);
            this.checkReturnedValue(result);
            return result;
        }
    }]);

    return LogicComponentResolverFunction;
}();

exports.default = LogicComponentResolverFunction;