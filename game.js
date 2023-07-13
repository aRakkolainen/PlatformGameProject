//Source for this was course material and Leevi Lautanen

import StartScene from "./src/startScene";
import LevelScene1 from "./src/levelScene1";
import LevelScene2 from "./src/levelScene2";
import LevelScene3 from "./src/levelScene3";
import FinishScene from "./src/finishScene";
import Phaser from "phaser";
let game; 
window.onload = () => {
    let phaserConfig = {
        type: Phaser.AUTO,
        parent: "gameContainer",
        transparent: true, 
        mode: Phaser.Scale.Fit, 
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
        backgroundColor: "#5DACD8",
        pixelArt: true,
        physics: {
        default: "arcade",
        debug: false,
        arcade: {
        gravity: {
            y: 0
        }
        },
        scene: [ BootScene, StartScene, LevelScene1, LevelScene2, LevelScene3, FinishScene ]
    }

    }
    game = new Phaser.Game(phaserConfig);
    window.focus(); 

}
const gameOptions = {
    playerGravity: 800,
    playerSpeed: 300
  };


class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    create() {
        this.data = {
            config: game.phaserConfig,
            options: gameOptions
        }
        this.scene.start("StartScene", this.data);
    }
}
