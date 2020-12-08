
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,boy,stone,move;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  tree = new Tree(730,2);
	ground = new Ground(700,580,1400,20);
	boy = new Boy(230,410,180,230);
  stone = new Stone(240,505,35,35);
  move = new Throw(stone.body,{x:445,y:473})
  mango1 = new Mango(830,200);
  mango2 = new Mango(870,280);
  mango3 = new Mango(1070,70);
  mango4 = new Mango(1200,270);
  mango5= new Mango(1250,200);
  mango6= new Mango(990,230);
  mango7 = new Mango(1100,250);
  mango8 = new Mango(950,100);
  mango9 = new Mango(1050,170);
  mango10 = new Mango(1150,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');


  ground.display();
  tree.display();
  boy.display();
  stone.display();
  move.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  
  textSize(25)
  text("Drag The Mouse to Throw ",200,50)
  text("Press ' Space ' to Get Second Chance ",200,100)
  drawSprites();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10)

  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  move.fly();
}

function detectCollision(ob1,ob2){
   stonePos = ob1.body.position
   mangoPos = ob2.body.position

   var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

   if(distance<60)
   {
     Matter.Body.setStatic(ob2.body,false);
   }
}

function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(stone.body,{x:430,y:475});
     move.attach(stone.body);
  }
}



