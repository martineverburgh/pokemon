import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {older, younger} from '../store/pokemon.actions';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  age$: Observable<number>;

  constructor(private store: Store<{age: number}>) { }

  ngOnInit() {
    this.age$ = this.store.pipe(
      select('age')
    );
  }

  older() {
    this.store.dispatch(older());
  }

  younger() {
    this.store.dispatch(younger());
  }

}
