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
     * Returns all rubros created
     */
    GetRubros(): void {
        this.appService.getRubros()
                        .subscribe(rubros =>
                        {
                            this.rubros = rubros;
                        },
                        error =>  
                        this.errorMessage = <any>error);
    }
    
    /**
     * Initialize properties of component.
     */
    ngOnInit(): void {
        this.GetRubros();
        console.log(this.rubros);
    }
    
    /**
     * Creates a new rubro
     */
    registerItem(): void {
        this.appService.create(this.rubro)
                    .subscribe(
                        rubro  => {
                          this.GetRubros();
                        },
                        error =>  this.errorMessage = <any>error);
    }
    
    /**
     * Edit a rubro
     * @param {Rubro} rubroToUpdate Ther rubro to be udpated.
     */
    editItem(rubroToUpdate: Rubro): void {
        this.appService.update(this.rubro, rubroToUpdate._id)
                    .subscribe(
                        rubro  => {
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
                          this.GetRubros();
                        },
                        error =>  this.errorMessage = <any>error);
    }
}
