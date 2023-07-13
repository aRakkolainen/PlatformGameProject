import StartScene from "./src/startScene";
import LevelScene1 from "./src/levelScene1";
import LevelScene2 from "./src/levelScene2";
import LevelScene3 from "./src/levelScene3";
import FinishScene from "./src/finishScene";
import Phaser from "phaser";

export const phaserConfig = {
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
    scene: [ StartScene, LevelScene1, LevelScene2, LevelScene3, FinishScene ]
}
}
const game = new Phaser.Game(phaserConfig);
this.scene.start(StartScene, phaserConfig);
/*const gameConfig = {
type: Phaser.AUTO,
scale: {
mode: Phaser.Scale.Fit,
autoCenter: Phaser.Scale.CENTER_BOTH,
width: 800,
height: 1000
},
parent: 'gameContainer',
transparent: true,
pixelArt: true,
physics: {
default: "arcade",
debug: false,
arcade: {
    gravity: {
    y: 0
    }
},
scene: [StartScene, LevelScene1]
},
//scene: PlayGame
};

const game = new Phaser.Game(gameConfig);*/