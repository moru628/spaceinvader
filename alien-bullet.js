//create bullet randomly for aliens
function randomBullet(){
  let targetImage = $("target-image");

  let randomIndex = Math.floor(Math.random() * 8);
  let randomTarget = $(".target-image:eq(" + randomIndex + ")");
  if(!randomTarget || randomTarget.length === 0){
    return;
  }
  
  let bullet = $("<div>", {
    class: "bulletA",
    css:{
      left: randomTarget.position().left + 10,
      top: randomTarget.position().top + 32
    }
  });
  $("#space").append(bullet);

  let intervalId = setInterval(function(){
    moveBulletAlien(bullet);
  }, 50);
}
  setInterval(function(){
    randomBullet();
 }, 800);

//bullet move for aliens
let lives = 3;
function moveBulletAlien(bullet){
  let currentPositionLeft = parseInt(bullet.css("left"));
  let currentPositionTop = parseInt(bullet.css("top"));
  let bulletY = 0;
  bulletY = currentPositionTop + 5;
  bullet.css({
    top: bulletY,
    left: currentPositionLeft,
    class: "bulletA"
  })

  if(isCollision($(".player-image"), bullet)){
    if(lives === 1){
      lives = lives - 1;
      $(".player-image").remove();
      $(".bulletA").remove();
      alert("Game over!");
      overSound.play();
      let gameOverImage = $("<img>", {
      src: "background.png",
      width: 512,
      height: 512,
      class: "background-image"
      });
      $("#space").append(gameOverImage);
    }else{
      lives = lives - 1;
    }
    $('.lives').html(`Lives: ${lives}`);
    bullet.remove();
  }
  if(bulletY > 448){
    bullet.remove();
  }
}
