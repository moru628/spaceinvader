//shoot sound
let shootSound = new Audio('shoot.wav');
function playShootSound() {
shootSound.currentTime = 0;
shootSound.play();
}
//alien death sound
let deathSound = new Audio('enemy-death.wav');
function playDeathSound(){
deathSound.currentTime = 0;
deathSound.play();
}
//game over sound
let overSound = new Audio('over.mp3');
function gameOverSound(){
  overSound.currentTime = 0;
  overSound.play();
}
