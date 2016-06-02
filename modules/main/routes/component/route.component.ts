import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { RouteState } from '../state/route.state';
import { HomeComponent } from '../../../home/home/component/home.component';
import { LoaderComponent } from '../../loader/component/loader.component'

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

//Routes for Angular
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/loader', component: LoaderComponent}
])
  
export class RouteComponent implements OnInit{
  
  constructor(private router : Router, private routeState:RouteState){}
  
  ngOnInit() {
    this.router.navigate(['/home']);
  }

}
