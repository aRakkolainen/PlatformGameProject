import Phaser from "phaser";

let gameData;
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 

export default class LevelScene2 extends Phaser.Scene { 
    constructor() {
      super("LevelScene2");
      this.score=0;
    }
    preload() {
      // Loading the player
      this.load.spritesheet("player", "./assets/player.png", {
        frameWidth: 32,
        frameHeight: 48,
      })

    }

    create(gameData) {
      gameData = gameData;
      gameConfig =  gameData.config;
      gameWidth = gameConfig.scale.width; 
      gameHeight = gameConfig.scale.height; 
      gameOptions = gameData.options;
      
      //This is based on this website: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
      let div = document.getElementById("gameContainer");
      div.style.background = "#114488";
      


      //How to play instructions: 
      this.keys = this.add.text(150, 5, "KEYS: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.add.image(180, 55, "arrows");
      this.move = this.add.text(220, 55, "Move", {fontSize:"18px", fill: "#ffffff"});
      this.spaceBar = this.add.image(180, 100, "spaceBar");
      this.jump = this.add.text(220, 90, "Jump higher", {fontSize:"18px", fill: "#ffffff"});
      this.shoot = this.add.image(170, 130, "shoot");
      this.add.text(220, 120, "Shoot", {fontSize:"18px", fill: "#ffffff"});
      this.add.text(220, 160, "Shoot at still", {fontSize:"18px", fill: "#ffffff"});
      this.shootStill = this.add.image(183, 170, "shootStill");
      this.info = this.add.text(gameWidth-420, 5, "Collect at least 100 points to win!", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      this.text = this.add.text(25, 5, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.scoreText = this.add.text(115, 5, "0", {fontSize:"25px", fill: "#0000000", fontStyle: "bold"})
    }

    update() {
        
    }
}