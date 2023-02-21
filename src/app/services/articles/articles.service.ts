import { Injectable } from '@angular/core';
import { Article, ArticleDTO } from 'src/app/models/article.interface';
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

  getArticle(articleId: number){
    return this.http.get<Article>(`articles/${articleId}`)
  }

  createArticle(body: any){
    return this.http.post('articles', body)
  }

  updateArticle(articleId: number, body: ArticleDTO){
    return this.http.put(`articles/${articleId}`, body)
  }

  deleteArticle(articleId: number){
    return this.http.delete(`articles/${articleId}`)
  }
}
