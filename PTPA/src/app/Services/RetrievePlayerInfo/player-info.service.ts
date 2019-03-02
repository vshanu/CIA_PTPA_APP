import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor(private _http : HttpClient) { }

  getplayerInfo(){
      return this._http.get('http://localhost:3000/playerinfo');
      };
}
