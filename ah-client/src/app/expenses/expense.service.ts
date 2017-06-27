import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Gasto } from './gasto';
import { Settings } from '../app.config';

@Injectable()
export class GastoService {
  private gastosUrl;
  /**
   * Initialize the setting for this service.
   * @param {Http} private http [description]
   */
  constructor(private http: Http) {
    this.gastosUrl = Settings.protocol+'://'+Settings.host+':'+Settings.port +'/'+Settings.middlewares.gastos;
   }

 /**
  * Return all gastos from server.
  * @return {Observable<Rubro[]>} A list of gastos.
  */
  getGastos(): Observable<Gasto[]> {
    return this.http.get(this.gastosUrl)
                    .map(res => { return res.json().gastos; })
                    .catch(this.handleError);
  }

  /**
   * Private method to handle the response of server.
   * @param {Response | any} error The error message comming from server side.
   */
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  } 
}