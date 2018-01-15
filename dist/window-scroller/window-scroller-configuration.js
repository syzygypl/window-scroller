"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var logic_component_configuration_1 = require("../abstract/logic-component-configuration");
var class_validator_1 = require("class-validator");
var is_function_1 = require("../custom-validator/is-function");

var WindowScrollerConfiguration = function (_logic_component_conf) {
    _inherits(WindowScrollerConfiguration, _logic_component_conf);

    function WindowScrollerConfiguration() {
        _classCallCheck(this, WindowScrollerConfiguration);

        var _this = _possibleConstructorReturn(this, (WindowScrollerConfiguration.__proto__ || Object.getPrototypeOf(WindowScrollerConfiguration)).apply(this, arguments));

        _this.selector = "";
        _this.locationAttribute = "";
        _this.scrollDefaultPosition = 0;
        _this.offset = 0;
        _this.scrollPeriod = 0;
        _this.scrollDuration = 0;
        return _this;
    }

    _createClass(WindowScrollerConfiguration, [{
        key: "merge",
        value: function merge(configuration) {
            return this.mergeObject(configuration);
        }
    }, {
        key: "mergeObject",
        value: function mergeObject(configurationObject) {
            if (!configurationObject) {
                return this;
            }
            this.selector = configurationObject.selector || this.selector;
            this.locationAttribute = configurationObject.locationAttribute || this.locationAttribute;
            this.scrollDefaultPosition = configurationObject.scrollDefaultPosition || this.scrollDefaultPosition;
            this.offset = configurationObject.offset || this.offset;
            this.scrollPeriod = configurationObject.scrollPeriod || this.scrollPeriod;
            this.scrollDuration = configurationObject.scrollDuration || this.scrollDuration;
            this.linkingElementsResolver = configurationObject.linkingElementsResolver || this.linkingElementsResolver;
            this.elementLinkingAnchorResolver = configurationObject.elementLinkingAnchorResolver || this.elementLinkingAnchorResolver;
            this.elementByAnchorResolver = configurationObject.elementByAnchorResolver || this.elementByAnchorResolver;
            this.scrollDefaultPositionResolver = configurationObject.scrollDefaultPositionResolver || this.scrollDefaultPositionResolver;
            this.elementScrollPositionResolver = configurationObject.elementScrollPositionResolver || this.elementScrollPositionResolver;
            this.scrollOffsetResolver = configurationObject.scrollOffsetResolver || this.scrollOffsetResolver;
            this.elementScrollDurationResolver = configurationObject.elementScrollDurationResolver || this.elementScrollDurationResolver;
            this.scrollPositionCalculatorFunction = configurationObject.scrollPositionCalculatorFunction || this.scrollPositionCalculatorFunction;
            return this;
        }
    }, {
        key: "getSelector",
        value: function getSelector() {
            return this.selector;
        }
    }, {
        key: "getLocationAttribute",
        value: function getLocationAttribute() {
            return this.locationAttribute;
        }
    }, {
        key: "getScrollDefaultPosition",
        value: function getScrollDefaultPosition() {
            return this.scrollDefaultPosition;
        }
    }, {
        key: "getOffset",
        value: function getOffset() {
            return this.offset;
        }
    }, {
        key: "getScrollPeriod",
        value: function getScrollPeriod() {
            return this.scrollPeriod;
        }
    }, {
        key: "getScrollDuration",
        value: function getScrollDuration() {
            return this.scrollDuration;
        }
    }, {
        key: "getLinkingElementsResolver",
        value: function getLinkingElementsResolver() {
            return this.linkingElementsResolver;
        }
    }, {
        key: "getElementLinkingAnchorResolver",
        value: function getElementLinkingAnchorResolver() {
            return this.elementLinkingAnchorResolver;
        }
    }, {
        key: "getElementByAnchorResolver",
        value: function getElementByAnchorResolver() {
            return this.elementByAnchorResolver;
        }
    }, {
        key: "getScrollDefaultPositionResolver",
        value: function getScrollDefaultPositionResolver() {
            return this.scrollDefaultPositionResolver;
        }
    }, {
        key: "getElementScrollPositionResolver",
        value: function getElementScrollPositionResolver() {
            return this.elementScrollPositionResolver;
        }
    }, {
        key: "getScrollOffsetResolver",
        value: function getScrollOffsetResolver() {
            return this.scrollOffsetResolver;
        }
    }, {
        key: "getElementScrollDurationResolver",
        value: function getElementScrollDurationResolver() {
            return this.elementScrollDurationResolver;
        }
    }, {
        key: "getScrollPositionCalculatorFunction",
        value: function getScrollPositionCalculatorFunction() {
            return this.scrollPositionCalculatorFunction;
        }
    }]);

    return WindowScrollerConfiguration;
}(logic_component_configuration_1.default);

__decorate([class_validator_1.IsString()], WindowScrollerConfiguration.prototype, "selector", void 0);
__decorate([class_validator_1.IsString()], WindowScrollerConfiguration.prototype, "locationAttribute", void 0);
__decorate([class_validator_1.IsInt()], WindowScrollerConfiguration.prototype, "scrollDefaultPosition", void 0);
__decorate([class_validator_1.IsInt()], WindowScrollerConfiguration.prototype, "offset", void 0);
__decorate([class_validator_1.IsInt()], WindowScrollerConfiguration.prototype, "scrollPeriod", void 0);
__decorate([class_validator_1.IsInt()], WindowScrollerConfiguration.prototype, "scrollDuration", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "linkingElementsResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "elementLinkingAnchorResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "elementByAnchorResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "scrollDefaultPositionResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "elementScrollPositionResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "scrollOffsetResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "elementScrollDurationResolver", void 0);
__decorate([is_function_1.IsFunction()], WindowScrollerConfiguration.prototype, "scrollPositionCalculatorFunction", void 0);
exports.default = WindowScrollerConfiguration;