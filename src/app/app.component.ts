import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokemon';
  pokemon: Pokemon;
  selectedTeamPokemon: Pokemon;
  team: Pokemon[] = [];

  constructor(private service: PokemonService) { }

  ngOnInit() {

  }

  getPokemonByName(name: string) {
    this.service.getPokemonByName(name).subscribe(result => this.pokemon = result);
  }

  addPokemonToTeam(pokemon: Pokemon) {
    length = this.team.length;
    if (length < 5) { this.team[length] = pokemon; }
    else { alert('Maximaal 5 pokemon per team'); }
  }

  onSelect(pokemon: Pokemon): void {
    this.selectedTeamPokemon = pokemon;
  }
}
