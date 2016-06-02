import { Injectable } from '@angular/core';
import { PlayerInterface } from '../interface/player.interface';

@Injectable()

export class PlayerService {
    
    _player:PlayerInterface;
    
    constructor(){
        
    }
    
    get player():PlayerInterface{
        return this._player;
    }
    
    set player(newPlayer:PlayerInterface){
        this._player = newPlayer;
    }
}