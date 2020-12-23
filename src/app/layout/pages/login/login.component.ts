import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { filter, tap } from 'rxjs/operators';
export interface SingIn {
  login: string;
  password: string;
  remember: boolean;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  singInForm: FormGroup;
  request: SingIn = { login: "", password: "", remember: false };
  @Output() checkSingIn: EventEmitter<SingIn> = new EventEmitter();

  ngOnInit(): void {
    this.singInForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      remember: new FormControl(null, Validators.required)
    });
  }
  singIn() {
    this.request.login = this.singInForm.value.login;
    this.request.password = this.singInForm.value.password;
    this.request.remember = !!this.singInForm.value.remember;

    const { login: username, password } = this.singInForm.value;
    this.sendData({ username, password });
  }
  keepUserSignedIn(isKeep: boolean): void {
    if (isKeep) {
      localStorage.setItem('token', 'myToken')
    }
  }
  sendData({ username, password }) {
    this.loginService.auth({ username, password })
    .pipe(
      filter(Boolean),
      tap(() => this.keepUserSignedIn(!!this.singInForm.value.remember))
    )
    .subscribe(() => {
        this.router.navigate(["/main"]);
    });
  }
  quickLogin() {
    this.singInForm.patchValue({ login: 'admin@mail.com', password: 'admin123' });
  }

}
