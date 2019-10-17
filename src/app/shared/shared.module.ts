import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from './models/pokemon';
import { PokemonService } from '../core/services/pokemon.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    Pokemon,
    PokemonService
  ]
})
export class SharedModule { }
