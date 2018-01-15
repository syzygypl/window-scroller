"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var LogicComponentConfigurationFactory = function () {
    function LogicComponentConfigurationFactory(configurationValidator) {
        _classCallCheck(this, LogicComponentConfigurationFactory);

        this.configurationValidator = configurationValidator;
    }

    _createClass(LogicComponentConfigurationFactory, [{
        key: "createDefault",
        value: function createDefault() {
            return this.createInstanceFromObject(this.getDefaultConfigurationObject());
        }
    }, {
        key: "clone",
        value: function clone(configuration) {
            return this.createInstanceFromObject(configuration);
        }
    }, {
        key: "createOrThrow",
        value: function createOrThrow(configurationObject) {
            configurationObject = configurationObject || {};
            var configuration = this.createDefault().merge(this.createInstanceFromObject(configurationObject));
            this.configurationValidator.validate(configuration);
            return configuration;
        }
    }]);

    return LogicComponentConfigurationFactory;
}();

exports.default = LogicComponentConfigurationFactory;