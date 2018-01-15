"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
var util_1 = require("util");
var custom_element_scroll_duration_resolver_1 = require("../resolver/element-scroll-duration-resolver/custom-element-scroll-duration-resolver");
var default_element_scroll_duration_resolver_1 = require("../resolver/element-scroll-duration-resolver/default-element-scroll-duration-resolver");
var custom_element_scroll_position_resolver_1 = require("../resolver/element-scroll-position-resolver/custom-element-scroll-position-resolver");
var default_element_scroll_position_resolver_1 = require("../resolver/element-scroll-position-resolver/default-element-scroll-position-resolver");
var custom_scroll_default_position_resolver_1 = require("../resolver/scroll-default-position-resolver/custom-scroll-default-position-resolver");
var default_scroll_default_position_resolver_1 = require("../resolver/scroll-default-position-resolver/default-scroll-default-position-resolver");
var custom_scroll_offset_position_resolver_1 = require("../resolver/scroll-offset-position-resolver/custom-scroll-offset-position-resolver");
var default_scroll_offset_position_resolver_1 = require("../resolver/scroll-offset-position-resolver/default-scroll-offset-position-resolver");
var window_scrolling_element_resolver_1 = require("../resolver/window-scrolling-element-resolver/window-scrolling-element-resolver");
var to_element_scroller_resolver_service_1 = require("../service/to-element-scroller-resolver-service");

var ToElementScrollerResolverServiceFactory = function () {
    function ToElementScrollerResolverServiceFactory() {
        _classCallCheck(this, ToElementScrollerResolverServiceFactory);
    }

    _createClass(ToElementScrollerResolverServiceFactory, [{
        key: "createFromConfiguration",
        value: function createFromConfiguration(configuration) {
            return new to_element_scroller_resolver_service_1.default(this.createScrollDefaultPositionResolver(configuration), this.createElementScrollPositionResolver(configuration), this.createScrollOffsetPositionResolver(configuration), this.createElementScrollDurationResolver(configuration), new window_scrolling_element_resolver_1.default());
        }
    }, {
        key: "createScrollDefaultPositionResolver",
        value: function createScrollDefaultPositionResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getScrollDefaultPositionResolver())) {
                return new custom_scroll_default_position_resolver_1.CustomScrollDefaultPositionResolver(configuration.getScrollDefaultPositionResolver());
            }
            return new default_scroll_default_position_resolver_1.default(configuration.getScrollDefaultPosition());
        }
    }, {
        key: "createElementScrollPositionResolver",
        value: function createElementScrollPositionResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getElementScrollPositionResolver())) {
                return new custom_element_scroll_position_resolver_1.default(configuration.getElementScrollPositionResolver());
            }
            return new default_element_scroll_position_resolver_1.default();
        }
    }, {
        key: "createScrollOffsetPositionResolver",
        value: function createScrollOffsetPositionResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getScrollOffsetResolver())) {
                return new custom_scroll_offset_position_resolver_1.default(configuration.getScrollOffsetResolver());
            }
            return new default_scroll_offset_position_resolver_1.default(configuration.getOffset());
        }
    }, {
        key: "createElementScrollDurationResolver",
        value: function createElementScrollDurationResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getElementScrollDurationResolver())) {
                return new custom_element_scroll_duration_resolver_1.default(configuration.getElementScrollDurationResolver());
            }
            return new default_element_scroll_duration_resolver_1.default(configuration.getScrollDuration());
        }
    }]);

    return ToElementScrollerResolverServiceFactory;
}();

exports.default = ToElementScrollerResolverServiceFactory;