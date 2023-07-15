import Phaser from "phaser";
let gameData; 
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 
let gameScore; 
import moonplatform from "./assets/moonplatform.png";
import smallmoonplatform from "./assets/smallmoon_platform.png";

export default class LevelScene3 extends Phaser.Scene { 
    constructor() {
      super("LevelScene3");
      this.score=0;
    }
    preload() {
      this.load.image("moonplatform", moonplatform);
      this.load.image("smallmoonPlatform", smallmoonplatform);
      this.load.image("moonplatform2", "./assets/moonplatform2.png");
      //this.load.image("mountainsmallSkeletonPlatform", "./assets/smallSkeletonplatform.png");
      this.load.image("fireball", "./assets/fireball.png");
      this.load.image("arrows", "./assets/arrows.png");
      this.load.image("spaceBar", "./assets/spaceBar.png");
      this.load.image("blackhole", "./assets/blackhole.png");
      this.load.image("finish", "./assets/finish.png");
      this.load.image("alien", "./assets/alien.png");
      this.load.image("star1", "./assets/star1.png");
      this.load.image("star2", "./assets/star2.png");
      this.load.image("star3", "./assets/star3.png");
      this.load.image("star4", "./assets/star4.png");
      this.load.image("shootkeys", "./assets/shootkeys.png");
        // Loading the player
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48,
      })
    }

    create(gameData) {
      this.data = gameData; 
      gameConfig = gameData.config;
      gameWidth = gameConfig.scale.width; 
      gameHeight = gameConfig.scale.height;
      gameOptions = gameData.options;  

    //This is based on this website: https://www.html5gamedevs.com/topic/42460-how-to-stretch-background-image-on-full-screen/
      //const windowWidth = window.innerWidth; 
      //const windowHeight = window.innerHeight;
      //this.background = this.add.image(windowWidth / 2, windowHeight / 2, "background")
      //this.background.setDisplaySize(windowWidth, windowHeight);
      let div = document.getElementById("gameContainer");
      div.style.background= "linear-gradient(#0a0529, #180a5f, #170766, #450181,  #410377, #2b0050, #160129)";

      // Things to collet information: 
      this.text = this.add.text(gameWidth-775, gameHeight-995, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      const star1 = this.physics.add.image(30, 60, "star1");
      this.add.text(45, 50, "1 point ", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      this.add.text(45, 90, "3 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const star2 = this.physics.add.image(30, 100, "star2")
      this.add.text(45, 140, "5 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const star3 = this.physics.add.image(30, 140, "star3")
      this.add.text(45, 190, "15 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const star4 = this.physics.add.image(30, 200, "star4");
      this.scoreText = this.add.text(gameWidth-685, gameHeight-995, "0", {fontSize:"25px", fill: "#ffffff", fontStyle: "bold"})

      //How to play instructions: 
      //How to play instructions: 
      this.keys = this.add.text(gameWidth-605, gameHeight-995, "KEYS: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.add.image(gameWidth-570, gameHeight-945, "arrows");
      this.move = this.add.text(gameWidth-525, gameHeight-945, "Move", {fontSize:"18px", fill: "#ffffff"});
      this.spaceBar = this.add.image(gameWidth-570, gameHeight-900, "spaceBar");
      this.jump = this.add.text(gameWidth-525, gameHeight-910, "Jump higher", {fontSize:"18px", fill: "#ffffff"});
      this.add.text(gameWidth-525, gameHeight-870, "Shoot", {fontSize:"18px", fill: "#ffffff"});
      this.shoot = this.add.image(gameWidth-570, gameHeight-860, "shootkeys");
      this.info = this.add.text(gameWidth-470, gameHeight-995, "Collect at least 50 points to succeed!", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
 
      // Platforms: 
      this.platformGroup = this.physics.add.group({
        immovable: true,
        allowGravity: false
      });

      this.moonplatformGroup = this.physics.add.group({
        immovable: false,
        allowGravity: true
      });


      //Smaller platforms
      this.smallPlatformGroup = this.physics.add.group({
        immovable: true,
        allowGravity: false
    })

    //Fire balls: 
    this.fireBalls = this.physics.add.group(
      {defaultKey: 'fireball', 
    maxSize: 10, }
    );

    this.startplatform = this.physics.add.staticSprite(gameWidth/5.5, gameHeight/(1/0.87), "moonplatform");
    this.endPlatform = this.physics.add.staticSprite(gameWidth-100, gameHeight-850, "moonplatform");
    this.finishLine = this.add.staticSprite(gameWidth-75, gameHeight-885, "finish_line");
    let platformNum = Phaser.Math.Between(0, 12);
    let smallPlatformNum = Phaser.Math.Between(5, 10);
    //let skeletonPlatformNum = Phaser.Math.Between(3, 15);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "moonplatform");
    }
    for(let i = 0; i < smallPlatformNum; i++) {
      this.smallPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "smallmoonPlatform");
    }

    for(let i = 0; i < smallPlatformNum; i++) {
      this.moonplatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "smallmoonPlatform");
    }

    this.player = this.physics.add.sprite(gameWidth/5.5, gameHeight/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    this.physics.add.collider(this.player, this.startplatform);
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
    this.physics.add.collider(this.player, this.moonplatformGroup, this.movePlatform, null, this); 
    this.physics.add.collider(this.player, this.finishLine, this.finishLevel, null, this);
    this.physics.add.collider(this.player, this.endPlatform);
    //this.physics.add.collider(this.player, this.skeletonPlatformGroup);
    this.cursors = this.input.keyboard.createCursorKeys();

      /*this.anims.create({
        key: "left", 
        frames: this.anims.generateFrameNumbers("player", {start: 0, end: 3}), 
        frameRate: 10,
        repeat: -1
    })

    this.anims.create({
        key: "turn", 
        frames: [{key: "player", frame: 4}],
        frameRate: 10, 
    })

    this.anims.create({
        key: "right", 
        frames: this.anims.generateFrameNumbers("player", {start: 5, end: 9}), 
        frameRate: 10, 
    })
    this.anims.create({
      key: "shootLeft", 
      //frames: [{key: "player", frame: 0}],
      frames: this.anims.generateFrameNumbers("player", {start: 3, end: 0}),
      frameRate: 10,
    })
    this.anims.create({
      key: "shootRight", 
      frames: this.anims.generateFrameNumbers("player", {start: 8, end:5}), 
      frameRate: 10,
    })*/

  }
    //Based on this: https://phasergames.com/phaser-3-physics-beginners/ 
    shootLeft(player) {
      let fireBall = this.fireBalls.get(this.player.x, this.player.y);
      if (fireBall) {
        fireBall.setActive(true);
        fireBall.setVisible(true);
        fireBall.body.velocity.x = -200;
      }
    }
    shootRight(player) {
      let fireBall = this.fireBalls.get(this.player.x, this.player.y);
      if (fireBall) {
        fireBall.setActive(true);
        fireBall.setVisible(true);
        fireBall.body.velocity.x = 200;
      }
    }

      finishLevel(player, start, gameData) {
        if (this.score < 150) {
          this.info.setText("Collect more points")
        } else if (this.score >= 1){
          this.info.setText("You won!")
          this.player.body.velocity.x = 0; 
          this.player.body.velocity.y = 0; 
          gameScore[2].score = this.score;
          this.scene.start("FinishScene", this.data);
    
        }
      }
    

    update() {

      if(this.cursors.left.isDown) {
        this.player.body.velocity.x = -gameOptions.playerSpeed;
        this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = gameOptions.playerSpeed;
      this.player.anims.play("right", true);
    }
    else   {
      this.player.body.velocity.x=0; 
      this.player.anims.play("turn", true);
    }
    //Shooting options (First two are shooting while player is moving)
    if (this.cursors.left.isDown) {
      this.shootLeft();
      this.player.anims.play("shootLeft", true)
    }

    if (this.cursors.right.isDown) {
      this.shootRight();
      this.player.anims.play("shootRight", true)
    }
  // When shift is pressed while shooting and player is on platform, player stays at one position
  if (this.cursors.left.isDown && this.cursors.shift.isDown && this.player.body.touching.down) {
    this.player.body.velocity.y=0;
    this.player.body.velocity.x=0;
    this.shootLeft();
    this.player.anims.play("shootLeft", true)
  }

  if (this.cursors.right.isDown && this.cursors.shift.isDown && this.player.body.touching.down) {
    this.player.body.velocity.y=0;
    this.player.body.velocity.x=0;
    this.shootRight();
    this.player.anims.play("shootRight", true)
  }
    // Based on this website: https://phasergames.com/phaser-3-physics-beginners/
    this.fireBalls.children.each(function(b) {
      if (b.active) {
        if (b.x < 0 || b.x > gameWidth) {
            b.setActive(false);
        }
      }
    }.bind(this));


    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -gameOptions.playerGravity/1.6; 
    }

    if (this.cursors.space.isDown) {
      this.player.body.velocity.y = -gameOptions.playerGravity/1.6; 
    }
    if (this.player.y > gameHeight ) {
      this.scene.start("LevelScene3");
      this.score=0;
    }
  //this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this)
  if (this.player.x > gameWidth || this.player.x < 0) {
    this.player.x = this.startplatform.x; 
    this.player.y = this.startplatform.y;
  }

  }
}