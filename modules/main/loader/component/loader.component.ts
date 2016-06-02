/// <reference path='../../../../phaser/phaser.d.ts' />

import { Component } from '@angular/core';
import { RouteState } from '../../routes/state/route.state';

@Component({
  template : '<button>Add image</button>'
})

export class LoaderComponent{
  
  constructor(private gameService:RouteState){};
  

}

