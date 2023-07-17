import Phaser from "phaser";
let player;
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight;
let gameScore;  
let gunShot; 
let blingSound;
let enemiesKillScore;
let backgroundMusic;  

export default class LevelScene2 extends Phaser.Scene { 
    constructor() {
      super("LevelScene2");
      this.score=0;
      this.enemyMoving=false;
      this.enemiesKilledScore = 0;
      this.info; 
    }
    preload() {
      // Loading the player
      this.load.image("mountainplatform", "./assets/mountainplatform.png");
      this.load.image("mountainsmallPlatform", "./assets/small_mountainplatform.png");
      this.load.image("mountainsmallSkeletonPlatform", "./assets/smallSkeletonplatform.png");
      this.load.image("fireball", "./assets/fireball.png");
      this.load.image("arrows", "./assets/arrows.png");
      this.load.image("spaceBar", "./assets/spaceBar.png");
      this.load.image("shootkeys", "./assets/shootkeys.png");
      this.load.image("topaz", "./assets/topaz.png");
      this.load.image("emerald", "./assets/emerald.png");
      this.load.image("bluestone", "./assets/bluestone.png");
      this.load.image("coal", "./assets/coal.png");
      this.load.image("diamond", "./assets/diamond.png");
      this.load.image("stonemonster", "./assets/stonemonster.png");
      this.load.image("finish_line", "./assets/finish.png");
       //Sound effects are downloaded from here: https://freesfx.co.uk/Default.aspx 
      this.load.audio("gunShot", "./assets/gunShot.mp3");
      this.load.audio("bling", "./assets/bling.mp3");
      this.load.audio("background2", "./assets/background2.mp3");
      this.load.spritesheet("player", "./assets/player.png", {
        frameWidth: 32,
        frameHeight: 48,
      })

    }

    create(gameData) {
      this.data = gameData;
      player = gameData.playerData; 
      gameScore = player.totalScore; 
      enemiesKillScore = player.enemiesKilled;
      gameConfig =  gameData.config;
      gameWidth = gameConfig.scale.width; 
      gameHeight = gameConfig.scale.height; 
      gameOptions = gameData.options;
      //Sound effects are added based on this website: https://www.thepolyglotdeveloper.com/2020/09/add-music-sounds-other-audio-phaser-game/ 
      blingSound = this.sound.add("bling", {loop: false});
      gunShot = this.sound.add("gunShot", {loop: false});
      backgroundMusic = this.sound.add("background2", {loop: true});
      backgroundMusic.play();
      //This is based on this website: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
      let div = document.getElementById("gameContainer");
      div.style.background = div.style.background = "linear-gradient(#113388, #114488, #247899)";
      //Things to collect info + scores
      this.text = this.add.text(gameWidth-775, gameHeight-995, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      const coal = this.physics.add.image(30, 60, "coal");
      this.add.text(gameWidth-755, gameHeight-950, "1 point ", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      this.add.text(gameWidth-755, gameHeight-910, "3 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const emerald = this.physics.add.image(30, 100, "emerald")
      this.add.text(gameWidth-755, gameHeight-860, "5 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const topaz = this.physics.add.image(gameWidth-770, gameHeight-860, "topaz")
      this.blueText = this.add.text(gameWidth-755, gameHeight-810, "10 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const blueStone = this.physics.add.image(gameWidth-770, gameHeight-800, "bluestone");
      this.add.text(gameWidth-755, gameHeight-760, "15 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
      const diamond = this.physics.add.image(gameWidth-770, gameHeight-760, "diamond");
      this.scoreText = this.add.text(gameWidth-685, gameHeight-995, "0", {fontSize:"25px", fill: "#0000000", fontStyle: "bold"})
      //How to play instructions: 
      this.keys = this.add.text(gameWidth-605, gameHeight-995, "KEYS: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
      this.add.image(gameWidth-570, gameHeight-945, "arrows");
      this.move = this.add.text(gameWidth-525, gameHeight-945, "Move", {fontSize:"18px", fill: "#ffffff"});
      this.spaceBar = this.add.image(gameWidth-570, gameHeight-900, "spaceBar");
      this.jump = this.add.text(gameWidth-525, gameHeight-910, "Jump higher", {fontSize:"18px", fill: "#ffffff"});
      this.add.text(gameWidth-525, gameHeight-870, "Shoot", {fontSize:"18px", fill: "#ffffff"});
      this.shoot = this.add.image(gameWidth-570, gameHeight-860, "shootkeys");
      this.info = this.add.text(gameWidth-450, gameHeight*0.005, "Collect at least 100 points to succeed!", {fontSize:"15px", fill: "#ffffff", fontStyle:"bold"})

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

    //Fire balls: Source: https://phasergames.com/phaser-3-physics-beginners/
    this.fireBalls = this.physics.add.group(
      {defaultKey: 'fireball', 
    maxSize: 50, }
    );
    //Monsters
    this.stonemonsterGroup = this.physics.add.group({
      immovable: false, 
      allowGravity: false
    })
    // Collectables: 

    this.topazGroup = this.physics.add.group({})
    this.emeraldGroup = this.physics.add.group({})
    this.coalGroup = this.physics.add.group({})
    this.bluestoneGroup = this.physics.add.group({})
    this.diamondGroup = this.physics.add.group({});
    let coalNum = Phaser.Math.Between(9, 18);
    let emeraldNum = Phaser.Math.Between(2, 4);
    let topazNum = Phaser.Math.Between(5, 10);
    let bluestoneNum = Phaser.Math.Between(3, 6);
    let diamondNum = Phaser.Math.Between(2, 4);
    for (let i=0; i < coalNum; i++) {
      this.coalGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "coal")
    }

    for (let i=0; i < emeraldNum; i++) {
      this.emeraldGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "emerald")
    }

    for (let i=0; i < topazNum; i++) {
      this.topazGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "topaz")
    }

    for (let i=0; i < bluestoneNum; i++) {
      this.bluestoneGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "bluestone")
    }

    for (let i=0; i < diamondNum; i++) {
      this.diamondGroup.create(Phaser.Math.Between(0, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "diamond")
    }


    this.startPlatform = this.physics.add.staticSprite(gameWidth/5.5, gameHeight/(1/0.88), "mountainplatform");
    this.endPlatform = this.physics.add.staticSprite(gameWidth-100, gameHeight-850, "mountainplatform");
    this.finish = this.physics.add.staticSprite(gameWidth-75, gameHeight-885, "finish_line");
    
    
    let platformNum = Phaser.Math.Between(3, 10);
    let smallPlatformNum = Phaser.Math.Between(2, 15);
    let skeletonPlatformNum = Phaser.Math.Between(3, 15);
    let stonemonsterNum = Phaser.Math.Between(5, 10);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "mountainplatform");
      this.stonemonsterGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "stonemonster")
    }
    for (let i=0; i < stonemonsterNum; i++) {
      this.stonemonsterGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "stonemonster");
    }
    
    for(let i = 0; i < smallPlatformNum; i++) {
      this.smallPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "mountainsmallPlatform");
    }

    for (let i= 0; i < skeletonPlatformNum; i++) {
      this.skeletonPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(gameHeight-760, gameHeight), "mountainsmallSkeletonPlatform");
    }

    this.player = this.physics.add.sprite(gameWidth/5.5, gameHeight/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    // Colliders for the player: 
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
    this.physics.add.collider(this.player, this.skeletonPlatformGroup, this.movePlatform, null, this);
    this.physics.add.collider(this.player, this.startPlatform); 
    this.physics.add.overlap(this.player, this.stonemonsterGroup, this.enemyAttack, null, this)
    this.physics.add.overlap(this.player, this.coalGroup, this.collectCoal, null, this); 
    this.physics.add.overlap(this.player, this.emeraldGroup, this.collectEmerald, null, this);
    this.physics.add.overlap(this.player, this.topazGroup, this.collectTopaz, null, this);
    this.physics.add.overlap(this.player, this.bluestoneGroup, this.collectBlueStone, null, this);
    this.physics.add.overlap(this.player, this.diamondGroup, this.collectDiamond, null, this);
    this.physics.add.overlap(this.player, this.stonemonsterGroup, this.moveStone, null, this);
    this.physics.add.collider(this.player, this.finish, this.finishLevel, null, this);
    this.physics.add.collider(this.player, this.endPlatform);
    // Fireballs 
    this.physics.add.collider(this.fireBalls, this.platformGroup, this.disappear, null, this);
    this.physics.add.collider(this.fireBalls, this.smallPlatformGroup, this.disappear, null, this);
    this.physics.add.collider(this.fireBalls, this.skeletonPlatformGroup, this.disappear, null, this);
    this.physics.add.overlap(this.fireBalls, this.stonemonsterGroup, this.enemyKill, null, this);
    // Stone monsters (enemy of this level) 

    this.physics.add.collider(this.stonemonsterGroup, this.platformGroup, this.stopEnemy, null, this);
    this.physics.add.collider(this.stonemonsterGroup, this.smallPlatformGroup, this.stopEnemy, null, this);
    this.physics.add.collider(this.stonemonsterGroup, this.skeletonPlatformGroup, this.stopEnemy, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();
    }

    stopEnemy(start) {
      if ((this.enemyMoving == true && start.body.touching.down) || this.enemyMoving == true && start.body.x > gameWidth) {
        start.body.velocity.y = 0;
      }
    }
    collectCoal(player, start) {
      blingSound.play();
      start.disableBody(true, true);
      this.score += 1;  
      this.scoreText.setText(this.score)
    }

    collectEmerald(player, start) {
      blingSound.play();
      start.disableBody(true, true);
      this.score += 3;  
      this.scoreText.setText(this.score)
    }

    collectTopaz(player, start) {
      blingSound.play();
      start.disableBody(true, true);
      this.score += 5;  
      this.scoreText.setText(this.score)
    }

    collectBlueStone(player, start) {
      blingSound.play();
      start.disableBody(true, true);
      this.score += 10;  
      this.scoreText.setText(this.score)
    }

    collectDiamond(player, start) {
      blingSound.play();
      start.disableBody(true, true);
      this.score += 15;  
      this.scoreText.setText(this.score)
    }
    //Shooting functions are based on this: https://phasergames.com/phaser-3-physics-beginners/ 
    shootLeft(player) {
      let fireBall = this.fireBalls.get(this.player.x, this.player.y);
      if (fireBall) {
        fireBall.setActive(true);
        fireBall.setVisible(true);
        fireBall.body.velocity.x = -200;
        gunShot.play(); 
      }
    }
    shootRight(player) {
      let fireBall = this.fireBalls.get(this.player.x, this.player.y);
      if (fireBall) {
        fireBall.setActive(true);
        fireBall.setVisible(true);
        fireBall.body.velocity.x = 200;
        gunShot.play(); 
      }
    }

    enemyKill(player, start) {
      start.disableBody(true, true);
      this.score +=10;
      this.enemiesKilledScore += 1; 
      this.scoreText.setText(this.score)
    }

    movePlatform(player, start) {
      start.body.velocity.y = Phaser.Math.Between(50, 150);
    }

    enemyAttack(player, start) {
      if (this.score > 0) {
        this.score-=10;
        this.scoreText.setText(this.score);
      }
      start.body.velocity.y = Phaser.Math.Between(50, 150);
      this.enemyMoving = true; 
      this.player.x = gameWidth/5.5;
      this.player.y = gameHeight/(1/0.80);
    }
  

    disappear(start) {
      start.disableBody(false, true); 
    }
    finishLevel(player, start) {
      if (this.score < 100) {
        this.info.setText("Collect more points")
      } else if (this.score >= 100){
          this.info.setText("You won!")
          blingSound.play();
          this.player.body.velocity.x = 0; 
          this.player.body.velocity.y = 0; 
          this.totalScore = {
            name: "Level2", 
            score: this.score
          }
          this.enemyKills = {
            name: "stonemonster", 
            number: this.enemiesKilledScore
          }
          enemiesKillScore.push(this.enemyKills);
          gameScore.push(this.totalScore);
          backgroundMusic.stop();
          this.score = 0; 
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
    // Based on this website: https://phasergames.com/phaser-3-physics-beginners/
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
      this.scene.start("LevelScene2");
      this.score=0;
    }
    //this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this)
    if (this.player.x > gameWidth || this.player.x < 0) {
      this.player.x = gameWidth/5.5;
      this.player.y = gameHeight/(1/0.80);
    }

    if (this.score >= 100) {
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