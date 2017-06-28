import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Expense } from './expense';
import { Settings } from '../app.config';

@Injectable()
export class ExpenseService {
  private expensesUrl;
  /**
   * Initialize the setting for this service.
   * @param {Http} private http [description]
   */
  constructor(private http: Http) {
    this.expensesUrl = Settings.protocol+'://'+Settings.host+':'+Settings.port +'/'+Settings.middlewares.gastos;
   }
  /**
  * Return all expenses from server.
  * @return {Observable<Expense[]>} A list a expenses.
  */
  getExpenses(): Observable<Expense[]> {
    return this.http.get(this.expensesUrl)
                    .map(res => { return res.json().gastos; })
                    .catch(this.handleError);
  }

  /**
   * Creates a new gasto
   * @param  {string}            description The description for the new gasto
   * @param  {string}            monto The monto for the new gasto
   * @return {Observable<Gasto>}      The gasto created.
   */
  create(monto: Number,descripcion: string,rubro:string): Observable<Expense> {
    console.log("el rubro que llega al servicio es:"+ rubro);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(descripcion)) {
      return this.http.post(
          this.expensesUrl,
                   { 
                     "descripcion": descripcion,
                     "monto": monto ,
                     "rubro" : rubro
                  }, 
                   options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }
  
  /**
   * Update a gasto
   * @param  {string}            name The name of gasto.
   * @param  {string}            id   The identify of gasto to be updated.
   * @return {Observable<Gasto>}
   */
  update(descripcion: string,monto: Number,rubro:string, id: string): Observable<Expense> {
    console.log("el rubro que llega al servicio es:");
    console.log(rubro);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(descripcion)) {
      return this.http
                    .put(this.expensesUrl+'/'+id,
                     { 
                       "descripcion": descripcion,
                       "monto" : monto,
                       "rubro" : rubro
                    }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }
  
  /**
   * Deletes a gsto given the id
   * @param  {string}            id The id property of gasto.
   * @return {Observable<Gasto>}
   */
  delete(id: string): Observable<Expense> {
    if (id !== undefined) {
      return this.http.delete(this.expensesUrl+'/'+id)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }

  /**
   * Private method to do internal process
   * @param {Response} res Objent comming from server.
   */
  private extractData(res: Response) {
    let body = res.json();
    
    return body;
  }
  
  /**
   * Valid a name according to regular expression.
   * @param {string} name [description]
   */
  private validateName(name: string) {
    let regExp = new RegExp('[a-zA-Z ]{1,50}$');
    return regExp.test(name);
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

