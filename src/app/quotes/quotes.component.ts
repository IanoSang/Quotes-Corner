import { Component, OnInit, OnDestroy} from '@angular/core';
import {Quotes} from "../quotes";
import {Subscription, timer} from "rxjs";



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit,OnDestroy{
  countDown: Subscription|any;
  counter:string|any;
  time:string|any;
  tick = 1500;
  quotes:Quotes[] = [
    new Quotes(1, 'Sometimes it falls upon a generation to be great, you can be that generation', 'Nelson Mandela', 'Ian Sang', '0', '0'),
    new Quotes(2, 'In the emerging highly programmed landscape ahead, you will either create the software or you will be the software, It\'s really that simple: Program, or be programmed', 'Douglas Rushoff', 'Ian Sang', '0', '0',),
    new Quotes(3, 'The greatest glory in living lies not in never falling, but in rising every time we fall', 'Unknown', 'Ian Sang', '0', '0'),
    new Quotes(4, 'The way to get started is to quit talking and begin doing', 'Someone', 'Ian Sang', '0', '0'),
    new Quotes(5, 'Furaha sio kitu kilichoundwa tayari. Inakuja kutoka kwa matendo yako.', 'Mswahili', 'Ian Sang', '0', '0'),
    new Quotes(6, 'We live in a country where our young ladies who have recently attained the age of puberty cannot afford sanitary pads, but our men and women in public offices have iPads which they do not even know how to use.', 'Patrick Lumumba', 'Ian Sang', '0', '0'),
  ];
  toggleDetails(index: string | number){
    // @ts-ignore
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  quotesDelete(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].authorName}?`)

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

  startTimer() {
    this.counter=this.time;
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);
    this.time="";
  }
  ngOnDestroy(): void {
  }
}
