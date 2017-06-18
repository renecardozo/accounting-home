import { Component, OnInit } from '@angular/core';
import { GastoService } from '../services/gasto/gasto.service';
import { Gasto } from './gasto'
declare var $: any;

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {
  errorMessage: string;
  public gastos : Gasto[];  
  public updateGasto={};
  

  constructor(private gastoService: GastoService) { }

  ngOnInit() {
    this.GetGastos();
  }
  Save(gasto:Gasto): void {
        this.gastoService.create(gasto.monto,gasto.descripcion)
                    .subscribe(
                        gasto  => {
                        console.log('create!!', gasto);
                        this.gastos.push(gasto);
                        this.GetGastos();
                        $('#myModal').modal('hide');
                        $( '#formGasto' ).each(function(){
                            this.reset();
                        });
                        },
                        error =>  this.errorMessage = <any>error);
  }
  GetGastos(): void {
        this.gastoService.getGastos()
                        .subscribe(gastos =>
                        {
                            this.gastos = gastos;
                        },
                        error =>  
                        this.errorMessage = <any>error);
  }
  openModalToEdit(gasto:Gasto):void {
    this.updateGasto=gasto;
    $("#updateGasto").modal('show');
  }
  UpdateGasto(gasto:Gasto,id:string):void{
      this.gastoService.update(gasto.descripcion,gasto.monto, id)
                    .subscribe(
                        gasto  => {
                        let index = this.gastos.indexOf(gasto);
                        this.gastos[index] = gasto;
                        this.GetGastos();
                        $('#updateGasto').modal('hide');
                        this.updateGasto={};
                        },
                        error =>  this.errorMessage = <any>error);
  }
  DeleteGasto(gasto:Gasto): void{
      this.gastoService.delete(gasto._id)
                      .subscribe(
                        gasto  => {
                        console.log('delete!!', gasto._id, 'to', gasto);
                        let index = this.gastos.indexOf(gasto);
                        this.gastos.splice(index, 1);
                        },
                        error =>  this.errorMessage = <any>error);
                      
  }

}
