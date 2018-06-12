import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guia - Web App';
  templateUrl:"app.component.html";

constructor(){}

  ngOnInit(){

  }


Sidevar(){
  document.getElementById('sidebar').classList.toggle('active');
  
}

}