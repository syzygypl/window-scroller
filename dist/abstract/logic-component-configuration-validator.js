"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("util");

var LogicComponentConfigurationValidator = function () {
    function LogicComponentConfigurationValidator(validator) {
        _classCallCheck(this, LogicComponentConfigurationValidator);

        this.validator = validator;
    }

    _createClass(LogicComponentConfigurationValidator, [{
        key: "validate",
        value: function validate(configuration) {
            var errors = this.validator.validateSync(configuration, { skipMissingProperties: true });
            if (util_1.isArray(errors) && errors.length !== 0) {
                throw Error(this.formatErrors(errors));
            }
        }
    }, {
        key: "formatErrors",
        value: function formatErrors(errors) {
            var _this = this;

            var messages = errors.map(function (error) {
                return error.property.toString() + ": \n" + _this.formatFailedConstraints(error.constraints);
            });
            return messages.join("\n");
        }
    }, {
        key: "formatFailedConstraints",
        value: function formatFailedConstraints(constraints) {
            var error = Object.keys(constraints).map(function (key, index) {
                return index + ") " + constraints[key];
            });
            return error.join("\n");
        }
    }]);

    return LogicComponentConfigurationValidator;
}();

exports.default = LogicComponentConfigurationValidator;