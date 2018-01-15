"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:max-line-length */
var logic_component_configuration_validator_1 = require("../../abstract/logic-component-configuration-validator");
var class_validator_1 = require("class-validator");
var scroll_position_sequence_generator_factory_1 = require("../factory/scroll-position-sequence-generator-factory");
var to_element_scroller_factory_1 = require("../factory/to-element-scroller-factory");
var to_element_scroller_resolver_service_factory_1 = require("../factory/to-element-scroller-resolver-service-factory");
var window_scroller_configuration_factory_1 = require("../factory/window-scroller-configuration-factory");
var window_scroller_factory_1 = require("../factory/window-scroller-factory");
var window_scroller_resolver_service_factory_1 = require("../factory/window-scroller-resolver-service-factory");
var window_scrolling_service_factory_1 = require("../factory/window-scrolling-service-factory");
var window_scrolling_service_resolver_service_factory_1 = require("../factory/window-scrolling-service-resolver-service-factory");
/* tslint:enable:max-line-length */

var DependencyContainer = function () {
    function DependencyContainer() {
        _classCallCheck(this, DependencyContainer);
    }

    _createClass(DependencyContainer, [{
        key: "createWindowScrollerFactory",
        value: function createWindowScrollerFactory() {
            return new window_scroller_factory_1.default(this.createWindowScrollerConfigurationFactory(), this.createWindowScrollerResolverServiceFactory(), this.createToElementScrollerFactory());
        }
    }, {
        key: "createWindowScrollerConfigurationFactory",
        value: function createWindowScrollerConfigurationFactory() {
            return new window_scroller_configuration_factory_1.default(this.createWindowScrollerConfigurationValidator());
        }
    }, {
        key: "createWindowScrollerConfigurationValidator",
        value: function createWindowScrollerConfigurationValidator() {
            return new logic_component_configuration_validator_1.default(new class_validator_1.Validator());
        }
    }, {
        key: "createWindowScrollerResolverServiceFactory",
        value: function createWindowScrollerResolverServiceFactory() {
            return new window_scroller_resolver_service_factory_1.default();
        }
    }, {
        key: "createToElementScrollerFactory",
        value: function createToElementScrollerFactory() {
            return new to_element_scroller_factory_1.default(this.createToElementScrollerResolverServiceFactory(), this.createWindowScrollingServiceFactory());
        }
    }, {
        key: "createToElementScrollerResolverServiceFactory",
        value: function createToElementScrollerResolverServiceFactory() {
            return new to_element_scroller_resolver_service_factory_1.default();
        }
    }, {
        key: "createWindowScrollingServiceFactory",
        value: function createWindowScrollingServiceFactory() {
            return new window_scrolling_service_factory_1.default(this.createWindowScrollingServiceResolverServiceFactory(), this.createScrollPositionSequenceGeneratorFactory());
        }
    }, {
        key: "createWindowScrollingServiceResolverServiceFactory",
        value: function createWindowScrollingServiceResolverServiceFactory() {
            return new window_scrolling_service_resolver_service_factory_1.default();
        }
    }, {
        key: "createScrollPositionSequenceGeneratorFactory",
        value: function createScrollPositionSequenceGeneratorFactory() {
            return new scroll_position_sequence_generator_factory_1.default();
        }
    }]);

    return DependencyContainer;
}();

exports.default = DependencyContainer;