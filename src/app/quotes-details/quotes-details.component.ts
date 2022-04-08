import {Component, Input, OnInit} from '@angular/core';
import {Quotes} from "../quotes";

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quotes! : Quotes;

  constructor() { }

  ngOnInit(): void {
  }

}
