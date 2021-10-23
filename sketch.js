//constantes para vincular el mundo fisico (Matter)
//Engine = Motor
const Engine = Matter.Engine;
//World = Mundo 
const World = Matter.World;
//Boides = Cuerpos
const Bodies = Matter.Bodies;
//Body = Cuerpo
const Body = Matter.Body;
//Render = Ejecuta 
const Render = Matter.Render;
//Constraint = Restriccion
const Constraint = Matter.Constraint;
//Variables para nuestros cuerpos fisicos en la pantalla 
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	bob2 = new bob(360,575,40)
	//Empiezo a crear mi codigo
	//Cada +40.x Pixeles = espacio que hay entre cada masa (bolita)
	bobObject3 = new bob(400,575,40);
	bobObject4 = new bob(440,575,40);
	bobObject5 = new bob(480,575,40);
	
	//Cada -40.x pixeles = espacio que hay entre cada ROPE (cuerdita)
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	//empiezo a crear mi codigo
	rope3 = new rope(bobObject3.body,roofObject.body,0,0);
	rope4 = new rope(bobObject4.body,roofObject.body,40,0);
	rope5 = new rope(bobObject5.body,roofObject.body,80,0);
	
	Engine.run(engine);
}

//Muestra en pantalla el codigo
function draw() {
  rectMode(CENTER);
  background(230);

  //display() = Muestra nuestros cuerpos Matter en pantalla
  //rope = cuerdas
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //roofObject = el techo que sostiene las cuerdas y nuestras bolitas 
  //Muestra en pantalla 
  roofObject.display();

  //bob = bolitas 
  //Muestra en pantalla
  bob1.display();
  bob2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  //Funcion personalizada que da fuerza a las bolas por medio de controles 
  //(LEFT = Bola1: LEFT)+(RIGHT = Bola5: RIGHT)
  //(UP = Bola1: RIGHT)+(DOWN = Bola5: LEFT)
  force();

  textSize(15);
  text("CONTROLS:",350,100);
  textSize(12);
  text("RIGHT [Bola derecha final = Derecha]",290,120);
  text("LEFT [Bola izquierda principal = Izquierda]",280,145);
  text("UP [Bola izquierda principal = Derecha]",285,175);
  text("DOWN [Bola derecha final = Izquierda]", 290,205);
}

//Funcion de controles y fuerza
function force()
{
	//LeftARROW: bob1 = LEFT
	if(keyDown("LEFT"))
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-40});
	}

	//UpARROW: bob1 = RIGHT
	if(keyDown("UP"))
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:40,y:-45});
	}

	//RightARROW: bob5 = RIGHT
	if(keyDown("Right"))
	{
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:40,y:-45});
	}

	//DownARROW: bob5 = LEFT
	if(keyDown("DOWN"))
	{
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-40,y:-45});
	}
}