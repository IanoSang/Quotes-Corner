import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import {Quote} from "@angular/compiler";
import {Quotes} from "../quotes";

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  public newQuote: Quotes = new Quotes(0,"","");
  @Output() addQuote = new EventEmitter<Quotes>();


  submitQuote(){
    // @ts-ignore
    if (this.newQuote == ''){

    }
    else {
      // @ts-ignore
      this.addQuote.emit(this.newQuote);
    }

  }

//   if (this.newTask == '') {
// }
// else {
//   // @ts-ignore
//   this.items.push(this.newTask);
//   this.newTask = '';
// }

  constructor() { }

  ngOnInit(): void {
  }


}
