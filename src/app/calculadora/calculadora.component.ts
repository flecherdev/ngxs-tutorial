
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Increment, Decrement, SetTotal } from '../store/counter.actions';
import { Observable } from 'rxjs';
import { CounterStateModel, CounterState } from '../store/counter.state';
// import { UsersRequestAttempt } from '../store/users.actions';
// import { UsersStateModel } from '../store/users.state';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

   // Seleccionamos el 'slice' counter del estado global.
   // Seleccionamos el 'slice' counter del estado global.
  @Select((state: any) => state.counter)
  counter$!: Observable<CounterStateModel>;
  
   // Inyectamos la store global en el componente.
   constructor(private store: Store) {
   }

  ngOnInit(): void {
  }
  
   // Invocamos a las acciones del store.
   increment() {
     console.log('entro al increment')
     this.store.dispatch(new Increment());
   }
  
   decrement() {
     this.store.dispatch(new Decrement());
   }
  
   reset() {
     this.store.dispatch(new SetTotal(0));
   }

}
