"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var myShape = new Shape_1.Shape(4, 3);
console.log("My shape: " + myShape.getInfo());
var myCircle = new Circle_1.Circle(3, 5, 8);
console.log("My circle: " + myCircle.getInfo());
