  //create player
  let playerImage = $("<img>", {
    src: "player.png",
    width: 32,
    height: 16,
    class: "player-image"
  });
    $("#space").append(playerImage);
    $(".player-image").css({
    top: "448px",
    left: "224px" 
  });
   
    //player move
    let positionX = 0;
    $(document).mousemove(function(e){
      let mouseX = e.pageX - $("#space").position().left;
      positionX = Math.max(Math.min(mouseX - playerImage.width() / 2, $("#space").width() - playerImage.width()), 0);
  
      playerImage.css({
      left: positionX + "px"
    });
  });