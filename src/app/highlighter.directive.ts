import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = "orange";
  }

}
