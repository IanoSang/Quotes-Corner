import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes";



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    {id:1, name:'Sometimes it falls upon a generation to be great, you can be that generation'},
    {id:2,name:'It\'s really that simple: Program, or be programmed'},
    {id:3,name:'The greatest glory in living lies not in never falling, but in rising every time we fall'},
    {id:4,name:'The way to get started is to quit talking and begin doing'},
    {id:5,name:'Life is what happens when you\'re busy making other plans.'},
    {id:6,name:'We live in a country where our young ladies who have recently attained the age of puberty cannot afford sanitary pads, but our men and women in public offices have iPads which they do not even know how to use.'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
