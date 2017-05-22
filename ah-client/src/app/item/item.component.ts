import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Rubro } from './rubro';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'item-component',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css'],
    providers: [
        ItemService
    ]
})

export class ItemComponent implements OnInit {
    errorMessage: string;
    rubro = '';
    public rubros: Rubro[];

    constructor(private appService: ItemService) {}

    Register(): void {
        this.appService.create(this.rubro)
                    .subscribe(
                        rubro  => {
                        console.log('create!!', rubro);
                        this.rubros.push(rubro);
                        },
                        error =>  this.errorMessage = <any>error);
    }
    
    GetRubros(): void {
        this.appService.getRubros()
                        .subscribe(rubros =>
                        {
                            console.log(typeof(this.rubros));
                            this.rubros = rubros;
                            console.log(typeof(this.rubros), this.rubros);
                        },
                        error =>  
                        this.errorMessage = <any>error);
    }
    
    ngOnInit(): void {
        console.log('Initialize!!');
        this.GetRubros();
    }
    
    editItem(rubroToUpdate: Rubro): void {
        this.appService.update(this.rubro, rubroToUpdate._id)
                    .subscribe(
                        rubro  => {
                        console.log('update from :', rubroToUpdate, 'to', rubro);
                        let index = this.rubros.indexOf(rubroToUpdate);
                        this.rubros[index] = rubro;
                        },
                        error =>  this.errorMessage = <any>error);
    }
    
    deleteItem(rubroToDelete: Rubro): void {
        this.appService.delete(rubroToDelete._id)
                    .subscribe(
                        rubro  => {
                        console.log('delete!!', rubroToDelete, 'to', rubro);
                        let index = this.rubros.indexOf(rubroToDelete);
                        this.rubros.splice(index, 1);
                        },
                        error =>  this.errorMessage = <any>error);
    }
}
