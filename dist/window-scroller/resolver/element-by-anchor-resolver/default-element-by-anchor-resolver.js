"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var DefaultElementByAnchorResolver = function () {
    function DefaultElementByAnchorResolver() {
        _classCallCheck(this, DefaultElementByAnchorResolver);
    }

    _createClass(DefaultElementByAnchorResolver, [{
        key: "resolve",
        value: function resolve(anchor) {
            return window.document.getElementById(anchor);
        }
    }]);

    return DefaultElementByAnchorResolver;
}();

exports.default = DefaultElementByAnchorResolver;