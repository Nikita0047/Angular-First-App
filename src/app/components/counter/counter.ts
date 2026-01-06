import { Component, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p>
      counter: {{ counter() }}
    </p>
    <div>
      <button (click)="Increment()">Increment</button>
      <button (click)="Reset()">Reset</button>
      <button (click)="Decrement()">Decrement</button>
    </div>
  `,
  styles: `
    p{
      margin-left: 10px;
      font-size: 20px;
      font-weight: bold;
    }
    div button{
      length: 100px;
      margin:auto 10px;
      padding: 5px 10px;
      font-size: 16px;
    }

  `,
})
export class Counter {
  counter = signal(0);
  Increment()
  {
     this.counter.update(x=>x + 1);
  }
  Decrement()
  {
    this.counter.update(x=>x- 1);
    if(this.counter() < 0)
    {
      this.counter.set(0);
    }
  }
  Reset()
  {
    this.counter.set(0);
  }

}
