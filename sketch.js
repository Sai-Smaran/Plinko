const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var pole = [];
var ball = [];
var dividers = [];
var dividerheight = 300;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, height, 480, 20);
  for (a=0; a<=width; a=a+80) {
    dividers.push(new Ground(a, height-dividerheight/2, 10, dividerheight));
  }
  for (j=40; j<=width; j=j+50) {
    pole.push(new Pole(j, 75));
  }
  for(j=15; j<=width-10; j=j+50) {
    pole.push(new Pole(j, 175));
  }
  for (j=40; j<=width; j=j+50) {
    pole.push(new Pole(j, 275));
  }
  for(j=15; j<=width-10; j=j+50) {
    pole.push(new Pole(j, 375));
  }

}

function draw() {
  background(0);
  Engine.update(engine);
  
  if (frameCount % 90 === 0) {
    ball.push(new Ball(random(width/2-10,width/2+10),10))
  }
  for (a=0; a<dividers.length; a++) {
    dividers[a].display();
  }
  for (z=0; z<ball.length; z++) {
    ball[z].display();
  }
  for (j=0; j<pole.length; j++) {
    pole[j].display();
  }
  for (j=0; j<pole.length; j++) {
    pole[j].display();
  }
  for (j=0; j<pole.length; j++) {
    pole[j].display();
  }
  for (j=0; j<pole.length; j++) {
    pole[j].display();
  }
  ground.display();

}