import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Rubro } from './rubro';
import { Settings } from '../app.config';

@Injectable()
export class ItemService {
  private rubrosUrl;
  /**
   * Initialize the setting for this service.
   * @param {Http} private http [description]
   */
  constructor(private http: Http) {
    this.rubrosUrl = Settings.protocol+'://'+Settings.host+':'+Settings.port +'/'+Settings.middlewares.rubros;
   }

  /**
  * Return all rubros from server.
  * @return {Observable<Rubro[]>} A list a rubros.
  */
  getRubros(): Observable<Rubro[]> {
    return this.http.get(this.rubrosUrl)
                    .map(res => { return res.json().rubros; })
                    .catch(this.handleError);
  }

  /**
   * Creates a new rubro
   * @param  {string}            name The name for the new rubro
   * @return {Observable<Rubro>}      The rubro created.
   */
  create(name: string): Observable<Rubro> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(name)) {
      return this.http.post(this.rubrosUrl, { "rubro": name }, options)
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
  update(name: string, id: string): Observable<Rubro> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(name)) {
      return this.http.put(this.rubrosUrl+'/'+id, { "rubro": name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }
  
  /**
   * Deletes a rubro given the id
   * @param  {string}            id The id property of rubro.
   * @return {Observable<Rubro>}
   */
  delete(id: string): Observable<Rubro> {
    
    if (id !== undefined) {
      return this.http.delete(this.rubrosUrl+'/'+id)
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
    let regExp = new RegExp('^[^_+-.,!@#$%^&*();/|\\<>"\']{1,20}$');
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
