import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-registro',
  templateUrl: './listado-registro.component.html',
  styleUrls: ['./listado-registro.component.css']
})
export class ListadoRegistroComponent implements OnInit {

  @Input() datos: any;

  constructor() { }

  ngOnInit(): void {
  }

}
