//alien move
let targetImage = $(".target-image");
let direction = 1; 
let rowHeight = 16;

function moveTargets(){
  let moveDistance = direction * 32;
  let atRightEdge = false;
  let atLeftEdge = false;
     
  targetImage.each(function(){
  //aliens touch right and left edge
    let currentLeft = parseInt($(this).css("left"));
    let newLeft = currentLeft + moveDistance;
    if (newLeft === 0){
       atLeftEdge = true;
    } else if(newLeft + $(this).width() === 512){
       atRightEdge = true;
    }
  });
  //aliens touch the bottom edge
  let atBottomEdge = false; 
  targetImage.each(function(){
    let currentTop = parseInt($(this).css("top"));
    let newTop = currentTop + 16; 

    if (newTop + $(this).height() > 432){
      atBottomEdge = true;
    }
  });

  //aliens move down to another row and go back to up
  targetImage.each(function() {
  let currentLeft = parseInt($(this).css("left"));
  let currentTop = parseInt($(this).css("top"));
  let newLeft = currentLeft + moveDistance;

  $(this).css("left", newLeft + "px");
  if(atLeftEdge && direction === -1){
    $(this).css("top", currentTop + rowHeight + "px");
  } else if (atRightEdge && direction === 1){
    $(this).css("top", currentTop + rowHeight + "px")
  }
    if (atBottomEdge){
      $(this).css({
        top: currentTop - 352 + "px",
      });
    }
   });
   if (atLeftEdge || atRightEdge){
     direction *= -1;
    }
}
setInterval(moveTargets, 350);

//alien explosion
function createExplosion(targetImage){
 let explosion = $("<div>", {
   class: "explosion",
   css:{
     top: targetImage.position().top,
     left: targetImage.position().left
   }
 });
 $("#space").append(explosion);

 explosion. animate({width: '+=0px', height:'+=0px', opacity: 0}, 400, function(){
   $(this).remove();
 });
}