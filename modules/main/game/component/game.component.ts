import { Injectable } from '@angular/core';
import { LoaderComponent } from '../../loader/component/loader.component';

@Injectable()

export class GameComponent{
  
  private _game:Phaser.Game;
  
  constructor(){
    this._game= new Phaser.Game('100%', '100%', Phaser.AUTO, 'starter');
    this.setStates();
  }
  
  get game(){
    return this._game
  }
  
  setStates(){
    this._game.state.add('Loader', LoaderComponent, true);
  }

}
