"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:enable:max-line-length */

var WindowScrollingServiceResolverService = function () {
    function WindowScrollingServiceResolverService(windowScrollingElementResolver, scrollPeriodResolver, scrollPositionCalculatorFunctionResolver) {
        _classCallCheck(this, WindowScrollingServiceResolverService);

        this.windowScrollingElementResolver = windowScrollingElementResolver;
        this.scrollPeriodResolver = scrollPeriodResolver;
        this.scrollPositionCalculatorFunctionResolver = scrollPositionCalculatorFunctionResolver;
    }

    _createClass(WindowScrollingServiceResolverService, [{
        key: "resolveWindowScrollingElement",
        value: function resolveWindowScrollingElement() {
            return this.windowScrollingElementResolver.resolve();
        }
    }, {
        key: "resolveScrollPeriod",
        value: function resolveScrollPeriod() {
            return this.scrollPeriodResolver.resolve();
        }
    }, {
        key: "resolveScrollPositionCalculatorFunction",
        value: function resolveScrollPositionCalculatorFunction() {
            return this.scrollPositionCalculatorFunctionResolver.resolve();
        }
    }]);

    return WindowScrollingServiceResolverService;
}();

exports.default = WindowScrollingServiceResolverService;