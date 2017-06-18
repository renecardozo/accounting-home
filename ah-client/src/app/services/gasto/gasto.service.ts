/*import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GastoService {

  constructor(private http: Http) { }

  loadGastos(){
    return this.http.get('http://localhost:3001/api_gasto/gasto').map(
      (response)=> response.json()
    )
  }

}*/
import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Gasto } from '../../gasto/gasto';
import { Settings } from '../../app.config';

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
  * @return {Observable<Rubro[]>} A list a gastos.
  */
  getGastos(): Observable<Gasto[]> {
    return this.http.get(this.gastosUrl)
                    .map(res => { return res.json().gastos; })
                    .catch(this.handleError);
  }

  /**
   * Creates a new gasto
   * @param  {string}            description The description for the new gasto
   * @param  {string}            monto The monto for the new gasto
   * @return {Observable<Gasto>}      The gasto created.
   */
  create(monto: Number,descripcion: string): Observable<Gasto> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(descripcion)) {
      return this.http.post(
          this.gastosUrl,
                   { 
                     "descripcion": descripcion,
                     "monto": monto 
                  }, 
                   options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }
  
  /**
   * Update a rubro
   * @param  {string}            name The name of rubro.
   * @param  {string}            id   The identify of rubro to be updated.
   * @return {Observable<Rubro>}
   */
  update(descripcion: string,monto: Number, id: string): Observable<Gasto> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(descripcion)) {
      return this.http
                    .put(this.gastosUrl+'/'+id,
                     { 
                       "descripcion": descripcion,
                       "monto" : monto
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
  delete(id: string): Observable<Gasto> {
    if (id !== undefined) {
      return this.http.delete(this.gastosUrl+'/'+id)
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

