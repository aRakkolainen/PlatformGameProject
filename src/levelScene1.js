//Sources: Fixing shader error: https://github.com/parcel-bundler/parcel/issues/928
// Fixing error: https://stackoverflow.com/questions/71279498/phaser-3-images-not-showing
// Fixing other errro: https://stackoverflow.com/questions/71225698/phaser-3-spritesheet-doesnt-load-correctly
// Background color during runtime: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
// Shooting fire balls as bullets: https://phasergames.com/phaser-3-physics-beginners/
// Switching between scenes: https://www.thepolyglotdeveloper.com/2020/09/switch-between-scenes-phaser-game/
// Multiple scenes in Phaser: https://flaviocopes.com/phaser-multiple-scenes/
// + Phaser 3 Documentation: https://photonstorm.github.io/phaser3-docs/index.html
// + Course material
//import cactusPlatform from "./assets/cactusWithPlatform.png";

//import "./styles.css";
//let game; 
import Phaser from "phaser";
let data;
let gameConfig;
let gameOptions; 
let gameWidth; 
let gameHeight; 
let gameScore; 

export default class LevelScene1 extends Phaser.Scene { 
  constructor() {
    super("LevelScene1");
    this.score=0;
    this.enemyMoving=false; 
  }
  preload() {
    //this.load.background("background", "assets/background.png");
    this.load.image("platform", "./assets/sandplatform.png");
    this.load.image("small_platform", "./assets/smallsand_platform.png");
    this.load.image("popsicle1", "./assets/popsicle1.png");
    this.load.image("popsicle2", "./assets/popsicle2.png");
    this.load.image("popsicle3", "./assets/popsicle3.png");
    this.load.image("popsicle4", "./assets/popsicle4.png");
    this.load.image("finish_line", "./assets/finish.png");
    this.load.image("cactus", "./assets/cactus.png");
    this.load.image("fireball", "./assets/fireball.png");
    this.load.image("cactusPlatform", "./assets/cactusWithPlatform.png");
    this.load.image("arrows", "./assets/arrows.png");
    this.load.image("spaceBar", "./assets/spaceBar.png");
    this.load.image("shootkeys", "./assets/shootkeys.png");
    this.load.image("test", "./assets/test.png")
    this.load.spritesheet("player", "./assets/player.png", {
      frameWidth: 32,
      frameHeight: 48,
    }
    );
  
  }
  create(gameData) {
    let div = document.getElementById("gameContainer");
    div.style.background = "linear-gradient(#113388, #114488, #553388, #594488, #773388, #993388,#652244, #673346)";
    this.data = gameData;
    gameScore = gameData.totalScore; 
    gameConfig =  gameData.config;
    gameWidth = gameConfig.scale.width; 
    gameHeight = gameConfig.scale.height; 
    gameOptions = gameData.options; 
    //The platform: 
    this.platformGroup = this.physics.add.group({
      immovable: true,
      allowGravity: false
    });
    //Smaller platforms
    this.smallPlatformGroup = this.physics.add.group({
      immovable: true,
      allowGravity: false
    })
    //Cactus group
    this.cactusGroup = this.physics.add.group({
      immovable: false, 
      allowGravity: false
    })
    this.cactusPlatformGroup = this.physics.add.group({
      immovable: true, 
      allowGravity: false
    })
    //Fire balls: 
    this.fireBalls = this.physics.add.group(
      {defaultKey: 'fireball', 
    maxSize: 50, }
    );

  
    this.startplatform = this.physics.add.staticSprite(gameWidth/2, gameHeight/(1/0.87), "platform");
    this.endPlatform = this.physics.add.staticSprite(gameWidth-100, gameHeight-850, "platform");
    this.finish = this.physics.add.staticSprite(gameWidth-75, gameHeight-885, "finish_line");
  
    let platformNum = Phaser.Math.Between(3, 15);
    let smallPlatformNum = Phaser.Math.Between(3, 20);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "platform");
  }
  //this.cactus.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactus")
  let cactusPlatformNum = Phaser.Math.Between(0, 15);
  let cactusNum = Phaser.Math.Between(5, 10);
  for (let i=0; i< cactusPlatformNum; i++) {
    this.cactusPlatformGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "cactusPlatform")
  }
  for (let i=0; i < cactusNum; i++) {
    this.cactusGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "cactus");
  }
    for(let i = 0; i < smallPlatformNum; i++) {
    this.smallPlatformGroup.create(Phaser.Math.Between(210, gameWidth), Phaser.Math.Between(180, gameHeight), "small_platform");
}

    //this.physics.add.overlap(this.startplatform, this.platformGroup)
    this.player = this.physics.add.sprite(gameWidth/2, gameHeight/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
    this.physics.add.collider(this.cactusGroup, this.platformGroup, this.moveCactus, null, this);
    this.physics.add.collider(this.cactusGroup, this.smallPlatformGroup, this.stopCactus, null, this);
    this.physics.add.collider(this.player, this.startplatform);
    this.physics.add.collider(this.player, this.cactusPlatformGroup, this.movePlatform, null, this);
    this.physics.add.collider(this.player, this.finish, this.finishLevel, null, this);
    this.physics.add.collider(this.player, this.endPlatform);


    this.yellowPopsicleGroup = this.physics.add.group({})
    this.pinkPopsicleGroup = this.physics.add.group({})
    this.whitePopsicleGroup = this.physics.add.group({})
    this.bluePopsicleGroup = this.physics.add.group({})
    this.physics.add.collider(this.yellowPopsicleGroup, this.platformGroup);
    this.physics.add.collider(this.yellowPopsicleGroup, this.smallPlatformGroup);
    this.physics.add.collider(this.pinkPopsicleGroup, this.platformGroup);
    this.physics.add.collider(this.pinkPopsicleGroup, this.smallPlatformGroup);
    this.physics.add.collider(this.whitePopsicleGroup, this.platformGroup);
    this.physics.add.collider(this.whitePopsicleGroup, this.smallPlatformGroup);
    this.physics.add.collider(this.bluePopsicleGroup, this.platformGroup);
    this.physics.add.collider(this.bluePopsicleGroup, this.smallPlatformGroup);


    let yellowNum = Phaser.Math.Between(10, 20);
    let pinkNum = Phaser.Math.Between(5, 10); 
    let whiteNum = Phaser.Math.Between(3, 6); 
    let blueNum = Phaser.Math.Between(1, 2);    
    for (let i=0; i < yellowNum; i++) {
      this.yellowPopsicleGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "popsicle1")
    }

    for (let i=0; i < pinkNum; i++) {
      this.pinkPopsicleGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "popsicle2")
    }

    for (let i=0; i < whiteNum; i++) {
      this.whitePopsicleGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "popsicle3")
    }

    for (let i = 0; i < blueNum; i++) {
      this.bluePopsicleGroup.create(Phaser.Math.Between(30, gameWidth), Phaser.Math.Between(210, gameHeight), "popsicle4")
    }
    //Adding the score board and points
    this.text = this.add.text(gameWidth-775, gameHeight-995, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
    const yellowPopsicle = this.physics.add.image(gameWidth-770, gameHeight-940, "popsicle1")
    this.yellowText = this.add.text(gameWidth-755, gameHeight-950, "1 point ", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    this.pinkText = this.add.text(gameWidth-755, gameHeight-900, "3 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    const pinkPopsicle = this.physics.add.image(gameWidth-770, gameHeight-890, "popsicle2")
    this.whiteText = this.add.text(gameWidth-755, gameHeight-850, "5 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    const whitePopsicle = this.physics.add.image(gameWidth-770, gameHeight-840, "popsicle3")
    this.blueText = this.add.text(gameWidth-755, gameHeight-800, "10 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    const bluePopsicle = this.physics.add.image(gameWidth-770, gameHeight-790, "popsicle4")
    this.scoreText = this.add.text(gameWidth-685, gameHeight-995, "0", {fontSize:"25px", fill: "#0000000", fontStyle: "bold"})
    //How to play instructions: 
    this.keys = this.add.text(gameWidth-605, gameHeight-995, "KEYS: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
    this.add.image(gameWidth-570, gameHeight-945, "arrows");
    this.move = this.add.text(gameWidth-525, gameHeight-945, "Move", {fontSize:"18px", fill: "#ffffff"});
    this.spaceBar = this.add.image(gameWidth-570, gameHeight-900, "spaceBar");
    this.jump = this.add.text(gameWidth-525, gameHeight-910, "Jump higher", {fontSize:"18px", fill: "#ffffff"});
    this.add.text(gameWidth-525, gameHeight-870, "Shoot", {fontSize:"18px", fill: "#ffffff"});
    this.shoot = this.add.image(gameWidth-570, gameHeight-860, "shootkeys");
    this.info = this.add.text(gameWidth-470, gameHeight-995, "Collect at least 50 points to succeed!", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    // overlaps for collecting items and interacting with enemies
    this.physics.add.overlap(this.player, this.yellowPopsicleGroup, this.collectYellowPopsicle, null, this)
    this.physics.add.overlap(this.player, this.pinkPopsicleGroup, this.collectPinkPopsicle, null, this)
    this.physics.add.overlap(this.player, this.whitePopsicleGroup, this.collectWhitePopsicle, null, this)
    this.physics.add.overlap(this.player, this.bluePopsicleGroup, this.collectBluePopsicle, null, this)
    this.physics.add.overlap(this.player, this.cactusGroup, this.cactusAttack, null, this)
    this.physics.add.overlap(this.fireBalls, this.cactusGroup, this.cactusKill, null, this)
    // Making fireBalls to stop to platforms
    this.physics.add.collider(this.fireBalls, this.platformGroup, this.disappear, null, this);
    this.physics.add.collider(this.fireBalls, this.smallPlatformGroup, this.disappear, null, this);
    this.physics.add.collider(this.fireBalls, this.cactusPlatformGroup, this.disappear, null, this);
    
    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
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
    })

  }

  stopCactus(start) {
    if (this.enemyMoving == true || start.body.x > gameWidth) {
      start.body.velocity.x = 0;
    }
  }
  collectYellowPopsicle(player, start) {
    start.disableBody(true, true);
    this.score += 1;  
    this.scoreText.setText(this.score)
  }

  collectPinkPopsicle(player, start) {
    start.disableBody(true, true);
    this.score += 3;  
    this.scoreText.setText(this.score)
  }

  collectWhitePopsicle(player, start) {
    start.disableBody(true, true);
    this.score += 5;  
    this.scoreText.setText(this.score)
  }

  collectBluePopsicle(player, start) {
    start.disableBody(true, true);
    this.score += 10;  
    this.scoreText.setText(this.score)
  }
  cactusAttack(player, start) {
    if (this.score > 0) {
      this.score-=5;
      this.scoreText.setText(this.score);
    }
    start.body.velocity.x = Phaser.Math.Between(-100, 100);
    this.enemyMoving = true; 
    this.player.x = gameWidth/2;
    this.player.y = gameHeight/(1/0.80);
  }
  cactusKill(player, start) {
    start.disableBody(true, true);
    this.score +=5;
    this.scoreText.setText(this.score)
  }
  finishLevel() {
    if (this.score < 50) {
      this.info.setText("Collect more points")
    } else if (this.score >= 50){
      this.info.setText("You won!")
      this.player.body.velocity.x = 0; 
      this.player.body.velocity.y = 0; 
      gameScore[0].score = this.score;
      this.scene.start("LevelScene2", this.data);

    }
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

  disappear(start) {
    start.disableBody(false, true); 
  }
  movePlatform(player, start) {
    start.body.velocity.x = Phaser.Math.Between(-150, 150);
  }

  update() {
      if (this.cactusPlatformGroup.x > gameWidth || this.cactusPlatformGroup.x < 0) {
        this.cactusPlatformGroup.x = gameWidth/2;
      }
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
    // When shift is pressed while shooting, player stays at one position
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
      this.scene.start("LevelScene1");
      this.score=0;
    }
    //this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this)
    if (this.player.x > gameWidth || this.player.x < 0) {
      this.player.x = gameWidth/2;
      this.player.y = gameHeight/(1/0.80);
    }

    /*if (this.score >= 50) {
      gameScore[0].score = this.score; 
      this.scene.start("LevelScene2", this.data);
    }*/

  }


};

//import "./styles.css";