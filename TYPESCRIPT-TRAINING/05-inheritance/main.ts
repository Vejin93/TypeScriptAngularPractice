import { Shape } from "./Shape";
import { Circle } from "./Circle";

let myShape = new Shape(4,3);
console.log("My shape: " + myShape.getInfo());

let myCircle = new Circle(3,5,8);
console.log("My circle: " + myCircle.getInfo());