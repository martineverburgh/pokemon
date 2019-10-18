import {Component, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {PokemonService} from '../core/services/pokemon.service';
import {Pokemon} from '../shared/models/pokemon';

@Component({
  selector: 'app-raad',
  templateUrl: './raad.component.html',
  styleUrls: ['./raad.component.css']
})
export class RaadComponent implements OnInit {

  randomId: number;
  pokemon: Observable<Pokemon>;
  name: string;
  antwoord: string;

  constructor(private service: PokemonService) {
  }

  ngOnInit() {
    this.kiesRandomPokemon();

  }

  kiesRandomPokemon() {
    this.randomId = Math.floor(Math.random() * Math.floor(807));
    this.service.getPokemonById(this.randomId).subscribe(pokemon => {
      this.pokemon = pokemon;
      this.name = pokemon.name;
    });
    this.antwoord = '';
  }

  checkCorrect() {
    if (this.antwoord.toLowerCase() === this.name) {
      alert('HOERA! Goed geraden');
    } else {
      alert('Helaas...Het was ' + this.name);
    }
  }

  openModal() {
    this.checkCorrect();
  }
}
