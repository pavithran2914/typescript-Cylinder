// Import stylesheets
import './style.css';
import { Dot } from './dot.model';
import { Line} from './line.model';
import { Cly } from './cyl.model';
import { Cylinder } from './cylinder.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point1 = new Dot(5, 3);
let point2 = new Dot(3, 3);
let point3 = new Dot(7, 3);
let point4 = new Dot(3, 10);
let point5 = new Dot(7, 10);

let circle = new Cly(8, 5);


let cylinderObj = new Cylinder(point1, point2, point3, point4, point5, circle);

console.log(cylinderObj);