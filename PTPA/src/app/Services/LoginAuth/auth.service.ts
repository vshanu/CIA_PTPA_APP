import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authObservable : Subject<any> = new Subject();

  constructor(private _http : HttpClient, private _router : Router, private _cookieService : CookieService) { }

  login(auth_details : any){

    this._http.post('http://localhost:3000/authenticate', auth_details).subscribe((data : any) => {
      if(data.isLoggedIn){
        this._cookieService.set('CIA_AccessModifier', data.isLoggedIn);
        this.$authObservable.next(data.isLoggedIn);
        this._router.navigate(['/home']);
      } else {
        alert('Invalid Credentials!!!')
      }
    });

  }

  checkUserStatus(){
  return this._cookieService.get('CIA_AccessModifier');  
  }

  logout(){
    this._cookieService.delete('CIA_AccessModifier');
    this.$authObservable.next(false);
    this._router.navigate(['/login']);
  }
}
