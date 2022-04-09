import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes";



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1, 'Sometimes it falls upon a generation to be great, you can be that generation', 'By Nelson Mandela'),
    new Quotes(2,'It\'s really that simple: Program, or be programmed', 'By Software Dev'),
    new Quotes(3, 'The greatest glory in living lies not in never falling, but in rising every time we fall', 'By Unknown'),
    new Quotes(4, 'The way to get started is to quit talking and begin doing', 'By Someone'),
    new Quotes(4, 'The way to get started is to quit talking and begin doing', 'By Someone'),
    new Quotes(6, 'We live in a country where our young ladies who have recently attained the age of puberty cannot afford sanitary pads, but our men and women in public offices have iPads which they do not even know how to use.', 'By Patrick Lumumba'),
  ];
  toggleDetails(index: string | number){
    // @ts-ignore
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quotesDelete(isComplete: any, index: number) {
    function constructor() {

    }

    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote: Quotes){
    let goalLength = this.quotes.length;
    quote.id = goalLength+1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
