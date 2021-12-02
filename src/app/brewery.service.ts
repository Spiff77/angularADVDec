import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: HttpClient) { }


  getAll() :Observable<any> {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
