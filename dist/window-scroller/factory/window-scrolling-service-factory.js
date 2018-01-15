"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var window_scrolling_service_1 = require("../service/window-scrolling-service");

var WindowScrollingServiceFactory = function () {
    function WindowScrollingServiceFactory(resolverServiceFactory, scrollPositionSequenceGeneratorFactory) {
        _classCallCheck(this, WindowScrollingServiceFactory);

        this.resolverServiceFactory = resolverServiceFactory;
        this.scrollPositionSequenceGeneratorFactory = scrollPositionSequenceGeneratorFactory;
    }

    _createClass(WindowScrollingServiceFactory, [{
        key: "createFromConfiguration",
        value: function createFromConfiguration(configuration) {
            return new window_scrolling_service_1.default(this.resolverServiceFactory.createFromConfiguration(configuration), this.scrollPositionSequenceGeneratorFactory);
        }
    }]);

    return WindowScrollingServiceFactory;
}();

exports.default = WindowScrollingServiceFactory;