//import Phaser from "phaser";
let player; 
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 
let gameScore; 
let enemiesKillScore;
let backgroundMusic;
export default class FinishScene extends Phaser.Scene { 
    constructor() {
      super("FinishScene");
    }
    preload() {
       //Sound effects are downloaded from here: https://freesfx.co.uk/Default.aspx 
      this.load.audio("background4", "./assets/background4.mp3");
    }

    create(gameData) {
      this.data = gameData; 
      player = gameData.playerData;
      let username = player.name; 
      gameScore = player.totalScore; 
      enemiesKillScore = player.enemiesKilled;
      enemiesKillScore = player.enemiesKilled;
      gameConfig = gameData.config;
      gameWidth = gameConfig.scale.width; 
      gameHeight = gameConfig.scale.height;
      gameOptions = gameData.options;
      let div = document.getElementById("gameContainer");
      div.style.background= "#0a0529";
      backgroundMusic = this.sound.add("background4", {loop: true});
      backgroundMusic.play();this.scoreboard = this.add.text(gameWidth/8, gameHeight/15, "CONGRATULATIONS, YOU WON!", {fontSize:"40px", fill: "#ffffff", fontStyle:"bold", align:"center"});
      this.add.text(gameWidth/8, gameHeight/9.5, "----------------------------------------------------------------",  {fill: "#ffffff"})
      this.scoreboard = this.add.text(gameWidth/8, gameHeight/8, "SCOREBOARD:", {fontSize:"40px", fill: "#ffffff", fontStyle:"bold"}); 
      this.add.text(gameWidth/8, gameHeight/6, "----------------------------------------------------------------",  {fill: "#ffffff"})
      this.add.text(gameWidth/8, gameHeight/5.5, "PLAYER: " + username, {fontSize:"30px", fill: "#ffffff", });  
      this.add.text(gameWidth/8, gameHeight/4.75, "----------------------------------------------------------------",  {fill: "#ffffff"})
      this.add.text(gameWidth/8, gameHeight/4.4, "LEVEL 1", {fontSize:"35px", fill: "#ffffff", fontStyle:"bold"}); 
      this.add.text(gameWidth/8, gameHeight/3.75, "SCORE: " + gameScore[0].score, {fontSize:"30px", fill: "#ffffff"}); 
      this.add.text(gameWidth/8, gameHeight/3.27, "ENEMIES KILLED: " + enemiesKillScore[0].number, {fontSize:"30px", fill: "#ffffff"}); 
      this.add.text(gameWidth/8, gameHeight/3, "----------------------------------------------------------------",  {fill: "#ffffff"})
      this.add.text(gameWidth/8, gameHeight/2.85, "LEVEL 2", {fontSize:"35px", fill: "#ffffff", fontStyle:"bold"}); 
      this.add.text(gameWidth/8, gameHeight/2.55, "SCORE: " + gameScore[1].score, {fontSize:"30px", fill: "#ffffff"}); 
      this.add.text(gameWidth/8, gameHeight/2.30, "ENEMIES KILLED: " + enemiesKillScore[1].number, {fontSize:"30px", fill: "#ffffff"}); 
      this.add.text(gameWidth/8, gameHeight/2.15, "----------------------------------------------------------------",  {fill: "#ffffff"})
      this.add.text(gameWidth/8, gameHeight/2.10, "LEVEL 3", {fontSize:"35px", fill: "#ffffff", fontStyle:"bold"}); 
      this.add.text(gameWidth/8, gameHeight/1.93, "SCORE: " + gameScore[2].score, {fontSize:"30px", fill: "#ffffff"}); 
      this.add.text(gameWidth/8, gameHeight/1.80, "ENEMIES KILLED: " + enemiesKillScore[2].number, {fontSize:"30px", fill: "#ffffff"}); 
      this.add.text(gameWidth/8, gameHeight/1.70, "----------------------------------------------------------------",  {fill: "#ffffff"})
      this.add.text(gameWidth/8, gameHeight/1.60, "THANK YOU FOR PLAYING!",  {fill: "#ffffff", fontSize: "35px"})
      this.add.text(gameWidth/8, gameHeight/1.45, "PRESS SPACE TO RESTART THE GAME",  {fill: "#ffffff", fontSize: "35px", fontStyle: "bold"})
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
      if (this.cursors.space.isDown) {
        // Emptying the lists: https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript 
        while(this.data.playerData.totalScore.length > 0) {
          this.data.playerData.totalScore.pop();
        }
        while(this.data.playerData.enemiesKilled.length > 0) {
          this.data.playerData.enemiesKilled.pop();
      }
        backgroundMusic.stop(); 
        this.scene.start("BootScene");
    }
    }

}