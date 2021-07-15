import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

import { GamesDataService } from '../games-data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})



export class GamesListComponent implements OnInit {
  title:string = "mean Games";


  games:Game[] =[];

  constructor(private gamesDataService:GamesDataService, private AuthService:AuthService) { }

  ngOnInit(): void {

    this.getGames();

    
    
  }

  public addGame(form:any):void {

    console.log("Game Form Submitted!",form);

    const newGame = {
      title: form.value.title,
      price: form.value.price,
      year: form.value.year,
      minAge: form.value.minAge,
      rate: form.value.rate,
      minPlayers: form.value.minPlayers,
      maxPlayers: form.value.maxPlayers,
    
  };
  console.log("mygame", newGame)

  this.gamesDataService.addGame(newGame).then(response=> {

    this.err=false;
    this.success=true;
    this.error="";
    this.message="New Game added successful, Thank you"
    form.reset();


  }).catch(error=>{

    this.err=true;
    this.success=false;
    this.error="An error occured "+error;
    this.message=""

  });

  



  }



  public getGames() : void {
    this.gamesDataService.getGames().then(foundGames =>this.games=foundGames);
  }

  err= false;
  success=false;
  error="";
  message="";

  isLoggedIn() {

    return this.AuthService.getAuth();
    
  }


}

export class Game {
  title!: string;
  price!: number;
  year!: number;
  _id!: string;
  rate!:number
}