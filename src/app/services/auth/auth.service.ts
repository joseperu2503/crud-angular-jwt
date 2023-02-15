import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthResponse, LoginDTO, RegisterDTO } from 'src/app/models/auth.interface';
import { HttpService } from '../http/http.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private tokenService: TokenService
  ) { }

  login(data: LoginDTO){
    return this.http.post<AuthResponse>(`login`, data)
    .pipe(
      tap(response => this.tokenService.saveToken(response.access_token))
    )
  }

  register(data: RegisterDTO){
    return this.http.post<any>(`register`, data)
  }
}
