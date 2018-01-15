"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var DefaultScrollOffsetResolver = function () {
    function DefaultScrollOffsetResolver(scrollOffset) {
        _classCallCheck(this, DefaultScrollOffsetResolver);

        this.scrollOffset = scrollOffset;
    }

    _createClass(DefaultScrollOffsetResolver, [{
        key: "resolve",
        value: function resolve(element, windowScrollingElement) {
            return this.scrollOffset;
        }
    }]);

    return DefaultScrollOffsetResolver;
}();

exports.default = DefaultScrollOffsetResolver;