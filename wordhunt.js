let huntconfig = {
  type: Phaser.AUTO,
  width: deviceWidth,
  height: deviceHeight * (1825 / iphoneHeight),
  backgroundColor: 0x000000,
  parent: "phaser-div",
  mode: Phaser.Scale.FIT,
  dom: {
    createContainer: true,
  },
  fontFamily: ["Arial", "Arial Black"],
  scene: [WordHunts],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

let game_start = false;
let game;
//let letter_inputs = [];
let letter_inputs = ['A', 'B', 'A', 'T', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
let no_start = 0;
let timer = 1;
let music = 1;
let sound = 1;
let countdownMin = 1;
let countdownSec = 20;
let filteredArray;
let dict = dictionaries[0][0];

function startHuntGame() {
  dict = dictionaries[0][0];

  fetch(`dictionaries/${dict}.json`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Combine all arrays into a single array
      const combinedArray = Object.values(data).flat();
      console.log(combinedArray.length)
      filteredArray = combinedArray.filter((word) => word.length >= 3);
    })
    .catch((error) => console.error("Error loading JSON:", error));

  document.getElementsByTagName("body")[0].innerHTML = `<div class="wh-floating-text"></div>`;
  game = new Phaser.Game(huntconfig);
}