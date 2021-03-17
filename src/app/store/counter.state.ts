import { Injectable } from '@angular/core';
import { State, Store, StateContext, Action } from '@ngxs/store';
import { Increment, Decrement, SetTotal } from './counter.actions';

// Creamos un tipo para nuestro estado.
export interface CounterStateModel {
  total: number;
}

// Creamos nuestro estado con la anotación @State
// Le damos el tipo al estado.
// Le damos nombre al 'slice' o partición del estado.
// Damos valor por defecto al estado.

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    total: 0
  }
})

@Injectable()
export class CounterState {
  // Inyectamos la store global en nuestro estado.
  constructor(private store: Store) {}

  // Relacionamos la acción con su implementación con la anotación @Action(nombre_de_acción).
  // Inyectamos a la función el estado actual con 'stateContext: StateContext'.
  @Action(Increment)
  Increment(stateContext: StateContext<CounterStateModel>) {
    console.log('entro a la accion ingrement')
    // Recogemos el valor actual del total con 'store.getState().nombre_propiedad'.
    const currentTotal = stateContext.getState().total;
    console.log(currentTotal)
    // Actualizamos el estado con pathState({nombre_propiedad: valor}).
    stateContext.patchState({total: currentTotal + 1 });
  }

  @Action(Decrement)
  Decrement(stateContext: StateContext<CounterStateModel>, action: Decrement) {
    const currentTotal = stateContext.getState().total;
    stateContext.patchState({  total: currentTotal - 1 });
  }

  // Inyectamos el valor de la acción y recuperamos el valor pasado por parámetro.
  @Action(SetTotal)
  SetTotal(stateContext: StateContext<CounterStateModel>, action: SetTotal) {
    stateContext.patchState({ total: action.value });
  }
}