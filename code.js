var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["73b21b01-13a2-4426-b907-11ea002ab725","2cc8ad76-4858-4d59-8917-be5e071c11f3","533212fd-bb12-487f-9f45-80288e90e0de","45e85daf-94ea-48b5-acd4-6d287fd808f3","5c386c76-1e05-498e-b4d5-29b87da2361e"],"propsByKey":{"73b21b01-13a2-4426-b907-11ea002ab725":{"name":"black_haori_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png","frameSize":{"x":150,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xUV8EZgUbz2F1ZVrjlwJ_oew_ydjIiTk/category_people/black_haori.png"},"2cc8ad76-4858-4d59-8917-be5e071c11f3":{"name":"horror","sourceUrl":"assets/api/v1/animation-library/gamelab/_YiuzeciqQNeKYmJiXDkwIdSsA6FT9FE/category_fantasy/rpgcharacter_06.png","frameSize":{"x":206,"y":237},"frameCount":1,"looping":true,"frameDelay":2,"version":"_YiuzeciqQNeKYmJiXDkwIdSsA6FT9FE","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":237},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_YiuzeciqQNeKYmJiXDkwIdSsA6FT9FE/category_fantasy/rpgcharacter_06.png"},"533212fd-bb12-487f-9f45-80288e90e0de":{"name":"monster_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png","frameSize":{"x":278,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png"},"45e85daf-94ea-48b5-acd4-6d287fd808f3":{"name":"gameplaywacky_12_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.8W4FkqRZ6sbUlwCEYyEwHkBRD3wlkoe/category_germs/gameplaywacky_12.png","frameSize":{"x":387,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".8W4FkqRZ6sbUlwCEYyEwHkBRD3wlkoe","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.8W4FkqRZ6sbUlwCEYyEwHkBRD3wlkoe/category_germs/gameplaywacky_12.png"},"5c386c76-1e05-498e-b4d5-29b87da2361e":{"name":"gameplaywacky_03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png","frameSize":{"x":390,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":390,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dtwdmhu18R0XcS9DpMKYtymNRtdl4ChR/category_germs/gameplaywacky_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;

var sam= createSprite(20,190,13,13);
sam.setAnimation("black_haori_1");
sam.scale=0.1



var  boundary1 = createSprite(190,120,420,3);


 var boundary2 = createSprite(190,260,420,3);

    
  
  sam.shapeColor = "green";
  
 var car1 = createSprite(100,130,10,10);
 car1.setAnimation("horror");
car1.scale=0.1
  
  car1.shapeColor = "red";
var  car2 = createSprite(215,130,10,10);
car2.setAnimation("monster_17_1");
car2.scale=0.1

  car2.shapeColor = "red";
  var car3 = createSprite(165,250,10,10);
  car3.setAnimation("gameplaywacky_03_1");
 car3.scale=0.1
   
  
  car3.shapeColor = "red";
var  car4 = createSprite(270,250,10,10);
car4.setAnimation("gameplaywacky_12_1");
car4.scale=0.1


  car4.shapeColor = "red";
  
  
  car1.velocityY = 8;
  car2.velocityY = 8;
  car3.velocityY = -8;
  car4.velocityY = -8;
 

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
