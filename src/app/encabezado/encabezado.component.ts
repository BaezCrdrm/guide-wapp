import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  title = 'Guia - Web App';
  constructor() { }

  ngOnInit() {
  }

  Sidevar(){
    document.getElementById('sidebar').classList.toggle('active');
    
  }
}
