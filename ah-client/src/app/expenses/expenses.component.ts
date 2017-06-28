import { Component, OnInit } from '@angular/core';
import { ItemService } from './expenses.service';
import { Expenses } from './expenses';
import { Observable } from 'rxjs/Observable';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
    selector: 'expenses-component',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css'],
    providers: [
        ItemService
    ]
})
export class ExpensesComponent implements OnInit{
    message:string = 'It is expenses component';
    errorMessage:string = '';
    rubroSelected:string = '';
    date: DateModel;
    options: DatePickerOptions;
   
    public gastos: Expenses[];
    private rubros: any[];
    private gasto;

    constructor(private gastoService: ItemService) {
        this.options = new DatePickerOptions();
        this.options.maxDate = new Date(Date.now());
        this.options.minDate = new Date(Date.now());
        this.gasto = {
            monto: 0,
            fecha: null,
            descripcion:'',
            rubro: ''
        }
    }

    /**
     * Returns all gastos created
     */
    GetGastos(): void {
        this.gastoService.getGastos()
                        .subscribe(gastos =>
                        {
                            this.gastos = gastos;
                            this.normalizarFechas(this.gastos);
                        },
                        error =>  
                        this.errorMessage = <any>error);
    }

    getRubros(): void {
        this.gastoService.getRubros()
                        .subscribe(
                            rubros => {
                                this.rubros = rubros;
                            },
                            error => {
                                this.errorMessage = error;
                            });
    }
    ngOnInit(): void {
        this.getRubros();
        this.GetGastos();
    }
    guardarGasto(): void {
        this.gasto.rubro = this.getIdRubro(this.gasto.rubro);
        this.gasto.fecha = new Date(this.gasto.fecha.formatted);
        this.gastoService.saveGasto(this.gasto)
                        .subscribe(response => {
                            this.GetGastos();
                        },
                        error => {
                            this.errorMessage = error;
                        })

    }
    editGasto(gasto): void {
        alert('edit gasto');
    }
    deleteGasto(gastp): void {
        alert('delete gasto');
    }
    private normalizarFechas(gastos): void {
        for(let index = 0; index<gastos.length ; index++) {
            gastos[index].fecha = this.parserFecha(gastos[index].fecha);
        }
    }
    private parserFecha(fecha): any {
        fecha = new Date(fecha);
        let annio = fecha.getFullYear();
        let mes = fecha.getMonth() + 1;
        let dia = fecha.getUTCDate();
        return annio + '-' + mes + '-'+ dia;
    }
    private getIdRubro(rubro): any {
        let idRubro;
        for(let index = 0; index< this.rubros.length; index++) {
            if (rubro == this.rubros[index].rubro) {
                idRubro = this.rubros[index]._id;
                break;
            }
        }
        return idRubro;
    }
}