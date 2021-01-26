const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,ground1,ground2;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31,b32;

var polygon;

var shot;

function setup(){
var canvas = createCanvas(1200,400);

engine = Engine.create();
world = engine.world;

ground=new Ground(600,height,1200,20);

ground1=new Ground(390,300,250,20);
ground2=new Ground(790,300,250,20);

polygon=new Polygon(75,75,40);

shot=new Slingshot(polygon.body,{x:75,y:75});

b1=new Block(300,275,30,40);
b2=new Block(330,275,30,40);
b3=new Block(360,275,30,40);
b4=new Block(390,275,30,40);
b5=new Block(420,275,30,40);
b6=new Block(450,275,30,40);
b7=new Block(480,275,30,40);
b8=new Block(330,235,30,40);
b9=new Block(360,235,30,40);
b10=new Block(390,235,30,40);
b11=new Block(420,235,30,40);
b12=new Block(450,235,30,40);
b13=new Block(360,195,30,40);
b14=new Block(390,195,30,40);
b15=new Block(420,195,30,40);
b16=new Block(390,155,30,40);

b17=new Block(700,275,30,40);
b18=new Block(730,275,30,40);
b19=new Block(760,275,30,40);
b20=new Block(790,275,30,40);
b21=new Block(820,275,30,40);
b22=new Block(850,275,30,40);
b23=new Block(880,275,30,40);
b24=new Block(730,235,30,40);
b25=new Block(760,235,30,40);
b26=new Block(790,235,30,40);
b27=new Block(820,235,30,40);
b28=new Block(850,235,30,40);
b29=new Block(760,195,30,40);
b30=new Block(790,195,30,40);
b31=new Block(820,195,30,40);
b32=new Block(790,155,30,40);
}

function draw(){
  background(0);

  Engine.update(engine);

  ground.display();

  ground1.display();
  ground2.display();

  polygon.display();

  shot.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  shot.fly();  
}

function keyPressed(){
  if(keyCode===32){
      shot.attach(polygon.body);
  }
}
