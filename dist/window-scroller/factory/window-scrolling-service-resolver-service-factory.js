"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
var custom_scroll_position_calculator_function_1 = require("../calculator/custom-scroll-position-calculator-function");
var default_scroll_position_calculator_function_1 = require("../calculator/default-scroll-position-calculator-function");
var default_scroll_period_resolver_1 = require("../resolver/scroll-period-resolver/default-scroll-period-resolver");
var default_scroll_position_calculator_function_position_resolver_1 = require("../resolver/scroll-position-calculator-function-resolver/default-scroll-position-calculator-function-position-resolver");
var window_scrolling_element_resolver_1 = require("../resolver/window-scrolling-element-resolver/window-scrolling-element-resolver");
var window_scrolling_service_resolver_service_1 = require("../service/window-scrolling-service-resolver-service");
var util_1 = require("util");

var WindowScrollingServiceResolverServiceFactory = function () {
    function WindowScrollingServiceResolverServiceFactory() {
        _classCallCheck(this, WindowScrollingServiceResolverServiceFactory);
    }

    _createClass(WindowScrollingServiceResolverServiceFactory, [{
        key: "createFromConfiguration",
        value: function createFromConfiguration(configuration) {
            return new window_scrolling_service_resolver_service_1.default(this.createWindowScrollElementResolver(), this.createScrollPeriodResolver(configuration), this.createScrollPositionCalculatorFunctionResolver(configuration));
        }
    }, {
        key: "createWindowScrollElementResolver",
        value: function createWindowScrollElementResolver() {
            return new window_scrolling_element_resolver_1.default();
        }
    }, {
        key: "createScrollPeriodResolver",
        value: function createScrollPeriodResolver(configuration) {
            return new default_scroll_period_resolver_1.default(configuration.getScrollPeriod());
        }
    }, {
        key: "createScrollPositionCalculatorFunctionResolver",
        value: function createScrollPositionCalculatorFunctionResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getScrollPositionCalculatorFunction())) {
                return new default_scroll_position_calculator_function_position_resolver_1.default(new custom_scroll_position_calculator_function_1.default(configuration.getScrollPositionCalculatorFunction()));
            }
            return new default_scroll_position_calculator_function_position_resolver_1.default(new default_scroll_position_calculator_function_1.default());
        }
    }]);

    return WindowScrollingServiceResolverServiceFactory;
}();

exports.default = WindowScrollingServiceResolverServiceFactory;