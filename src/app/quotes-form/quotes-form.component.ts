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
  @Output() close = new EventEmitter();


  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes(
      0,
      '',
      '',
    );

  }
  closeModal() {
    this.close.emit();
  }



  constructor() { }

  ngOnInit(): void {
  }


}
