import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {older, younger} from '../store/pokemon.actions';

export interface State {
  age: number;
}

export const initialState = 0;

const reducer = createReducer(initialState,
  on(older, state => state + 1),
  on(younger, state => state - 1));

export const pokemonReducer = (state = initialState, action: Action) => {
  return reducer(state, action);
};
