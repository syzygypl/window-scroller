"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
var custom_element_by_anchor_resolver_1 = require("../resolver/element-by-anchor-resolver/custom-element-by-anchor-resolver");
var default_element_by_anchor_resolver_1 = require("../resolver/element-by-anchor-resolver/default-element-by-anchor-resolver");
var custom_element_linking_anchor_resolver_1 = require("../resolver/element-link-anchor-resolver/custom-element-linking-anchor-resolver");
var default_element_linking_anchor_resolver_1 = require("../resolver/element-link-anchor-resolver/default-element-linking-anchor-resolver");
var custom_linking_elements_resolver_1 = require("../resolver/linking-elements-resolver/custom-linking-elements-resolver");
var default_linking_elements_resolver_1 = require("../resolver/linking-elements-resolver/default-linking-elements-resolver");
var window_scroller_resolver_service_1 = require("../service/window-scroller-resolver-service");
var util_1 = require("util");
/* tslint:enable:max-line-length */

var WindowScrollerResolverServiceFactory = function () {
    function WindowScrollerResolverServiceFactory() {
        _classCallCheck(this, WindowScrollerResolverServiceFactory);
    }

    _createClass(WindowScrollerResolverServiceFactory, [{
        key: "createFromConfiguration",
        value: function createFromConfiguration(configuration) {
            return new window_scroller_resolver_service_1.default(this.createLinkingElementsResolver(configuration), this.createElementLinkingAnchorResolver(configuration), this.createElementByAnchorResolver(configuration));
        }
    }, {
        key: "createLinkingElementsResolver",
        value: function createLinkingElementsResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getLinkingElementsResolver())) {
                return new custom_linking_elements_resolver_1.default(configuration.getLinkingElementsResolver());
            }
            return new default_linking_elements_resolver_1.default(configuration.getSelector());
        }
    }, {
        key: "createElementLinkingAnchorResolver",
        value: function createElementLinkingAnchorResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getElementLinkingAnchorResolver())) {
                return new custom_element_linking_anchor_resolver_1.default(configuration.getElementLinkingAnchorResolver());
            }
            return new default_element_linking_anchor_resolver_1.default(configuration.getLocationAttribute());
        }
    }, {
        key: "createElementByAnchorResolver",
        value: function createElementByAnchorResolver(configuration) {
            if (!util_1.isNullOrUndefined(configuration.getElementByAnchorResolver())) {
                return new custom_element_by_anchor_resolver_1.default(configuration.getElementByAnchorResolver());
            }
            return new default_element_by_anchor_resolver_1.default();
        }
    }]);

    return WindowScrollerResolverServiceFactory;
}();

exports.default = WindowScrollerResolverServiceFactory;