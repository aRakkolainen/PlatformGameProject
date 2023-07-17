//Source for this was course material and Leevi Lautanen
// Including the form for asking player to insert username: https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/
// How to get user input with Phaser 3 plugin called rexUI: https://blog.ourcade.co/posts/2020/phaser-3-add-text-input-rexui/
import StartScene from "./src/startScene";
import LevelScene1 from "./src/levelScene1";
import LevelScene2 from "./src/levelScene2";
import LevelScene3 from "./src/levelScene3";
import FinishScene from "./src/finishScene";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import "./src/styles.css";
import Phaser from "phaser";
let game;
let phaserConfig;  
window.onload = () => {
    phaserConfig = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.Fit,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 1000
          },
        dom: {
            createContainer: true
        },
        parent: "gameContainer",
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
        },
    scene: [ BootScene, StartScene, LevelScene1, LevelScene2, LevelScene3, FinishScene ]

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
            config: phaserConfig,
            options: gameOptions, 
            playerData:  {
                name: "player",
                totalScore : [], //[{name: "level1", score: 0}, {name: "level2", score: 0}, {name: "level3", score: 0}],
                enemiesKilled: []
            }
        }
        this.scene.start("StartScene", this.data);
    }
}
