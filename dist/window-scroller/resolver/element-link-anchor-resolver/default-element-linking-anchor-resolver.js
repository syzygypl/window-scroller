"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var DefaultElementLinkingAnchorResolver = function () {
    function DefaultElementLinkingAnchorResolver(attribute) {
        _classCallCheck(this, DefaultElementLinkingAnchorResolver);

        this.attribute = attribute;
    }

    _createClass(DefaultElementLinkingAnchorResolver, [{
        key: "resolve",
        value: function resolve(element) {
            return element.getAttribute(this.attribute);
        }
    }]);

    return DefaultElementLinkingAnchorResolver;
}();

exports.default = DefaultElementLinkingAnchorResolver;