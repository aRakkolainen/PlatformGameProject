//import { gameConfig} from "../game.js";
import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'StartScene', phaserConfig});
    }

    create () {
        //console.log(phaserConfig.width);
        //this.add.text(phaserConfig.width/2, phaserConfig.height/2, "Start game", {fontSize: "30px", color: "#ffffff"});
    }

    update() {

    }

};
