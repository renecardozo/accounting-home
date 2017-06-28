import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Ingreso } from '../../ingreso/ingreso';
import { Settings } from '../../app.config';

@Injectable()
export class IngresoService {
  private ingresosUrl;
  /**
   * Initialize the setting for this service.
   * @param {Http} private http [description]
   */
  constructor(private http: Http) {
    this.ingresosUrl = Settings.protocol+'://'+Settings.host+':'+Settings.port +'/'+Settings.middlewares.ingresos;
   }

  /**
  * Return all ingresos from server.
  * @return {Observable<Ingreso[]>} A list a ingresos.
  */
  getIngresos(): Observable<Ingreso[]> {
    return this.http.get(this.ingresosUrl)
                    .map(res => { return res.json().ingresos; })
                    .catch(this.handleError);
  }

  /**
   * Creates a new ingreso
   * @param  {string}            description The description for the new ingreso
   * @param  {string}            monto The monto for the new ingreso
   * @return {Observable<Ingreso>}      The ingreso created.
   */
  create(monto: number,descripcion: string): Observable<Ingreso> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(descripcion)) {
      return this.http.post(
          this.ingresosUrl,
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
   * Update a ingreso
   * @param  {string}            name The name of ingreso.
   * @param  {string}            id   The identify of ingreso to be updated.
   * @return {Observable<Ingreso>}
   */
  update(descripcion: string,monto: number, id: string): Observable<Ingreso> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(descripcion)) {
      return this.http
                    .put(this.ingresosUrl+'/'+id,
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
   * @param  {string}            id The id property of ingreso.
   * @return {Observable<Ingreso>}
   */
  delete(id: string): Observable<Ingreso> {
    if (id !== undefined) {
      return this.http.delete(this.ingresosUrl+'/'+id)
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

