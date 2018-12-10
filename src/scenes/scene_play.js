import Palette from '../gameObjects/palette.js';

class Scene_play extends Phaser.Scene{
  constructor(){
    super({key:"Scene_play"});
  }
  create(){
    let center_width=this.sys.game.config.width/2;
    let center_height=this.sys.game.config.height/2;
    this.add.image(center_width,center_height,"separador");
    this.over=this.add.image(center_width, center_height, "over");
    this.over.visible=false;
    this.reset= this.add.image(center_width, center_height+50, "reset").setScale(0.2).setInteractive().on('pointerdown', () => this.scene.restart());
    this.reset.visible=false;
    //this.left= this.add.image(30,center_height,"left");
    this.left= new Palette(this, 30, center_height, "left");
    //this.right= this.add.image(this.sys.game.config.width-30,center_height,"right");
    this.right= new Palette(this, this.sys.game.config.width-30, center_height, "right");

    this.physics.world.setBoundsCollision(false, false, true, true);
    this.ball= this.physics.add.image(center_width,center_height,"ball");
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
    this.ball.setVelocityX(-180);

    this.physics.add.collider(this.ball, this.left, this.chocaPalette, null, this);
    this.physics.add.collider(this.ball, this.right, this.chocaPalette, null, this);

    this.cursor = this.input.keyboard.createCursorKeys();

    this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  }

  //resetScene(){
    //this.scene.restart();
  //}

  update() {
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
          this.over.visible=true;
          this.reset.visible=true;
            //this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }

        // Control de las palas
        // pala right
        if(this.cursor.down.isDown) {
            this.right.body.setVelocityY(300);
        } else if(this.cursor.up.isDown) {
            this.right.body.setVelocityY(-300);
        } else {
            this.right.body.setVelocityY(0);
        }
        // Pala izquierda
        if(this.cursor_S.isDown) {
            this.left.body.setVelocityY(300);
        } else if(this.cursor_W.isDown) {
            this.left.body.setVelocityY(-300);
        } else {
            this.left.body.setVelocityY(0);
        }


    }

  chocaPalette(){
    this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
  }
}

export default Scene_play;
