var w = 400;
var h = 400;
function setup() {
  createCanvas(w, h);
  map = new Map(407,407);
}
function draw() {
  background('white');
  fill(51);
  map.atas();
  map.bawah();
  map.kanan();
  map.kiri();
}
class Map{
  constructor(width,height){
    this.width = width;
    this.height = height;
  }
  atas(){
    for(let i=0;i<this.width;i++){
      rect(i,107,1,19);
    }
  }
  //border kiri
  kiri(){
    for(let i=107;i<this.height;i++){
      rect(0,i,16,1);
    }
  }
  //border kanan
  kanan(){
    for(let i=107;i<this.height;i++){
      rect(381,i,19,1);
    }
  }
  //border bawah
  bawah(){
    for(let i=1;i<this.width;i++){
      rect(i,381,1,19);
    }
  }

}