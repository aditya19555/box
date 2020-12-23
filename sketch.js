const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,b2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(200,395,400,20)
   box1 = new Box(200,100,50,50);
b2= new Box (180,50,50,50)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
   
b2.display();
    box1.display();
   ground.display();
}