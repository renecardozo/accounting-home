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
  constructor(private http: Http) {
    this.rubrosUrl = Settings.protocol+'://'+Settings.host+':'+Settings.port +'/'+Settings.middlewares.rubros;
   }

  getRubros(): Observable<Rubro[]> {
    
    return this.http.get(this.rubrosUrl)
                    .map(res => { return res.json(); })
                    .catch(this.handleError);
  }

  create(name: string): Observable<Rubro> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(name)) {
      return this.http.post(this.rubrosUrl, { "rubro": name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }
  
  update(name: string, id: string): Observable<Rubro> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    if (this.validateName(name)) {
      return this.http.put(this.rubrosUrl+'/'+id, { "rubro": name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }
  
  delete(id: string): Observable<Rubro> {
    
    if (id !== undefined) {
      return this.http.delete(this.rubrosUrl+'/'+id)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
  }

  private extractData(res: Response) {
    let body = res.json();
    
    return body;
  }
  
  private validateName(name: string) {
    let regExp = new RegExp('^[^_+-.,!@#$%^&*();/|\\<>"\']{1,20}$');
    return regExp.test(name);
  }
  
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
