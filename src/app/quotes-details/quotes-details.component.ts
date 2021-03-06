import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Quotes} from "../quotes";

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes! : Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quote!: Quotes;
  quotesDelete(complete: boolean) {
    this.isComplete.emit(complete);

  }
  upvote() {
    this.quotes.upvote++;
  }
  downvote(){

    this.quotes.downvote++;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
