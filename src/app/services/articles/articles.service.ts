import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article.interface';
import { HttpService } from '../http/http.service';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpService,
    private tokenService: TokenService
  ) { }

  getArticles(){
    return this.http.get<Article[]>('articles')
  }

  createArticle(body: any){
    return this.http.post('articles', body)
  }

  deleteArticle(idArticle: number){
    return this.http.delete(`articles/${idArticle}`)
  }
}
