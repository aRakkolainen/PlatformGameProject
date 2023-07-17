//Sources: Fixing shader error: https://github.com/parcel-bundler/parcel/issues/928
// Fixing error: https://stackoverflow.com/questions/71279498/phaser-3-images-not-showing
// Fixing other errro: https://stackoverflow.com/questions/71225698/phaser-3-spritesheet-doesnt-load-correctly
// Background color during runtime: https://stackoverflow.com/questions/59332460/how-to-set-background-color-of-phaser-3-game-during-runtime
let game;
const gameOptions = {
    playerGravity: 800,
    playerSpeed: 300
};
window.onload = function() {
    let gameConfig = {
        type: Phaser.AUTO,
        //background: "#454545",
        //background: "linear-gradient(#0d1554, #5ba4ff)",
        scale: {
            mode: Phaser.Scale.Fit,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 1000,
            parent: "gameContainer",
            transparent: true
        },
        pixelArt: true,
        physics: {
            default: "arcade",
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
};
class PlayGame extends Phaser.Scene {
    constructor(){
        super("PlayGame");
        this.score = 0;
    }
    preload() {
        let div = document.getElementById("GameContainer");
        div.style.backgroundColor = "linear-gradient(#e66465, #9198e5);";
        //this.load.background("background", "assets/background.png");
        this.load.image("platform", "./assets/sandplatform.png");
        this.load.image("small_platform", "./assets/small_platform.png");
        this.load.image("popsicle1", "./assets/popsicle1.png");
        this.load.image("popsicle2", "./assets/popsicle2.png");
        this.load.image("popsicle3", "./assets/popsicle3.png");
        this.load.image("popsicle4", "./assets/popsicle4.png");
        this.load.image("finish_line", "./assets/finish.png");
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
    create() {
        //The platform: 
        this.platformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        this.smallPlatformGroup = this.physics.add.group({
            immovable: true,
            allowGravity: false
        });
        this.startplatform = this.physics.add.staticSprite(game.config.width / 2, game.config.height / (1 / 0.87), "platform");
        this.endPlatform = this.physics.add.staticSprite(game.config.width - 100, game.config.height - 850, "platform");
        this.finish = this.physics.add.staticSprite(game.config.width - 75, game.config.height - 910, "finish_line");
        //this.startplatform.create(game.config.width/2, game.config.height/2, "platform");
        //this.platformGroup.create(game.config.width/2, game.config.heigth/2, "platform")
        //Setting places for platforms
        for(let i = 0; i < 10; i++)this.platformGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "platform");
        for(let i = 0; i < 5; i++){
            this.platformGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "platform");
            this.smallPlatformGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "small_platform");
        }
        //this.physics.add.overlap(this.startplatform, this.platformGroup)
        this.player = this.physics.add.sprite(game.config.width / 2, game.config.height / 1.25, "player");
        this.player.body.gravity.y = gameOptions.playerGravity;
        this.physics.add.collider(this.player, this.platformGroup);
        this.physics.add.collider(this.player, this.smallPlatformGroup);
        this.physics.add.collider(this.player, this.startplatform);
        this.physics.add.collider(this.player, this.endPlatform);
        this.popsicleGroup = this.physics.add.group({});
        this.physics.add.collider(this.popsicleGroup, this.platformGroup);
        this.physics.add.collider(this.popsicleGroup, this.smallPlatformGroup);
        for(let i = 0; i < 3; i++){
            this.popsicleGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "popsicle1");
            this.popsicleGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "popsicle2");
            this.popsicleGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "popsicle3");
            this.popsicleGroup.create(Phaser.Math.Between(0, game.config.width), Phaser.Math.Between(0, game.config.height), "popsicle4");
        }
        this.text = this.add.text(25, 5, "SCORE: ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.pointsInfo = this.add.text(30, 5, "");
        this.physics.add.image(30, 60, "popsicle1");
        this.yellowText = this.add.text(45, 45, "1 point ", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.physics.add.image(30, 120, "popsicle2");
        this.scoreText = this.add.text(120, 5, "0", {
            fontSize: "25px",
            fill: "#ffffff",
            fontStyle: "bold"
        });
        this.physics.add.overlap(this.player, this.popsicleGroup, this.collectPopsicle, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("player", {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "turn",
            frames: [
                {
                    key: "player",
                    frame: 4
                }
            ],
            frameRate: 10
        });
        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("player", {
                start: 5,
                end: 9
            }),
            frameRate: 10
        });
    }
    collectPopsicle(player, start) {
        start.disableBody(true, true);
        this.score += 1;
        this.scoreText.setText(this.score);
    }
    update() {
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -gameOptions.playerSpeed;
            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = gameOptions.playerSpeed;
            this.player.anims.play("right", true);
        } else {
            this.player.body.velocity.x = 0;
            this.player.anims.play("turn", true);
        }
        if (this.cursors.up.isDown) this.player.body.velocity.y = -gameOptions.playerGravity / 1.6;
        if (this.player.y > game.config.height) this.scene.start("PlayGame");
    //if (this.player.y < game.config.height || this.player.y < 0) {
    //this.scene.start("PlayeGame")
    //}
    }
}

//# sourceMappingURL=game.e0bb3692.js.map
