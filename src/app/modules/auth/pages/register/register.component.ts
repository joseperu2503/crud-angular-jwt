import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormService } from 'src/app/services/form/form.service';
import { NotificationService } from 'src/app/services/notification/notificacion.service';

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
    private formService: FormService,
    public notificationService: NotificationService
  ){}

  form = this.formBuilder.nonNullable.group({
    name: [''],
    email: [''],
    password: [''],
    password_confirmation: [''],
  });
  loading: boolean = false;

  register(){
    this.loading = true
    this.authService.register(this.form.getRawValue())
    .subscribe({
      next: response => {
        this.loading = false
        this.notificationService.success(response.message)
        this.router.navigate(['login'])
      },
      error: error => {
        this.loading = false
        if (error.status === 422){
          this.form = this.formService.setErrors(this.form, error)
        }
        else{
          this.notificationService.error('Incorrect email or password')
        }
      }
    })
  }

  goLogin(){
    this.router.navigate(['login'])
  }
}
