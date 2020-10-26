import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@services/login-services';
import { SessionService } from '@services/session-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  errorLogin: boolean;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formLogin = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  doLogin(form) {
    const dataLogin = {
      userName: form.user,
      passWord: form.password
    }

    this.loginService.doLogin(dataLogin).subscribe(responseLogin => {
      if (responseLogin.status === 'Ok') {
        this.sessionService.saveSessionToken(responseLogin.token);

        this.router.navigateByUrl('/home');
      } else {
        this.errorLogin = true;
      }
    });
  }
}
