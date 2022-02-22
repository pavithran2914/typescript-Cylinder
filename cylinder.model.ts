import { Dot } from './dot.model';
import { Cly } from './cyl.model';

export class Cylinder {
  dot1: Dot;
  dot2: Dot;
  dot3: Dot;
  dot4: Dot;
  dot5: Dot;
  cir: Cly;

  constructor(dot1: Dot, dot2: Dot, dot3: Dot, dot4: Dot, dot5: Dot, cir: Cly) {
    this.dot1 = dot1;
    this.dot2 = dot2;
    this.dot3 = dot3;
    this.dot4 = dot4;
    this.dot5 = dot5;
    this.cir = cir;
  }
}