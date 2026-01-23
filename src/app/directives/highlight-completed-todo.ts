import { Directive,input, effect, ElementRef,inject } from '@angular/core';
                  
@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
   isCompleted = input(false);
   el =inject(ElementRef);
   styleEffect =effect(()=>{
    if(this.isCompleted()){
      this.el.nativeElement.style.backgroundColor = 'lightgray';
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = 'white';
    }else{
      this.el.nativeElement.style.backgroundColor = 'initial';
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'initial';
    }
  });
  constructor() { }

}
