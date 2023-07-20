import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormService } from 'src/app/services/form/form.service';
import { NotificationService } from 'src/app/services/notification/notificacion.service';


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
    private formService: FormService,
    public notificationService: NotificationService
  ){}

  hide: boolean = true;
  form = this.formBuilder.nonNullable.group({
    email: [''],
    password: [''],
  });
  loading: boolean = false;


  login(event:any){
    event.preventDefault();
    this.loading = true
    this.authService.login(this.form.getRawValue())
    .subscribe({
      next: response => {
        this.loading = false
        this.router.navigate(['articles'])
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

  goRegister(){
    this.router.navigate(['register'])
  }
}
