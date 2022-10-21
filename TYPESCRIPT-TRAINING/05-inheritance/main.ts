import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(4,3);
console.log("My shape: " + myShape.getInfo());

let myCircle = new Circle(3,5,8);
console.log("My circle: " + myCircle.getInfo());

let myRectangle = new Rectangle(1,2,3,4);
console.log("My rectangle: "+ myRectangle.getInfo());