import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(elRef:ElementRef) {
    @HostListener(onmouseover){
      console.log('rtrtrtrtrtrtr');
    }
  }

}
