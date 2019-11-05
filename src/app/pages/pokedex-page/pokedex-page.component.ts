import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {
  pokemonShowed: Pokemon;
  pokemons: Pokemon[]  = this.pokemonService.pokemons;

  constructor(public pokemonService: PokedexService) { }

  ngOnInit() {
    
  }

  show(p: Pokemon){
    this.pokemonShowed = p;
  }

}
