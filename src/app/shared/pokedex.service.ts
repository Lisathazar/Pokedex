import { Injectable } from '@angular/core';
import { POKEMONS } from './pokedex-mock';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons: Pokemon[] = POKEMONS;

  constructor() { }

}
