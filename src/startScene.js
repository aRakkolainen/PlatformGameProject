/*Sources: 
* How to move to next scene: https://flaviocopes.com/phaser-multiple-scenes/
How to get user input in Phaser: https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/ 
https://www.youtube.com/watch?v=z7pWdGFBld0
*/
import Phaser from "phaser";
let gameConfig; 
let usernameInput; 
let gameData;
export default class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene");
    }
    preload() {
        this.load.image("start", "./assets/start.png");
        this.load.html("form", "form.html");
    }

    create (data) {
        gameData = data
        gameConfig = data.config;
        this.startText = this.add.text(gameConfig.scale.width/7, gameConfig.scale.height/2, "START NEW GAME BY PRESSING SPACE", { fontStyle: "bold", fontSize: "30px"});
        this.cursors = this.input.keyboard.createCursorKeys();
        let div = document.getElementById("gameContainer");
        div.style.background = "#114488";
        
        //this.userinfo = this.add.text(gameConfig.width/3, gameConfig.heigth/1.5, "Give your username: ", {fontSize:"30px"});
        //usernameInput = this.add.dom(640, 360).createFromCache("form");
        //this.welcome = this.add.text(gameConfig.width/3, gameConfig.heigth/2.5, "Welcome to play ").setOrigin(0.5);
        
        //this.Key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        /*if (this.cursors.space.isDown) {
            this.scene.start("LevelScene1", data);
        }*/
        //this.add.text(gameConfig.width/2, gameConfig.height/2, "Start game", {fontSize: "30px", color: "#ffffff"});
    }

    update() {

        if (this.cursors.space.isDown) {
            this.scene.start("LevelScene1", gameData);
        }
  
 }
    

};

import "./styles.css";
