class Bootloader extends Phaser.Scene{
  constructor(){
    super({key: "Bootloader"})
  }
  preload(){
    this.load.on("complete", ()=>{
      this.scene.start("Scene_play");
    });
    this.load.image("ball", "/assets/ball.png");
    this.load.image("left", "/assets/left_pallete.png");
    this.load.image("right", "/assets/right_pallete.png");
    this.load.image("separador", "/assets/separator.png");
    this.load.image("over", "/assets/Game-over.jpg");
    this.load.image("reset", "/assets/reset.png");


  }


}

export default Bootloader;
