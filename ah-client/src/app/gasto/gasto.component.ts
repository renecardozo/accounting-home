import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto/gasto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  constructor(private gastoService: GastoService) { }

  ngOnInit() {
    this.gastoService.loadGastos();
  }

}
