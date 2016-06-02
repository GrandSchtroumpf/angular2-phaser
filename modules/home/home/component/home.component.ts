import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { RouteState } from '../../../main/routes/state/route.state';


@Component({
  selector: 'home',
  moduleId : module.id,
  templateUrl: '../home.html',
  directives: [ROUTER_DIRECTIVES]
})
  
export class HomeComponent{
  
  constructor(private router : Router, private routeState:RouteState){}
  
  startGame(){
    this.routeState.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'starter');
    this.routeState.game.state.start('Loader');
    this.router.navigate(['/loader']);
  }
}
