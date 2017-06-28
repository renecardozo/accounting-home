import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Expenses } from './expenses';
import { Settings } from '../app.config';

@Injectable()
export class ItemService {
    private gastosUrl;
    private rubrosUrl;

    constructor(private http: Http) {
        this.gastosUrl = Settings.protocol + '://' + Settings.host + ':' + Settings.port + '/' + Settings.middlewares.gastos;
        this.rubrosUrl = Settings.protocol + '://' + Settings.host + ':' + Settings.port + '/' + Settings.middlewares.rubros;
    }

    getGastos(): Observable<Expenses[]> {
        return this.http.get(this.gastosUrl)
            .map(res => { return res.json().gastos; })
            .catch(this.handleError);
    }

    update(name: string, id: string): Observable<Expenses> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.gastosUrl + '/' + id, { "gastos": name }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getRubros(): Observable<any[]> {
        return this.http.get(this.rubrosUrl)
            .map(this.onSuccessResponse)
            .catch(this.handleError); 
    }
    saveGasto(gasto:any): Observable<Response> {
        return this.http.post(this.gastosUrl, gasto)
            .map(this.onSuccessResponse)
            .catch(this.handleError);
    }
    private onSuccessResponse(res: Response) {
        let rubros = res.json();
        return rubros.rubros;
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure()
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