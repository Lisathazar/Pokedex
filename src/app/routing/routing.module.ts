import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePokemonPageComponent } from '../pages/create-pokemon-page/create-pokemon-page.component';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPageComponent } from '../pages/pokedex-page/pokedex-page.component';


const routes: Routes = [
  {
    path: "",
    component: PokedexPageComponent
  },
  {
    path: "create",
    component: CreatePokemonPageComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.
    forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
