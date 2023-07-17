//Sources: Course material + same sources as in previous levels

import Phaser from "phaser";
import moonplatform from "./assets/moonplatform.png";
import smallmoonplatform from "./assets/smallmoon_platform.png";

let playerData; 
let data; 
let enemiesKillScore; 
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 
let gameScore; 
let gunShot; 
let blingSound; 
let backgroundMusic;
export default class LevelScene3 extends Phaser.Scene { 
    constructor() {
      super("LevelScene3");
      this.score=0;
      this.enemiesKilledScore = 0;
      this.info;
    }
    preload() {
      this.load.image("moonplatform", moonplatform);
      this.load.image("smallmoonPlatform", smallmoonplatform);
      this.load.image("moonplatform2", "./assets/moonplatform2.png");;
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
       //Sound effects and music are downloaded from here: https://freesfx.co.uk/Default.aspx 
      this.load.audio("gunShot", "./assets/gunShot.mp3");
      this.load.audio("bling", "./assets/bling.mp3");
      this.load.audio("background3", "./assets/background3.mp3");
      this.load.image("shootkeys", "./assets/shootkeys.png");
        // Loading the player
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48,
      })
    }

    create(gameData) {
      this.data = gameData; 
      data = gameData; 
      playerData = gameData.playerData; 
      gameScore = playerData.totalScore; 
      enemiesKillScore = playerData.enemiesKilled;
      gameConfig = gameData.config;
      gameWidth = gameConfig.scale.width; 
      gameHeight = gameConfig.scale.height;
      gameOptions = gameData.options;  
      gameScore = gameData.totalScore; 
      //Sound effect are added based on this website: https://www.thepolyglotdeveloper.com/2020/09/add-music-sounds-other-audio-phaser-game/ 
      blingSound = this.sound.add("bling", {loop: false});
      gunShot = this.sound.add("gunShot", {loop: false});
      backgroundMusic = this.sound.add("background3", {loop: true});
      backgroundMusic.play();
      //This is based on this website: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
      let div = document.getElementById("gameContainer");
      div.style.background= "linear-gradient(#0a0529, #180a5f, #170766, #450181,  #410377, #2b0050, #160129)";

      // Things to collet information: 
      this.text = this.add.text(gameWidth-775, gameHeight-995, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      const star1 = this.physics.add.image(gameWidth-770, gameHeight-940, "star1");
      this.add.text(gameWidth-755, gameHeight-950, "3 points ", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      this.add.text(gameWidth-755, gameHeight-910, "5 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const star2 = this.physics.add.image(gameWidth-770, gameHeight-100, "star2")
      this.add.text(gameWidth-755, gameHeight-860, "10 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const star3 = this.physics.add.image(gameWidth-770, gameHeight-860, "star3")
      this.add.text(gameWidth-755, gameHeight-810, "20 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const star4 = this.physics.add.image(gameWidth-770, gameHeight-800, "star4");
      this.scoreText = this.add.text(gameWidth-685, gameHeight-995, "0", {fontSize:"25px", fill: "#ffffff", fontStyle: "bold"})


      //How to play instructions: 
      this.keys = this.add.text(gameWidth-605, gameHeight-995, "KEYS: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.add.image(gameWidth-570, gameHeight-945, "arrows");
      this.move = this.add.text(gameWidth-525, gameHeight-945, "Move", {fontSize:"18px", fill: "#ffffff"});
      this.spaceBar = this.add.image(gameWidth-570, gameHeight-900, "spaceBar");
      this.jump = this.add.text(gameWidth-525, gameHeight-910, "Jump higher", {fontSize:"18px", fill: "#ffffff"});
      this.add.text(gameWidth-525, gameHeight-870, "Shoot", {fontSize:"18px", fill: "#ffffff"});
      this.shoot = this.add.image(gameWidth-570, gameHeight-860, "shootkeys");
      this.info = this.add.text(gameWidth-450, gameHeight*0.005, "Collect at least 150 points to succeed!", {fontSize:"15px", fill: "#ffffff", fontStyle:"bold"})
 
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
    this.alienGroup = this.physics.add.group({
      defaultKey: 'alien', 
      maxSize: 25, 
      allowGravity: true
    })

    //Fire balls: (based on the source: https://phasergames.com/phaser-3-physics-beginners/)
    this.fireBalls = this.physics.add.group(
      {defaultKey: 'fireball', 
    maxSize: 50, }
    );

    this.startplatform = this.physics.add.staticSprite(gameWidth/5.5, gameHeight/(1/0.87), "moonplatform");
    this.endPlatform = this.physics.add.staticSprite(gameWidth-100, gameHeight-850, "moonplatform");
    this.finishLine = this.physics.add.staticSprite(gameWidth-75, gameHeight-885, "finish_line");
    let platformNum = Phaser.Math.Between(0, 12);
    let smallPlatformNum = Phaser.Math.Between(5, 10);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "moonplatform");
    }
    for(let i = 0; i < smallPlatformNum; i++) {
      this.smallPlatformGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "smallmoonPlatform");
    }

    for(let i = 0; i < smallPlatformNum; i++) {
      this.moonplatformGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "smallmoonPlatform");
    }

    for(let i = 0; i < smallPlatformNum; i++) {
      this.moonplatformGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "smallmoonPlatform");
    }
    

    this.player = this.physics.add.sprite(gameWidth/5.5, gameHeight/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    this.physics.add.collider(this.player, this.startplatform);
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
    this.physics.add.collider(this.player, this.moonplatformGroup, this.movePlatform, null, this); 
    this.physics.add.collider(this.player, this.finishLine, this.finishLevel, null, this);
    this.physics.add.collider(this.player, this.endPlatform);
    this.physics.add.overlap(this.player, this.alienGroup, this.enemyAttack, null, this);
    // Fireballs 
  this.physics.add.collider(this.fireBalls, this.platformGroup, this.disappear, null, this);
  this.physics.add.collider(this.fireBalls, this.smallPlatformGroup, this.disappear, null, this);
  this.physics.add.collider(this.fireBalls, this.moonplatformGroup, this.disappear, null, this);
  this.physics.add.overlap(this.fireBalls, this.alienGroup, this.enemyKill, null, this);
    // Things to collect: 
    let starNum = Phaser.Math.Between(5, 10);
    let starNum2 = Phaser.Math.Between(7, 14);
    let starNum3 = Phaser.Math.Between(4, 8);
    let starNum4 = Phaser.Math.Between(2, 4);
    this.starGroup1 = this.physics.add.group({})
    this.starGroup2 = this.physics.add.group({})
    this.starGroup3 = this.physics.add.group({})
    this.starGroup4 = this.physics.add.group({})

    //Setting the collectable items to random places
    for(let i = 0; i < starNum; i++) {
      this.starGroup1.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "star1")
    }

    for(let i = 0; i < starNum2; i++) {
      this.starGroup2.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "star2")
    }

    for(let i = 0; i < starNum3; i++) {
      this.starGroup3.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "star3")
    }

    for(let i = 0; i < starNum4; i++) {
      this.starGroup4.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-800, gameHeight), "star4")
    }
    
    this.physics.add.overlap(this.player, this.starGroup1, this.collectStar1, null, this); 
    this.physics.add.overlap(this.player, this.starGroup2, this.collectStar2, null, this);
    this.physics.add.overlap(this.player, this.starGroup3, this.collectStar3, null, this);
    this.physics.add.overlap(this.player, this.starGroup4, this.collectStar4, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.timeTrigger = this.time.addEvent({
      callback: this.makeEnemies, 
      callbackScope: this, 
      delay: 750, 
      loop: true
    })
  }
  makeEnemies(player, start) {
    let alien = this.alienGroup.get(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight));
    if (alien) {
      alien.setActive(true);
      alien.setVelocityX(Phaser.Math.Between(-50, 50)); 
      alien.setVelocityY(Phaser.Math.Between(-50, 50)); 
    }

  }
  collectStar1(player, start) {
    blingSound.play();
    start.disableBody(true, true);
    this.score += 3;  
    this.scoreText.setText(this.score);
  }

  collectStar2(player, start) {
    blingSound.play();
    start.disableBody(true, true);
    this.score += 5;  
    this.scoreText.setText(this.score);
  }

  collectStar3(player, start) {
    blingSound.play();
    start.disableBody(true, true);
    this.score += 15;  
    this.scoreText.setText(this.score)
  }

  collectStar4(player, start) {
    blingSound.play();
    start.disableBody(true, true);
    this.score += 20;  
    this.scoreText.setText(this.score)
  }
    //Shooting functions are based on this: https://phasergames.com/phaser-3-physics-beginners/ 
    shootLeft(player) {
      let fireBall = this.fireBalls.get(this.player.x, this.player.y);
      if (fireBall) {
        gunShot.play();
        fireBall.setActive(true);
        fireBall.setVisible(true);
        fireBall.body.velocity.x = -200;
      }
    }
    shootRight(player) {
      let fireBall = this.fireBalls.get(this.player.x, this.player.y);
      if (fireBall) {
        gunShot.play();
        fireBall.setActive(true);
        fireBall.setVisible(true);
        fireBall.body.velocity.x = 200;
      }
    }

    enemyAttack(player, start) {
      if (this.score > 0) {
        this.score-=15;
        this.scoreText.setText(this.score);
      }
      start.body.velocity.y = Phaser.Math.Between(-100, 100);
      start.body.velocity.x = Phaser.Math.Between(-100, 100);
      this.enemyMoving = true; 
      this.player.x = gameWidth/5.5;
      this.player.y = gameHeight/(1/0.80);
    }

    enemyKill(player, start) {
      start.disableBody(true, true);
      this.score +=15;
      this.enemiesKilledScore +=1; 
      this.scoreText.setText(this.score)
    }
    disappear(start) {
      start.disableBody(false, true); 
    }
    finishLevel(player, start, data) {
      if (this.score < 150) {
        this.info.setText("Collect more points")
      } else if (this.score >= 150){
          this.info.setText("You won!")
          blingSound.play();
          this.player.body.velocity.x = 0; 
          this.player.body.velocity.y = 0; 
          this.total = {
            name: "Level3", 
            score: this.score
          }
          this.enemyKills = {
            name: "alien", 
            number: this.enemiesKilledScore
          }
          enemiesKillScore.push(this.enemyKills);
          this.data.playerData.totalScore.push(this.total);
          backgroundMusic.stop();
          this.score=0; 
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
    if (this.cursors.left.isDown && this.cursors.shift.isDown) {
      this.shootLeft();
      this.player.anims.play("shootLeft", true)
    }

    if (this.cursors.right.isDown && this.cursors.shift.isDown) {
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
  // Reloading the fireballs is based on this website: https://phasergames.com/phaser-3-physics-beginners/
  this.fireBalls.children.each(function(b) {
    if (b.active) {
      b.setActive(true);
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
    backgroundMusic.stop();
    this.scene.start("LevelScene3");
    this.score=0;
  }
  if (this.player.x > gameWidth || this.player.x < 0) {
    this.player.x = gameWidth/5.5;
    this.player.y = gameHeight/(1/0.80);
  }

  if (this.score >= 150) {
    this.info.setText("You have 30 seconds to collect extra points!"); 
    this.timeTrigger = this.time.addEvent({
      callback: this.finishLevel, 
      callbackScope: this, 
      delay: 30000, 
      loop: true
    })
    
  }
  }
}