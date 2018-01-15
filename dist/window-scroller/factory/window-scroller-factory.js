"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var window_scroller_1 = require("../window-scroller");
var environment_detect_utility_1 = require("../../utility/environment-detect-utility");

var WindowScrollerFactory = function () {
    function WindowScrollerFactory(configurationFactory, resolverServiceFactory, toElementScrollerFactory) {
        _classCallCheck(this, WindowScrollerFactory);

        this.configurationFactory = configurationFactory;
        this.resolverServiceFactory = resolverServiceFactory;
        this.toElementScrollerFactory = toElementScrollerFactory;
    }

    _createClass(WindowScrollerFactory, [{
        key: "create",
        value: function create() {
            var configurationObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            environment_detect_utility_1.default.throwIfNode();
            var configuration = this.configurationFactory.createFromObject(configurationObject);
            var resolverService = this.resolverServiceFactory.createFromConfiguration(configuration);
            var toElementScroller = this.toElementScrollerFactory.createFromConfiguration(configuration);
            return new window_scroller_1.default(configuration, resolverService, toElementScroller);
        }
    }]);

    return WindowScrollerFactory;
}();

exports.default = WindowScrollerFactory;