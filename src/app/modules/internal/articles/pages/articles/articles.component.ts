import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.interface';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ArticleForm } from '../../components/form/form.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    public dialog: MatDialog
  ){}

  articles: Article[] = []
  columns: string[] = ['description','price','stock']
  loading: boolean = false

  ngOnInit(): void {
    this.loading = true
    this.getArticles()
  }

  getArticles(){
    this.loading = true
    this.articlesService.getArticles()
    .subscribe(
      response => {
        console.log(response)
        this.articles = response
        this.loading = false
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ArticleForm);
    dialogRef.componentInstance.getData.subscribe(() => this.getArticles())
  }

}
