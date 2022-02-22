export class Cly {
  h: number;
  d: number;
  constructor(h: number, d:number){
    this.h = h;
    this.d = d;
    this.cri();
  }
  cri(){
    var radius = this.d / 2;
    console.log('cir=',this.h * Math.PI * radius * radius);
  }
}

