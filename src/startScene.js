/*Sources: 
* How to move to next scene: https://flaviocopes.com/phaser-multiple-scenes/
How to get user input in Phaser: https://www.thepolyglotdeveloper.com/2020/09/accept-text-input-user-phaser-game/ 
https://www.youtube.com/watch?v=z7pWdGFBld0
*/
import Phaser from "phaser";
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';

let gameConfig; 
let usernameInput; 
let gameData;
let username; 
export default class StartScene extends Phaser.Scene {
    constructor() {
        super("StartScene");
    }
    preload() {
        this.load.image("background", "./assets/startbackground.png");
        this.load.html("form", "form.html");
        // This plugin is used for collecting text input by player according to this website: https://blog.ourcade.co/posts/2020/phaser-3-add-text-input-rexui/
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        })
        
        this.load.plugin('rextexteditplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js', true)
    }

    create (data) {
        gameData = data
        gameConfig = data.config;
        let div = document.getElementById("gameContainer");
        div.style.background = "linear-gradient(#003282, #063e97, #2062cc)";
        this.add.text(gameConfig.scale.width/4, gameConfig.scale.height/7, "SIMPLE PLATFORM GAME", {fontStyle: "bold", fontSize:"30px"});
        this.add.text(gameConfig.scale.width/4, gameConfig.scale.height/(1/0.80), "GIVE USERNAME: ",{fontStyle: "bold", fontSize:"25px"})
        // Handling username input is based on this: https://blog.ourcade.co/posts/2020/phaser-3-add-text-input-rexui/
        /*const text = this.add.text(gameConfig.scale.width/1.5, gameConfig.scale.height/(1/0.8095), '', {fixedWidth: 150, fixedHeight:36, fontStyle:"italic", fontSize: "25px"}).setOrigin(0.5, 0.5);
        text.setInteractive().on('pointerdown', () => {
            const editorInput = this.rexUI.edit(text);
            username = editorInput.inputText.node.value;
        })

        if (username != "") {
            console.log(username);
            this.welcome = this.add.text(gameConfig.scale.width/7, gameConfig.scale.heigth/(1/0.87), "Welcome To Play, " + username + "!", {fontStyle: "bold", fontSize: "30px"});
        }*/
        this.startText = this.add.text(gameConfig.scale.width/7, gameConfig.scale.height/((1/0.90)), "START NEW GAME BY PRESSING SPACE", { fontStyle: "bold", fontSize: "30px"});
        this.cursors = this.input.keyboard.createCursorKeys();
        this.background = this.add.image(gameConfig.scale.width/2, gameConfig.scale.height/2, "background");

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
