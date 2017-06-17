import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GastoService {

  constructor(private http: Http) { }

  loadGastos(){
    return this.http.get('http://localhost:3001/api_gasto/gasto').map(
      (response)=> response.json()
    ).subscribe(
      (data)=>console.log(data)
    )
  }

}
