import { Injectable } from '@angular/core';
import { LoaderState } from '../../loader/state/loader.state';

@Injectable()

export class RouteState{
  
  private _game:Phaser.Game;
  
  constructor(){
   
  }
  
  public get game():Phaser.Game{
    return this._game;
  }

  
  public set game(newGame:Phaser.Game){
    this._game= new Phaser.Game('100%', '100%', Phaser.AUTO, 'starter');
    this.setStates();
  }
  

  setStates(){
    this._game.state.add('Loader', LoaderState);
  }

}
