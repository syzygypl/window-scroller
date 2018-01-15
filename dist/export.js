"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dependency_container_1 = require("./window-scroller/container/dependency-container");
var dependencyContainer = new dependency_container_1.default();
exports.default = dependencyContainer.createWindowScrollerFactory();