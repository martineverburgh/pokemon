import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pokemon } from '../../shared/models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
      map(result => new Pokemon(result['name'], result['sprites'].front_default, 100))
      );
  }

  getPokemonById(id: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
      map(result => new Pokemon(result['name'], result['sprites'].front_default, 100))
      );
  }
}
