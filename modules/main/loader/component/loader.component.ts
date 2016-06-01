/// <reference path='../../../../phaser/phaser.d.ts' />

import { Component } from '@angular/core';
import { GameComponent } from '../../game/component/game.component';

@Component({
  template : '<button (click)="image()">Add image</button>'
})

export class LoaderComponent extends Phaser.State{
  
  constructor(private gameComponent:GameComponent){
    super();
    
  }
  
  preload(){
    this.game.load.image('Logo', 'modules/main/loader/assets/boot.png');
    this.game.load.image('image', 'modules/main/loader/assets/image.jpg')
  }
  create(){
    var bootLogo:Phaser.Image;
    //Logo is half the size of the screen
    bootLogo = this.game.add.image(this.game.width*0.5, this.game.height*0.5, 'Logo');
    //Logo is in the middle of the screen
    bootLogo.anchor.set(0.5,0.5);
  }
  
  image(){
    console.log(this.gameComponent.game);
    //var image:Phaser.Image = this.game.add.image(this.game.width*0.25, this.game.height*0.25, 'image');
    //image.anchor.set(0.5,0.5);
  }
}

