const drumKitPartsList = document.querySelector("figure");
const instructions = document.getElementById("instructions");
const bassPedal = document.getElementById("bass-pedal");

drumKitPartsList.addEventListener("click", (event) => {
  console.log(`${event.target.textContent}`);
  let sound = "";
  switch (event.target.textContent) {
    case "High Tom":
      sound = new Audio("./sounds/high_tom.wav");
      sound.play();
      break;
    case "Medium Tom":
      sound = new Audio("./sounds/medium_tom.wav");
      sound.play();
      break;
    case "Ride Cymbal":
      sound = new Audio("./sounds/ride_cymbal.wav");
      sound.play();
      break;
    case "Bass Drum":
      sound = new Audio("./sounds/bass_drum.wav");
      sound.play();
      break;
    case "Floor Tom":
      sound = new Audio("./sounds/floor_tom.wav");
      sound.play();
      break;
    case "Stool":
      sound = new Audio("./sounds/stool.wav");
      sound.play();
      break;
    case "Bass Pedal":
      instructions.textContent = "Seriously......it's a pedal !";
      instructions.style.marginLeft = "275px";
      bassPedal.children[0].style.opacity = "1";
      setTimeout(() => {
        instructions.textContent =
          "Click on the labels to hear the different sounds from the drumkit";
        instructions.style.marginLeft = "20px";
        bassPedal.children[0].style.opacity = "0";
      }, 3000);
      break;
    case "Snare Drum":
      sound = new Audio("./sounds/snare_drum.wav");
      sound.play();
      break;
    case "Hi-Hats":
      sound = new Audio("./sounds/hi_hats.wav");
      sound.play();
      break;
    case "Crash Cymbal":
      sound = new Audio("./sounds/crash_cymbal.wav");
      sound.play();
      break;
    case "Snare Drum":
      sound = new Audio("./sounds/snare_drum.wav");
      sound.play();
      break;
    default:
      console.log("Nothing selected - should never get here");
  }
});
