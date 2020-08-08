var wall, wall2, wall3;
var div;
var showingthickness, showingthickness2, showingthickness3;
var thickness, thickness2, thickness3;
var bullet, bullet2, bullet3;  
var speed, speed2, speed3;
var weight, weight2, weight3;
var deformation, deformation2, deformation3;


function setup() {
  createCanvas(1600,900);

  showingthickness = random(35, 70);
  showingthickness2 = random(35, 70);
  showingthickness3 = random(35, 70);

  thickness = random(2, 7);
  thickness2 = random(2, 7);
  thickness3 = random(2, 7);

  div = createSprite(600, 450, 20, 900);
  div.shapeColor = ("pink");

  div = createSprite(1000, 450, 20, 900);
  div.shapeColor = ("pink");

  bullet = createSprite(400, 50, 35, 70);
  bullet.shapeColor = ("pink"); 

  bullet2 = createSprite(800, 50, 35, 70);
  bullet2.shapeColor = ("pink"); 

  bullet3 = createSprite(1200, 50, 35, 70);
  bullet3.shapeColor = ("pink"); 

  wall = createSprite(bullet.x, 650, 300, showingthickness);
  wall.shapeColor = ("yellow");

  wall2 = createSprite(bullet2.x, 650, 300, showingthickness2);
  wall2.shapeColor = ("yellow");

  wall3 = createSprite(bullet3.x, 650, 300, showingthickness3);
  wall3.shapeColor = ("yellow");
// this given values for speed, weight and deformation are cutomised a bit
// as it should be practically visible
  speed = random(40 , 50);
  speed2 = random(40 , 50);
  speed3 = random(40 , 50);
  weight = random(20,40);
  weight2 = random(20,40);
  weight3 = random(20,40);
  deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  deformation2 = 0.5 * weight2 * speed2 * speed2/(thickness2 * thickness2 * thickness2);
  deformation3 = 0.5 * weight3 * speed3 * speed3/(thickness3 * thickness3 * thickness3);

}  

function draw() {
  background("black");

  deform = Math.round(deformation);
  thick = Math.round(thickness);
  speeed = Math.round(speed);
  Weight = Math.round(weight);
  velocity = Math.round(bullet.velocityY)

  deform2 = Math.round(deformation2);
  thick2 = Math.round(thickness2);
  speeed2 = Math.round(speed2);
  Weight2 = Math.round(weight2);
  velocity2 = Math.round(bullet2.velocityY);

  deform3 = Math.round(deformation3);
  thick3 = Math.round(thickness3);
  speeed3 = Math.round(speed3);
  Weight3 = Math.round(weight3);
  velocity3 = Math.round(bullet3.velocityY);


  textSize(20);
  fill("lightblue");
  text("Thickness: "+thick, 250, 125);
  text("Deformation: "+deform, 250, 100);
  text("Speed: "+speeed, 250, 150);
  text("Weight: "+Weight, 250, 175);
  text("Velocity of bullet: "+velocity, 250, 200);

  text("Thickness: "+thick2, 650, 125);
  text("Deformation: "+deform2, 650, 100);
  text("Speed: "+speeed2, 650, 150);
  text("Weight: "+Weight2, 650, 175);
  text("Velocity of bullet: "+velocity2, 650, 200);


  text("Thickness: "+thick3, 1050, 125);
  text("Deformation: "+deform3, 1050, 100);
  text("Speed: "+speeed3, 1050, 150);
  text("Weight: "+Weight3, 1050, 175);
  text("Velocity of bullet: "+velocity3, 1050, 200);

  text("If the Deformation is more than 350 the colour will change !!", 40, 50)


  drawSprites();

  bullet.velocityY = speed;

  bullet2.velocityY = speed2;

  bullet3.velocityY = speed3;

  // for first bullet

  if(collided(bullet, wall) && deformation<350)
  {
    bullet.shapeColor = ("green");
    bullet.velocityY = 0;
    // bullet.y = 600
    wall.shapeColor = ("brown");

  }
  if(collided(bullet, wall) &&  deformation>=350)
  {

    bullet.shapeColor = ("red");
    bullet.velocityY = 0;
    // bullet.y = 600
    wall.shapeColor = ("brown");

  }

// for second bullet
  if( collided(bullet2, wall2) && deformation2<350)
  {
    bullet2.shapeColor = ("green");
    bullet2.velocityY = 0;
    // bullet2.y = 600
    wall2.shapeColor = ("brown");

  }

  if(collided(bullet2, wall2) && deformation2>=350)
  {
    bullet2.shapeColor = ("red");
    bullet2.velocityY = 0;
    wall2.shapeColor = ("brown");

  }


  // for third bullet
  if(collided(bullet3, wall3) && deformation3>=350)
  {
    bullet3.shapeColor = ("red");
    bullet3.velocityY = 0;
    wall3.shapeColor = ("brown");

  }
  if (collided(bullet3, wall3) && deformation3<350){
    bullet3.shapeColor = ("green");
    bullet3.velocityY = 0;
    wall3.shapeColor = ("brown");
  }
}

function collided(bullets, walls){
  if (walls.y - bullets.y <= bullets.height/2 + walls.height/2){
    return true;
  }
  return false;
}