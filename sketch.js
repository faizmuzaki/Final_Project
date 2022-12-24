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
    this.speed = 4;
    this.pos = createVector(this.x, this.y);
    this.r = (this.width+this.height)/2;
  }
  
  attack() {

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

class Hero extends Entity{
  constructor(x, y) {
    super(x,y);
    this.life;
    this.score;
  }

  init() {
    noStroke();
    fill(0);
    circle(this.pos.x, this.pos.y, this.r*2);
  }
  increaseScore(){
    score++;
  }
  calculateLife(){
    if(monster.collision(hero)) {
      monster.moveRandom();
      hero.increaseScore();
    }
  }
  saveScore(){
    //   fs.writeFile('Output.txt', score, (err) => {
    //     if (err) throw err;
    // })
  }
}

class Monster extends Entity {
  constructor(x, y) {
    super();
    this.pos = createVector(x, y);
    this.r = 25;
    this.color = 128;
    this.type = circle;
    this.effect;
    this.life;
  }
  
  collision(hero) {
    return hero.pos.dist(this.pos) < hero.r + this.r;
  }
  
  init() {
    noStroke();
    fill(this.color);
    this.type(this.pos.x, this.pos.y, this.r);
  }
  moveRandom(){
    monster.pos.set(random(25, width-26), random(135, height-26));
    maxTime -= 6;
    timer = maxTime;
  }
  saveScore(){
    //   fs.writeFile('Output.txt', score, (err) => {
    //     if (err) throw err;
    // })
  }
}


function gameOver(){
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(35);
  fill(0);
  text("Game Over!", width/2, height/2+45);
  noLoop();
  sleep(3000).then(() => {  
      window.location.reload();
  }); 
  }
   function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }
