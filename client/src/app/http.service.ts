import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
// import { Routes, RouterModule } from '@angular/router';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(url) {
    return this._http.get(url);
  }
}
