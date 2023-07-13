import Phaser from "phaser";
let gameData; 
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 

export default class LevelScene3 extends Phaser.Scene { 
    constructor() {
      super("LevelScene3");
      this.score=0;
    }
    preload() {
        /*this.load.image("background", "./assets/background.jpg");
        this.load.image("moonplatform", "./assets/moonplatform.png");
        */// Loading the player
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48,
      })
    }

    create(data) {
        gameData = data; 
        gameConfig =  gameData.config;
        gameWidth = gameConfig.scale.width; 
        gameHeight = gameConfig.scale.height; 
        gameOptions = gameData.options;
    //This is based on this website: https://www.html5gamedevs.com/topic/42460-how-to-stretch-background-image-on-full-screen/
      //const windowWidth = window.innerWidth; 
      //const windowHeight = window.innerHeight;
      //this.background = this.add.image(windowWidth / 2, windowHeight / 2, "background")
      //this.background.setDisplaySize(windowWidth, windowHeight);
      let div = document.getElementById("gameContainer");
      div.style.background= "linear-gradient(to bottom rigth, #113388, #114488, #247899)";
    }

    update() {
        
    }
}