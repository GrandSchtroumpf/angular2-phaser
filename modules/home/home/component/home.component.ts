import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { GameComponent } from '../../../main/game/component/game.component';


@Component({
  selector: 'home',
  moduleId : module.id,
  templateUrl: '../home.html',
  directives: [ROUTER_DIRECTIVES]
})
  
export class HomeComponent{
  
  constructor(private router : Router, private gameComponent:GameComponent){}
  
  startGame(){
    //var game = this.gameComponent.game;
    this.router.navigate(['/loader']);
  }
}
