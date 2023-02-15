import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  form = this.formBuilder.nonNullable.group({
    name: [''],
    email: [''],
    password: [''],
    password_confirmation: [''],
  });


  register(){
    this.authService.register(this.form.getRawValue())
    .subscribe( response => {
      this.router.navigate(['login'])
    })
  }

  goLogin(){
    this.router.navigate(['login'])
  }
}
