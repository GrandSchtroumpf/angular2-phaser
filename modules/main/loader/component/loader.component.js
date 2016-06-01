/// <reference path='../../../../phaser/phaser.d.ts' />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var game_component_1 = require('../../game/component/game.component');
var LoaderComponent = (function (_super) {
    __extends(LoaderComponent, _super);
    function LoaderComponent(gameComponent) {
        _super.call(this);
        this.gameComponent = gameComponent;
    }
    LoaderComponent.prototype.preload = function () {
        this.game.load.image('Logo', 'modules/main/loader/assets/boot.png');
        this.game.load.image('image', 'modules/main/loader/assets/image.jpg');
    };
    LoaderComponent.prototype.create = function () {
        var bootLogo;
        //Logo is half the size of the screen
        bootLogo = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, 'Logo');
        //Logo is in the middle of the screen
        bootLogo.anchor.set(0.5, 0.5);
    };
    LoaderComponent.prototype.image = function () {
        console.log(this.gameComponent.game);
        //var image:Phaser.Image = this.game.add.image(this.game.width*0.25, this.game.height*0.25, 'image');
        //image.anchor.set(0.5,0.5);
    };
    LoaderComponent = __decorate([
        core_1.Component({
            template: '<button (click)="image()">Add image</button>'
        }), 
        __metadata('design:paramtypes', [game_component_1.GameComponent])
    ], LoaderComponent);
    return LoaderComponent;
}(Phaser.State));
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map