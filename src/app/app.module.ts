import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import {FormsModule} from "@angular/forms";
import { HighlighterDirective } from './highlighter.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TimerPipe } from './timer.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    HighlighterDirective,
    NavbarComponent,
    FooterComponent,
    TimerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title ='Quotes'
}
