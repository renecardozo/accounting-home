import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { ExpenseService } from './expenses.service';
import { Rubro } from '../item/rubro';
import { Expense } from './expense';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
declare var $: any;
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
    optionSelected:string = '';
    date: DateModel;
    options: DatePickerOptions;

    public errorMessage: string;
    public rubros : Rubro[];
    public expenses : Expense[];  
    private rubro:Rubro;
    private updateExpense={}
  

    constructor(public itemService:ItemService,public expenseService:ExpenseService){
        this.options = new DatePickerOptions();
        this.options.maxDate = new Date(Date.now());
        this.options.minDate = new Date(Date.now());
    }
    ngOnInit(){
        this.GetExpenses();
        this.getRubros();
    }
    addGasto(): void {
        alert('added new expense');
    }
    getRubros(): void {
        this.itemService.getRubros()
            .subscribe(rubros =>
                        {
                            this.rubros = rubros;
                            console.log("the rubros is");
                            console.log(this.rubros);
                        },
                        error =>  
                        this.errorMessage = <any>error);                
  }
  Save(expense:Expense): void {
    console.log("antes de emitir");
    console.log(expense);
    this.expenseService.create(expense.monto,expense.descripcion,expense.rubro)
    .subscribe(
    gasto  => {
        console.log('create!!', gasto);
        this.expenses.push(gasto);
        this.GetExpenses();
        $('#myModal').modal('hide');
        $( '#formGasto' ).each(function(){
            this.reset();
        });
                      
            },
        error =>  this.errorMessage = <any>error);                                                    
  }
  GetExpenses(): void {
        this.expenseService.getExpenses()
                        .subscribe(expenses =>
                        {
                            this.expenses = expenses;
                            console.log("the expenses is:");
                            console.log(this.expenses);
                        },
                        error =>  
                        this.errorMessage = <any>error);
  }
  openModalToEdit(expense:Expense):void {
    this.updateExpense=expense;
    $("#updateGasto").modal('show');
  }
  editExpense(expense:Expense,id:string):void{
      console.log("el puto id es: ");
      console.log(this.updateExpense);
      this.expenseService.update(expense.descripcion,expense.monto,expense.rubro, id)
                    .subscribe(
                        expense  => {
                        let index = this.expenses.indexOf(expense);
                        this.expenses[index] = expense;
                        this.GetExpenses();
                        $('#updateGasto').modal('hide');
                        this.updateExpense={};
                        },
                        error =>  this.errorMessage = <any>error);
  }
  deleteExpense(expense:Expense): void{
      this.expenseService.delete(expense._id)
                      .subscribe(
                        expense  => {
                        console.log('delete!!', expense._id, 'to', expense);
                        let index = this.expenses.indexOf(expense);
                        this.expenses.splice(index, 1);
                        },
                        error =>  this.errorMessage = <any>error);
                      
  }
  setRubro(item): void{
    this.rubro=item;
    console.log("el rubro es");
    console.log(this.rubro);
    return item.rubro;
  }
}