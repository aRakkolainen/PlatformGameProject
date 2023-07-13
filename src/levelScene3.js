import Phaser from "phaser";

export default class LevelScene3 extends Phaser.Scene { 
    constructor() {
      super("LevelScene3");
      this.score=0;
    }
    preload() {
        this.load.image("background", "./assets/background.jpg");
        this.load.image("moonplatform", "./assets/moonplatform.png");
        // Loading the player
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48,
      })
    }

    create() {
    //This is based on this website: https://www.html5gamedevs.com/topic/42460-how-to-stretch-background-image-on-full-screen/
      const windowWidth = window.innerWidth; 
      const windowHeight = window.innerHeight;
      this.background = this.add.image(windowWidth / 2, windowHeight / 2, "background")
      this.background.setDisplaySize(windowWidth, windowHeight);

    }

    update() {
        
    }
}