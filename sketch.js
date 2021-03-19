var redscore=0, bluescore=0
var indicator=null;
var formobject, gameobject;
var playerCount=0, gameState=0;
function preload(){

}
function setup(){
createCanvas(800,600);
tool1=createSprite(480,540,20,20);
tool2=createSprite(420,540,20,20);
tool3=createSprite(360,540,20,20);
tool4=createSprite(480,60,20,20)
tool5=createSprite(420,60,20,20)
tool6=createSprite(360,60,20,20)
head=createSprite(200,200,40,40);
arm1=createSprite(160,260,20,80);
arm2=createSprite(240,260,20,80);
body=createSprite(200,270,60,100);
leg1=createSprite(185,340,25,120);
leg2=createSprite(215,350,25.150);
head2=createSprite(600,200,40,40);
arm3=createSprite(560,260,20,80);
arm4=createSprite(640,260,20,80)
body2=createSprite(600,270,60,100);
leg3=createSprite(585,340,25,120);
leg4=createSprite(615,330,25,140);
gameobject=new Game();
gameobject.start();
}
function draw(){
background("white");
console.log(arm2.x,tool1.x)
if(gameState==1){
  play();
}
// textSize(20)
// fill("red")
// text("RED Player Tools",350,15);
// textSize(20)
// fill("blue")
// text("BLUE Player Tools",350,585);
// text("'P'",470,520)
// text("'O'",410,520)
// text("'I'",355,520)
// fill("red");
// text("'J'",470,40)
// text("'K'",410,40)
// text("'L'",350,40)
// text("Score: "+redscore,700,100);
// fill("blue")
// text("Score: "+bluescore,100,100)
// head.shapeColor="blue";
// arm1.shapeColor="blue";
// arm2.shapeColor="blue";
// body.shapeColor="blue";
// leg1.shapeColor="blue";
// leg2.shapeColor="blue";
// head2.shapeColor="red";
// arm3.shapeColor="red";
// arm4.shapeColor="red";
// leg3.shapeColor="red";
// leg4.shapeColor="red";
// body2.shapeColor="red";
// tool1.shapeColor="green";
// tool2.shapeColor="blue";
// tool3.shapeColor="purple";
// tool4.shapeColor="red";
// tool5.shapeColor="orange";
// tool6.shapeColor="yellow";
// if(keyIsDown(RIGHT_ARROW)){
// leg1.x=leg1.x+2
// leg2.x=leg2.x+2
// head.x=head.x+2
// body.x=body.x+2
// arm1.x=arm1.x+2
// arm2.x=arm2.x+2
// if(indicator=="p"){
//   tool1.x=arm2.x+10
// }
// if(indicator=="i"){
//   tool3.x=arm2.x+10
// }if(indicator=="o"){
//   tool2.x=arm2.x+10
// }



// }
// if(keyDown(LEFT_ARROW)){
//   leg4.x=leg4.x-2
//   leg3.x=leg3.x-2
//   head2.x=head2.x-2
//   body2.x=body2.x-2
//   arm3.x=arm3.x-2
//   arm4.x=arm4.x-2
  
//   if(indicator=="j"){
//     tool4.x=arm3.x-10
//   }
//   if(indicator=="k"){
//     tool5.x=arm3.x-10
//   }if(indicator=="l"){
//     tool6.x=arm3.x-10
//   }
  
  

// }
// if(keyDown(UP_ARROW)){
//   leg4.y=leg4.y-2
//   leg3.y=leg3.y-2
//   head2.y=head2.y-2
//   body2.y=body2.y-2
//   arm3.y=arm3.y-2
//   arm4.y=arm4.y-2
//   tool4.y=arm3.y-10
//   tool5.y=arm3.y-10
//   tool6.y=arm3.y-10
// }
// if(keyDown(DOWN_ARROW)){
//   leg1.y=leg1.y+2
//   leg2.y=leg2.y+2
//   head.y=head.y+2
//   body.y=body.y+2
//   arm1.y=arm1.y+2
//   arm2.y=arm2.y+2
//   tool1.y=arm2.y+10
//   tool2.y=arm2.y+10
//   tool2.y=arm2.y+10
// }
// if(keyDown(ENTER)){
//   head.x=200;
//   head.y=200;
// body.x=200;
// body.y=270;
// leg1.x=185;
// leg1.y=340;
// leg2.x=215;
// leg2.y=350;
// head2.x=600;
// head2.y=200;
// body2.x=600;
// body2.y=270;
// leg3.x=585;
// leg3.y=340;
// leg4.x=615;
// leg4.y=330;
// tool1.x=480
// tool1.y=540
// tool2.x=420
// tool2.y=540
// tool3.x=360
// tool3.y=540
// tool4.x=480
// tool4.y=60
// tool5.x=420
// tool5.y=60
// tool6.x=360
// tool6.y=60
// arm1.x=160
// arm1.y=260
// arm2.x=240
// arm2.y=260
// arm3.x=560
// arm3.y=260
// arm4.x=640
// arm4.y=260
// }
// if(keyDown('p')){
//   tool1.x=arm2.x+10
//   tool1.y=arm2.y+10
//   tool2.x=420
// tool2.y=540
// tool3.x=360
// tool3.y=540
// indicator="p";
// }
// if(keyDown('o')){
//   tool2.x=arm2.x+10
//   tool2.y=arm2.y+10
//   tool1.x=480
// tool1.y=540
// tool3.x=360
// tool3.y=540
// indicator="o";
// }
// if(keyDown('i')){
//   tool3.x=arm2.x+10
//   tool3.y=arm2.y+10
//   tool1.x=480
// tool1.y=540
// tool2.x=420
// tool2.y=540
// indicator="i";
// }
// if(keyDown('j')){
//   tool4.x=arm3.x-10
//    tool4.y=arm3.y
   
// tool5.x=420
// tool5.y=60
// tool6.x=360
// tool6.y=60
// indicator="j"
// }
// if(keyDown('k')){
//   tool5.x=arm3.x-10
//   tool5.y=arm3.y
//   tool4.x=480
// tool4.y=60
// tool6.x=360
// tool6.y=60
// indicator="k"
// }
// if(keyDown('l')){
//   tool6.x=arm3.x-10
//   tool6.y=arm3.y
//   tool4.x=480
// tool4.y=60
// tool5.x=420
// tool5.y=60
// indicator="l"
// }
// if(tool1.isTouching(tool4)){
//   bluescore=bluescore+1
//   redscore=redscore-1
// }
// if(tool2.isTouching(tool5)){
//   bluescore=bluescore+1
//   redscore=redscore-1
// }
// if(tool3.isTouching(tool6)){
//   bluescore=bluescore+1
//   redscore=redscore-1
// }
// if(tool4.isTouching(tool2)){
//   bluescore=bluescore-1
//   redscore=redscore+1
// }
// if(tool5.isTouching(tool3)){
//   bluescore=bluescore-1
//   redscore=redscore+1
// }
// if(tool6.isTouching(tool1)){
//   bluescore=bluescore-1
//   redscore=redscore+1
// }

// var v=p5.Vector.fromAngle(radians(60),120);
// push();
// if(keyIsDown(UP_ARROW)){
// leg1.x=v.x;
// leg1.y=v.y;
// // leg2.x=v.x;
// console.log(v.x);
// pop();
// //leg2.y=
// }
// else{
//   leg1.x=185;
//   leg2.x=340;
// }

}
function play(){
  textSize(20)
fill("red")
text("RED Player Tools",350,15);
textSize(20)
fill("blue")
text("BLUE Player Tools",350,585);
text("'P'",470,520)
text("'O'",410,520)
text("'I'",355,520)
fill("red");
text("'J'",470,40)
text("'K'",410,40)
text("'L'",350,40)
text("Score: "+redscore,700,100);
fill("blue")
text("Score: "+bluescore,100,100)
head.shapeColor="blue";
arm1.shapeColor="blue";
arm2.shapeColor="blue";
body.shapeColor="blue";
leg1.shapeColor="blue";
leg2.shapeColor="blue";
head2.shapeColor="red";
arm3.shapeColor="red";
arm4.shapeColor="red";
leg3.shapeColor="red";
leg4.shapeColor="red";
body2.shapeColor="red";
tool1.shapeColor="green";
tool2.shapeColor="blue";
tool3.shapeColor="purple";
tool4.shapeColor="red";
tool5.shapeColor="orange";
tool6.shapeColor="yellow";
if(keyIsDown(RIGHT_ARROW)){
leg1.x=leg1.x+2
leg2.x=leg2.x+2
head.x=head.x+2
body.x=body.x+2
arm1.x=arm1.x+2
arm2.x=arm2.x+2
if(indicator=="p"){
  tool1.x=arm2.x+10
}
if(indicator=="i"){
  tool3.x=arm2.x+10
}if(indicator=="o"){
  tool2.x=arm2.x+10
}



}
if(keyDown(LEFT_ARROW)){
  leg4.x=leg4.x-2
  leg3.x=leg3.x-2
  head2.x=head2.x-2
  body2.x=body2.x-2
  arm3.x=arm3.x-2
  arm4.x=arm4.x-2
  
  if(indicator=="j"){
    tool4.x=arm3.x-10
  }
  if(indicator=="k"){
    tool5.x=arm3.x-10
  }if(indicator=="l"){
    tool6.x=arm3.x-10
  }
  
  

}
if(keyDown(UP_ARROW)){
  leg4.y=leg4.y-2
  leg3.y=leg3.y-2
  head2.y=head2.y-2
  body2.y=body2.y-2
  arm3.y=arm3.y-2
  arm4.y=arm4.y-2
  tool4.y=arm3.y-10
  tool5.y=arm3.y-10
  tool6.y=arm3.y-10
}
if(keyDown(DOWN_ARROW)){
  leg1.y=leg1.y+2
  leg2.y=leg2.y+2
  head.y=head.y+2
  body.y=body.y+2
  arm1.y=arm1.y+2
  arm2.y=arm2.y+2
  tool1.y=arm2.y+10
  tool2.y=arm2.y+10
  tool2.y=arm2.y+10
}
if(keyDown(ENTER)){
  head.x=200;
  head.y=200;
body.x=200;
body.y=270;
leg1.x=185;
leg1.y=340;
leg2.x=215;
leg2.y=350;
head2.x=600;
head2.y=200;
body2.x=600;
body2.y=270;
leg3.x=585;
leg3.y=340;
leg4.x=615;
leg4.y=330;
tool1.x=480
tool1.y=540
tool2.x=420
tool2.y=540
tool3.x=360
tool3.y=540
tool4.x=480
tool4.y=60
tool5.x=420
tool5.y=60
tool6.x=360
tool6.y=60
arm1.x=160
arm1.y=260
arm2.x=240
arm2.y=260
arm3.x=560
arm3.y=260
arm4.x=640
arm4.y=260
}
if(keyDown('p')){
  tool1.x=arm2.x+10
  tool1.y=arm2.y+10
  tool2.x=420
tool2.y=540
tool3.x=360
tool3.y=540
indicator="p";
}
if(keyDown('o')){
  tool2.x=arm2.x+10
  tool2.y=arm2.y+10
  tool1.x=480
tool1.y=540
tool3.x=360
tool3.y=540
indicator="o";
}
if(keyDown('i')){
  tool3.x=arm2.x+10
  tool3.y=arm2.y+10
  tool1.x=480
tool1.y=540
tool2.x=420
tool2.y=540
indicator="i";
}
if(keyDown('j')){
  tool4.x=arm3.x-10
   tool4.y=arm3.y
   
tool5.x=420
tool5.y=60
tool6.x=360
tool6.y=60
indicator="j"
}
if(keyDown('k')){
  tool5.x=arm3.x-10
  tool5.y=arm3.y
  tool4.x=480
tool4.y=60
tool6.x=360
tool6.y=60
indicator="k"
}
if(keyDown('l')){
  tool6.x=arm3.x-10
  tool6.y=arm3.y
  tool4.x=480
tool4.y=60
tool5.x=420
tool5.y=60
indicator="l"
}
if(tool1.isTouching(tool4)){
  bluescore=bluescore+1
  redscore=redscore-1
}
if(tool2.isTouching(tool5)){
  bluescore=bluescore+1
  redscore=redscore-1
}
if(tool3.isTouching(tool6)){
  bluescore=bluescore+1
  redscore=redscore-1
}
if(tool4.isTouching(tool2)){
  bluescore=bluescore-1
  redscore=redscore+1
}
if(tool5.isTouching(tool3)){
  bluescore=bluescore-1
  redscore=redscore+1
}
if(tool6.isTouching(tool1)){
  bluescore=bluescore-1
  redscore=redscore+1
}
drawSprites();
}