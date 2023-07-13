//Sources: Fixing shader error: https://github.com/parcel-bundler/parcel/issues/928
// Fixing error: https://stackoverflow.com/questions/71279498/phaser-3-images-not-showing
// Fixing other errro: https://stackoverflow.com/questions/71225698/phaser-3-spritesheet-doesnt-load-correctly
// Background color during runtime: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
// Shooting fire balls as bullets: https://phasergames.com/phaser-3-physics-beginners/
// Switching between scenes: https://www.thepolyglotdeveloper.com/2020/09/switch-between-scenes-phaser-game/
// + Phaser 3 Documentation: https://photonstorm.github.io/phaser3-docs/index.html
// + Course material
//import cactusPlatform from "./assets/cactusWithPlatform.png";

//import "./styles.css";
//let game; 
import Phaser from "phaser";

const gameOptions = {
  playerGravity: 800,
  playerSpeed: 300
};

/*window.onload = function() {
  let gameConfig = {
    type: Phaser.AUTO,
    //background: "#454545",
    //background: "linear-gradient(#0d1554, #5ba4ff)",
    scale: {
      mode: Phaser.Scale.Fit,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 1000
    },
    parent: 'gameContainer',
    transparent: true,
    pixelArt: true,
    physics: {
      default: "arcade",
      debug: false,
      arcade: {
        gravity: {
          y: 0
        }
      }
    },
    scene: PlayGame
  };
  game = new Phaser.Game(gameConfig);
  window.focus();
}
*/



export default class LevelScene1 extends Phaser.Scene { 
  constructor() {
    super({key: "LevelScene1", phaserConfig});
    this.score=0;
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
    this.load.image("shoot", "./assets/shoot.png");
    this.load.image("shootStill", "./assets/shootStill.png");
    this.load.spritesheet("player", "./assets/player.png", {
      frameWidth: 32,
      frameHeight: 48,
    }
    );
  
  }
  create() {
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
    maxSize: 10, }
    );

  
    this.startplatform = this.physics.add.staticSprite(game.config.width/2, game.config.height/(1/0.87), "platform");
    this.endPlatform = this.physics.add.staticSprite(game.config.width-100, game.config.height-850, "platform");
    this.finish = this.physics.add.staticSprite(game.config.width-75, game.config.height-910, "finish_line")
  
    let platformNum = Phaser.Math.Between(3, 15);
    let smallPlatformNum = Phaser.Math.Between(3, 20);
    for(let i = 0; i < platformNum; i++) {
      this.platformGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "platform");
  }
  //this.cactus.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactus")
  let cactusPlatformNum = Phaser.Math.Between(0, 15);
  let cactusNum = Phaser.Math.Between(0, 10);
  for (let i=0; i< cactusPlatformNum; i++) {
    this.cactusPlatformGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactusPlatform")
  }
  for (let i=0; i < cactusNum; i++) {
    this.cactusGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "cactus");
  }
    for(let i = 0; i < smallPlatformNum; i++) {
    this.smallPlatformGroup.create(Phaser.Math.Between(210, game.config.width), Phaser.Math.Between(180, game.config.height), "small_platform");
}

    //this.physics.add.overlap(this.startplatform, this.platformGroup)
    this.player = this.physics.add.sprite(game.config.width/2, game.config.height/(1/0.80), "player")
    this.player.body.gravity.y = gameOptions.playerGravity;
    this.physics.add.collider(this.player, this.platformGroup);
    this.physics.add.collider(this.player, this.smallPlatformGroup);
    this.physics.add.collider(this.cactusGroup, this.platformGroup);
    this.physics.add.collider(this.cactusGroup, this.smallPlatformGroup);
    this.physics.add.collider(this.player, this.startplatform);
    //this.physics.add.collider(this.player, this.cactusPlatformGroup);
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

    for (let i=0; i < 15; i++) {
      this.yellowPopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle1")
    }

    for (let i=0; i < 10; i++) {
      this.pinkPopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle2")
    }

    for (let i=0; i < 5; i++) {
      this.whitePopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle3")
    }

    for (let i = 0; i < 3; i++) {
      this.bluePopsicleGroup.create(Phaser.Math.Between(30, game.config.width), Phaser.Math.Between(210, game.config.height), "popsicle4")
    }
    //Adding the score board and points
    this.text = this.add.text(25, 5, "SCORE: ", {fontSize:"25px", fill: "#ffffff", fontStyle:"bold"})
    const yellowPopsicle = this.physics.add.image(30, 60, "popsicle1")
    this.yellowText = this.add.text(45, 50, "1 point ", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    this.pinkText = this.add.text(45, 100, "3 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    const pinkPopsicle = this.physics.add.image(30, 110, "popsicle2")
    this.whiteText = this.add.text(45, 150, "5 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    const whitePopsicle = this.physics.add.image(30, 160, "popsicle3")
    this.blueText = this.add.text(45, 200, "10 points", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})
    const bluePopsicle = this.physics.add.image(30, 210, "popsicle4")
    this.scoreText = this.add.text(115, 5, "0", {fontSize:"25px", fill: "#0000000", fontStyle: "bold"})
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
    this.info = this.add.text(game.config.width-420, 5, "Collect at least 50 points to win!", {fontSize:"20px", fill: "#ffffff", fontStyle:"bold"})

    this.physics.add.overlap(this.player, this.yellowPopsicleGroup, this.collectYellowPopsicle, null, this)
    this.physics.add.overlap(this.player, this.pinkPopsicleGroup, this.collectPinkPopsicle, null, this)
    this.physics.add.overlap(this.player, this.whitePopsicleGroup, this.collectWhitePopsicle, null, this)
    this.physics.add.overlap(this.player, this.bluePopsicleGroup, this.collectBluePopsicle, null, this)
    this.physics.add.overlap(this.player, this.finish, this.finishLevel, null, this)
    this.physics.add.overlap(this.player, this.cactusGroup, this.cactusAttack, null, this)
    this.physics.add.overlap(this.fireBalls, this.cactusGroup, this.cactusKill, null, this)
    this.physics.add.overlap(this.player, this.cactusPlatformGroup, this.movePlatform, null, this)
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
    this.player.x = this.startplatform.x;
    this.player.y = this.startplatform.y;
  }
  cactusKill(player, start) {
    start.disableBody(true, true);
    this.score +=5;
    this.scoreText.setText(this.score)
  }
  finishLevel(player, start) {
    if (this.score < 50) {
      this.info.setText("Collect more points")
    } else if (this.score >= 50){
      this.info.setText("You won!")
      this.player.body.velocity.x = 0; 
      this.player.body.velocity.y = 0; 
      setTimeout(() => {this.scene.start("PlayGame"),this.score=0}, 60);

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
  movePlatform(player, start) {
    start.body.velocity.x = Phaser.Math.Between(-150, 150);
    start.body.velocity.y = Phaser.Math.Between(-150, 150);
  }

  update() {
      if (this.cactusPlatformGroup.x > game.config.width || this.cactusPlatformGroup.x < 0) {
        this.cactusPlatformGroup.x = game.config.width/2;
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
        if (b.x < 0 || b.x > game.config.width) {
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
    if (this.player.y > game.config.height ) {
      this.scene.start("PlayGame");
      this.score=0;
    }

    if (this.player.x > game.config.width || this.player.x < 0) {
      this.player.x = this.startplatform.x; 
      this.player.y = this.startplatform.y;
    }

    if (this.score >= 100) {
      this.info.setText = "YOU GOT OVER 100 POINTS!";
      setTimeout(() => {this.scene.start("PlayGame"),this.score=0}, 10);
    }

  }


};

//import "./styles.css";