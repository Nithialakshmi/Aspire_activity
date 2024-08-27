import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private apiUrl = "http://localhost:3000/signupUsers";
 private isAuthenticated  = new BehaviorSubject<boolean>(false);;

 private loggedInUserProfile: any;
 private loggedInUserEmail: string | null = null;

  constructor(private http: HttpClient ,private router:Router) {}

  signup(username: string, email: string, password: string, mobileNumber: string) {
    return this.http.post<any>('http://localhost:3000/signupUsers', { username, email, password, mobileNumber });
  }

  login(email: string, password: string) {
   

    return this.http.get<any>('http://localhost:3000/signupUsers').pipe(
      tap(users => {
        const user = users.find((a: any) => a.email === email && a.password === password);
        if (user) {
          
          this.isAuthenticated.next(true);
          localStorage.setItem('userEmail', user.email);
          
          
        } 
        
      })
    );
  }
  get authenticationStatus() {
    return this.isAuthenticated;
  }
  logout() {
    console.log("Logged Out");
    this.isAuthenticated.next(false); 
    this.router.navigate(['/home']);
  }


  SetAuthenticate() {
    console.log("Logged Inn");
    this.isAuthenticated.next(true); 
   
  }


  checkAuthentication(): boolean {
    console.log("Check Authentication Passed"+this.isAuthenticated)   ;

   return false;
  }
  getUserProfile(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }
  

  getUserProfileByEmail(email: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}`);
  }

  getCurrentUserEmail(): string | null {
    if (typeof window !== 'undefined') { 
      return localStorage.getItem('userEmail');
    }
    return null;
  }
}


  