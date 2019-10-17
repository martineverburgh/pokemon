import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../core/services/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    PokemonService,
    Pokemon
  ]
})
export class RaadModule { }
