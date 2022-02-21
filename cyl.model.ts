export class Cly {
  r: number;
  h: number;
  constructor(r: number, h:number){
    this.r = r;
    this.h = h;
    this.cri();
  }
  cri(){
    console.log('cir=',Math.PI*(this.r*this.r)*this.h);
  }
}

