const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground,ball;
var options , ballOP

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  options = {
    isStatic:  true
  }
  ground = Bodies.rectangle(390,600,800,20,options);
  World.add(world,ground);

  ballOP = {
    restitution: 1
  }
  ball = Bodies.circle(200,100,20,ballOP);
  World.add(world,ball);
}

function draw() {
  
  background(255,255,255);  
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
}