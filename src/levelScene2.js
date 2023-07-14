import Phaser from "phaser";
//import topaz from "./assets/topaz.png"
let totalPoints; 
let data;
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 


export default class LevelScene2 extends Phaser.Scene { 
    constructor() {
      super("LevelScene2");
      this.score=0;
    }
    preload() {
      // Loading the player
      this.load.image("mountainplatform", "./assets/mountainplatform.png");
      this.load.image("mountainsmallPlatform", "./assets/small_mountainplatform.png");
      this.load.image("mountainsmallSkeletonPlatform", "./assets/smallSkeletonplatform.png");
      this.load.image("fireball", "./assets/fireball.png");
      this.load.image("arrows", "./assets/arrows.png");
      this.load.image("spaceBar", "./assets/spaceBar.png");
      this.load.image("shoot", "./assets/shoot.png");
      this.load.image("shootStill", "./assets/shootStill.png");
      this.load.image("topaz", "./assets/topaz.png");
      this.load.image("emerald", "./assets/emerald.png");
      this.load.image("bluestone", "./assets/bluestone.png");
      this.load.image("coal", "./assets/coal.png");
      this.load.image("diamond", "./assets/diamond.png");
      this.load.image("stonemonster", "./assets/stonemonster.png");
      this.load.spritesheet("player", "./assets/player.png", {
        frameWidth: 32,
        frameHeight: 48,
      })

    }

    create(gameData, totalPoints) {
      this.totalPoints = totalPoints;
      console.log(this.totalPoints);  
      this.data = gameData;
      gameConfig =  gameData.config;
      gameWidth = gameConfig.scale.width; 
      gameHeight = gameConfig.scale.height; 
      gameOptions = gameData.options;
      
      //This is based on this website: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
      let div = document.getElementById("gameContainer");
      div.style.background = div.style.background = "linear-gradient(#113388, #114488, #247899)";
      //Things to collect info
      const coal = this.physics.add.image(30, 60, "coal");
      this.add.text(45, 50, "1 point ", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      this.add.text(45, 90, "3 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const emerald = this.physics.add.image(30, 100, "emerald")
      this.add.text(45, 140, "5 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const topaz = this.physics.add.image(30, 140, "topaz")
      this.blueText = this.add.text(45, 190, "10 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const blueStone = this.physics.add.image(30, 200, "bluestone");
      this.add.text(45, 240, "15 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const diamond = this.physics.add.image(30, 240, "diamond");
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

    this.skeletonPlatformGroup = this.physics.add.group({
      immovable: true, 
      allowGravity: false
    })

    //Fire balls: 
    this.fireBalls = this.physics.add.group(
      {defaultKey: 'fireball', 
    maxSize: 10, }
    );
    //Monsters
    this.stonemonsterGroup = this.physics.add.group({
      immovable: false, 
      allowGravity: false
    })
    // Collectibles: 

    this.topazGroup = this.physics.add.group({})
    this.emeraldGroup = this.physics.add.group({})
    this.coalGroup = this.physics.add.group({})
    this.bluestoneGroup = this.physics.add.group({})
    this.diamondGroup = this.physics.add.group({});
    for (let i=0; i < 20; i++) {
      this.coalGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "coal")
    }

    for (let i=0; i < 15; i++) {
      this.emeraldGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "emerald")
    }

    for (let i=0; i < 10; i++) {
      this.topazGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "topaz")
    }

    for (let i=0; i < 5; i++) {
      this.bluestoneGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "bluestone")
    }

    for (let i=0; i < 3; i++) {
      this.diamondGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "diamond")
    }


    this.startplatform = this.physics.add.staticSprite(gameWidth/5.5, gameHeight/(1/0.87), "mountainplatform");
    this.endPlatform = this.physics.add.staticSprite(gameWidth-100, gameHeight-850, "mountainplatform");

    let platformNum = Phaser.Math.Between(3, 10);
    let smallPlatformNum = Phaser.Math.Between(2, 15);
    let skeletonPlatformNum = Phaser.Math.Between(3, 15);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "mountainplatform");
      this.stonemonsterGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "stonemonster")
    }

    for(let i = 0; i < smallPlatformNum; i++) {
      this.smallPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "mountainsmallPlatform");
    }

    for (let i= 0; i < skeletonPlatformNum; i++) {
      this.skeletonPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "mountainsmallSkeletonPlatform");
    }

    this.player = this.physics.add.sprite(gameWidth/5.5, gameHeight/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
    this.physics.add.collider(this.player, this.skeletonPlatformGroup);
    this.cursors = this.input.keyboard.createCursorKeys();
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
      console.log(gameData);
      /*if (this.score < 50) {
        this.info.setText("Collect more points")
      } else if (this.score >= 50){
        this.info.setText("You won!")
        this.player.body.velocity.x = 0; 
        this.player.body.velocity.y = 0; 
        this.scene.start("LevelScene3", gameData);
  
      }*/
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
  // When shift is pressed while shooting, player stays at one position
    if (this.cursors.left.isDown && this.cursors.shift.isDown) {
      this.player.body.velocity.y=0;
      this.player.body.velocity.x=0;
      this.shootLeft();
      this.player.anims.play("shootLeft", true)
    }

    if (this.cursors.right.isDown && this.cursors.shift.isDown) {
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
      this.scene.start("LevelScene2");
      this.score=0;
    }
  //this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this)
  if (this.player.x > gameWidth || this.player.x < 0) {
    this.player.x = this.startplatform.x; 
    this.player.y = this.startplatform.y;
  }

  if (this.score >= 100 && this.player.body.touching.down) {
    this.scene.start("LevelScene3", this.data);
  }

    }
}