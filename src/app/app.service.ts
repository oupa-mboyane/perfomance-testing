import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from './model';
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
  getNames() {
    return this.http.get<DataModel[]>('https://jsonplaceholder.typicode.com/photos');
  }
}