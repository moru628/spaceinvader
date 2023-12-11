//create bullet for player
//The player can only shoot when the previous bullet has left the container or collided with aliens
let space = $("#space");
let bulletY = 0;
let bullet = $(".bullet");

let canShoot = true;
$(document).on("click", function(){
  if(canShoot){
    playShootSound();
    canShoot = false;
    let bullet = $("<div>",{
      class:"bullet",
      css:{
        left: playerImage.position().left + playerImage.width() / 2 - 5,
        top: playerImage.position().top - 16,
      }
   });
   $("#space").append(bullet);

    let intervalId = setInterval(function(){
      moveBullet(bullet);
      checkCollisions(bullet);
      if(checkCollisions(bullet)){
        canShoot = true;
        bullet.remove();
        clearInterval(intervalId);
      }
      if(bulletY < 0){
        bullet.remove();
        clearInterval(intervalId);
        canShoot = true;
      }
    }, 40);
  }
   
});

   //bullet move for player
   function moveBullet(bullet){
     let currentPositionLeft = parseInt(bullet.css("left"));
     let currentPositionTop = parseInt(bullet.css("top"));
    
     bulletY = currentPositionTop - 16;
     bullet.css({
     top: bulletY,
     left: currentPositionLeft,
     class: "bullet"
     })
   }
