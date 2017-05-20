import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Rubro } from './rubro';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  errorMessage: string;
  rubro = '';
  public rubros: Rubro[];

  constructor(private appService: AppService) {

  }

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
}
