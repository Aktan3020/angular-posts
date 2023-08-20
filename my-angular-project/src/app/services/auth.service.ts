import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    auth = false
    constructor() { }
    getAuth():boolean{
        return this.auth
    }
    setAuth(data:boolean):void{
        this.auth = data
    }
}
