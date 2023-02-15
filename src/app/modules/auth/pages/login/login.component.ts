import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}
  hide = true;

  form = this.formBuilder.nonNullable.group({
    email: [''],
    password: [''],
  });


  login(){
    this.authService.login(this.form.getRawValue())
    .subscribe( response => {
      this.router.navigate(['articles'])
    })
  }

  goRegister(){
    this.router.navigate(['register'])
  }
}
