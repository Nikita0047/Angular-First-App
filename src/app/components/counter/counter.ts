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
      <button (click)="Increament()">Increament</button>
      <button (click)="Reset()">Reset</button>
      <button (click)="Decreament()">Decreament</button>
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
  Increament()
  {
     this.counter.update(x=>x + 1);
  }
  Decreament()
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
