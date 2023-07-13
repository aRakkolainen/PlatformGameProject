//import { gameConfig} from "../game.js";
import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene");
    }
    preload() {
        this.load.image("start", "./assets/");
    }

    create (data) {
        config = data.phaserConfig; 
        this.text = this.add.text(config.width/2, config.height/2, "Start game", {fontSize: "30px"});
        //this.add.text(phaserConfig.width/2, phaserConfig.height/2, "Start game", {fontSize: "30px", color: "#ffffff"});
    }

    update() {

    }

};
