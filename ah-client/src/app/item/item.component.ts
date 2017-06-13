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

    /**
     * Creates a new rubro
     */
    Register(): void {
        this.appService.create(this.rubro)
                    .subscribe(
                        rubro  => {
                        console.log('create!!', rubro);
                        this.rubros.push(rubro);
                        this.GetRubros();
                        },
                        error =>  this.errorMessage = <any>error);
    }
    
    /**
     * Returns all rubros created
     */
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
    
    /**
     * Initialize properties of component.
     */
    ngOnInit(): void {
        console.log('Initialize!!');
        this.GetRubros();
    }
    
    /**
     * Edit a rubro
     * @param {Rubro} rubroToUpdate Ther rubro to be udpated.
     */
    editItem(rubroToUpdate: Rubro): void {
        this.appService.update(this.rubro, rubroToUpdate._id)
                    .subscribe(
                        rubro  => {
                        console.log('update from :', rubroToUpdate, 'to', rubro);
                        let index = this.rubros.indexOf(rubroToUpdate);
                        this.rubros[index] = rubro;
                        this.GetRubros();
                        },
                        error =>  this.errorMessage = <any>error);
    }
    
    /**
     * Deletes a rubro.
     * @param {Rubro} rubroToDelete The rubro to be deleted.
     */
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
