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
    editItem(item:any): void {
        console.log(item);
    }
    deleteItem(item:any): void {
        console.log(item);
    }
}