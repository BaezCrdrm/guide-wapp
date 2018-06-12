import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { FormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Eventos', component: EventsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
