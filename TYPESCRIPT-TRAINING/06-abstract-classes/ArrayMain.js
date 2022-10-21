"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(3, 5, 8);
var myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
// declaration one array of shapes ... array is empty
var theShapes = [];
//add shapes to the array 
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var theShape = theShapes_1[_i];
    console.log(theShape.getInfo());
    console.log("Area: " + theShape.calculateArea());
    console.log();
}
