import Phaser from "phaser";
let gameData; 
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 
import moonplatform from "./assets/moonplatform.png";
import smallmoonplatform from "./assets/smallmoon_platform.png";

export default class LevelScene3 extends Phaser.Scene { 
    constructor() {
      super("LevelScene3");
      this.score=150;
    }
    preload() {
      this.load.image("moonplatform", moonplatform);
      this.load.image("smallmoonPlatform", smallmoonplatform);
      //this.load.image("mountainsmallSkeletonPlatform", "./assets/smallSkeletonplatform.png");
      this.load.image("fireball", "./assets/fireball.png");
      this.load.image("arrows", "./assets/arrows.png");
      this.load.image("spaceBar", "./assets/spaceBar.png");
      this.load.image("shoot", "./assets/shoot.png");
      this.load.image("shootStill", "./assets/shootStill.png");
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

      //How to play instructions: 
      this.keys = this.add.text(150, 5, "KEYS: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.add.image(180, 55, "arrows");
      this.move = this.add.text(220, 55, "Move", {fontSize:"18px", fill: "#ffffff"});
      this.spaceBar = this.add.image(180, 100, "spaceBar");
      this.jump = this.add.text(220, 90, "Jump higher", {fontSize:"18px", fill: "#ffffff"});
      this.shoot = this.add.image(170, 130, "shoot");
      this.add.text(220, 120, "Shoot", {fontSize:"18px", fill: "#ffffff"});
      this.add.text(220, 160, "Shoot at still", {fontSize:"18px", fill: "#ffffff"});
      this.shootStill = this.add.image(183, 170, "shootStill");
      this.info = this.add.text(gameWidth-420, 5, "Collect at least 100 points to win!", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      this.text = this.add.text(25, 5, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.scoreText = this.add.text(115, 5, "0", {fontSize:"25px", fill: "#0000000", fontStyle: "bold"})

      // Platforms: 
      this.platformGroup = this.physics.add.group({
        immovable: true,
        allowGravity: false
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

    let platformNum = Phaser.Math.Between(0, 10);
    let smallPlatformNum = Phaser.Math.Between(5, 10);
    //let skeletonPlatformNum = Phaser.Math.Between(3, 15);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "moonplatform");
    }

    for(let i = 0; i < smallPlatformNum; i++) {
      this.smallPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "smallmoonPlatform");
    }

    /*for (let i= 0; i < skeletonPlatformNum; i++) {
      this.skeletonPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "mountainsmallSkeletonPlatform");
    }*/

    this.player = this.physics.add.sprite(gameWidth/5.5, gameHeight/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    this.physics.add.collider(this.player, this.startplatform);
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
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
          gameScore[1].score = this.score;
          this.scene.start("LevelScene3", this.data);
    
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