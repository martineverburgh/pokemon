import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../core/services/pokemon.service';
import { Pokemon } from '../shared/models/pokemon';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  response: string;
  popup: BsModalRef;

  constructor(private service: PokemonService, private modalService: BsModalService) { }

  ngOnInit() {
    this.kiesRandomPokemon();
  
  }

  kiesRandomPokemon(){
    this.randomId = Math.floor(Math.random() * Math.floor(807));
    this.service.getPokemonById(this.randomId).subscribe(pokemon =>{ 
      this.pokemon = pokemon;
      this.name = pokemon.name;
    });
    this.antwoord = '';
  }

  checkCorrect() {
    if (this.antwoord.toLowerCase() === this.name) {
      console.log("HOERA! Goed geraden");
      this.response = "HOERA! Goed geraden";

    }
    else {
      console.log("Helaas...Het was " + this.name);
      this.response = "Helaas...Het was " + this.name;
    }
  }

  openModal(template: TemplateRef<any>) {
    this.checkCorrect();
    this.popup = this.modalService.show(template);
}
}
