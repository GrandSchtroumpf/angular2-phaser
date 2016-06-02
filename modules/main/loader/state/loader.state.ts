export class LoaderState extends Phaser.State{
  
  preload(){
    this.game.load.image('Logo', 'modules/main/loader/assets/boot.png');
  }
  create(){   
    var bootLogo:Phaser.Image;
    //Logo is half the size of the screen
    bootLogo = this.game.add.image(this.game.width*0.5, this.game.height*0.5, 'Logo');
    //Logo is in the middle of the screen
    bootLogo.anchor.set(0.5,0.5);
  }
    
}