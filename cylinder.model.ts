import { Dot } from './dot.model';
import { Line} from './line.model';
import { Cly } from './cyl.model';

export class Cylinder {
  line1: Dot;
  line2: Line;
  line3: Dot;
  line4: Line;
  line5: Cly;

  constructor(line1: Dot, line2: Line, line3: Dot, line4: Line, line5: Cly) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4;
    this.line5 = line5;
  }
}