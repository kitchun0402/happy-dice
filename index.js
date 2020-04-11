function playTheGame(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Display a message
  if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent = "🏆You Win!";
  } else if (randomNumber1 < randomNumber2){
    document.querySelector(".container h1").textContent = "🏆NPC Wins!";
  } else {
    document.querySelector(".container h1").textContent = "Draw!";
  }

}
