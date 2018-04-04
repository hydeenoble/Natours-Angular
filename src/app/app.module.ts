import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExictingToursComponent } from './exicting-tours/exicting-tours.component';
import { FeaturesComponent } from './features/features.component';
import { ToursComponent } from './tours/tours.component';
import { StoriesComponent } from './stories/stories.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExictingToursComponent,
    FeaturesComponent,
    ToursComponent,
    StoriesComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
