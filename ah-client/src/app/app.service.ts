import { Injectable } from '@angular/core';
import { Rubro } from './rubro';
import { Http, Response,Headers, RequestOptions }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private rubrosUrl = 'http://localhost:3000/rubros';
  constructor(private http: Http) { }

  getRubros(): Observable<Rubro[]> {
    
    return this.http.get(this.rubrosUrl)
                    .map(res => { return res.json(); })
                    .catch(this.handleError);
  }

  create(name: string): Observable<Rubro> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.rubrosUrl, { "rubro": name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    
    return body;
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
