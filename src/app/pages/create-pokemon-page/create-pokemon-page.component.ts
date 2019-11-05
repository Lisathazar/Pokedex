import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.scss']
})
export class CreatePokemonPageComponent implements OnInit {

  pokemon: Pokemon = new Pokemon();

  

  constructor(private pokedexService : PokedexService) { }

  ngOnInit() {
  }
  
  sendPokemon(){
    this.pokedexService.pokemons.push(this.pokemon);
    console.log(this.pokemon)
  }
}
