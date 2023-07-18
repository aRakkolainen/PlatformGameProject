/*Sources: 
* How to move to next scene: https://flaviocopes.com/phaser-multiple-scenes/
How to get user input in Phaser: https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/ 
https://www.youtube.com/watch?v=z7pWdGFBld0
*/
//import Phaser from "phaser";

let gameConfig; 
let usernameInput; 
let gameData;
let player; 
let username;
let backgroundMusic; 
export default class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene");
    }
    preload() {
        this.load.image("background", "./assets/startbackground.png");
        this.load.html("form", "form.html");
         //Sound effects are downloaded from here: https://freesfx.co.uk/Default.aspx 
        this.load.audio("background", "./assets/background1.mp3");
    }

    create (data) {
        gameData = data;
        player = gameData.playerData; 
        gameConfig = data.config;
        backgroundMusic = this.sound.add("background", {loop: true});
        backgroundMusic.play();
        let div = document.getElementById("gameContainer");
        div.style.background = "linear-gradient(#003282, #063e97, #2062cc)";
        this.add.text(gameConfig.scale.width/4, gameConfig.scale.height/10, "SIMPLE PLATFORM GAME", {fontStyle: "bold", fontSize:"30px"});
        this.add.text(gameConfig.scale.width/4, gameConfig.scale.height-8.5, "By aRakkolainen", {fontStyle: "bold", fontSize:"25px"});
        // Source for getting username: https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/ 
        this.startText = this.add.text(gameConfig.scale.width/5, gameConfig.scale.height-200, "Welcome to play, Press SPACE to start new game", {fontStyle: "bold", fontSize: "18px"});
        this.usernameInput = this.add.dom(gameConfig.scale.width/2.5, gameConfig.scale.height-230).createFromCache("form"); 
        this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.returnKey.on("down", event => {
            let username = this.usernameInput.getChildByName("username");
            if (username.value != "") {
                this.startText.setText("Welcome to play, " + username.value + "! Press SPACE to start new game!");
                player.name = username.value; 
                username.value="";
                
            } else {
                this.startText.setText("Welcome to play, player! Press SPACE to start new game!"); 
            }
        })
        
        this.cursors = this.input.keyboard.createCursorKeys();
        //This is based on this website: https://www.html5gamedevs.com/topic/42460-how-to-stretch-background-image-on-full-screen/
        this.background = this.add.image(gameConfig.scale.width/2, gameConfig.scale.height/2, "background");
        this.background.setDisplaySize(gameConfig.scale.width/2, gameConfig.scale.height/2);
    }

    update() {

        if (this.cursors.space.isDown) {
            backgroundMusic.stop(); 
            this.scene.start("LevelScene1", gameData);
        }
  
 }
    

};

import "./styles.css";
