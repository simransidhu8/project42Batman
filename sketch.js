var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var maxDrops = 100;
var drops;
var world;

function preload(){
}

function setup(){
  createCanvas(600, 800);

  engine = Engine.create();
	world = engine.world;

  umbrella = new Umbrella();

  for(var i = 0; i < maxDrops; i++){
   drops.push(new createDrop(random(0, 400), random(0, 400)));
  }

  Engine.run(engine);
}

function draw(){
    background(0);
    
    drops.display();
}   

