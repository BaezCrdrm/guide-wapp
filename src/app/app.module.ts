import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { FormsModule } from '@angular/forms';
import { DescriptionComponent } from './description/description.component'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '',component: InicioComponent ,pathMatch: 'full' },
  { path: 'Eventos/:type', component: EventsComponent },
  { path: 'des', component: DescriptionComponent},
  { path: '**',redirectTo: '/' ,pathMatch: 'full' },
  
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    DescriptionComponent,
    SidebarComponent,
    EncabezadoComponent,
    InicioComponent
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
