import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
   token = '';
   constructor() {}
    
    setToken(token : any) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }
}