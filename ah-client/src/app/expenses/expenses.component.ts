import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
@Component({
    selector: 'expenses-component',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.component.css']
})
export class ExpensesComponent implements OnInit{
    message:string = 'It is expenses component';
    optionSelected:string = '';
    date: DateModel;
    options: DatePickerOptions;
    constructor(){
        this.options = new DatePickerOptions();
        this.options.maxDate = new Date(Date.now());
        this.options.minDate = new Date(Date.now());
    }
    ngOnInit(){}
    addGasto(): void {
        alert('added new expense');
    }
}