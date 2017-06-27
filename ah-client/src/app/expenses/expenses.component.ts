import { Component, OnInit } from '@angular/core';
import { GastoService } from './expense.service';
import { Gasto } from './gasto';
import { Observable } from 'rxjs/Observable';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
    selector: 'expenses-component',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css'],
    providers: [
        GastoService
    ]
})
export class ExpensesComponent implements OnInit{
    message:string = 'It is expenses component';
    errorMessage:string = '';
    optionSelected:string = '';
    date: DateModel;
    options: DatePickerOptions;
   
    public gastos: Gasto[];

    constructor(private gastoService: GastoService) {
        this.options = new DatePickerOptions();
        this.options.maxDate = new Date(Date.now());
        this.options.minDate = new Date(Date.now());
    }

    /**
     * Returns all gastos created
     */
    GetGastos(): void {
        this.gastoService.getGastos()
                        .subscribe(gastos =>
                        {
                            this.gastos = gastos;
                        },
                        error =>  
                        this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.GetGastos();
    }
}