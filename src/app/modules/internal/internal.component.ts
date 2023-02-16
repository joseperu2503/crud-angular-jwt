import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.scss']
})
export class InternalComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){ }

  logout(){
    this.authService.logout()
    .subscribe({
      next: () => this.router.navigate(['login']),
      error: () => this.router.navigate(['login']),
    })
  }
}
