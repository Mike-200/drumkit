const drumKitPartsList = document.querySelector("ul");
// console.log(drumKitPartsList);

drumKitPartsList.addEventListener("click", (event) => {
  console.log(`${event.target.textContent}`);
  let sound = "";
  switch (event.target.textContent) {
    case "High Tom":
      sound = new Audio("./sounds/tom.wav");
      sound.play();
      break;
    case "Medium Tom":
      sound = new Audio("./sounds/tom.wav");
      sound.play();
      break;
    case "Snare Drum":
      sound = new Audio("./sounds/snare.wav");
      sound.play();
      break;
    default:
      console.log("Nothing selected - should never get here");
  }
});
