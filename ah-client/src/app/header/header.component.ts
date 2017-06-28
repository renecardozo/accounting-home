import { Component } from '@angular/core';
@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {

    nombre:number;

    constructor() { }

    ngOnInit() {
    this.nombre = 340;
  }
  handleMyEvent(arg){
    console.log("manejando eventos",arg);
  }

    
}