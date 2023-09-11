import {Injectable, OnInit} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";

@Injectable()
export class LoginGuard implements OnInit{
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Login guard activated!');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean {
    // TODO - Add the authentication and authorization mechanism.
    return this.router.navigate(['/login']);
  }
}
