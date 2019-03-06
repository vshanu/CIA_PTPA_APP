import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../Services/LoginAuth/auth.service';
  
@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor(private _http : HttpClient, private _authService : AuthService) { }

  getplayerInfo(){

      var token = this._authService.checkUserStatus();
      return this._http.get('http://localhost:3000/playerinfo',{
      
      headers : new HttpHeaders().set('authtoken', token)

      });
      };
}
