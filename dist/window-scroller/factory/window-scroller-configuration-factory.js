"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var logic_component_configuration_factory_1 = require("../../abstract/logic-component-configuration-factory");
var window_scroller_configuration_1 = require("../window-scroller-configuration");

var WindowScrollerConfigurationFactory = function (_logic_component_conf) {
    _inherits(WindowScrollerConfigurationFactory, _logic_component_conf);

    function WindowScrollerConfigurationFactory() {
        _classCallCheck(this, WindowScrollerConfigurationFactory);

        var _this = _possibleConstructorReturn(this, (WindowScrollerConfigurationFactory.__proto__ || Object.getPrototypeOf(WindowScrollerConfigurationFactory)).apply(this, arguments));

        _this.defaultConfiguration = {
            locationAttribute: "data-scroll-to",
            offset: 0,
            scrollDefaultPosition: 0,
            scrollDuration: 500,
            scrollPeriod: 20,
            selector: ".window-scroller"
        };
        return _this;
    }

    _createClass(WindowScrollerConfigurationFactory, [{
        key: "createFromObject",
        value: function createFromObject() {
            var configurationObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.createOrThrow(configurationObject);
        }
    }, {
        key: "createInstanceFromObject",
        value: function createInstanceFromObject() {
            var configurationObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var configuration = new window_scroller_configuration_1.default();
            return configuration.mergeObject(configurationObject);
        }
    }, {
        key: "getDefaultConfigurationObject",
        value: function getDefaultConfigurationObject() {
            return this.defaultConfiguration;
        }
    }]);

    return WindowScrollerConfigurationFactory;
}(logic_component_configuration_factory_1.default);

exports.default = WindowScrollerConfigurationFactory;