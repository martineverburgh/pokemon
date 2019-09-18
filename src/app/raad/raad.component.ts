import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-raad',
  templateUrl: './raad.component.html',
  styleUrls: ['./raad.component.css']
})
export class RaadComponent implements OnInit {

  randomId: number;
  pokemon: Observable<any>;

  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.kiesRandomPokemon();
  }

  kiesRandomPokemon(){
    this.randomId = Math.floor(Math.random() * Math.floor(807));
    this.service.getPokemonById(this.randomId).subscribe(pokemon => this.pokemon = pokemon);
  }
}
