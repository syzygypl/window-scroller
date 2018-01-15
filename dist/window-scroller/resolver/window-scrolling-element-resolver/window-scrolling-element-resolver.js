"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var WindowScrollingElementResolver = function () {
    function WindowScrollingElementResolver() {
        _classCallCheck(this, WindowScrollingElementResolver);
    }

    _createClass(WindowScrollingElementResolver, [{
        key: "resolve",
        value: function resolve() {
            var windowScrollingElement = window.document.scrollingElement || window.document.documentElement;
            if (!windowScrollingElement) {
                throw new Error("Window scrolling element is not found");
            }
            return windowScrollingElement;
        }
    }]);

    return WindowScrollingElementResolver;
}();

exports.default = WindowScrollingElementResolver;