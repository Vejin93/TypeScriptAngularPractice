import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(4,3);
let myCircle = new Circle(3,5,8);
let myRectangle = new Rectangle(1,2,3,4);

// declaration one array of shapes ... array is empty
let theShapes: Shape[] = [];

//add shapes to the array 
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let theShape of theShapes){
    console.log(theShape.getInfo());
}