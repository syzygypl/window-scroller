"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var WindowScrollerResolverService = function () {
    function WindowScrollerResolverService(linkingElementsResolver, elementLinkAnchorResolver, elementByAnchorResolver) {
        _classCallCheck(this, WindowScrollerResolverService);

        this.linkingElementsResolver = linkingElementsResolver;
        this.elementLinkAnchorResolver = elementLinkAnchorResolver;
        this.elementByAnchorResolver = elementByAnchorResolver;
    }

    _createClass(WindowScrollerResolverService, [{
        key: "resolveLinkingElements",
        value: function resolveLinkingElements() {
            return this.linkingElementsResolver.resolve();
        }
    }, {
        key: "resolveElementLinkAnchor",
        value: function resolveElementLinkAnchor(element) {
            return this.elementLinkAnchorResolver.resolve(element);
        }
    }, {
        key: "resolveElementByAnchor",
        value: function resolveElementByAnchor(anchor) {
            return this.elementByAnchorResolver.resolve(anchor);
        }
    }]);

    return WindowScrollerResolverService;
}();

exports.default = WindowScrollerResolverService;