import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { FormControl, FormGroup } from '@angular/forms';

import { FormService } from 'src/app/services/form/form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class ArticleForm implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ArticleForm>,
    private articlesService: ArticlesService,
    private formService: FormService,
    @Inject(MAT_DIALOG_DATA) public data: {articleId: number | null},
  ) {}

  @Output() getData = new EventEmitter()
  title: string = this.data.articleId ? 'Edit Article' : 'New Article'
  btnSubmit: string = this.data.articleId ? 'Update' : 'Save'
  form = new FormGroup({
    description: new FormControl<string>(''),
    price: new FormControl<number | null>(null),
    stock: new FormControl<number | null>(null),
});

  close(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getArticle()
  }

  getArticle(){
    if(this.data.articleId){
      this.articlesService.getArticle(this.data.articleId)
      .subscribe({
        next: response => {
          this.form.setValue({
            description: response.description,
            price: response.price,
            stock: response.stock,
          })
        }
      })
    }
  }

  submit(){
    if(this.data.articleId){
      this.articlesService.updateArticle(this.data.articleId, this.form.getRawValue())
      .subscribe( {
        next: response => {
          this.close();
          this.getData.emit()
        },
        error: error => {
          this.form = this.formService.setErrors(this.form, error)
        }
      })
    }else{
      this.articlesService.createArticle(this.form.getRawValue())
      .subscribe( {
        next: response => {
          this.close();
          this.getData.emit()
        },
        error: error => {
          this.form = this.formService.setErrors(this.form, error)
        }
      })
    }

  }

}
