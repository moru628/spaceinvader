//Alien bullet collision detection
function isCollision(playerImage, bullet) {
  if(playerImage.length === 0){
    return false;
  }
  let playerPos = playerImage.position();
  let bulletPos = bullet.position();
  return (
    playerPos.left < bulletPos.left + bullet.width() &&
    playerPos.left + playerImage.width() > bulletPos.left &&
    playerPos.top < bulletPos.top + bullet.height() &&
    playerPos.top + playerImage.height() > bulletPos.top
  );
}
  
//player bullet collision
let score = 0;
function checkCollisions(bullet){
  $("#space").find(".target-image").each(function(){
        
    let targetPosition = $(this).position();
    let bulletPosition = $(bullet).position();
    if(
      bulletPosition.left < targetPosition.left + $(this).width() &&
      bulletPosition.left + bullet.width() > targetPosition.left &&
      bulletPosition.top > targetPosition.top &&
      bulletPosition.top - bullet.height() < targetPosition.top + $(this).height()
    ){
      createExplosion($(this));
      $(this).remove();
      bullet.remove();
      score += 10;
      $('.score').html(`Score: ${score}`);
      playDeathSound();
      return;
    }
  });
  if($(".target-image").length === 0){
    alert(`You win! Your Score is ${score}`);
  }
}