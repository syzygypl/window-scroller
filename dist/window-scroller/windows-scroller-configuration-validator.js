"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var logic_component_configuration_validator_1 = require("../abstract/logic-component-configuration-validator");

var WindowsScrollerConfigurationValidator = function (_logic_component_conf) {
  _inherits(WindowsScrollerConfigurationValidator, _logic_component_conf);

  function WindowsScrollerConfigurationValidator() {
    _classCallCheck(this, WindowsScrollerConfigurationValidator);

    return _possibleConstructorReturn(this, (WindowsScrollerConfigurationValidator.__proto__ || Object.getPrototypeOf(WindowsScrollerConfigurationValidator)).apply(this, arguments));
  }

  return WindowsScrollerConfigurationValidator;
}(logic_component_configuration_validator_1.default);

exports.default = WindowsScrollerConfigurationValidator;