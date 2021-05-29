const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball,dustbin,ground;
var piller1,piller2,piller3,piller4,piller5,piller6,piller7,piller8;

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;

ball=new Ball(100,600,10)
ball.scale=0.1

ground= new Ground(400,680,1800,20)
piller1 = new Piller(200,620,100,300)
piller2 = new Piller(300,650,100,400)
piller3 = new Piller(500,690,100,500)


dustbinbottom=new Dustbin(1200,610,100,120)





	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
Engine.update(engine)

ball.display()
ground.display()

dustbinbottom.display()
piller1.display();
piller2.display();
piller3.display();


  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
}

}

