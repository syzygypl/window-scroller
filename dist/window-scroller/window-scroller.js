"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var WindowScroller = function () {
    function WindowScroller(configuration, resolverService, toElementScroller) {
        _classCallCheck(this, WindowScroller);

        this.configuration = configuration;
        this.resolverService = resolverService;
        this.toElementScroller = toElementScroller;
        this.initialize();
    }

    _createClass(WindowScroller, [{
        key: "getConfiguration",
        value: function getConfiguration() {
            return this.configuration;
        }
    }, {
        key: "initialize",
        value: function initialize() {
            this.addClickEventListener(this.resolverService.resolveLinkingElements());
        }
    }, {
        key: "addClickEventListener",
        value: function addClickEventListener(elements) {
            var _this = this;

            elements.forEach(function (element) {
                element.addEventListener("click", function (event) {
                    return _this.clickEventListener(event.srcElement);
                });
            });
        }
    }, {
        key: "clickEventListener",
        value: function clickEventListener(anchorElement) {
            var anchor = this.resolverService.resolveElementLinkAnchor(anchorElement);
            if (!anchor) {
                return;
            }
            var linkedElement = this.resolverService.resolveElementByAnchor(anchor);
            this.toElementScroller.scrollToElement(anchorElement, linkedElement);
        }
    }]);

    return WindowScroller;
}();

exports.default = WindowScroller;