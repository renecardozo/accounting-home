import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../services/ingreso/ingreso.service';
import { SaldoComponent } from '../saldo/saldo.component';
import { Ingreso } from './ingreso'
declare var $: any;

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  errorMessage: string;
  public ingresos : Ingreso[];  
  public updateIngreso={};
  

  constructor(private ingresoService: IngresoService) { }

  onNotify(message: string) {
      console.log("viene a recibir algo");
    alert(message);
  }

  ngOnInit() {
    this.GetIngresos();
  }
  Save(ingreso:Ingreso): void {
        this.ingresoService.create(ingreso.monto,ingreso.descripcion)
                    .subscribe(
                        ingreso  => {
                        console.log('create!!', ingreso);
                        this.ingresos.push(ingreso);
                        this.GetIngresos();
                        $('#myModal').modal('hide');
                        $( '#formIngreso' ).each(function(){
                            this.reset();
                        });
                        },
                        error =>  this.errorMessage = <any>error);
  }
  getSaldo():void{
      let saldo=0;
      for(var i=0;i<this.ingresos.length;i++){
          saldo = saldo+this.ingresos[i].monto;
      }
      console.log("saldo actual: "+saldo);
  }
  GetIngresos(): void {
        this.ingresoService.getIngresos()
                        .subscribe(ingresos =>
                        {
                            this.ingresos = ingresos;
                            this.getSaldo();
                        },
                        error =>  
                        this.errorMessage = <any>error);
  }
  openModalToEdit(ingreso:Ingreso):void {
    this.updateIngreso=ingreso;
    $("#updateIngreso").modal('show');
  }
  UpdateIngreso(ingreso:Ingreso,id:string):void{
      this.ingresoService.update(ingreso.descripcion,ingreso.monto, id)
                    .subscribe(
                        ingreso  => {
                        let index = this.ingresos.indexOf(ingreso);
                        this.ingresos[index] = ingreso;
                        this.GetIngresos();
                        $('#updateIngreso').modal('hide');
                        this.updateIngreso={};
                        },
                        error =>  this.errorMessage = <any>error);
  }
  DeleteIngreso(ingreso:Ingreso): void{
      this.ingresoService.delete(ingreso._id)
                      .subscribe(
                        ingreso  => {
                        console.log('delete!!', ingreso._id, 'to', ingreso);
                        let index = this.ingresos.indexOf(ingreso);
                        this.ingresos.splice(index, 1);
                        },
                        error =>  this.errorMessage = <any>error);
                      
  }

}
