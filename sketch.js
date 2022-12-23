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

class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 24
    this.height = 24;
    this.pos = createVector(this.x, this.y);
    this.r = (this.width+this.height)/2;
    this.speed = 3;
  }
  
  attack(xdir, ydir) {
    this.pos.x += xdir * this.speed;  
    this.pos.y += ydir * this.speed;
  }
  
  moveLeft(){
    if (this.pos.x-this.speed<40)
      this.pos.x=40;
    else
      this.pos.x-=this.speed;
      started = true;
  }

  moveRight(){
    if (this.pos.x+this.speed>w-25+25-43)
      this.pos.x=w-25+25-43;
    else
      this.pos.x+=this.speed;
      started = true;

  }

  moveUp(){
    if (this.pos.y-this.speed<25+125)
      this.pos.y=25+125;
    else
      this.pos.y-=this.speed;
      started = true;
  }

  moveDown(){
    if (this.pos.y+this.speed>h-25-17)
      this.pos.y=h-25-17;
    else
      this.pos.y+=this.speed;
      started = true;

  }

}
