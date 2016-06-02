"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoaderState = (function (_super) {
    __extends(LoaderState, _super);
    function LoaderState() {
        _super.apply(this, arguments);
    }
    LoaderState.prototype.preload = function () {
        this.game.load.image('Logo', 'modules/main/loader/assets/boot.png');
    };
    LoaderState.prototype.create = function () {
        var bootLogo;
        //Logo is half the size of the screen
        bootLogo = this.game.add.image(this.game.width * 0.5, this.game.height * 0.5, 'Logo');
        //Logo is in the middle of the screen
        bootLogo.anchor.set(0.5, 0.5);
    };
    return LoaderState;
}(Phaser.State));
exports.LoaderState = LoaderState;
//# sourceMappingURL=loader.state.js.map