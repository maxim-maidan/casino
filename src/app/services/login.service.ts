import { Injectable } from '@angular/core';
import { of } from 'rxjs';
const USER_NAME = 'admin@mail.com'
const PASSWORD = 'admin123';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  auth({ username, password }) {

    return of(username === USER_NAME && password === PASSWORD);
  }
}
