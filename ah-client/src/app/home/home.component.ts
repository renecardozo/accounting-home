import { Component } from '@angular/core';
import { Image } from './image.interface';

@Component({
    selector: 'home-component',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    homeComponent:string = 'Home Component';
    
}
